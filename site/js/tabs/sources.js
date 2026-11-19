LHON.registerTab('sources', {
  title: 'All sources', nav: 'All sources',
  render() {
    return `
    <div class="kicker">Section 15 · Reference</div>
    <h1>Every source cited in this guide</h1>
    <p class="lede">Numbered in the order they first appear in the registry. Every superscript number on this site links here and to the source itself. Filter by type or search the list.</p>

    <div class="callout warn"><span class="ico">▲</span><div>
      <b class="t">Three honest caveats about this list</b>
      <ul style="margin-bottom:0">
        <li><strong>Several primary sources could not be read directly.</strong> NCBI Bookshelf (GeneReviews), PubMed abstract pages, MITOMAP and a few journal sites blocked automated access during research. Where a fact came from a secondary source quoting the primary one, the text says so. The GeneReviews chapter in particular was reached partly through citing reviews rather than read in full &mdash; it is worth checking the live chapter yourself.</li>
        <li><strong>Some links resolve to a literature search rather than a single article.</strong> This applies mainly to the lifestyle and supplements section, whose research pass was interrupted before delivering its URL list. Rather than invent plausible-looking article links, those entries point to a PubMed search that will find the paper.</li>
        <li><strong>Dates matter here more than usual.</strong> The regulatory and trial information is current as of 19 November 2026 and parts of it will age quickly.</li>
      </ul>
    </div></div>

    <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center;margin:1.6rem 0 1rem">
      <input type="search" data-role="q" placeholder="Search sources…" style="flex:1;min-width:220px;padding:9px 13px;border-radius:9px;border:1px solid var(--border);background:var(--surface-1);color:var(--text-primary);font:inherit;font-size:.9rem">
      <div class="seg" data-role="kind">
        <button data-v="all" aria-pressed="true">All</button>
        <button data-v="paper">Studies</button>
        <button data-v="review">Reviews</button>
        <button data-v="trial">Trials</button>
        <button data-v="guideline">Guidelines</button>
        <button data-v="gov">Official</button>
        <button data-v="org">Organisations</button>
        <button data-v="news">News</button>
      </div>
    </div>
    <p class="small muted" data-role="count"></p>
    <div data-role="list"></div>`;
  },
  init(root) {
    const list = root.querySelector('[data-role="list"]');
    const count = root.querySelector('[data-role="count"]');
    const entries = Object.entries(LHON.sources).map(([key, s], i) => ({ key, s, n: i + 1 }));
    const KINDS = { paper: 'Study', review: 'Review', trial: 'Trial', guideline: 'Guideline', gov: 'Official', org: 'Organisation', news: 'News', data: 'Database', lab: 'Laboratory' };
    let kind = 'all', q = '';
    function draw() {
      const ql = q.toLowerCase();
      const rows = entries.filter((e) => {
        if (kind !== 'all') {
          if (kind === 'paper' && !['paper'].includes(e.s.kind)) return false;
          if (kind === 'gov' && !['gov'].includes(e.s.kind)) return false;
          if (kind === 'org' && !['org', 'data', 'lab'].includes(e.s.kind)) return false;
          if (!['paper', 'gov', 'org'].includes(kind) && e.s.kind !== kind) return false;
        }
        if (!ql) return true;
        return (e.s.title + ' ' + (e.s.by || '') + ' ' + (e.s.where || '') + ' ' + (e.s.year || '')).toLowerCase().includes(ql);
      });
      count.textContent = `Showing ${rows.length} of ${entries.length} sources.`;
      list.innerHTML = `<div class="tblwrap"><table class="tbl"><thead><tr><th style="width:3em">#</th><th>Source</th><th style="width:7em">Type</th></tr></thead><tbody>${rows.map((e) => `
        <tr id="src-${e.key}"><td class="num muted">${e.n}</td>
        <td><a href="${e.s.url}" target="_blank" rel="noopener" style="font-weight:600">${LHON.esc(e.s.title)}</a>
        <div class="small muted">${LHON.esc(e.s.by || '')}${e.s.year ? ' · ' + e.s.year : ''}${e.s.where ? ' · ' + LHON.esc(e.s.where) : ''}</div></td>
        <td><span class="pill">${KINDS[e.s.kind] || e.s.kind}</span></td></tr>`).join('')}</tbody></table></div>`;
    }
    LHON.seg(root.querySelector('[data-role="kind"]'), (v) => { kind = v; draw(); });
    root.querySelector('[data-role="q"]').addEventListener('input', (e) => { q = e.target.value; draw(); });
    draw();
  },
});
