// Ders verilerini yayından önce denetler.
//   node .claude/skills/ders-ekle/scripts/dogrula.js            (tüm dersler)
//   node .claude/skills/ders-ekle/scripts/dogrula.js sosyoloji  (tek ders)
// Hata varsa çıkış kodu 1 olur; uyarılar yayını engellemez ama gözden geçirilmeli.

const fs = require('fs');
const path = require('path');
const vm = require('vm');

let root = process.cwd();
while (!fs.existsSync(path.join(root, 'dersler')) && path.dirname(root) !== root) root = path.dirname(root);
if (!fs.existsSync(path.join(root, 'dersler'))) { console.error('Repo kökü bulunamadı (dersler/ yok).'); process.exit(1); }

const only = process.argv[2];
const ctx = { window: {} };
vm.createContext(ctx);
const loaded = {};
for (const dir of fs.readdirSync(path.join(root, 'dersler')).sort()) {
  const file = path.join(root, 'dersler', dir, 'data.js');
  if (!fs.existsSync(file)) continue;
  const before = (ctx.window.DERSLER || []).length;
  try { vm.runInContext(fs.readFileSync(file, 'utf8'), ctx, { filename: file }); } catch (e) {
    console.error(`✗ ${dir}/data.js çalıştırılamadı: ${e.message}`); process.exitCode = 1; continue;
  }
  const added = (ctx.window.DERSLER || []).slice(before);
  if (added.length !== 1) console.error(`✗ ${dir}/data.js tam olarak bir ders eklemeli (${added.length} ekledi)`);
  if (added[0]) loaded[dir] = added[0];
}

const index = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const tagBalance = (html, tag) => (html.match(new RegExp(`<${tag}[\\s>]`, 'g')) || []).length - (html.match(new RegExp(`</${tag}>`, 'g')) || []).length;
let totalErrors = 0;

for (const [dir, c] of Object.entries(loaded)) {
  if (only && dir !== only) continue;
  const errors = [], warns = [];
  const err = m => errors.push(m), warn = m => warns.push(m);
  const base = path.join(root, 'dersler', dir);

  if (c.id !== dir) err(`id "${c.id}" klasör adıyla ("${dir}") aynı olmalı`);
  for (const f of ['title', 'units', 'cards', 'questions']) if (!c[f]) err(`"${f}" alanı eksik`);
  if (!index.includes(`dersler/${dir}/data.js`)) err(`index.html'de <script src="dersler/${dir}/data.js"> yok`);
  const others = Object.values(loaded).filter(x => x !== c);
  if (others.some(x => x.hue === c.hue)) warn(`hue ${c.hue} başka bir dersle aynı`);

  const groups = new Set((c.groups || []).map(g => g.id));
  const mats = new Map((c.materials || []).map(m => [m.file, m]));
  for (const m of c.materials || []) {
    if (!fs.existsSync(path.join(base, m.file))) err(`materyal dosyası yok: ${m.file}`);
    if (/[^\x20-\x7e]|\s/.test(m.file)) err(`materyal yolunda Türkçe karakter/boşluk var: ${m.file}`);
    if (m.group && !groups.has(m.group)) err(`materyalin grubu tanımsız: ${m.file} → ${m.group}`);
    if (/\.(pptx?|docx?)$/i.test(m.file)) {
      const pv = m.file.replace(/^materyal\//, 'onizleme/').replace(/\.(pptx?|docx?)$/i, '.pdf');
      if (!fs.existsSync(path.join(base, pv))) warn(`önizleme yok (Görüntüle çalışmaz): ${pv} → python3 scripts/onizleme-olustur.py`);
    }
  }

  const ids = new Set();
  for (const u of c.units || []) {
    const where = `konu ${u.id}`;
    if (!u.id || !/^[a-z0-9-]+$/.test(u.id)) err(`${where}: id küçük harf/rakam/tire olmalı`);
    if (ids.has(u.id)) err(`${where}: id tekrar ediyor`);
    if (groups.has(u.id)) err(`${where}: id bir grup id'siyle çakışıyor`);
    ids.add(u.id);
    if (!u.title || u.no === undefined) err(`${where}: title ve no gerekli`);
    if (c.groups && !groups.has(u.group)) err(`${where}: group "${u.group}" tanımsız`);
    if (!u.html) err(`${where}: html (detaylı özet) yok`);
    if (!u.short) warn(`${where}: short (kısa özet) yok`);
    else if (!/tekrar|ezber/.test(u.id) && (u.short.match(/<li>/g) || []).length < 6)
      warn(`${where}: kısa özet çok kısa (${(u.short.match(/<li>/g) || []).length} madde); sınavda gereken her bilgi kısa özette de olmalı`);
    for (const f of u.files || []) if (!mats.has(f)) err(`${where}: files içindeki "${f}" materials listesinde yok`);
    if (u.fromPdf) {
      if (!u.fromPdf.name) err(`${where}: fromPdf.name gerekli`);
      if (u.fromPdf.file && !mats.has(u.fromPdf.file)) err(`${where}: fromPdf.file materials listesinde yok`);
      if (u.fromPdf.file && u.fromPdf.pdfOffset === undefined && /class="ref"/.test(u.html)) warn(`${where}: sayfa rozetleri var ama pdfOffset yok (0 kabul edilir)`);
    }
    for (const [name, html] of [['html', u.html || ''], ['short', u.short || '']]) {
      for (const tag of ['div', 'ul', 'ol', 'table', 'dl', 'p', 'blockquote', 'li', 'tr', 'td', 'th']) {
        const d = tagBalance(html, tag);
        if (d && !(tag === 'p' && d < 0)) err(`${where}: ${name} içinde <${tag}> açılış/kapanış dengesiz (${d > 0 ? '+' : ''}${d})`);
      }
      if (/\$\{/.test(html)) err(`${where}: ${name} içinde "\${" var`);
    }
  }

  if (!c.onePager) warn(`onePager (Tek sayfa) yok`);
  for (const [k, x] of (c.onePager || []).entries()) {
    const where = `onePager #${k + 1}`;
    if (!x || !ids.has(x.u)) { err(`${where}: konu "${x && x.u}" yok`); continue; }
    if (!Array.isArray(x.items) || !x.items.length) err(`${where} (${x.u}): items boş`);
    for (const t of x.items || []) {
      if (/\$\{/.test(t)) err(`${where} (${x.u}): "\${" var`);
      if (/<(ul|ol|li|div|p|h\d)\b/.test(t)) err(`${where} (${x.u}): maddede blok HTML var (yalnızca <b>, <i>, <mark>)`);
    }
  }

  const fronts = new Set();
  const perUnitCards = {};
  for (const [k, x] of (c.cards || []).entries()) {
    if (!Array.isArray(x) || x.length !== 3) { err(`kart #${k + 1}: [konuId, ön, arka] olmalı`); continue; }
    if (!ids.has(x[0])) err(`kart "${x[1]}": konu "${x[0]}" yok`);
    if (fronts.has(x[1])) err(`kart ön yüzü tekrar ediyor: "${x[1]}"`);
    if (/<(ul|ol|li|div|p)\b/.test(x[2])) err(`kart "${x[1]}": arka yüzde liste/blok HTML var (yalnızca <b>, <i>, <br>)`);
    fronts.add(x[1]);
    perUnitCards[x[0]] = (perUnitCards[x[0]] || 0) + 1;
  }

  const qs = new Set();
  const perUnitQs = {};
  for (const q of c.questions || []) {
    if (!ids.has(q.u)) err(`soru "${q.q}": konu "${q.u}" yok`);
    if (qs.has(q.q)) err(`soru tekrar ediyor: "${q.q}"`);
    qs.add(q.q);
    if (!Array.isArray(q.o) || q.o.length !== 4) err(`soru "${q.q}": 4 seçenek olmalı`);
    else if (new Set(q.o).size !== 4) err(`soru "${q.q}": seçenekler farklı olmalı`);
    if (q.o && q.o.some(o => /^\s*(hepsi|hiçbiri)\s*$|yukarıdaki/i.test(o))) warn(`soru "${q.q}": "hepsi/hiçbiri" seçeneği karıştırmada anlamını yitirir`);
    if (!q.e) warn(`soru "${q.q}": açıklama (e) yok`);
    perUnitQs[q.u] = (perUnitQs[q.u] || 0) + 1;
  }
  for (const u of c.units || []) {
    const t = /tekrar|ezber/.test(u.id);
    if (!t && !perUnitCards[u.id]) warn(`konu ${u.id}: hiç kartı yok`);
    if (!t && !perUnitQs[u.id]) warn(`konu ${u.id}: hiç sorusu yok`);
  }
  for (const f of ['ozet.pdf', 'ozet-kisa.pdf', ...(c.onePager ? ['tek-sayfa.pdf'] : [])]) {
    if (!fs.existsSync(path.join(base, f))) warn(`${f} yok → node scripts/pdf-olustur.js ${dir}`);
    else if (fs.statSync(path.join(base, f)).mtimeMs < fs.statSync(path.join(base, 'data.js')).mtimeMs) warn(`${f} data.js'ten eski → yeniden üret: node scripts/pdf-olustur.js ${dir}`);
  }

  console.log(`\n${errors.length ? '✗' : '✓'} ${c.title} (${dir}): ${(c.units || []).length} konu · ${(c.cards || []).length} kart · ${(c.questions || []).length} soru · ${(c.materials || []).length} materyal`);
  errors.forEach(m => console.log(`   HATA   ${m}`));
  warns.forEach(m => console.log(`   uyarı  ${m}`));
  totalErrors += errors.length;
}
if (only && !loaded[only]) { console.error(`Ders bulunamadı: ${only}`); process.exit(1); }
if (totalErrors) process.exitCode = 1;
