/* LHON field guide — three.js scenes: the visual pathway and the mitochondrion */
(function () {
  const S = (LHON.scenes = {});
  const T = window.THREE;

  function glowSprite() {
    const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d');
    const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.35, 'rgba(255,255,255,.55)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
    return new T.CanvasTexture(c);
  }
  function fresnelMat(color, opacity, power) {
    return new T.ShaderMaterial({
      uniforms: { uColor: { value: new T.Color(color) }, uOpacity: { value: opacity }, uPower: { value: power || 2.2 } },
      vertexShader: 'varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix*vec4(position,1.0); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }',
      fragmentShader: 'uniform vec3 uColor; uniform float uOpacity; uniform float uPower; varying vec3 vN; varying vec3 vV; void main(){ float f = pow(1.0-abs(dot(normalize(vN), normalize(vV))), uPower); gl_FragColor = vec4(uColor, (0.06+f)*uOpacity); }',
      transparent: true, depthWrite: false, side: T.DoubleSide, blending: T.AdditiveBlending,
    });
  }

  // Shared stage: renderer, camera, drag-to-rotate pivot, projected HTML labels, visibility-aware loop.
  S.stage = (host, opts = {}) => {
    host.classList.add('stage');
    if (!T) { host.innerHTML = '<p style="padding:20px;color:#c3c2b7">3D view unavailable (three.js did not load).</p>'; return null; }
    let renderer;
    try { renderer = new T.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' }); }
    catch (e) { host.insertAdjacentHTML('afterbegin', '<p style="padding:20px;color:#c3c2b7">3D view unavailable: this browser could not start WebGL.</p>'); return null; }
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    const cv = renderer.domElement; cv.style.touchAction = 'pan-y'; cv.style.cursor = 'grab';
    host.prepend(cv);
    const overlay = document.createElement('div'); overlay.className = 'overlay'; host.appendChild(overlay);
    const scene = new T.Scene(); scene.background = new T.Color(opts.bg || 0x050506);
    const camera = new T.PerspectiveCamera(opts.fov || 40, 1, 0.1, 100);
    camera.position.set(...(opts.cam || [0, 3, 7])); camera.lookAt(...(opts.look || [0, 0, 0]));
    const pivot = new T.Group(); scene.add(pivot);
    const labels = [];
    const st = { renderer, scene, camera, pivot, host, running: false, frame: null, t: 0, autoSpin: opts.autoSpin ?? 0.1, dragging: false };

    st.label = (pos, text) => {
      const el = document.createElement('div'); el.className = 'lbl3d'; el.textContent = text; overlay.appendChild(el);
      const l = { pos: pos.clone ? pos.clone() : new T.Vector3(...pos), el }; labels.push(l); return l;
    };
    const v = new T.Vector3();
    function placeLabels() {
      const w = host.clientWidth, h = host.clientHeight;
      for (const l of labels) {
        v.copy(l.pos); pivot.localToWorld(v); v.project(camera);
        const vis = v.z < 1 && Math.abs(v.x) < 1.05 && Math.abs(v.y) < 1.05;
        l.el.style.display = vis && !l.hidden ? '' : 'none';
        if (vis) { l.el.style.left = ((v.x + 1) / 2) * w + 'px'; l.el.style.top = ((1 - v.y) / 2) * h + 'px'; }
      }
    }
    function resize() {
      const w = host.clientWidth || 600, h = host.clientHeight || 400;
      renderer.setSize(w, h, false); camera.aspect = w / h;
      // keep the subject framed on narrow screens
      camera.fov = (opts.fov || 40) * (camera.aspect < 1 ? 1.5 : camera.aspect < 1.4 ? 1.2 : 1);
      // optional horizontal bias: shifts the subject sideways so page copy can sit beside it
      if (opts.biasX) {
        const wide = camera.aspect > 1.5;
        camera.setViewOffset(w, h, wide ? -w * opts.biasX : 0, 0, w, h);
      }
      camera.updateProjectionMatrix(); st.render();
    }
    st.render = () => { renderer.render(scene, camera); placeLabels(); };
    let last = 0;
    function loop(now) {
      if (!st.running) return;
      const dt = Math.min(0.05, (now - last) / 1000 || 0.016); last = now; st.t += dt;
      if (!st.dragging && st.autoSpin) {
        if (opts.sway) pivot.rotation.y = (opts.baseY || 0) + st.userY + Math.sin(st.t * st.autoSpin) * opts.sway;
        else pivot.rotation.y += dt * st.autoSpin;
      }
      st.frame && st.frame(st.t, dt);
      st.render();
      requestAnimationFrame(loop);
    }
    st.userY = 0;
    st.start = () => { if (st.running) return; if (LHON.reduceMotion) { st.settle(); return; } st.running = true; last = performance.now(); requestAnimationFrame(loop); };
    st.stop = () => { st.running = false; };
    // when motion is reduced, still let state changes settle and redraw
    st.settle = () => { if (!LHON.reduceMotion || !st.frame) return; for (let i = 0; i < 140; i++) st.frame(i * 0.03, 0.03); st.render(); };

    let px = 0, py = 0;
    cv.addEventListener('pointerdown', (e) => { st.dragging = true; px = e.clientX; py = e.clientY; cv.setPointerCapture(e.pointerId); cv.style.cursor = 'grabbing'; });
    cv.addEventListener('pointermove', (e) => {
      if (!st.dragging) return;
      const dx = e.clientX - px, dy = e.clientY - py; px = e.clientX; py = e.clientY;
      if (opts.sway) st.userY += dx * 0.006; else pivot.rotation.y += dx * 0.006;
      if (opts.sway) pivot.rotation.y = (opts.baseY || 0) + st.userY + Math.sin(st.t * st.autoSpin) * opts.sway;
      pivot.rotation.x = Math.max(-0.9, Math.min(0.9, pivot.rotation.x + dy * 0.004));
      if (!st.running) st.render();
    });
    const end = () => { st.dragging = false; cv.style.cursor = 'grab'; };
    cv.addEventListener('pointerup', end); cv.addEventListener('pointercancel', end);

    new ResizeObserver(resize).observe(host);
    LHON.whileVisible(host, st.start, st.stop);
    resize();
    return st;
  };

  /* ================= The visual pathway: two eyes -> optic nerves -> chiasm -> brain ================= */
  S.pathway = (host, opts = {}) => {
    const st = S.stage(host, { fov: 34, cam: [0, 7.4, 9.9], look: [0, 0, -1.2], sway: 0.28, autoSpin: 0.35, biasX: opts.biasX || 0 });
    if (!st) return null;
    const N = opts.fibers || 170, SAMPLES = 64, R = 0.72;
    const fibers = [];
    const rnd = mulberry(7);
    const up = new T.Vector3(0, 1, 0);

    for (const s of [-1, 1]) { // s = x side of the eye. The person faces the viewer, so s=-1 is their RIGHT eye.
      const E = new T.Vector3(1.55 * s, 0, 2.3);
      const dd = new T.Vector3(-s * Math.sin(0.27), 0, -Math.cos(0.27)); // optic disc: ~15 degrees nasal of the fovea
      // eye shell
      const eye = new T.Mesh(new T.SphereGeometry(R, 48, 32), fresnelMat(0x9fc4ff, 0.75, 2.4)); eye.position.copy(E); st.pivot.add(eye);
      const iris = new T.Mesh(new T.TorusGeometry(0.3, 0.035, 12, 48), new T.MeshBasicMaterial({ color: 0x4f86c6, transparent: true, opacity: 0.8 }));
      iris.position.set(E.x, E.y, E.z + R * 0.9); st.pivot.add(iris);
      const pupil = new T.Mesh(new T.CircleGeometry(0.2, 32), new T.MeshBasicMaterial({ color: 0x020203 })); pupil.position.set(E.x, E.y, E.z + R * 0.9); st.pivot.add(pupil);
      const cornea = new T.Mesh(new T.SphereGeometry(0.42, 32, 16, 0, Math.PI * 2, 0, 0.9), fresnelMat(0xbfe0ff, 0.6, 1.6));
      cornea.rotation.x = Math.PI / 2; cornea.position.set(E.x, E.y, E.z + R * 0.52); st.pivot.add(cornea);

      for (let i = 0; i < N; i++) {
        const theta = 1.4 * Math.pow(rnd(), 1.5), phi = rnd() * Math.PI * 2;
        const d = new T.Vector3(Math.sin(theta) * Math.cos(phi), Math.sin(theta) * Math.sin(phi), -Math.cos(theta));
        const nasal = d.x * s < 0; const pmb = theta < 0.27; const side2 = nasal ? -s : s;
        const a = rnd() * Math.PI * 2, rr = Math.sqrt(rnd()) * (pmb ? 0.07 : 0.14);
        const off = new T.Vector3(Math.cos(a) * rr, Math.sin(a) * rr, 0);
        const pts = [];
        for (const k of [0, 0.34, 0.67, 1]) { const q = d.clone().lerp(dd, k).normalize().multiplyScalar(R * 0.97).add(E); pts.push(q); }
        const D = pts[3];
        pts.push(D.clone().add(new T.Vector3(-0.1 * s, 0, -0.45)).add(off));
        pts.push(new T.Vector3(0.8 * s, 0, 0.55).add(off));
        pts.push(new T.Vector3(0.3 * s, 0, -0.25).add(off.clone().multiplyScalar(0.8)));
        pts.push(new T.Vector3(0.05 * side2, 0, -0.66).add(off.clone().multiplyScalar(0.6)));
        pts.push(new T.Vector3(0.48 * side2, 0, -1.2).add(off.clone().multiplyScalar(0.8)));
        pts.push(new T.Vector3(1.05 * side2, 0.05, -1.9).add(off));
        pts.push(new T.Vector3(1.5 * side2, 0.1, -2.5).add(off.clone().multiplyScalar(1.2)));
        pts.push(new T.Vector3(1.85 * side2 + off.x * 2, 0.16 + off.y * 2, -3.3));
        pts.push(new T.Vector3((0.35 + rnd() * 0.9) * side2, 0.2 + off.y * 4, -4.5 - rnd() * 0.25));
        const curve = new T.CatmullRomCurve3(pts, false, 'catmullrom', 0.5);
        const sp = curve.getPoints(SAMPLES - 1);
        const arr = new Float32Array(SAMPLES * 3); sp.forEach((p, k) => { arr[k * 3] = p.x; arr[k * 3 + 1] = p.y; arr[k * 3 + 2] = p.z; });
        fibers.push({ arr, pmb, s, theta, h: 1, target: 1, t: rnd(), speed: 0.1 + rnd() * 0.07 });
      }
    }
    // relay stations
    for (const s of [-1, 1]) {
      const lgn = new T.Mesh(new T.SphereGeometry(0.2, 24, 16), fresnelMat(0xffd28a, 0.9, 1.4)); lgn.position.set(1.5 * s, 0.1, -2.5); st.pivot.add(lgn);
    }
    const cortex = new T.Mesh(new T.TorusGeometry(1.45, 0.12, 12, 48, Math.PI), fresnelMat(0x9fc4ff, 0.5, 1.2));
    cortex.rotation.x = Math.PI / 2; cortex.rotation.z = Math.PI; cortex.position.set(0, 0.2, -4.35); cortex.scale.set(1, 0.45, 1); st.pivot.add(cortex);

    // fibres as one LineSegments object with vertex colours
    const F = fibers.length, segs = SAMPLES - 1;
    const pos = new Float32Array(F * segs * 6), col = new Float32Array(F * segs * 6);
    fibers.forEach((f, i) => {
      for (let k = 0; k < segs; k++) { const o = (i * segs + k) * 6; for (let j = 0; j < 6; j++) pos[o + j] = f.arr[k * 3 + j]; }
    });
    const lg = new T.BufferGeometry(); lg.setAttribute('position', new T.BufferAttribute(pos, 3)); lg.setAttribute('color', new T.BufferAttribute(col, 3));
    const lines = new T.LineSegments(lg, new T.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.5, blending: T.AdditiveBlending, depthWrite: false }));
    lines.frustumCulled = false; st.pivot.add(lines);
    const cPmb = new T.Color(0xf0a63a), cOther = new T.Color(0x3d86e8);
    function paint() {
      fibers.forEach((f, i) => {
        const c = f.pmb ? cPmb : cOther; const m = 0.05 + 0.95 * f.h;
        for (let k = 0; k < segs * 2; k++) { const o = (i * segs * 2 + k) * 3; col[o] = c.r * m; col[o + 1] = c.g * m; col[o + 2] = c.b * m; }
      });
      lg.attributes.color.needsUpdate = true;
    }
    // signal pulses
    const PP = 2, pp = new Float32Array(F * PP * 3), pc = new Float32Array(F * PP * 3);
    const pg = new T.BufferGeometry(); pg.setAttribute('position', new T.BufferAttribute(pp, 3)); pg.setAttribute('color', new T.BufferAttribute(pc, 3));
    const pulses = new T.Points(pg, new T.PointsMaterial({ size: 0.11, map: glowSprite(), vertexColors: true, transparent: true, blending: T.AdditiveBlending, depthWrite: false, sizeAttenuation: true }));
    pulses.frustumCulled = false; st.pivot.add(pulses);

    st.label([-1.55, 0.95, 2.3], 'Right eye'); st.label([1.55, 0.95, 2.3], 'Left eye');
    st.label([-0.95, 0.3, 0.75], 'Optic nerve'); st.label([0, 0.35, -0.66], 'Optic chiasm');
    st.label([1.75, 0.5, -2.5], 'Relay station (LGN)'); st.label([0, 0.75, -4.6], 'Visual cortex');

    const STATES = {
      healthy: () => 1,
      first: (f) => (f.s === -1 ? (f.pmb ? 0.03 : 0.9) : 1),
      both: (f) => (f.pmb ? 0.03 : 0.85),
      chronic: (f) => (f.theta < 0.5 ? 0 : 0.6),
    };
    st.setState = (name) => { fibers.forEach((f) => { f.target = (STATES[name] || STATES.healthy)(f); }); st.settle(); };
    let dirty = true;
    st.frame = (t, dt) => {
      for (let i = 0; i < F; i++) {
        const f = fibers[i];
        if (Math.abs(f.h - f.target) > 0.002) { f.h += (f.target - f.h) * Math.min(1, dt * 1.6); dirty = true; }
        f.t = (f.t + dt * f.speed) % 1;
        const c = f.pmb ? cPmb : cOther; const m = f.h * f.h;
        for (let p = 0; p < PP; p++) {
          const u = ((f.t + p / PP) % 1) * (SAMPLES - 1); const k = Math.floor(u), fr = u - k; const k2 = Math.min(SAMPLES - 1, k + 1); const o = (i * PP + p) * 3;
          pp[o] = f.arr[k * 3] + (f.arr[k2 * 3] - f.arr[k * 3]) * fr;
          pp[o + 1] = f.arr[k * 3 + 1] + (f.arr[k2 * 3 + 1] - f.arr[k * 3 + 1]) * fr;
          pp[o + 2] = f.arr[k * 3 + 2] + (f.arr[k2 * 3 + 2] - f.arr[k * 3 + 2]) * fr;
          pc[o] = c.r * m; pc[o + 1] = c.g * m; pc[o + 2] = c.b * m;
        }
      }
      pg.attributes.position.needsUpdate = true; pg.attributes.color.needsUpdate = true;
      if (dirty) { paint(); dirty = false; }
    };
    paint();
    return st;
  };

  /* ================= The mitochondrion ================= */
  S.mito = (host) => {
    const st = S.stage(host, { fov: 34, cam: [0, 1.5, 6.4], look: [0, 0, 0], autoSpin: 0.12 });
    if (!st) return null;
    st.pivot.rotation.x = 0.25;
    st.scene.add(new T.AmbientLight(0xffffff, 0.55));
    const dl = new T.DirectionalLight(0xffffff, 1.4); dl.position.set(2, 4, 5); st.scene.add(dl);
    const core = new T.PointLight(0xffb060, 6, 6); st.pivot.add(core);

    const outer = new T.Mesh(new T.CapsuleGeometry(1, 2.4, 16, 48), fresnelMat(0x6fb6ff, 1.0, 2.0)); outer.rotation.z = Math.PI / 2; st.pivot.add(outer);
    const inner = new T.Mesh(new T.CapsuleGeometry(0.9, 2.4, 16, 48), fresnelMat(0xffa24a, 0.55, 2.6)); inner.rotation.z = Math.PI / 2; st.pivot.add(inner);

    // cristae: folded sheets of inner membrane, alternating from top and bottom
    const cristaMat = new T.MeshStandardMaterial({ color: 0xd98b3a, emissive: 0x6b3209, emissiveIntensity: 0.5, roughness: 0.6, metalness: 0.0, transparent: true, opacity: 0.62, side: T.DoubleSide });
    const cristae = [];
    const xs = []; for (let x = -1.85; x <= 1.86; x += 0.21) xs.push(x);
    xs.forEach((x, i) => {
      const over = Math.max(0, Math.abs(x) - 1.15); const rad = Math.sqrt(Math.max(0.04, 0.81 - over * over));
      const dir = i % 2 ? 1 : -1;
      // a crista is a flattened fold reaching in from one side, not a solid disc
      const m = new T.Mesh(new T.SphereGeometry(1, 24, 16, 0, Math.PI * 2, dir > 0 ? 0 : Math.PI / 2.1, Math.PI / 1.9), cristaMat);
      m.scale.set(0.022, rad * 0.95, rad * 0.9); m.position.set(x, dir * rad * 0.06, 0); m.rotation.z = dir * 0.1;
      st.pivot.add(m); cristae.push({ x, y: m.position.y, r: rad });
    });
    // mtDNA rings
    const dnaMat = new T.MeshBasicMaterial({ color: 0x55e0d0 }); const rings = [];
    [[-0.9, 0.35, 0.45], [0.2, -0.4, -0.5], [0.9, 0.3, 0.35], [-0.2, 0.45, -0.3], [1.3, -0.2, 0.1]].forEach((p) => {
      const r = new T.Mesh(new T.TorusGeometry(0.1, 0.014, 8, 32), dnaMat); r.position.set(...p); r.rotation.set(p[0] * 2, p[1] * 3, p[2]); st.pivot.add(r); rings.push(r);
    });

    // particles: ATP (gold) and ROS (red)
    const NP = 900, ppos = new Float32Array(NP * 3), pcol = new Float32Array(NP * 3); const parts = [];
    for (let i = 0; i < NP; i++) parts.push({ life: 0, max: 1, vx: 0, vy: 0, vz: 0, ros: false });
    const pg = new T.BufferGeometry(); pg.setAttribute('position', new T.BufferAttribute(ppos, 3)); pg.setAttribute('color', new T.BufferAttribute(pcol, 3));
    const cloud = new T.Points(pg, new T.PointsMaterial({ size: 0.17, map: glowSprite(), vertexColors: true, transparent: true, blending: T.AdditiveBlending, depthWrite: false }));
    cloud.frustumCulled = false; st.pivot.add(cloud);
    const atpC = new T.Color(0xffd35a), rosC = new T.Color(0xff3b3b);
    let atpRate = 1, rosRate = 0.04, atpTarget = 1, rosTarget = 0.04;
    function spawn(p, i) {
      const c = cristae[(Math.random() * cristae.length) | 0]; const a = Math.random() * Math.PI * 2, rr = Math.sqrt(Math.random()) * c.r * 0.7;
      const o = i * 3; ppos[o] = c.x + (Math.random() - 0.5) * 0.1; ppos[o + 1] = c.y + Math.sin(a) * rr * 0.8; ppos[o + 2] = Math.cos(a) * rr;
      p.ros = Math.random() < rosRate / (rosRate + atpRate * 0.9);
      const sp = p.ros ? 0.5 : 0.28; p.vx = (Math.random() - 0.5) * sp; p.vy = (Math.random() - 0.5) * sp + (p.ros ? 0 : 0.12); p.vz = (Math.random() - 0.5) * sp;
      p.max = p.life = 1.9 + Math.random() * 2.0;
    }
    st.label([0, 1.22, 0], 'Outer membrane'); st.label([-0.55, 0.78, 0.5], 'Cristae — folded inner membrane');
    st.label([0.9, 0.3, 0.5], 'mtDNA ring'); st.label([1.98, -0.45, 0.8], 'Matrix');
    st.setState = (name) => {
      if (name === 'lhon') { atpTarget = 0.5; rosTarget = 0.55; cristaMat.emissive.setHex(0x5a1f08); core.color.setHex(0xff7a50); }
      else { atpTarget = 1; rosTarget = 0.04; cristaMat.emissive.setHex(0x7a3a08); core.color.setHex(0xffb060); }
      st.settle();
    };
    st.frame = (t, dt) => {
      atpRate += (atpTarget - atpRate) * Math.min(1, dt * 2); rosRate += (rosTarget - rosRate) * Math.min(1, dt * 2);
      core.intensity = 3 + 4 * atpRate + Math.sin(t * 3) * 0.3;
      rings.forEach((r, i) => { r.rotation.x += dt * (0.4 + i * 0.1); r.rotation.y += dt * 0.3; });
      const budget = (atpRate * 0.9 + rosRate) * NP * dt * 1.5; let toSpawn = budget + (st._carry || 0);
      for (let i = 0; i < NP; i++) {
        const p = parts[i]; const o = i * 3;
        if (p.life <= 0) { if (toSpawn >= 1) { spawn(p, i); toSpawn -= 1; } else { pcol[o] = pcol[o + 1] = pcol[o + 2] = 0; continue; } }
        p.life -= dt; ppos[o] += p.vx * dt; ppos[o + 1] += p.vy * dt; ppos[o + 2] += p.vz * dt;
        if (p.ros) { ppos[o] += (Math.random() - 0.5) * 0.03; ppos[o + 1] += (Math.random() - 0.5) * 0.03; }
        const a = Math.sin(Math.PI * Math.max(0, p.life / p.max)); const c = p.ros ? rosC : atpC;
        pcol[o] = c.r * a; pcol[o + 1] = c.g * a; pcol[o + 2] = c.b * a;
      }
      st._carry = Math.min(8, toSpawn);
      pg.attributes.position.needsUpdate = true; pg.attributes.color.needsUpdate = true;
    };
    return st;
  };

  function mulberry(a) { return function () { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  LHON.rng = mulberry;
})();
