// Siteyi gerçek tarayıcıda açıp bir dersin bütün ekranlarını dolaşır ve hataları raporlar.
//   node .claude/skills/ders-ekle/scripts/duman-testi.js <ders-id> [ekran-goruntusu-klasoru]
// Gerekli: playwright (npm install --no-save playwright && npx playwright install chromium)
// Kendi küçük sunucusunu açar; yerelde şifre sorulmaz (şifre yalnızca Vercel'deki middleware'de).

const fs = require('fs');
const http = require('http');
const path = require('path');
let chromium;
try { ({ chromium } = require('playwright')); } catch (e) {
  console.error('playwright yok: npm install --no-save playwright && npx playwright install chromium');
  process.exit(1);
}

let root = process.cwd();
while (!fs.existsSync(path.join(root, 'index.html')) && path.dirname(root) !== root) root = path.dirname(root);
const [cid, shots] = process.argv.slice(2);
if (!cid) { console.error('Kullanım: node duman-testi.js <ders-id> [ekran-goruntusu-klasoru]'); process.exit(1); }
if (shots) fs.mkdirSync(shots, { recursive: true });

const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.pdf': 'application/pdf', '.json': 'application/json' };
const server = http.createServer((req, res) => {
  const p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  const file = path.join(root, p === '/' ? 'index.html' : p);
  if (!file.startsWith(root) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
  if (req.method === 'HEAD') return res.end();
  fs.createReadStream(file).pipe(res);
});

(async () => {
  await new Promise(r => server.listen(0, '127.0.0.1', r));
  const B = `http://127.0.0.1:${server.address().port}/`;
  const browser = await chromium.launch();
  const problems = [];
  const watch = (page, tag) => {
    page.on('pageerror', e => problems.push(`${tag} sayfa hatası: ${e.message}`));
    page.on('console', m => { if (m.type() === 'error' && !/Failed to load resource/.test(m.text())) problems.push(`${tag} konsol: ${m.text()}`); });
    page.on('response', r => { if (r.status() >= 400) problems.push(`${tag} ${r.status()}: ${r.url().replace(B, '/')}`); });
  };
  const shot = async (page, name) => { if (shots) await page.screenshot({ path: path.join(shots, `${name}.png`) }); };

  const desk = await (await browser.newContext({ viewport: { width: 1280, height: 860 } })).newPage();
  watch(desk, 'masaüstü');
  await desk.goto(B);
  const course = await desk.evaluate(id => {
    const c = (window.DERSLER || []).find(x => x.id === id);
    return c && { units: c.units.map(u => ({ id: u.id, short: !!u.short })), mats: (c.materials || []).map(m => m.file), groups: (c.groups || []).map(g => g.id), onePager: (c.onePager || []).length };
  }, cid);
  if (!course) { console.error(`Ders bulunamadı: ${cid}`); process.exit(1); }
  if (!(await desk.$(`.course-card[href="#/${cid}"]`))) problems.push('ana sayfada ders kartı yok');

  for (const view of ['full', 'short']) {
    // Önce kaydet, sonra yeniden yükle: sayfa açıkken site kendi kaydıyla bu ayarın üstüne yazar
    await desk.evaluate(v => { const s = JSON.parse(localStorage.getItem('ecem-dersler-v1') || '{}'); s.view = v; localStorage.setItem('ecem-dersler-v1', JSON.stringify(s)); }, view);
    await desk.reload();
    for (const u of course.units) {
      await desk.goto(`${B}#/${cid}/ozet/${u.id}`);
      await desk.waitForSelector('.prose');
      if (view === 'short' && u.short && !(await desk.$('.prose.short'))) problems.push(`${u.id}: kısa özet görünmüyor`);
    }
  }
  await shot(desk, 'masaustu-ozet');

  await desk.goto(`${B}#/${cid}/tek-sayfa`); await desk.waitForSelector('.onepager');
  if (course.onePager && (await desk.$$('.op')).length !== course.onePager) problems.push('tek sayfa: bölüm sayısı onePager ile aynı değil');
  await shot(desk, 'masaustu-tek-sayfa');

  await desk.goto(`${B}#/${cid}/kartlar`); await desk.waitForSelector('.flash, .panel');
  if (await desk.$('.flash')) { await desk.click('.flash'); await desk.click('[data-act="know"]'); }
  await desk.goto(`${B}#/${cid}/test`); await desk.waitForSelector('[data-act="quiz-start"]');
  await desk.click('[data-act="quiz-start"]');
  for (let i = 0; i < 3 && await desk.$('.opt'); i++) { await desk.click('.opt'); await desk.click('[data-act="quiz-next"]'); }
  for (const g of course.groups.slice(0, 1)) { await desk.goto(`${B}#/${cid}/test/${g}`); await desk.waitForSelector('#quiz-filter'); }
  await desk.goto(`${B}#/${cid}/defter`); await desk.waitForSelector('.notebook');
  await desk.goto(`${B}#/${cid}/dosyalar`); await desk.waitForSelector('.files');
  await desk.waitForTimeout(400);
  for (const btn of await desk.$$('.file-row [data-act="view"], [data-pdf]:not([hidden]) [data-act="view"]')) {
    const file = await btn.getAttribute('data-file');
    await btn.click();
    try { await desk.waitForSelector('.vpage.ready', { timeout: 15000 }); } catch (e) { problems.push(`görüntüleyici açılamadı: ${file}`); }
    await desk.keyboard.press('Escape');
    await desk.waitForTimeout(150);
  }
  await shot(desk, 'masaustu-dosyalar');

  const mob = await (await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 })).newPage();
  watch(mob, 'mobil');
  for (const u of course.units) {
    await mob.goto(`${B}#/${cid}/ozet/${u.id}`); await mob.waitForSelector('.prose');
    const w = await mob.evaluate(() => document.documentElement.scrollWidth);
    if (w > 390) problems.push(`mobil ${u.id}: sayfa yatay taşıyor (${w}px)`);
  }
  await mob.goto(`${B}#/${cid}/tek-sayfa`); await mob.waitForSelector('.onepager');
  const ow = await mob.evaluate(() => document.documentElement.scrollWidth);
  if (ow > 390) problems.push(`mobil tek sayfa: sayfa yatay taşıyor (${ow}px)`);
  await shot(mob, 'mobil-tek-sayfa');
  await mob.goto(`${B}#/${cid}/ozet/${course.units[0].id}`); await mob.waitForSelector('.prose');
  await shot(mob, 'mobil-ozet');

  await browser.close();
  server.close();
  const uniq = [...new Set(problems)];
  console.log(uniq.length ? `✗ ${uniq.length} sorun:\n  ${uniq.join('\n  ')}` : `✓ ${cid}: ${course.units.length} konu (detaylı + kısa), tek sayfa, kartlar, test, defter, dosyalar ve görüntüleyici sorunsuz`);
  if (shots) console.log(`Ekran görüntüleri: ${shots}`);
  process.exit(uniq.length ? 1 : 0);
})().catch(e => { console.error(e); server.close(); process.exit(1); });
