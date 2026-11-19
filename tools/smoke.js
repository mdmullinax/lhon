// Headless smoke test: loads the site in jsdom, visits every tab, reports errors
// and validates that every citation key resolves. Usage: node tools/smoke.js
const fs = require('fs');
const path = require('path');
const { JSDOM, VirtualConsole } = require('jsdom');

const SITE = path.join(__dirname, '..', 'site');
const problems = [];
const vc = new VirtualConsole();
vc.on('jsdomError', (e) => problems.push('jsdomError: ' + (e.detail || e).toString().split('\n')[0]));
vc.on('error', (...a) => problems.push('console.error: ' + a.join(' ')));
vc.on('warn', (...a) => { const m = a.join(' '); if (/Missing/.test(m)) problems.push('WARN: ' + m); });

const dom = new JSDOM(fs.readFileSync(path.join(SITE, 'index.html'), 'utf8'), {
  runScripts: 'outside-only', pretendToBeVisual: true, virtualConsole: vc, url: 'http://localhost/',
});
const { window } = dom;

// --- stubs for things jsdom lacks ---
window.ResizeObserver = class { observe() {} disconnect() {} unobserve() {} };
window.IntersectionObserver = class { constructor(cb) { this.cb = cb; } observe() {} disconnect() {} unobserve() {} };
window.matchMedia = () => ({ matches: false, addEventListener() {}, removeEventListener() {} });
window.requestAnimationFrame = () => 0;
window.cancelAnimationFrame = () => {};
window.devicePixelRatio = 1;
window.HTMLCanvasElement.prototype.getContext = function () {
  const noop = () => {};
  return new Proxy({}, { get: (t, k) => {
    if (k === 'canvas') return this;
    if (k === 'measureText') return () => ({ width: 10 });
    if (k === 'createLinearGradient' || k === 'createRadialGradient') return () => ({ addColorStop: noop });
    if (k === 'getImageData') return () => ({ data: new Uint8ClampedArray(4) });
    return noop;
  }, set: () => true });
};
window.Element.prototype.scrollIntoView = () => {};
window.scrollTo = () => {};
Object.defineProperty(window.HTMLElement.prototype, 'clientWidth', { get: () => 900, configurable: true });
Object.defineProperty(window.HTMLElement.prototype, 'clientHeight', { get: () => 560, configurable: true });
window.Element.prototype.getBoundingClientRect = () => ({ x: 0, y: 0, width: 900, height: 560, top: 0, left: 0, right: 900, bottom: 560 });
// three.js needs WebGL; make the constructor throw so the code takes its documented fallback path
window.WebGLRenderingContext = undefined;

// --- load scripts in document order ---
const srcs = [...dom.window.document.querySelectorAll('script[src]')].map((s) => s.getAttribute('src'));
for (const src of srcs) {
  const file = path.join(SITE, src);
  if (!fs.existsSync(file)) { problems.push('MISSING FILE: ' + src); continue; }
  try { window.eval(fs.readFileSync(file, 'utf8')); }
  catch (e) { problems.push(`EVAL ${src}: ${e.message}`); }
}

const LHON = window.LHON;
if (!LHON) { console.error('LHON did not load'); process.exit(1); }

// --- start the app and visit every tab ---
try { LHON.start(); } catch (e) { problems.push('start(): ' + e.stack.split('\n').slice(0, 2).join(' | ')); }

const ids = LHON.flat();
const stats = [];
for (const id of ids) {
  if (!LHON.tabs[id]) { problems.push('UNREGISTERED TAB: ' + id); continue; }
  window.location.hash = '#/' + id;
  window.dispatchEvent(new window.Event('hashchange'));
  const root = LHON.tabs[id].root;
  if (!root) { problems.push('TAB DID NOT RENDER: ' + id); continue; }
  const text = root.textContent.replace(/\s+/g, ' ').trim();
  stats.push({ id, words: text.split(' ').length, cites: root.querySelectorAll('sup.cite a').length, charts: root.querySelectorAll('.chart').length, tables: root.querySelectorAll('table.tbl').length });
  // broken citation links rendered as "?"
  root.querySelectorAll('sup.cite a[data-missing]').forEach((a) => problems.push(`${id}: missing source key "${a.dataset.missing}"`));
  // glossary terms with no definition
  root.querySelectorAll('[data-g]').forEach((el) => { if (!LHON.glossary[el.dataset.g]) problems.push(`${id}: missing glossary term "${el.dataset.g}"`); });
  // internal links that point nowhere
  root.querySelectorAll('a[href^="#/"]').forEach((a) => {
    const t = a.getAttribute('href').slice(2).split('/')[0];
    if (!LHON.tabs[t]) problems.push(`${id}: link to unknown tab "#/${t}"`);
  });
  // unresolved template literals
  if (/\[object Object\]|undefined<|NaN/.test(root.innerHTML)) problems.push(`${id}: contains "undefined"/"NaN"/"[object Object]" in output`);
}

// --- report ---
console.log('\nTab'.padEnd(26) + 'Words'.padStart(7) + 'Cites'.padStart(7) + 'Charts'.padStart(8) + 'Tables'.padStart(8));
console.log('-'.repeat(56));
let tw = 0, tc = 0;
for (const s of stats) { tw += s.words; tc += s.cites; console.log(s.id.padEnd(26) + String(s.words).padStart(7) + String(s.cites).padStart(7) + String(s.charts).padStart(8) + String(s.tables).padStart(8)); }
console.log('-'.repeat(56));
console.log('TOTAL'.padEnd(26) + String(tw).padStart(7) + String(tc).padStart(7));
console.log(`\nSources registered: ${Object.keys(LHON.sources).length}   Glossary terms: ${Object.keys(LHON.glossary).length}`);

const used = new Set();
for (const id of ids) { const r = LHON.tabs[id] && LHON.tabs[id].root; if (r) r.querySelectorAll('[data-src]').forEach((a) => used.add(a.dataset.src)); }
const unused = Object.keys(LHON.sources).filter((k) => !used.has(k));
if (unused.length) console.log(`\nSources registered but never cited (${unused.length}): ${unused.join(', ')}`);

if (problems.length) { console.log(`\n${problems.length} PROBLEM(S):`); [...new Set(problems)].forEach((p) => console.log('  • ' + p)); process.exitCode = 1; }
else console.log('\nNo problems found.');
