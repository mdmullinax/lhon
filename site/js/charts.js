/* LHON field guide — small HTML/SVG chart helpers (theme-aware through CSS variables) */
(function () {
  const C = (LHON.charts = {});
  const esc = LHON.esc;

  // Card wrapper with title, subtitle, optional legend, table-view toggle and source line.
  // opts: {title, sub, foot, legend:[{label,color}], table:{head:[],rows:[[]]}, body(el)}
  C.card = (host, opts) => {
    const card = document.createElement('div'); card.className = 'chart';
    card.innerHTML = `
      <div class="chart-head">
        <div><h4>${opts.title}</h4>${opts.sub ? `<p>${opts.sub}</p>` : ''}</div>
        ${opts.table ? '<button class="tool" data-act="table" aria-pressed="false">Table</button>' : ''}
      </div>
      ${opts.legend ? `<div class="legend">${opts.legend.map((l) => `<span><i style="background:${l.color}"></i>${l.label}</span>`).join('')}</div>` : ''}
      <div class="chart-body"></div>
      <div class="chart-table" hidden></div>
      ${opts.foot ? `<div class="chart-foot">${opts.foot}</div>` : ''}`;
    host.appendChild(card);
    const body = card.querySelector('.chart-body'); const tbl = card.querySelector('.chart-table');
    opts.body(body);
    if (opts.table) {
      tbl.innerHTML = `<div class="tblwrap"><table class="tbl"><thead><tr>${opts.table.head.map((h) => `<th>${h}</th>`).join('')}</tr></thead><tbody>${opts.table.rows.map((r) => `<tr>${r.map((v) => `<td>${v}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
      const btn = card.querySelector('[data-act="table"]');
      btn.onclick = () => { const on = tbl.hidden; tbl.hidden = !on; body.hidden = on; btn.setAttribute('aria-pressed', on); btn.textContent = on ? 'Chart' : 'Table'; };
    }
    return card;
  };

  // Horizontal bars. rows: {label, sub, value, lo, hi, mid, color, tip, text}
  // opts: {max, unit, ticks:[..], fmt(v)}
  C.hbar = (el, rows, opts = {}) => {
    const max = opts.max || Math.max(...rows.map((r) => r.hi ?? r.value ?? 0)) * 1.12;
    const unit = opts.unit || ''; const fmt = opts.fmt || ((v) => (Math.round(v * 10) / 10).toLocaleString() + unit);
    const pct = (v) => Math.max(0, Math.min(100, (v / max) * 100));
    let html = '<div class="hbar">';
    for (const r of rows) {
      const color = r.color || 'var(--series-1)';
      const hasRange = r.lo != null && r.hi != null;
      const text = r.text || (r.value != null ? fmt(r.value) : `${fmt(r.lo)} – ${fmt(r.hi)}`);
      const tipTxt = r.tip || `<b>${esc(r.label)}</b>${text}${r.sub ? `<br><span class='k'>${esc(r.sub)}</span>` : ''}`;
      let marks = '';
      if (r.value != null && !hasRange) marks = `<div class="bar" style="width:${pct(r.value)}%;background:${color}"></div><span class="v">${text}</span>`;
      else if (hasRange) {
        marks = `<div class="rng${r.value != null || r.mid != null ? ' soft' : ''}" style="left:${pct(r.lo)}%;width:${Math.max(0.8, pct(r.hi) - pct(r.lo))}%;background:${color}"></div>`;
        const m = r.value ?? r.mid;
        if (m != null) marks += `<div class="dot" style="left:${pct(m)}%;background:${color}"></div>`;
        marks += `<span class="v" style="position:absolute;left:calc(${pct(r.hi)}% + 2px)">${text}</span>`;
      }
      html += `<div class="l">${r.label}${r.sub ? `<small>${r.sub}</small>` : ''}</div><div class="track" tabindex="0" data-tip="${esc(tipTxt)}">${marks}</div>`;
    }
    html += '</div>';
    if (opts.ticks) html += `<div class="axisx"><span></span><div class="ticks">${opts.ticks.map((t) => `<span style="left:${pct(t)}%">${fmt(t)}</span>`).join('')}</div></div>`;
    el.innerHTML = html;
  };

  // Tall segmented bar (one whole, <= 6 parts). parts: {label, value, color, dark}
  C.segbar = (el, parts, opts = {}) => {
    const total = parts.reduce((a, p) => a + p.value, 0);
    const fmt = opts.fmt || ((v) => Math.round((v / total) * 100) + '%');
    el.innerHTML = `<div class="segbar" role="img" aria-label="${esc(parts.map((p) => `${p.label} ${fmt(p.value)}`).join(', '))}">${parts.map((p) => {
      const share = (p.value / total) * 100;
      return `<div tabindex="0" style="flex:${p.value} 0 0;background:${p.color};${p.dark ? 'color:#0b0b0b' : ''}" data-tip="${esc(`<b>${p.label}</b>${fmt(p.value)}${p.note ? `<br><span class='k'>${p.note}</span>` : ''}`)}">${share >= 9 ? fmt(p.value) : ''}</div>`;
    }).join('')}</div>
    <div class="legend" style="margin:10px 0 0">${parts.map((p) => `<span><i style="background:${p.color}"></i>${p.label}${(p.value / total) * 100 < 9 ? ` (${fmt(p.value)})` : ''}</span>`).join('')}</div>`;
  };

  // Dot matrix "1 in N" figure on canvas. opts: {n, cols, hit}
  C.dotMatrix = (el, opts) => {
    const cv = document.createElement('canvas'); el.appendChild(cv);
    cv.style.width = '100%'; cv.style.display = 'block';
    const draw = () => {
      const w = el.clientWidth || 600;
      // choose a column count that lands the block near the requested height
      const cols = opts.cols || Math.max(20, Math.round(Math.sqrt((opts.n * w) / (opts.height || 210))));
      const rows = Math.ceil(opts.n / cols);
      const cell = w / cols; const h = Math.ceil(rows * cell); const dpr = Math.min(2, devicePixelRatio || 1);
      cv.width = w * dpr; cv.height = h * dpr; cv.style.height = h + 'px';
      const g = cv.getContext('2d'); g.scale(dpr, dpr);
      // Below ~2px per cell a circle renders as an invisible speck, so draw squares and
      // let the anti-aliased field read as texture rather than trying to draw dots.
      const tiny = cell < 2.2;
      g.fillStyle = LHON.cssVar('--text-muted');
      g.globalAlpha = tiny ? 0.55 : 0.75;
      const r = Math.max(0.5, cell * 0.34), sq = Math.max(0.9, cell * 0.62);
      for (let i = 0; i < opts.n; i++) {
        const x = (i % cols) * cell, y = Math.floor(i / cols) * cell;
        if (tiny) g.fillRect(x + (cell - sq) / 2, y + (cell - sq) / 2, sq, sq);
        else { g.beginPath(); g.arc(x + cell / 2, y + cell / 2, r, 0, 6.2832); g.fill(); }
      }
      g.globalAlpha = 1;
      const hit = opts.hit ?? Math.floor(opts.n * 0.4137);
      const hx = (hit % cols) * cell + cell / 2, hy = Math.floor(hit / cols) * cell + cell / 2;
      // knock a clear gap around the marked dot so it separates from the field
      g.save(); g.globalCompositeOperation = 'destination-out';
      g.beginPath(); g.arc(hx, hy, 9, 0, 6.2832); g.fill(); g.restore();
      g.fillStyle = LHON.cssVar('--series-2');
      g.beginPath(); g.arc(hx, hy, 4.5, 0, 6.2832); g.fill();
      g.strokeStyle = LHON.cssVar('--series-2'); g.lineWidth = 1.5; g.globalAlpha = 0.75;
      g.beginPath(); g.arc(hx, hy, 13, 0, 6.2832); g.stroke(); g.globalAlpha = 0.35;
      g.beginPath(); g.arc(hx, hy, 24, 0, 6.2832); g.stroke(); g.globalAlpha = 1;
      if (opts.label) {
        g.font = '600 12px system-ui, sans-serif'; g.fillStyle = LHON.cssVar('--series-2');
        const right = hx < w - 150; g.textAlign = right ? 'left' : 'right';
        g.fillText(opts.label, hx + (right ? 32 : -32), hy + 4);
        g.strokeStyle = LHON.cssVar('--series-2'); g.globalAlpha = 0.55; g.lineWidth = 1;
        g.beginPath(); g.moveTo(hx + (right ? 24 : -24), hy); g.lineTo(hx + (right ? 29 : -29), hy); g.stroke(); g.globalAlpha = 1;
      }
    };
    draw();
    let to; const redraw = () => { clearTimeout(to); to = setTimeout(draw, 120); };
    window.addEventListener('resize', redraw); window.addEventListener('lhon:theme', redraw);
    new ResizeObserver(redraw).observe(el);
  };

  // Timeline / gantt. rows: {label, sub, segs:[{from,to,color,tip,label}], marks:[{at,tip,symbol}]}
  C.gantt = (el, rows, opts) => {
    const { start, end } = opts; const span = end - start; const pct = (v) => ((Math.max(start, Math.min(end, v)) - start) / span) * 100;
    const years = []; for (let y = Math.ceil(start / (opts.step || 5)) * (opts.step || 5); y <= end; y += opts.step || 5) years.push(y);
    let html = '<div class="hbar gantt">';
    for (const r of rows) {
      html += `<div class="l">${r.label}${r.sub ? `<small>${r.sub}</small>` : ''}</div><div class="track" style="height:26px">`;
      html += years.map((y) => `<i style="position:absolute;left:${pct(y)}%;top:0;bottom:0;width:1px;background:var(--grid)"></i>`).join('');
      for (const s of r.segs || []) html += `<div class="rng" tabindex="0" style="left:${pct(s.from)}%;width:${Math.max(0.8, pct(s.to) - pct(s.from))}%;background:${s.color};height:14px" data-tip="${esc(s.tip || '')}"></div>`;
      for (const m of r.marks || []) html += `<div class="dot" tabindex="0" style="left:${pct(m.at)}%;background:${m.color || 'var(--text-primary)'};width:11px;height:11px" data-tip="${esc(m.tip || '')}"></div>`;
      html += '</div>';
    }
    html += '</div>';
    html += `<div class="axisx"><span></span><div class="ticks">${years.map((y) => `<span style="left:${pct(y)}%">${y}</span>`).join('')}</div></div>`;
    el.innerHTML = html;
  };
})();
