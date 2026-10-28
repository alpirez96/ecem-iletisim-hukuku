// Her ders için dersler/<ders>/ozet.pdf dosyasını data.js içeriğinden üretir.
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
    await page.setContent(pageHtml(c), { waitUntil: 'load' });
    const out = path.join(root, 'dersler', c.id, 'ozet.pdf');
    await page.pdf({
      path: out,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
      displayHeaderFooter: true,
      headerTemplate: '<span></span>',
      footerTemplate: `<div style="width:100%;padding:0 15mm;font:8px Inter,Arial,sans-serif;color:#888;display:flex;justify-content:space-between">
        <span>Ecem'in Dersleri · ${c.title}</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>`
    });
    console.log(`✓ ${path.relative(root, out)}`);
  }
  await browser.close();
})().catch(err => { console.error(err.message); process.exit(1); });
