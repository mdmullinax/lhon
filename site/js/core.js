/* LHON field guide — core: tab registry, router, citations, glossary, tooltips */
(function () {
  const LHON = (window.LHON = {
    tabs: {},
    sources: {},
    glossary: {},
    reduceMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  });

  // Section order and sidebar grouping
  LHON.order = [
    ['Orientation', ['start']],
    ['Understand it', ['differential', 'lhon', 'see']],
    ['The science', ['genetics', 'cell', 'numbers']],
    ['What to do', ['treat', 'lifestyle', 'plan', 'family', 'heredity']],
    ['Who can help', ['community', 'ai']],
    ['Reference', ['sources']],
  ];
  LHON.flat = () => LHON.order.flatMap((g) => g[1]);

  LHON.registerTab = (id, def) => { LHON.tabs[id] = Object.assign({ id }, def); };

  /* ---------- citations ---------- */
  // c('id1','id2') -> superscript numbered links to the Sources tab
  LHON.srcIndex = (id) => Object.keys(LHON.sources).indexOf(id) + 1;
  LHON.c = (...ids) => {
    const links = ids.map((id) => {
      const s = LHON.sources[id];
      if (!s) { console.warn('Missing source:', id); return `<a href="#/sources" data-missing="${id}">?</a>`; }
      return `<a href="${s.url}" target="_blank" rel="noopener" data-src="${id}">${LHON.srcIndex(id)}</a>`;
    });
    return `<sup class="cite">[${links.join(',')}]</sup>`;
  };
  // inline source line, e.g. under charts: src('id1','id2')
  LHON.src = (...ids) => 'Sources: ' + ids.map((id) => {
    const s = LHON.sources[id];
    if (!s) { console.warn('Missing source:', id); return id; }
    return `<a href="${s.url}" target="_blank" rel="noopener" data-src="${id}">${s.short || s.title}</a>`;
  }).join(' · ');

  /* ---------- glossary ---------- */
  LHON.g = (key, text) => {
    if (!LHON.glossary[key]) console.warn('Missing glossary term:', key);
    return `<span class="term" tabindex="0" data-g="${key}">${text || key}</span>`;
  };

  /* ---------- small helpers ---------- */
  LHON.esc = (s) => String(s).replace(/[&<>"]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
  LHON.el = (html) => { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; };
  LHON.evid = (n, neg) => `<span class="evid${neg ? ' neg' : ''}" role="img" aria-label="Evidence strength ${n} of 4">${[1, 2, 3, 4].map((i) => `<i class="${i <= n ? 'f' : ''}"></i>`).join('')}</span>`;
  LHON.store = {
    get(k, d) { try { const v = localStorage.getItem('lhon:' + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('lhon:' + k, JSON.stringify(v)); } catch (e) { /* private mode */ } },
  };
  // Segmented control: seg(el, cb) wires buttons[data-v]
  LHON.seg = (root, cb) => {
    root.addEventListener('click', (e) => {
      const b = e.target.closest('button[data-v]'); if (!b) return;
      root.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', x === b));
      cb(b.dataset.v, b);
    });
  };
  // Sub-tabs: container with .subtabs buttons[data-p] and .subpane[data-p]
  LHON.subtabs = (root) => {
    root.querySelectorAll('.subtabs').forEach((bar) => {
      const scope = bar.parentElement;
      bar.addEventListener('click', (e) => {
        const b = e.target.closest('button[data-p]'); if (!b) return;
        bar.querySelectorAll('button').forEach((x) => x.setAttribute('aria-selected', x === b));
        scope.querySelectorAll(':scope > .subpane').forEach((p) => { p.hidden = p.dataset.p !== b.dataset.p; });
      });
    });
  };
  // Persistent checklists: <ul class="checklist" data-key="..."> with <li>text</li>
  LHON.checklists = (root) => {
    root.querySelectorAll('ul.checklist[data-key]').forEach((ul) => {
      const key = 'chk:' + ul.dataset.key; const state = LHON.store.get(key, {});
      [...ul.children].forEach((li, i) => {
        const html = li.innerHTML;
        li.innerHTML = `<label><input type="checkbox" ${state[i] ? 'checked' : ''}><span>${html}</span></label>`;
        li.querySelector('input').addEventListener('change', (e) => { state[i] = e.target.checked; LHON.store.set(key, state); });
      });
    });
  };
  // Run fn only while element is on screen and its tab is active
  LHON.whileVisible = (el, onStart, onStop) => {
    let vis = false;
    const io = new IntersectionObserver((ents) => {
      const v = ents[0].isIntersecting;
      if (v !== vis) { vis = v; v ? onStart() : onStop(); }
    }, { threshold: 0.05 });
    io.observe(el);
    return () => { io.disconnect(); if (vis) onStop(); };
  };

  /* ---------- tooltip ---------- */
  const tip = { el: null };
  tip.show = (html, x, y) => {
    const t = tip.el; t.innerHTML = html; t.classList.add('on');
    const r = t.getBoundingClientRect(); const pad = 12;
    let left = x + 14, top = y + 16;
    if (left + r.width > innerWidth - pad) left = Math.max(pad, x - r.width - 14);
    if (top + r.height > innerHeight - pad) top = Math.max(pad, y - r.height - 14);
    t.style.left = left + 'px'; t.style.top = top + 'px';
  };
  tip.hide = () => tip.el.classList.remove('on');
  LHON.tip = tip;

  function tipHtmlFor(target) {
    const g = target.closest('[data-g]');
    if (g) { const d = LHON.glossary[g.dataset.g]; return d ? `<b>${d.term || g.dataset.g}</b>${d.def}` : null; }
    const s = target.closest('[data-src]');
    if (s) { const d = LHON.sources[s.dataset.src]; return d ? `<b>${LHON.esc(d.title)}</b><span class="k">${LHON.esc(d.by || '')}${d.year ? ' · ' + d.year : ''}</span>` : null; }
    const t = target.closest('[data-tip]');
    if (t) return t.dataset.tip;
    return null;
  }
  function wireTooltips() {
    tip.el = document.getElementById('tip');
    document.addEventListener('pointermove', (e) => {
      const html = tipHtmlFor(e.target);
      if (html) tip.show(html, e.clientX, e.clientY); else if (!e.target.closest('[data-tipowner]')) tip.hide();
    });
    document.addEventListener('focusin', (e) => {
      const html = tipHtmlFor(e.target);
      if (html) { const r = e.target.getBoundingClientRect(); tip.show(html, r.left, r.bottom); }
    });
    document.addEventListener('focusout', () => tip.hide());
    document.addEventListener('scroll', () => tip.hide(), true);
  }

  /* ---------- router ---------- */
  let current = null;
  function buildNav() {
    const nav = document.getElementById('nav'); let n = 0; let html = '';
    for (const [grp, ids] of LHON.order) {
      html += `<div class="grp">${grp}</div>`;
      for (const id of ids) { const t = LHON.tabs[id]; if (!t) continue; n++; html += `<a href="#/${id}" data-id="${id}"><span class="n">${String(n).padStart(2, '0')}</span>${t.nav || t.title}</a>`; }
    }
    nav.innerHTML = html;
  }
  function pagerHtml(id) {
    const flat = LHON.flat().filter((x) => LHON.tabs[x]); const i = flat.indexOf(id);
    const prev = flat[i - 1], next = flat[i + 1];
    return `<nav class="pager" aria-label="Previous and next section">
      ${prev ? `<a href="#/${prev}"><small>← Previous</small>${LHON.tabs[prev].title}</a>` : '<span></span>'}
      ${next ? `<a href="#/${next}" style="text-align:right"><small>Next →</small>${LHON.tabs[next].title}</a>` : '<span></span>'}
    </nav>
    <p class="disclaimer">This guide is educational and is not medical advice. It cannot diagnose anyone. Decisions about tests and treatment belong with the treating clinicians — ideally a neuro-ophthalmologist — who know the individual case. Every factual claim links to its source so you can check it yourself; where the evidence is thin or disputed, the text says so.</p>`;
  }
  function show(id) {
    if (!LHON.tabs[id]) id = 'start';
    const tab = LHON.tabs[id]; const main = document.getElementById('main');
    if (current && current !== tab) { current.onHide && current.onHide(); current.root.hidden = true; }
    if (!tab.root) {
      const root = document.createElement('section'); root.id = 'tab-' + id; root.setAttribute('aria-label', tab.title);
      const body = tab.render();
      root.innerHTML = tab.bare ? body + `<div class="pane" style="padding-top:0">${pagerHtml(id)}</div>` : `<div class="pane">${body}${pagerHtml(id)}</div>`;
      main.appendChild(root); tab.root = root;
      LHON.subtabs(root); LHON.checklists(root);
      try { tab.init && tab.init(root); } catch (err) { console.error('init failed for', id, err); }
    }
    tab.root.hidden = false; current = tab;
    tab.onShow && tab.onShow();
    document.querySelectorAll('#nav a').forEach((a) => {
      const on = a.dataset.id === id; a.classList.toggle('on', on);
      if (on) { a.setAttribute('aria-current', 'page'); a.scrollIntoView({ block: 'nearest', inline: 'center' }); } else a.removeAttribute('aria-current');
    });
    document.title = `${tab.title} — LHON field guide`;
  }
  function route() {
    const m = location.hash.match(/^#\/([\w-]+)(?:\/([\w-]+))?/);
    const id = m ? m[1] : 'start';
    const changed = !current || current.id !== id;
    show(id);
    if (m && m[2]) { const t = document.getElementById(m[2]); if (t) { t.scrollIntoView(); return; } }
    if (changed) window.scrollTo(0, 0);
  }

  /* ---------- theme & text size ---------- */
  function wireTools() {
    const root = document.documentElement;
    const setTheme = (t) => { root.dataset.theme = t; LHON.store.set('theme', t); window.dispatchEvent(new CustomEvent('lhon:theme', { detail: t })); };
    root.dataset.theme = LHON.store.get('theme', 'dark');
    document.getElementById('t-theme').onclick = () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
    let fs = LHON.store.get('fs', 17);
    const setFs = (v) => { fs = Math.max(14, Math.min(26, v)); root.style.setProperty('--fs', fs + 'px'); LHON.store.set('fs', fs); };
    setFs(fs);
    document.getElementById('t-smaller').onclick = () => setFs(fs - 1);
    document.getElementById('t-larger').onclick = () => setFs(fs + 1);
  }
  LHON.cssVar = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

  LHON.start = () => {
    wireTools(); wireTooltips(); buildNav();
    window.addEventListener('hashchange', route);
    route();
  };
})();
