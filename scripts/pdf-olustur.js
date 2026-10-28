// Her ders için dersler/<ders>/ klasörüne data.js içeriğinden üç PDF üretir:
//   ozet.pdf (detaylı), ozet-kisa.pdf (kısa özet), tek-sayfa.pdf (onePager, tek A4 sayfa)
//
//   npm install --no-save playwright && npx playwright install chromium
//   node scripts/pdf-olustur.js              (tüm dersler)
//   node scripts/pdf-olustur.js sosyoloji    (tek ders)

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { chromium } = require('playwright');

const root = path.join(__dirname, '..');
const css = fs.readFileSync(path.join(root, 'assets/style.css'), 'utf8');

const printCss = `
  @page { size: A4; margin: 15mm 15mm 17mm; }
  :root { --sans: Inter, "Helvetica Neue", Arial, "DejaVu Sans", sans-serif; --serif: Caladea, Cambria, Georgia, "DejaVu Serif", serif; }
  * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  html, body { background: #fff; }
  body { font-size: 10.5pt; line-height: 1.5; }
  .cover h1 { font: 700 30pt/1.1 var(--serif); margin: 0 0 6pt; }
  .cover .sub { color: var(--muted); margin: 0 0 18pt; font-size: 11pt; }
  .toc { list-style: none; padding: 0; margin: 0; display: grid; gap: 5pt; }
  .toc li { display: flex; gap: 10pt; align-items: baseline; font-size: 11.5pt; }
  .toc span { min-width: 18pt; height: 18pt; padding: 0 3pt; border-radius: 5pt; display: grid; place-items: center; background: var(--brand-soft); color: var(--brand); font-weight: 700; font-size: 9pt; flex: none; }
  .toc .toc-group { margin-top: 6pt; font-size: 9pt; font-weight: 700; letter-spacing: .05em; text-transform: uppercase; color: var(--muted); }
  .source { margin: -4pt 0 10pt; }
  .source.pdf { font-size: 9.8pt; }
  .src { margin: -6pt 0 10pt; font-size: 9.5pt; color: var(--muted); }
  .unit { break-before: page; }
  .unit > h2 { font: 700 19pt/1.2 var(--serif); margin: 0 0 12pt; }
  .prose { font-size: 10.5pt; line-height: 1.5; }
  .prose .lead { font-size: 11.5pt; }
  .prose h3 { font-size: 12.5pt; margin: 16pt 0 6pt; break-after: avoid; }
  .prose p, .prose li { orphans: 3; widows: 3; }
  .table-wrap { overflow: visible; }
  .tbl { font-size: 9.5pt; }
  .tbl th, .tbl td { padding: 5pt 7pt; }
  .box, .defs dd, .chips li, .timeline li { font-size: 9.8pt; }
  .box, .tip, tr, blockquote, .timeline li, .pyramid, .steps > li, .defs dd { break-inside: avoid; }
  .defs dt { break-after: avoid; }
  .cols { grid-template-columns: repeat(auto-fit, minmax(140pt, 1fr)); }
  .cols.two { grid-template-columns: 1fr 1fr; }
  .pyramid div { font-size: 9.8pt; padding: 4pt 10pt; }
  .prose ol.timeline { grid-template-columns: repeat(4, 1fr); }
  .prose ol.timeline b { font-size: 13pt; }
`;

function loadCourses() {
  const dir = path.join(root, 'dersler');
  const ctx = { window: {} };
  vm.createContext(ctx);
  for (const name of fs.readdirSync(dir).sort()) {
    const file = path.join(dir, name, 'data.js');
    if (fs.existsSync(file)) vm.runInContext(fs.readFileSync(file, 'utf8'), ctx, { filename: file });
  }
  return ctx.window.DERSLER || [];
}

// Kısa özet: her konunun "short" içeriği (alt başlık + madde + alıntı), konular art arda akar
const shortCss = `
  .unit-s { margin: 0 0 14pt; }
  .unit-s .eyebrow { margin: 0 0 2pt; }
  .unit-s h2 { font: 700 13.5pt/1.25 var(--serif); margin: 0 0 6pt; break-after: avoid; }
  .group-s { font: 700 10pt/1.2 var(--sans); letter-spacing: .06em; text-transform: uppercase; color: var(--muted); margin: 16pt 0 8pt; padding-bottom: 3pt; border-bottom: 1px solid var(--line); }
  .head-s { break-inside: avoid; break-after: avoid; }
  .prose.short-p { font-size: 9.8pt; line-height: 1.45; }
  .prose.short-p h4 { margin: 8pt 0 3pt; font-size: 8.6pt; break-after: avoid; }
  .prose.short-p .short-list { margin: 0 0 2pt; padding-left: 13pt; }
  .prose.short-p .short-list li { margin: 0 0 2.5pt; break-inside: avoid; }
  .prose.short-p blockquote { margin: 3pt 0 5pt; padding: 6pt 9pt; font-size: 9.6pt; }
  .cover.small h1 { font-size: 22pt; }
  .cover.small .sub { margin-bottom: 10pt; }
`;

function shortHtml(c) {
  const word = c.unitWord || 'Ünite';
  const groups = Object.fromEntries((c.groups || []).map(g => [g.id, g]));
  const units = c.units.filter(u => u.short);
  return `<!doctype html><html lang="tr"><head><meta charset="utf-8">
<style>${css}</style><style>${printCss}</style><style>${shortCss}</style></head>
<body style="--hue:${c.hue ?? 285}">
  <header class="cover small">
    <p class="eyebrow">Ecem'in Dersleri · Kısa özet</p>
    <h1>${c.title}</h1>
    <p class="sub">${[c.exam && `${c.exam} için tekrar özeti`, 'Konuları çalıştıktan sonra bununla gözden geçir'].filter(Boolean).join(' · ')}</p>
  </header>
  ${units.map((u, i) => {
    const g = groups[u.group];
    const head = g && (i === 0 || units[i - 1].group !== u.group) ? `<p class="group-s">${g.title}</p>` : '';
    return `
  <section class="unit-s">
    <div class="head-s">${head}
    <p class="eyebrow">${word} ${u.no}${u.fromPdf ? ` · <span class="badge">PDF'ten</span>` : ''}</p>
    <h2>${u.title}</h2></div>
    <div class="prose short-p">${u.short}</div>
  </section>`;
  }).join('')}
</body></html>`;
}

// Tek sayfa: onePager bölümleri üç sütunda; yazı boyutu sayfaya sığacak şekilde ayarlanır (--op)
const onePageCss = `
  @page { size: A4; margin: 10mm; }
  body { font-size: var(--op); line-height: 1.38; }
  .op-top { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; margin: 0 0 .7em; padding-bottom: .4em; border-bottom: 2px solid var(--brand); }
  .op-top h1 { font: 700 calc(var(--op) * 1.9)/1.1 var(--serif); margin: 0; }
  .op-top span { color: var(--muted); font-size: .9em; }
  .cols3 { columns: 3; column-gap: 1.2em; }
  .op { break-inside: avoid; margin: 0 0 .75em; padding: 0; border: 0; border-radius: 0; background: none; font-size: inherit; line-height: inherit; }
  .op-group { margin: 0 0 .3em; font-size: .78em; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: var(--muted); }
  .op h2 { display: flex; gap: .4em; margin: 0 0 .25em; font: 700 1.02em/1.25 var(--sans); color: var(--brand); }
  .op h2 b { flex: none; min-width: 1.6em; padding: 0 .25em; border-radius: .3em; background: var(--brand-soft); text-align: center; font-size: .9em; line-height: 1.45; }
  .op ul { display: block; margin: 0; padding-left: 1.05em; }
  .op li { margin: 0 0 .18em; }
  .op li::marker { color: var(--brand); }
  mark { background: linear-gradient(180deg, transparent 50%, var(--hl) 50%); color: inherit; padding: 0 .1em; }
`;

function onePageHtml(c, size) {
  const units = Object.fromEntries(c.units.map(u => [u.id, u]));
  const groups = Object.fromEntries((c.groups || []).map(g => [g.id, g]));
  const secs = (c.onePager || []).filter(x => units[x.u]);
  return `<!doctype html><html lang="tr"><head><meta charset="utf-8">
<style>${css}</style><style>${printCss}</style><style>${onePageCss}</style></head>
<body style="--hue:${c.hue ?? 285}; --op:${size}px">
  <header class="op-top"><h1>${c.title}</h1><span>Ecem'in Dersleri · Tek sayfa${c.exam ? ` · ${c.exam}` : ''}</span></header>
  <div class="cols3">${secs.map((x, i) => {
    const u = units[x.u], g = groups[u.group];
    const head = g && (i === 0 || units[secs[i - 1].u].group !== u.group) ? `<p class="op-group">${g.title}</p>` : '';
    return `<section class="op">${head}<h2><b>${u.no}</b><span>${u.title}</span></h2><ul>${x.items.map(t => `<li>${t}</li>`).join('')}</ul></section>`;
  }).join('')}</div>
</body></html>`;
}

// A4 içerik alanı (10 mm kenar boşluğu, 96 dpi): 718 × 1047 px
async function fitOnePage(page, c) {
  await page.setViewportSize({ width: 718, height: 1047 });
  const height = async size => {
    await page.setContent(onePageHtml(c, size), { waitUntil: 'load' });
    return page.evaluate(() => document.body.scrollHeight);
  };
  // En fazla 14 px (≈ 10,5 pt): sayfa boş kalsa da yazı afiş boyutuna büyümesin
  let lo = 6, hi = 14;
  if (await height(hi) <= 1040) lo = hi;
  for (let k = 0; k < 12 && lo < hi; k++) {
    const mid = (lo + hi) / 2;
    if (await height(mid) <= 1040) lo = mid; else hi = mid;
  }
  for (let size = lo; size > 6; size -= 0.2) {
    await page.setContent(onePageHtml(c, size), { waitUntil: 'load' });
    const pdf = await page.pdf({ format: 'A4', printBackground: true, preferCSSPageSize: true });
    const pages = (pdf.toString('latin1').match(/\/Type\s*\/Page[^s]/g) || []).length;
    if (pages === 1) return { pdf, size };
  }
  throw new Error(`${c.id}: tek sayfa özet bir sayfaya sığmadı; onePager maddelerini kısalt`);
}

function pageHtml(c) {
  const word = c.unitWord || 'Ünite';
  const groups = Object.fromEntries((c.groups || []).map(g => [g.id, g]));
  const mats = c.materials || [];
  const pdfTag = u => (u.fromPdf ? ' <span class="badge">PDF</span>' : '');
  const toc = c.units.map((u, i) => {
    const g = groups[u.group];
    const head = g && (i === 0 || c.units[i - 1].group !== u.group) ? `<li class="toc-group">${g.title}</li>` : '';
    return `${head}<li><span>${u.no}</span>${u.title}${pdfTag(u)}</li>`;
  }).join('');
  const source = u => {
    if (u.fromPdf) {
      return `<div class="source pdf"><span class="badge lg">PDF'ten</span><div>
        <p><b>Bu özet, PDF'te sarıyla işaretlenmiş yerlerden hazırlandı.</b></p>
        <p>Kaynak: ${u.fromPdf.name}</p>${u.fromPdf.note ? `<p class="muted">${u.fromPdf.note}</p>` : ''}</div></div>`;
    }
    const files = (u.files || []).map(f => mats.find(m => m.file === f)).filter(Boolean);
    return files.length ? `<p class="src">Kaynak sunum: ${files.map(m => m.title).join(' · ')}</p>` : '';
  };
  return `<!doctype html><html lang="tr"><head><meta charset="utf-8">
<style>${css}</style><style>${printCss}</style></head>
<body style="--hue:${c.hue ?? 285}">
  <header class="cover">
    <p class="eyebrow">Ecem'in Dersleri</p>
    <h1>${c.title}</h1>
    <p class="sub">${[c.exam && `${c.exam} özeti`, c.source].filter(Boolean).join(' · ')}</p>
    <ol class="toc">${toc}</ol>
  </header>
  ${c.units.map(u => {
    const g = groups[u.group];
    return `
  <section class="unit">
    <p class="eyebrow">${g ? `${g.title} · ` : ''}${word} ${u.no}${u.slides ? ` · ${u.slides}` : ''}</p>
    <h2>${u.title}</h2>
    ${source(u)}
    <div class="prose">${u.html}</div>
  </section>`;
  }).join('')}
</body></html>`;
}

(async () => {
  const only = process.argv[2];
  const courses = loadCourses().filter(c => !only || c.id === only);
  if (!courses.length) throw new Error(only ? `Ders bulunamadı: ${only}` : 'Hiç ders yok');

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.emulateMedia({ media: 'print', colorScheme: 'light' });
  for (const c of courses) {
    const outputs = [['ozet.pdf', pageHtml(c), c.title]];
    if (c.units.some(u => u.short)) outputs.push(['ozet-kisa.pdf', shortHtml(c), `${c.title} · Kısa özet`]);
    for (const [name, html, label] of outputs) {
      await page.setContent(html, { waitUntil: 'load' });
      const out = path.join(root, 'dersler', c.id, name);
      await page.pdf({
        path: out,
        format: 'A4',
        printBackground: true,
        preferCSSPageSize: true,
        displayHeaderFooter: true,
        headerTemplate: '<span></span>',
        footerTemplate: `<div style="width:100%;padding:0 15mm;font:8px Inter,Arial,sans-serif;color:#888;display:flex;justify-content:space-between">
          <span>Ecem'in Dersleri · ${label}</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>`
      });
      console.log(`✓ ${path.relative(root, out)}`);
    }
    if (c.onePager && c.onePager.length) {
      const { pdf, size } = await fitOnePage(page, c);
      const out = path.join(root, 'dersler', c.id, 'tek-sayfa.pdf');
      fs.writeFileSync(out, pdf);
      console.log(`✓ ${path.relative(root, out)} (yazı ${size.toFixed(1)} px)`);
      await page.setViewportSize({ width: 1280, height: 720 });
    }
  }
  await browser.close();
})().catch(err => { console.error(err.message); process.exit(1); });
