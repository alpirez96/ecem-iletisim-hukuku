'use strict';

(function () {
  const COURSES = window.DERSLER || [];
  const byId = Object.fromEntries(COURSES.map(c => [c.id, c]));
  const KEY = 'ecem-dersler-v1';
  const DEFAULT_HUE = 285;

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const app = $('#app');
  const esc = s => String(s).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));

  // ---------- İlerleme ve notlar (tarayıcıda saklanır) ----------
  let store = {};
  try { store = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { store = {}; }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) { /* gizli sekme vb. */ } };
  const prog = id => {
    const p = store[id] || (store[id] = {});
    p.read = p.read || {}; p.known = p.known || {}; p.wrong = p.wrong || {}; p.notes = p.notes || {};
    return p;
  };

  // ---------- Yardımcılar ----------
  const shuffle = arr => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);
  const link = (...parts) => '#/' + parts.filter(Boolean).join('/');
  const word = c => c.unitWord || 'Ünite';
  const groupsOf = c => c.groups || [];
  const matUrl = (c, file) => `dersler/${c.id}/${file}`;
  // Tarayıcılar Türkçe karakterli indirme adlarını reddedebiliyor
  const fileName = s => s.replace(/[çğıİöşüÇĞÖŞÜ]/g, ch => 'cgiIosuCGOSU'['çğıİöşüÇĞÖŞÜ'.indexOf(ch)]).replace(/[^\w.-]+/g, '-');

  // Filtre: '' = hepsi, ünite id'si ya da grup (hafta) id'si
  const inFilter = (c, f, unitId) => !f || unitId === f || (c.units.find(u => u.id === unitId) || {}).group === f;
  const cardsOf = (c, f) => c.cards.filter(x => inFilter(c, f, x[0]));
  const questionsOf = (c, f) => c.questions.filter(q => inFilter(c, f, q.u));

  const stats = c => {
    const p = prog(c.id);
    return {
      read: c.units.filter(u => p.read[u.id]).length,
      known: c.cards.filter(x => p.known[x[1]]).length,
      wrong: c.questions.filter(q => p.wrong[q.q]).length,
      notes: c.units.filter(u => (p.notes[u.id] || '').trim()).length
    };
  };

  // PDF özeti varsa indirme bağlantılarını göster
  const pdfOk = {};
  const pdfUrl = c => `dersler/${c.id}/ozet.pdf`;
  function showPdfLinks(c) {
    const apply = ok => $$('[data-pdf]').forEach(a => {
      a.hidden = !ok;
      a.href = pdfUrl(c);
      a.setAttribute('download', fileName(`${c.title} ${c.exam || 'Ders'} Ozeti.pdf`));
    });
    if (c.id in pdfOk) return apply(pdfOk[c.id]);
    apply(false);
    fetch(pdfUrl(c), { method: 'HEAD' })
      .then(r => r.ok, () => false)
      .then(ok => { pdfOk[c.id] = ok; if (course === c) apply(ok); });
  }

  // ---------- Durum ----------
  let course = null;
  let unitById = {};
  let groupById = {};
  let mode = 'home';
  let sidebarOpen = false;
  const deck = { filter: '', onlyUnknown: false, list: [], i: 0, open: false, know: 0, again: 0 };
  const quiz = { n: 10, filter: '', list: [], i: 0, picked: null, log: [] };

  const unitLabel = u => `${word(course)} ${u.no} · ${u.title}${u.fromPdf ? " · PDF'ten" : ''}`;
  const validFilter = f => (unitById[f] || groupById[f] ? f : '');

  function setCourse(c) {
    if (course === c) return;
    course = c;
    unitById = Object.fromEntries(c.units.map(u => [u.id, u]));
    groupById = Object.fromEntries(groupsOf(c).map(g => [g.id, g]));
    deck.filter = ''; deck.onlyUnknown = false;
    quiz.filter = '';
  }

  function setChrome(view) {
    const inCourse = !!course && view !== 'home';
    document.documentElement.style.setProperty('--hue', inCourse ? (course.hue ?? DEFAULT_HUE) : DEFAULT_HUE);
    document.body.classList.toggle('has-tabs', inCourse);
    $('#tabs').hidden = !inCourse;
    const crumb = $('#crumb');
    crumb.hidden = !inCourse;
    if (!inCourse) return;
    crumb.textContent = course.title;
    $$('#tabs [data-tab]').forEach(a => {
      a.href = link(course.id, a.dataset.tab);
      if (a.dataset.tab === view) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  }

  // Ünite/hafta seçim kutusu (kartlar ve test için)
  function filterOptions(selected, countOf) {
    const opt = (v, t, n) => n ? `<option value="${v}"${v === selected ? ' selected' : ''}>${t} (${n})</option>` : '';
    const unitOpt = u => opt(u.id, `${u.no}. ${u.title}${u.fromPdf ? " — PDF'ten" : ''}`, countOf(u.id));
    const groups = groupsOf(course);
    if (!groups.length) return course.units.map(unitOpt).join('');
    return groups.map(g => {
      const units = course.units.filter(u => u.group === g.id);
      const inner = opt(g.id, `${g.title} — hepsi`, countOf(g.id)) + units.map(unitOpt).join('');
      return inner ? `<optgroup label="${esc(g.title)}">${inner}</optgroup>` : '';
    }).join('');
  }

  // ---------- Yönlendirme: #/ders/bolum/secim ----------
  function route() {
    const [cid, view = 'ozet', arg] = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean).map(decodeURIComponent);
    sidebarOpen = false;
    if (!cid || !byId[cid]) { course = null; return renderHome(); }
    setCourse(byId[cid]);
    if (view === 'kartlar') return renderDeckView(arg);
    if (view === 'test') return renderQuizSetup(arg);
    if (view === 'defter') return renderNotebook();
    if (view === 'dosyalar') return renderFiles();
    return renderUnit(arg);
  }
  window.addEventListener('hashchange', () => { route(); window.scrollTo(0, 0); });

  // ---------- Ana sayfa ----------
  function renderHome() {
    mode = 'home';
    setChrome('home');
    document.title = `Ecem'in Dersleri`;
    app.innerHTML = `
      <section class="home">
        <div class="hero">
          <h1>Ecem'in Dersleri</h1>
          <p>Ders notlarından hazırlanmış özetler, bilgi kartları ve testler. Bir ders seç ve başla.</p>
        </div>
        <ol class="how">
          <li><b>Özeti oku</b><span>Konuları sırayla çalış, okuduklarını işaretle.</span></li>
          <li><b>Not al</b><span>Her konunun altındaki "Notlarım" alanına yaz; hepsi Defterim'de toplanır.</span></li>
          <li><b>Kartlarla tekrar et</b><span>Bildiklerini ayır, bilmediklerine dön.</span></li>
          <li><b>Test çöz</b><span>Yanlışların kaydedilir, sonra sadece onları çözebilirsin.</span></li>
        </ol>
        ${COURSES.length ? `<div class="course-grid">${COURSES.map(courseCard).join('')}</div>`
          : `<p class="empty">Henüz ders eklenmedi.</p>`}
      </section>`;
  }

  function courseCard(c) {
    const s = stats(c);
    const p = pct(s.read, c.units.length);
    return `
      <a class="course-card" href="${link(c.id)}" style="--hue:${c.hue ?? DEFAULT_HUE}">
        ${c.exam ? `<span class="pill">${c.exam}</span>` : ''}
        <h2>${c.title}</h2>
        <p>${c.description || ''}</p>
        <dl class="course-stats">
          <div><dt>${word(c)}</dt><dd>${c.units.length}</dd></div>
          <div><dt>Kart</dt><dd>${c.cards.length}</dd></div>
          <div><dt>Soru</dt><dd>${c.questions.length}</dd></div>
        </dl>
        <div class="bar" aria-hidden="true"><i style="width:${p}%"></i></div>
        <span class="course-progress">${s.read}/${c.units.length} konu okundu · ${s.known}/${c.cards.length} kart biliniyor${s.notes ? ` · ${s.notes} konuda not` : ''}</span>
        <span class="course-go">${s.read ? 'Kaldığın yerden devam et' : 'Çalışmaya başla'} →</span>
      </a>`;
  }

  // ---------- Özet ----------
  function unitList(current) {
    const p = prog(course.id);
    const item = x => `
      <li><a href="${link(course.id, 'ozet', x.id)}"${x === current ? ' aria-current="page"' : ''}>
        <span class="num">${x.no}</span><span class="t">${x.title}${x.fromPdf ? ' <span class="badge">PDF</span>' : ''}</span>${p.read[x.id] ? '<span class="done" title="Okundu">✓</span>' : ''}
      </a></li>`;
    const groups = groupsOf(course);
    if (!groups.length) return course.units.map(item).join('');
    return groups.map(g => `<li class="group-title">${g.title}</li>` + course.units.filter(u => u.group === g.id).map(item).join('')).join('');
  }

  function sourceBox(u) {
    const parts = [];
    if (u.fromPdf) {
      const m = u.fromPdf.file && (course.materials || []).find(x => x.file === u.fromPdf.file);
      parts.push(`
        <div class="source pdf">
          <span class="badge lg">PDF'ten</span>
          <div>
            <p><b>Bu özet, PDF'te sarıyla işaretlenmiş yerlerden hazırlandı.</b></p>
            <p>Kaynak: ${u.fromPdf.name}</p>
            ${u.fromPdf.note ? `<p class="muted">${u.fromPdf.note}</p>` : ''}
            ${m ? `<p><a href="${matUrl(course, m.file)}" download>PDF'i indir (${m.size})</a></p>` : ''}
          </div>
        </div>`);
    }
    const files = (u.files || []).map(f => (course.materials || []).find(m => m.file === f)).filter(Boolean);
    if (files.length) {
      parts.push(`
        <div class="source">
          <span class="source-label">Kaynak ${files.length > 1 ? 'sunumlar' : 'sunum'}</span>
          ${files.map(m => `<a class="file-chip" href="${matUrl(course, m.file)}" download>${m.title} <small>${m.size}</small></a>`).join('')}
        </div>`);
    }
    return parts.join('');
  }

  function noteArea(u, rows) {
    const text = prog(course.id).notes[u.id] || '';
    return `<textarea class="note" data-note="${u.id}" rows="${rows}" placeholder="Bu konuyla ilgili kendi notlarını buraya yaz. Otomatik kaydedilir.">${esc(text)}</textarea>`;
  }

  function renderUnit(id, keepScroll) {
    mode = 'unit';
    setChrome('ozet');
    const p = prog(course.id);
    const u = unitById[id] || unitById[p.last] || course.units[0];
    p.last = u.id; save();
    const idx = course.units.indexOf(u);
    const prev = course.units[idx - 1], next = course.units[idx + 1];
    const nc = cardsOf(course, u.id).length, nq = questionsOf(course, u.id).length;
    const s = stats(course);
    const read = !!p.read[u.id];
    const g = groupById[u.group];
    document.title = `${u.title} · ${course.title}`;
    const y = window.scrollY;

    app.innerHTML = `
      <div class="study">
        <aside class="sidebar${sidebarOpen ? ' open' : ''}">
          <button class="units-toggle" data-act="toggle-units" aria-expanded="${sidebarOpen}">
            <span class="units-toggle-label">${g ? `${g.title} · ` : ''}${word(course)} ${u.no}</span>
            <span class="units-toggle-title">${u.title}</span>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          <div class="units-panel">
            <div class="progress">
              <div class="progress-row"><span>İlerlemen</span><b>${s.read}/${course.units.length} konu</b></div>
              <div class="bar" aria-hidden="true"><i style="width:${pct(s.read, course.units.length)}%"></i></div>
              <p>${s.known}/${course.cards.length} kart biliniyor · ${s.wrong} yanlış soru · ${s.notes} konuda not</p>
            </div>
            <ol class="unit-list">${unitList(u)}</ol>
            <a class="pdf-card" data-pdf href="#" download hidden>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0-4.5-4.5M12 15l4.5-4.5M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>
              <span><b>Özet PDF'i indir</b><small>Tüm konular tek dosyada, yazdırmaya uygun</small></span>
            </a>
          </div>
        </aside>

        <article class="content">
          <header class="unit-head">
            <p class="eyebrow">${g ? `${g.title} · ` : ''}${word(course)} ${u.no}${u.slides ? ` · ${u.slides}` : ''}</p>
            <h1>${u.title}</h1>
            ${sourceBox(u)}
          </header>
          <div class="prose">${u.html}</div>

          <section class="notes-box">
            <div class="notes-head"><h2>Notlarım</h2><span class="note-status" aria-live="polite"></span></div>
            ${noteArea(u, 4)}
            <p class="notes-foot">Tüm notların <a href="${link(course.id, 'defter')}">Defterim</a> sayfasında toplanır.</p>
          </section>

          <footer class="unit-foot">
            <button class="btn${read ? ' is-done' : ''}" data-act="toggle-read" aria-pressed="${read}">${read ? '✓ Okundu' : 'Okudum olarak işaretle'}</button>
            ${nc ? `<a class="btn" href="${link(course.id, 'kartlar', u.id)}">Bu konunun kartları (${nc})</a>` : ''}
            ${nq ? `<a class="btn primary" href="${link(course.id, 'test', u.id)}">Bu konudan test (${nq} soru)</a>` : ''}
          </footer>
          <nav class="pager" aria-label="Konular arası geçiş">
            ${prev ? `<a href="${link(course.id, 'ozet', prev.id)}"><small>← Önceki</small><span>${prev.title}</span></a>` : '<span></span>'}
            ${next ? `<a class="next" href="${link(course.id, 'ozet', next.id)}"><small>Sonraki →</small><span>${next.title}</span></a>` : ''}
          </nav>
        </article>
      </div>`;
    showPdfLinks(course);
    growAll();
    if (keepScroll) window.scrollTo(0, y);
  }

  // ---------- Defterim ----------
  function renderNotebook() {
    mode = 'notebook';
    setChrome('defter');
    document.title = `Defterim · ${course.title}`;
    const s = stats(course);
    const card = u => `
      <article class="note-card">
        <header>
          <a href="${link(course.id, 'ozet', u.id)}">${word(course)} ${u.no} · ${u.title}</a>
          <span class="note-status" aria-live="polite"></span>
        </header>
        ${noteArea(u, 2)}
      </article>`;
    const groups = groupsOf(course);
    const body = groups.length
      ? groups.map(g => `<h2 class="section-title">${g.title}</h2>` + course.units.filter(u => u.group === g.id).map(card).join('')).join('')
      : course.units.map(card).join('');
    app.innerHTML = `
      <section class="practice notebook">
        <header class="practice-head">
          <h1>Defterim</h1>
          <p class="muted">Her konu için kendi notlarını yaz; yazdıkça kaydedilir. Notlar bu tarayıcıda saklanır, başka cihazda görünmez. Yedek almak ya da kâğıt defterine geçirmek için indir.</p>
          <div class="row left">
            <button class="btn primary" data-act="notes-download"${s.notes ? '' : ' disabled'}>Notlarımı indir (.txt)</button>
            <button class="btn" data-act="notes-copy"${s.notes ? '' : ' disabled'}>Kopyala</button>
            <span class="muted small" id="notes-msg">${s.notes} konuda not var</span>
          </div>
        </header>
        ${body}
      </section>`;
    growAll();
  }

  function notesText() {
    const p = prog(course.id);
    const lines = [`Ecem'in Dersleri — ${course.title} — Notlarım`, `(${new Date().toLocaleDateString('tr-TR')})`, ''];
    let lastGroup = null;
    course.units.forEach(u => {
      const t = (p.notes[u.id] || '').trim();
      if (!t) return;
      const g = groupById[u.group];
      if (g && g !== lastGroup) { lines.push(`=== ${g.title} ===`, ''); lastGroup = g; }
      lines.push(`${word(course)} ${u.no} · ${u.title}`, t, '');
    });
    return lines.join('\n');
  }

  // ---------- Dosyalar ----------
  function renderFiles() {
    mode = 'files';
    setChrome('dosyalar');
    document.title = `Dosyalar · ${course.title}`;
    const mats = course.materials || [];
    const ext = f => f.split('.').pop().toUpperCase();
    const item = m => `
      <li><a class="file-row" href="${matUrl(course, m.file)}" download>
        <span class="ext">${ext(m.file)}</span>
        <span class="file-meta"><b>${m.title}</b><small>${[m.kind, m.size].filter(Boolean).join(' · ')}</small></span>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0-4.5-4.5M12 15l4.5-4.5M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>
      </a></li>`;
    const groups = groupsOf(course);
    const list = !mats.length ? '<p class="muted">Bu ders için yüklenmiş orijinal materyal yok.</p>'
      : groups.length
        ? groups.map(g => {
          const ms = mats.filter(m => m.group === g.id);
          return ms.length ? `<h3 class="files-group">${g.title}</h3><ul class="file-list">${ms.map(item).join('')}</ul>` : '';
        }).join('')
        : `<ul class="file-list">${mats.map(item).join('')}</ul>`;
    app.innerHTML = `
      <section class="practice files">
        <header class="practice-head"><h1>Dosyalar</h1></header>
        <a class="pdf-card big" data-pdf href="#" download hidden>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0-4.5-4.5M12 15l4.5-4.5M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>
          <span><b>Özet PDF</b><small>Bu sitedeki tüm konu özetleri tek dosyada (A4, yazdırmaya uygun)</small></span>
        </a>
        <h2 class="section-title">Orijinal materyaller</h2>
        ${list}
      </section>`;
    showPdfLinks(course);
  }

  // ---------- Kartlar ----------
  function renderDeckView(arg) {
    mode = 'deck';
    setChrome('kartlar');
    deck.filter = validFilter(arg);
    document.title = `Kartlar · ${course.title}`;
    app.innerHTML = `
      <section class="practice">
        <header class="practice-head">
          <h1>Bilgi kartları</h1>
          <div class="toolbar">
            <label class="field"><span>Konu</span>
              <select data-act="deck-filter">
                <option value="">Hepsi (${course.cards.length})</option>
                ${filterOptions(deck.filter, f => cardsOf(course, f).length)}
              </select>
            </label>
            <label class="check"><input type="checkbox" data-act="deck-unknown"${deck.onlyUnknown ? ' checked' : ''}> Sadece bilmediklerim</label>
            <button class="btn ghost" data-act="deck-shuffle">Karıştır</button>
          </div>
        </header>
        <div id="deck"></div>
        <p class="kbd-hint">Klavye: <kbd>Boşluk</kbd> çevir · <kbd>1</kbd> tekrar et · <kbd>2</kbd> biliyorum · <kbd>←</kbd> <kbd>→</kbd> gezin</p>
        <p class="center"><button class="link-btn" data-act="deck-reset">Bu dersin kart ilerlemesini sıfırla</button></p>
      </section>`;
    buildDeck(false);
  }

  function buildDeck(shuffled) {
    const known = prog(course.id).known;
    let list = cardsOf(course, deck.filter);
    if (deck.onlyUnknown) list = list.filter(c => !known[c[1]]);
    deck.list = shuffled ? shuffle(list) : list;
    deck.i = 0; deck.open = false; deck.know = 0; deck.again = 0;
    renderDeck();
  }

  function renderDeck() {
    const box = $('#deck');
    if (!box) return;
    const known = prog(course.id).known;
    const all = cardsOf(course, deck.filter);
    const knownHere = all.filter(c => known[c[1]]).length;
    const total = deck.list.length;

    if (!total) {
      box.innerHTML = `
        <div class="panel center">
          <h2>${deck.onlyUnknown ? 'Bu destedeki bütün kartları biliyorsun' : 'Bu seçimde kart yok'}</h2>
          <p class="muted">${knownHere}/${all.length} kart "biliyorum" olarak işaretli.</p>
          <div class="row">
            ${deck.onlyUnknown ? '<button class="btn primary" data-act="deck-show-all">Tüm kartları göster</button>' : ''}
            <a class="btn" href="${link(course.id, 'test', deck.filter)}">Teste geç</a>
          </div>
        </div>`;
      return;
    }

    if (deck.i >= total) {
      const left = all.filter(c => !known[c[1]]).length;
      box.innerHTML = `
        <div class="panel center">
          <p class="eyebrow">Tur bitti</p>
          <h2>${deck.know} biliyorum · ${deck.again} tekrar</h2>
          <p class="muted">Bu destede toplam ${knownHere}/${all.length} kart biliniyor.</p>
          <div class="row">
            ${left ? `<button class="btn primary" data-act="deck-restart-unknown">Bilmediklerimle devam (${left})</button>` : ''}
            <button class="btn" data-act="deck-restart">Baştan başla</button>
            <a class="btn" href="${link(course.id, 'test', deck.filter)}">Teste geç</a>
          </div>
        </div>`;
      return;
    }

    const c = deck.list[deck.i];
    const u = unitById[c[0]];
    box.innerHTML = `
      <div class="deck-meta"><span>Kart ${deck.i + 1} / ${total}</span><span>Bildiğin: ${knownHere}/${all.length}</span></div>
      <div class="bar" aria-hidden="true"><i style="width:${pct(deck.i, total)}%"></i></div>
      <button class="flash${deck.open ? ' is-open' : ''}" data-act="reveal" aria-expanded="${deck.open}">
        <span class="flash-top"><span class="flash-tag">${unitLabel(u)}</span>${known[c[1]] ? '<span class="flash-known">✓ Biliyorsun</span>' : ''}</span>
        <span class="flash-q">${c[1]}</span>
        ${deck.open ? `<span class="flash-a">${c[2]}</span>` : '<span class="flash-hint">Cevabı görmek için dokun</span>'}
      </button>
      <div class="card-actions">
        <button class="btn icon" data-act="prev" aria-label="Önceki kart"${deck.i === 0 ? ' disabled' : ''}>←</button>
        ${deck.open
          ? `<button class="btn again" data-act="again">Tekrar et</button><button class="btn primary" data-act="know">Biliyorum</button>`
          : `<button class="btn primary wide" data-act="reveal">Cevabı göster</button>`}
        <button class="btn icon" data-act="next" aria-label="Sonraki kart">→</button>
      </div>`;
  }

  function grade(knows) {
    const c = deck.list[deck.i];
    const p = prog(course.id);
    if (knows) { p.known[c[1]] = true; deck.know++; } else { delete p.known[c[1]]; deck.again++; }
    save();
    deck.i++; deck.open = false;
    renderDeck();
  }

  // ---------- Test ----------
  function renderQuizSetup(arg) {
    mode = 'setup';
    setChrome('test');
    if (arg !== undefined) quiz.filter = arg === 'yanlislar' ? arg : validFilter(arg);
    document.title = `Test · ${course.title}`;
    const s = stats(course);
    if (quiz.filter === 'yanlislar' && !s.wrong) quiz.filter = '';
    app.innerHTML = `
      <section class="practice">
        <header class="practice-head">
          <h1>Test</h1>
          <p class="muted">Seçenekler her seferinde karışık gelir. Yanlış yaptığın sorular "Yanlışlarım" listesine eklenir; doğru cevaplayınca listeden çıkar.</p>
        </header>
        <div class="panel setup">
          <label class="field"><span>Konu</span>
            <select id="quiz-filter">
              <option value="">Hepsi, karışık (${course.questions.length} soru)</option>
              ${s.wrong ? `<option value="yanlislar"${quiz.filter === 'yanlislar' ? ' selected' : ''}>Yanlışlarım (${s.wrong} soru)</option>` : ''}
              ${filterOptions(quiz.filter, f => questionsOf(course, f).length)}
            </select>
          </label>
          <fieldset class="seg">
            <legend>Soru sayısı</legend>
            ${[[10, '10'], [20, '20'], [0, 'Tümü']].map(([v, t]) => `
              <label><input type="radio" name="qn" value="${v}"${quiz.n === v ? ' checked' : ''}><span>${t}</span></label>`).join('')}
          </fieldset>
          <button class="btn primary lg" data-act="quiz-start">Teste başla</button>
        </div>
      </section>`;
  }

  function startQuiz(pool) {
    const p = prog(course.id);
    if (!pool) {
      quiz.filter = $('#quiz-filter').value;
      quiz.n = Number(($('input[name="qn"]:checked') || {}).value || 0);
      pool = quiz.filter === 'yanlislar' ? course.questions.filter(q => p.wrong[q.q]) : questionsOf(course, quiz.filter);
    }
    const n = quiz.n ? Math.min(quiz.n, pool.length) : pool.length;
    quiz.list = shuffle(pool).slice(0, n).map(q => ({ q, opts: shuffle(q.o.map((t, k) => ({ t, ok: k === 0 }))) }));
    quiz.i = 0; quiz.picked = null; quiz.log = [];
    if (!quiz.list.length) return renderQuizSetup();
    renderQuestion();
  }

  function renderQuestion() {
    mode = 'quiz';
    const { q, opts } = quiz.list[quiz.i];
    const u = unitById[q.u];
    const total = quiz.list.length;
    const right = quiz.log.filter(x => x.ok).length;
    const picked = quiz.picked;
    const answered = picked !== null;
    const correct = opts.findIndex(o => o.ok);
    app.innerHTML = `
      <section class="practice quiz">
        <div class="deck-meta"><span>Soru ${quiz.i + 1} / ${total}</span><span>Doğru: ${right}</span></div>
        <div class="bar" aria-hidden="true"><i style="width:${pct(quiz.i + (answered ? 1 : 0), total)}%"></i></div>
        <p class="flash-tag">${unitLabel(u)}</p>
        <h1 class="q-text">${q.q}</h1>
        <div class="options">
          ${opts.map((o, k) => {
            let cls = 'opt';
            if (answered) cls += k === correct ? ' is-correct' : k === picked ? ' is-wrong' : ' is-dim';
            return `<button class="${cls}" data-act="pick" data-k="${k}"${answered ? ' disabled' : ''}><span class="opt-key">${'ABCD'[k]}</span><span>${o.t}</span></button>`;
          }).join('')}
        </div>
        ${answered ? `
          <div class="feedback ${picked === correct ? 'ok' : 'bad'}" role="status">
            <b>${picked === correct ? 'Doğru!' : `Yanlış. Doğru cevap: ${'ABCD'[correct]}`}</b>
            <p>${q.e}</p>
            <a href="${link(course.id, 'ozet', u.id)}">${word(course)} ${u.no} özetine git</a>
          </div>` : ''}
        <div class="quiz-actions">
          <button class="btn ghost" data-act="quiz-quit">Testi bitir</button>
          ${answered ? `<button class="btn primary" data-act="quiz-next">${quiz.i + 1 < total ? 'Sonraki soru →' : 'Sonucu gör'}</button>` : ''}
        </div>
        <p class="kbd-hint">Klavye: <kbd>1</kbd>–<kbd>4</kbd> veya <kbd>A</kbd>–<kbd>D</kbd> seç · <kbd>Enter</kbd> sonraki</p>
      </section>`;
    if (answered) $('[data-act="quiz-next"]').focus({ preventScroll: true });
  }

  function pick(k) {
    if (quiz.picked !== null) return;
    const item = quiz.list[quiz.i];
    const ok = item.opts[k].ok;
    quiz.picked = k;
    quiz.log.push({ item, k, ok });
    const p = prog(course.id);
    if (ok) delete p.wrong[item.q.q]; else p.wrong[item.q.q] = true;
    save();
    renderQuestion();
  }

  function nextQuestion() {
    if (quiz.picked === null) return;
    quiz.i++; quiz.picked = null;
    if (quiz.i >= quiz.list.length) return renderResult();
    renderQuestion();
    window.scrollTo(0, 0);
  }

  function renderResult() {
    mode = 'result';
    const total = quiz.log.length;
    if (!total) return renderQuizSetup();
    const right = quiz.log.filter(x => x.ok).length;
    const wrongs = quiz.log.filter(x => !x.ok);
    const score = pct(right, total);
    const msg = score >= 85 ? 'Harika! Bu konular hazır görünüyor.'
      : score >= 60 ? 'İyi gidiyor. Yanlışlarını bir kez daha gözden geçir.'
      : 'Özeti tekrar okuyup yanlışlarını yeniden çöz.';
    app.innerHTML = `
      <section class="practice">
        <div class="panel center result">
          <p class="eyebrow">Test sonucu</p>
          <p class="score">%${score}</p>
          <p><b>${right} / ${total}</b> doğru</p>
          <p class="muted">${msg}</p>
          <div class="row">
            ${wrongs.length ? `<button class="btn primary" data-act="quiz-retry-wrong">Bu testteki yanlışları tekrar çöz (${wrongs.length})</button>` : ''}
            <button class="btn" data-act="quiz-new">Yeni test</button>
          </div>
        </div>
        ${wrongs.length ? `
          <h2 class="section-title">Yanlış yaptıkların</h2>
          <ol class="review">
            ${wrongs.map(({ item, k }) => {
              const u = unitById[item.q.u];
              return `<li>
                <p class="review-q">${item.q.q}</p>
                <p><span class="tag bad">Senin cevabın</span> ${item.opts[k].t}</p>
                <p><span class="tag ok">Doğru cevap</span> ${item.q.o[0]}</p>
                <p class="muted">${item.q.e}</p>
                <a href="${link(course.id, 'ozet', u.id)}">${word(course)} ${u.no}: ${u.title} →</a>
              </li>`;
            }).join('')}
          </ol>` : ''}
      </section>`;
    window.scrollTo(0, 0);
  }

  // ---------- Olaylar ----------
  document.addEventListener('click', e => {
    const el = e.target.closest('[data-act]');
    if (!el || el.tagName === 'SELECT' || el.tagName === 'INPUT') return;
    const act = el.dataset.act;
    const p = course && prog(course.id);
    switch (act) {
      case 'toggle-units':
        sidebarOpen = !sidebarOpen;
        el.closest('.sidebar').classList.toggle('open', sidebarOpen);
        el.setAttribute('aria-expanded', sidebarOpen);
        break;
      case 'toggle-read': {
        const id = p.last;
        if (p.read[id]) delete p.read[id]; else p.read[id] = true;
        save();
        renderUnit(id, true);
        break;
      }
      case 'reveal': deck.open = !deck.open; renderDeck(); focusCard(); break;
      case 'prev': if (deck.i > 0) { deck.i--; deck.open = false; renderDeck(); focusCard(); } break;
      case 'next': deck.i++; deck.open = false; renderDeck(); focusCard(); break;
      case 'again': grade(false); focusCard(); break;
      case 'know': grade(true); focusCard(); break;
      case 'deck-shuffle': buildDeck(true); break;
      case 'deck-restart': buildDeck(false); break;
      case 'deck-restart-unknown': deck.onlyUnknown = true; $('[data-act="deck-unknown"]').checked = true; buildDeck(true); break;
      case 'deck-show-all': deck.onlyUnknown = false; $('[data-act="deck-unknown"]').checked = false; buildDeck(false); break;
      case 'deck-reset':
        if (confirm('Bu dersteki tüm kartların "biliyorum" işaretleri silinsin mi?')) { p.known = {}; save(); buildDeck(false); }
        break;
      case 'quiz-start': startQuiz(); break;
      case 'pick': pick(Number(el.dataset.k)); break;
      case 'quiz-next': nextQuestion(); break;
      case 'quiz-quit': renderResult(); break;
      case 'quiz-retry-wrong': startQuiz(quiz.log.filter(x => !x.ok).map(x => x.item.q)); break;
      case 'quiz-new': renderQuizSetup(); window.scrollTo(0, 0); break;
      case 'notes-download': {
        const blob = new Blob([notesText()], { type: 'text/plain;charset=utf-8' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = fileName(`${course.title} Notlarim.txt`);
        document.body.appendChild(a); a.click(); a.remove();
        setTimeout(() => URL.revokeObjectURL(a.href), 1000);
        break;
      }
      case 'notes-copy': {
        const msg = $('#notes-msg');
        const done = ok => { if (msg) msg.textContent = ok ? 'Kopyalandı ✓' : 'Kopyalanamadı; indir seçeneğini kullan.'; };
        if (navigator.clipboard) navigator.clipboard.writeText(notesText()).then(() => done(true), () => done(false));
        else done(false);
        break;
      }
    }
  });

  document.addEventListener('change', e => {
    const act = e.target.dataset.act;
    if (act === 'deck-filter') location.hash = link(course.id, 'kartlar', e.target.value);
    if (act === 'deck-unknown') { deck.onlyUnknown = e.target.checked; buildDeck(false); }
  });

  // Notlar: yazdıkça kaydet
  let noteTimer = null;
  const grow = t => { t.style.height = 'auto'; t.style.height = `${t.scrollHeight + 2}px`; };
  const growAll = () => $$('textarea.note').forEach(grow);
  document.addEventListener('input', e => {
    const t = e.target;
    if (!t.matches('textarea[data-note]')) return;
    const p = prog(course.id);
    if (t.value.trim()) p.notes[t.dataset.note] = t.value; else delete p.notes[t.dataset.note];
    grow(t);
    const status = t.parentElement.querySelector('.note-status');
    if (status) status.textContent = 'Kaydediliyor…';
    clearTimeout(noteTimer);
    noteTimer = setTimeout(() => {
      save();
      if (status) status.textContent = 'Kaydedildi ✓';
      const msg = $('#notes-msg');
      if (msg) {
        const n = stats(course).notes;
        msg.textContent = `${n} konuda not var`;
        $$('[data-act="notes-download"], [data-act="notes-copy"]').forEach(b => { b.disabled = !n; });
      }
    }, 400);
  });

  function focusCard() {
    const f = $('#deck .flash');
    if (f) f.focus({ preventScroll: true });
  }

  document.addEventListener('keydown', e => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const t = e.target;
    if (t.closest('input, select, textarea')) return;
    const onControl = !!t.closest('button, a');
    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;

    if (mode === 'deck' && deck.i < deck.list.length) {
      if ((key === ' ' || key === 'Enter') && !onControl) { e.preventDefault(); deck.open = !deck.open; renderDeck(); focusCard(); }
      else if (key === 'ArrowRight') { deck.i++; deck.open = false; renderDeck(); focusCard(); }
      else if (key === 'ArrowLeft' && deck.i > 0) { deck.i--; deck.open = false; renderDeck(); focusCard(); }
      else if (key === '1' && deck.open) { grade(false); focusCard(); }
      else if (key === '2' && deck.open) { grade(true); focusCard(); }
    } else if (mode === 'quiz') {
      const k = Math.max('1234'.indexOf(key), 'abcd'.indexOf(key));
      if (quiz.picked === null && k >= 0 && k < quiz.list[quiz.i].opts.length) pick(k);
      else if (key === 'Enter' && quiz.picked !== null && !onControl) { e.preventDefault(); nextQuestion(); }
    }
  });

  route();
})();
