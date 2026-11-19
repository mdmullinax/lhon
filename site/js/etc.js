/* LHON field guide — animated electron transport chain (SVG diagram + canvas particles) */
(function () {
  const E = (LHON.etc = {});
  const VW = 1000, VH = 540;
  const MODES = {
    healthy: { ci: 9, cii: 2.2, ide: 0, leak: 0.02, meters: [100, 100, 100, 6],
      note: 'Healthy: electrons from food (carried by NADH) enter at Complex I and run down the chain to oxygen. At three stations their energy pumps protons (H⁺) across the membrane; the protons rush back through ATP synthase, which spins like a turbine and makes ATP.' },
    lhon: { ci: 3.4, cii: 2.2, ide: 0, leak: 0.3, meters: [38, 58, 55, 70],
      note: 'LHON mutation: one of Complex I’s own parts (ND1, ND4 or ND6) is slightly mis-shaped. Fewer electrons get through, fewer protons are pumped, ATP output from this route drops, and more electrons leak onto oxygen as reactive oxygen species (ROS). Complex II still works, which is partly why most cells cope.' },
    ide: { ci: 3.4, cii: 2.2, ide: 3.6, leak: 0.2, meters: [38, 78, 76, 45],
      note: 'With idebenone: the drug is loaded with electrons in the cell fluid by an enzyme called NQO1 and hands them directly to Complex III — a detour around the faulty Complex I. Complexes III and IV pump again and ATP output partly recovers. Shown in cells; how much reaches retinal ganglion cells in a person is the open clinical question.' },
  };
  const P = { // particle paths in viewBox coordinates
    nadh: [[95, 470], [150, 400], [150, 330], [190, 262], [300, 248], [420, 248], [500, 246], [545, 196], [610, 176], [675, 196], [722, 246], [722, 330], [760, 420]],
    succ: [[330, 480], [330, 392], [345, 300], [385, 252], [440, 248], [500, 246], [545, 196], [610, 176], [675, 196], [722, 246], [722, 330], [760, 420]],
    ide: [[392, 30], [420, 80], [455, 150], [492, 214], [500, 246], [545, 196], [610, 176], [675, 196], [722, 246], [722, 330], [760, 420]],
  };
  const PUMPS = { nadh: [[0.3, 150, 2], [0.55, 500, 2], [0.86, 722, 1]], succ: [[0.5, 500, 2], [0.84, 722, 1]], ide: [[0.42, 500, 2], [0.8, 722, 1]] };

  function pathSampler(pts) {
    const seg = []; let total = 0;
    for (let i = 1; i < pts.length; i++) { const d = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); seg.push(d); total += d; }
    return (u) => {
      let t = u * total;
      for (let i = 0; i < seg.length; i++) { if (t <= seg[i]) { const f = t / seg[i]; return [pts[i][0] + (pts[i + 1][0] - pts[i][0]) * f, pts[i][1] + (pts[i + 1][1] - pts[i][1]) * f]; } t -= seg[i]; }
      return pts[pts.length - 1];
    };
  }

  const SVG = `
  <svg viewBox="0 0 ${VW} ${VH}" role="img" aria-label="Diagram of the mitochondrial inner membrane with complexes one to five. Electrons travel from complex one through coenzyme Q to complex three, cytochrome c and complex four; protons are pumped upward and return through ATP synthase." style="display:block;width:100%;height:auto">
    <defs>
      <linearGradient id="etc-mem" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#6b4a21"/><stop offset=".5" stop-color="#3b2912"/><stop offset="1" stop-color="#6b4a21"/></linearGradient>
      <pattern id="etc-lip" width="14" height="96" patternUnits="userSpaceOnUse"><circle cx="7" cy="6" r="5" fill="#b98a4a"/><circle cx="7" cy="90" r="5" fill="#b98a4a"/><path d="M5 11v30M9 11v30M5 55v30M9 55v30" stroke="#8a6a3c" stroke-width="1.4"/></pattern>
    </defs>
    <rect width="${VW}" height="${VH}" fill="#08090c"/>
    <rect y="0" width="${VW}" height="52" fill="#0f141c"/>
    <rect y="52" width="${VW}" height="148" fill="#0b1220"/>
    <rect y="296" width="${VW}" height="244" fill="#120e0a"/>
    <rect y="200" width="${VW}" height="96" fill="url(#etc-mem)"/><rect y="200" width="${VW}" height="96" fill="url(#etc-lip)" opacity=".7"/>
    <g font-family="system-ui,sans-serif" font-size="13" fill="#9a988f">
      <text x="14" y="32">CELL FLUID (cytosol)</text>
      <text x="14" y="76">INTERMEMBRANE SPACE — protons pile up here</text>
      <text x="14" y="524">MATRIX — the inside of the mitochondrion</text>
      <text x="14" y="318" fill="#c9a877">inner membrane</text>
    </g>
    <!-- Complex I -->
    <g id="etc-ci"><path d="M100 196h150a14 14 0 0 1 14 14v72a14 14 0 0 1-14 14h-56v78a26 26 0 0 1-26 26h-28a26 26 0 0 1-26-26v-164a14 14 0 0 1 14-14z" fill="#2e6fc4" stroke="#8fbcf5" stroke-width="1.5"/>
      <text x="178" y="240" text-anchor="middle" font-size="19" font-weight="700" fill="#fff" font-family="system-ui,sans-serif">Complex I</text>
      <text x="178" y="262" text-anchor="middle" font-size="12" fill="#dbe9fb" font-family="system-ui,sans-serif">ND1 · ND4 · ND6 live here</text></g>
    <g id="etc-x" opacity="0"><circle cx="232" cy="196" r="15" fill="#e05a5a"/><path d="M225 189l14 14M239 189l-14 14" stroke="#fff" stroke-width="3" stroke-linecap="round"/></g>
    <!-- Complex II -->
    <path d="M300 300h60a12 12 0 0 1 12 12v66a22 22 0 0 1-22 22h-40a22 22 0 0 1-22-22v-66a12 12 0 0 1 12-12z" fill="#16805c" stroke="#6fd1ad" stroke-width="1.5"/>
    <text x="330" y="352" text-anchor="middle" font-size="16" font-weight="700" fill="#fff" font-family="system-ui,sans-serif">II</text>
    <!-- CoQ -->
    <ellipse cx="420" cy="248" rx="30" ry="16" fill="#3a3320" stroke="#e9c46a" stroke-width="1.5"/><text x="420" y="253" text-anchor="middle" font-size="13" font-weight="700" fill="#f3dc9b" font-family="system-ui,sans-serif">CoQ</text>
    <!-- Complex III -->
    <rect x="462" y="190" width="78" height="126" rx="16" fill="#6c5fd0" stroke="#bdb6f5" stroke-width="1.5"/><text x="501" y="282" text-anchor="middle" font-size="17" font-weight="700" fill="#fff" font-family="system-ui,sans-serif">III</text>
    <!-- cyt c -->
    <circle cx="610" cy="176" r="17" fill="#7a2f4d" stroke="#f0a6c3" stroke-width="1.5"/><text x="610" y="180" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" font-family="system-ui,sans-serif">cyt c</text>
    <!-- Complex IV -->
    <rect x="682" y="190" width="80" height="130" rx="16" fill="#b9406d" stroke="#f0a6c3" stroke-width="1.5"/><text x="722" y="284" text-anchor="middle" font-size="17" font-weight="700" fill="#fff" font-family="system-ui,sans-serif">IV</text>
    <!-- ATP synthase -->
    <g><rect x="852" y="194" width="76" height="108" rx="12" fill="#a87200" stroke="#f3cf7a" stroke-width="1.5"/>
      <g id="etc-rotor" stroke="#f8e3ad" stroke-width="2" opacity=".85"><path d="M862 208v80M874 208v80M886 208v80M898 208v80M910 208v80"/></g>
      <rect x="880" y="302" width="20" height="48" fill="#a87200" stroke="#f3cf7a" stroke-width="1.5"/>
      <ellipse cx="890" cy="392" rx="52" ry="46" fill="#c98500" stroke="#f3cf7a" stroke-width="1.5"/>
      <text x="890" y="388" text-anchor="middle" font-size="15" font-weight="700" fill="#1a1200" font-family="system-ui,sans-serif">ATP</text><text x="890" y="406" text-anchor="middle" font-size="12" font-weight="600" fill="#1a1200" font-family="system-ui,sans-serif">synthase (V)</text></g>
    <g font-family="system-ui,sans-serif" font-size="13" fill="#d6d5cc">
      <text x="64" y="496">NADH (from food)</text><text x="290" y="506">succinate</text>
      <text x="772" y="440">O₂ → H₂O</text><text x="945" y="470" text-anchor="end" fill="#ffd35a">ATP out →</text>
      <g id="etc-idelab" opacity="0"><rect x="322" y="10" width="150" height="34" rx="8" fill="#17324f" stroke="#8fbcf5"/><text x="397" y="32" text-anchor="middle" fill="#dbe9fb">NQO1 + idebenone</text></g>
      <g id="etc-roslab" opacity="0"><text x="64" y="350" fill="#ff8a8a">ROS leak</text></g>
    </g>
  </svg>`;

  E.mount = (host) => {
    host.innerHTML = `
      <div class="stage" style="background:#08090c"><div style="position:relative">${SVG}<canvas style="position:absolute;inset:0;width:100%;height:100%"></canvas></div></div>
      <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center;margin:12px 0 6px">
        <div class="seg" data-role="mode"><button data-v="healthy" aria-pressed="true">Healthy</button><button data-v="lhon">LHON mutation</button><button data-v="ide">LHON + idebenone</button></div>
        <div class="legend" style="margin:0"><span><i style="background:#fff3a0;border-radius:50%"></i>electron</span><span><i style="background:#7fd0ff;border-radius:50%"></i>proton (H⁺)</span><span><i style="background:#ffd35a;border-radius:50%"></i>ATP</span><span><i style="background:#ff4b4b;border-radius:50%"></i>ROS</span></div>
      </div>
      <p class="small sec" data-role="note" style="max-width:92ch;min-height:4.6em"></p>
      <div class="hbar" data-role="meters" style="max-width:720px"></div>
      <p class="small muted" style="margin-top:8px">Meter values are illustrative, set to show direction and rough scale; measured values differ by mutation and by laboratory model (see text).</p>`;
    const cv = host.querySelector('canvas'); const g = cv.getContext('2d');
    const svg = host.querySelector('svg'); const note = host.querySelector('[data-role="note"]'); const metersEl = host.querySelector('[data-role="meters"]');
    const NAMES = ['Electron flow through Complex I', 'Proton gradient', 'ATP output', 'ROS (reactive oxygen) leak'];
    const COLS = ['var(--series-1)', 'var(--series-1)', 'var(--series-1)', 'var(--series-8)'];
    metersEl.innerHTML = NAMES.map((n, i) => `<div class="l">${n}</div><div class="track"><div class="bar" style="width:0;background:${COLS[i]}"></div><span class="v"></span></div>`).join('');
    const bars = [...metersEl.querySelectorAll('.bar')], vals = [...metersEl.querySelectorAll('.v')];
    const samplers = { nadh: pathSampler(P.nadh), succ: pathSampler(P.succ), ide: pathSampler(P.ide) };
    let mode = MODES.healthy; const el = [], pr = [], atp = [], ros = []; let acc = { nadh: 0, succ: 0, ide: 0 }, pcount = 0, rot = 0, flux = 0;

    function setMode(k) {
      mode = MODES[k]; note.textContent = mode.note;
      mode.meters.forEach((m, i) => { bars[i].style.width = m * 0.78 + '%'; vals[i].textContent = i === 3 ? (m < 20 ? 'low' : m < 60 ? 'raised' : 'high') : m + '%'; });
      svg.querySelector('#etc-x').setAttribute('opacity', k === 'healthy' ? 0 : 1);
      svg.querySelector('#etc-ci path').setAttribute('fill', k === 'healthy' ? '#2e6fc4' : '#27456f');
      svg.querySelector('#etc-idelab').setAttribute('opacity', k === 'ide' ? 1 : 0);
      svg.querySelector('#etc-roslab').setAttribute('opacity', k === 'healthy' ? 0 : 1);
      if (LHON.reduceMotion) drawStatic();
    }
    function resize() { const r = cv.getBoundingClientRect(); const d = Math.min(2, devicePixelRatio || 1); cv.width = r.width * d; cv.height = r.height * d; }
    function dot(x, y, r, color, a) { g.globalAlpha = a; g.fillStyle = color; g.beginPath(); g.arc(x, y, r, 0, 6.2832); g.fill(); }
    function step(dt) {
      for (const k of ['nadh', 'succ', 'ide']) {
        acc[k] += dt * (k === 'nadh' ? mode.ci : k === 'succ' ? mode.cii : mode.ide);
        while (acc[k] >= 1) { acc[k] -= 1; el.push({ k, u: 0, fired: 0, v: 0.2 + Math.random() * 0.05 }); }
      }
      for (let i = el.length - 1; i >= 0; i--) {
        const e = el[i]; e.u += dt * e.v;
        if (e.k === 'nadh' && e.fired === 0 && e.u > 0.2 && Math.random() < mode.leak) { ros.push({ x: 150 + (Math.random() - 0.5) * 30, y: 360, vx: -40 - Math.random() * 60, vy: (Math.random() - 0.5) * 80, life: 1.4 }); el.splice(i, 1); continue; }
        const pumps = PUMPS[e.k];
        while (e.fired < pumps.length && e.u >= pumps[e.fired][0]) { const [, x, n] = pumps[e.fired]; for (let j = 0; j < n; j++) pr.push({ x: x + (Math.random() - 0.5) * 34, y: 300, ty: 96 + Math.random() * 84, ph: 0, wob: Math.random() * 6 }); e.fired++; }
        if (e.u >= 1) el.splice(i, 1);
      }
      flux *= 1 - Math.min(1, dt * 1.5);
      for (let i = pr.length - 1; i >= 0; i--) {
        const p = pr[i];
        if (p.ph === 0) { p.y -= dt * 150; if (p.y <= p.ty) p.ph = 1; }
        else if (p.ph === 1) { p.x += dt * (70 + (890 - p.x) * 0.25); p.wob += dt * 4; p.y = p.ty + Math.sin(p.wob) * 5; if (p.x >= 878 + Math.random() * 20) { p.ph = 2; p.x = 870 + Math.random() * 40; } }
        else { p.y += dt * 190; if (p.y > 350) { pr.splice(i, 1); pcount++; flux += 1; if (pcount % 4 === 0) atp.push({ x: 890 + (Math.random() - 0.5) * 50, y: 430, vx: 30 + Math.random() * 40, vy: 14 + Math.random() * 24, life: 2.2 }); } }
      }
      for (const arr of [atp, ros]) for (let i = arr.length - 1; i >= 0; i--) { const a = arr[i]; a.life -= dt; a.x += a.vx * dt; a.y += a.vy * dt; if (a.life <= 0) arr.splice(i, 1); }
      rot += dt * flux * 6;
    }
    function draw() {
      const sx = cv.width / VW, sy = cv.height / VH; g.setTransform(sx, 0, 0, sy, 0, 0); g.clearRect(0, 0, VW, VH);
      g.globalCompositeOperation = 'lighter';
      for (const e of el) { const [x, y] = samplers[e.k](Math.min(1, e.u)); dot(x, y, 9, '#fff3a0', 0.18); dot(x, y, 4, '#fff7c2', 1); }
      for (const p of pr) { dot(p.x, p.y, 7, '#7fd0ff', 0.15); dot(p.x, p.y, 3.2, '#a8e0ff', 0.95); }
      for (const a of atp) { const al = Math.min(1, a.life); dot(a.x, a.y, 11, '#ffd35a', 0.2 * al); dot(a.x, a.y, 5, '#ffe08a', al); }
      for (const r of ros) { const al = Math.min(1, r.life); dot(r.x, r.y, 10, '#ff4b4b', 0.22 * al); dot(r.x, r.y, 4, '#ff8a8a', al); }
      g.globalCompositeOperation = 'source-over'; g.globalAlpha = 1;
      svg.querySelector('#etc-rotor').setAttribute('transform', `translate(${(rot % 12).toFixed(2)} 0)`);
    }
    function drawStatic() { el.length = pr.length = atp.length = ros.length = 0; for (let i = 0; i < 400; i++) step(0.03); resize(); draw(); }
    let run = false, last = 0;
    function loop(now) { if (!run) return; const dt = Math.min(0.05, (now - last) / 1000 || 0.016); last = now; step(dt); draw(); requestAnimationFrame(loop); }
    LHON.seg(host.querySelector('[data-role="mode"]'), setMode);
    new ResizeObserver(() => { resize(); if (!run) draw(); }).observe(cv);
    LHON.whileVisible(host, () => { resize(); if (LHON.reduceMotion) { drawStatic(); return; } run = true; last = performance.now(); requestAnimationFrame(loop); }, () => { run = false; });
    setMode('healthy');
  };
})();
