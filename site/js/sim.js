/* LHON field guide — vision simulator (WebGL shader over procedurally drawn scenes) */
(function () {
  const T = window.THREE;
  const W = 1600, H = 1000;
  const Sim = (LHON.sim = {});

  /* ---------------- scenes (drawn in code so the page is fully self-contained) ---------------- */
  function rr(g, x, y, w, h, r) { g.beginPath(); g.roundRect(x, y, w, h, r); }
  const scenes = {
    reading: {
      label: 'Reading', degW: 35,
      hint: 'A printed page at reading distance. Look at a word (put the pointer on it) and it vanishes; look just above or below it and it returns, blurrier. Bigger print survives longer — which is why magnification works.',
      draw(g) {
        g.fillStyle = '#f3efe4'; g.fillRect(0, 0, W, H);
        g.fillStyle = '#e4dfd0'; g.fillRect(0, 0, 150, H);
        const lines = [
          [84, 'bold', 'Headline', ['How stars are born']],
          [52, '600', '24-pt large print', ['Cold clouds of gas and dust drift', 'between the stars for millions of years.']],
          [39, '500', '18-pt large print', ['When part of a cloud grows dense enough, gravity takes over', 'and pulls the gas inward faster and faster.']],
          [26, '400', '12-pt book print', ['As the cloud collapses it spins and flattens into a disk. The center heats up until hydrogen nuclei begin to fuse,', 'releasing energy that pushes back against gravity. A new star switches on, and the leftover disk becomes planets.']],
          [19, '400', '9-pt fine print', ['Most stars form in clusters, so the Sun probably had hundreds of siblings that have since drifted apart across the galaxy. Astronomers search for them by matching chemical fingerprints.', 'Text this small is typical of medicine labels, receipts, footnotes and the settings screens of many phones — the first things to become unreadable when central vision is reduced.']],
        ];
        let y = 150;
        for (const [size, weight, tag, rows] of lines) {
          g.fillStyle = '#8a8474'; g.font = '500 17px system-ui, sans-serif'; g.textAlign = 'right'; g.fillText(tag, 132, y - size * 0.25, 120);
          g.fillStyle = '#1b1a17'; g.textAlign = 'left'; g.font = `${weight} ${size}px Georgia, "Times New Roman", serif`;
          for (const r of rows) { g.fillText(r, 190, y, W - 240); y += size * 1.45; }
          y += size * 0.55 + 22;
        }
        g.fillStyle = '#8a8474'; g.font = '500 17px system-ui, sans-serif'; g.textAlign = 'center'; g.fillText('— 47 —', W / 2 + 70, H - 40);
      },
    },
    faces: {
      label: 'Faces', degW: 42,
      hint: 'Three people a few steps away. The face you look at is the one you lose: expression, eye contact and identity fall inside the blur, while hair, build, clothing and voice remain. Many people with LHON say this is the hardest social change.',
      draw(g) {
        const wall = g.createLinearGradient(0, 0, 0, H); wall.addColorStop(0, '#d9c9b0'); wall.addColorStop(1, '#bca98c'); g.fillStyle = wall; g.fillRect(0, 0, W, H);
        g.fillStyle = '#7fb3d9'; rr(g, 90, 80, 300, 360, 10); g.fill(); g.strokeStyle = '#f4efe6'; g.lineWidth = 14; g.stroke();
        g.beginPath(); g.moveTo(240, 80); g.lineTo(240, 440); g.moveTo(90, 260); g.lineTo(390, 260); g.stroke();
        g.fillStyle = '#2f5d50'; rr(g, 1210, 110, 290, 210, 8); g.fill();
        g.fillStyle = '#f2e9c9'; g.font = 'bold 44px system-ui, sans-serif'; g.textAlign = 'center'; g.fillText('WELCOME', 1355, 205); g.font = '500 26px system-ui, sans-serif'; g.fillText('Class of 2027', 1355, 255);
        g.fillStyle = '#6b5843'; g.fillRect(0, 860, W, 140);
        const ppl = [
          { x: 400, skin: '#f0c7a0', hair: '#3a2718', style: 'short', expr: 'smile', shirt: '#2a78d6', name: 'SAM' },
          { x: 800, skin: '#a8734f', hair: '#16110d', style: 'curly', expr: 'surprised', shirt: '#eb6834', name: 'MAYA' },
          { x: 1200, skin: '#e2b48c', hair: '#b5651d', style: 'long', expr: 'flat', shirt: '#1baf7a', name: 'ALEX' },
        ];
        for (const p of ppl) {
          const y = 470, r = 125;
          g.fillStyle = p.shirt; rr(g, p.x - 215, y + 190, 430, 420, 90); g.fill();
          g.fillStyle = p.skin; g.fillRect(p.x - 42, y + 90, 84, 130);
          if (p.style === 'long') { g.fillStyle = p.hair; rr(g, p.x - 150, y - 130, 300, 400, 120); g.fill(); }
          g.fillStyle = p.skin; g.beginPath(); g.ellipse(p.x, y, r, r * 1.2, 0, 0, 7); g.fill();
          g.fillStyle = p.hair;
          if (p.style === 'curly') { for (let a = -3.3; a < 0.2; a += 0.28) { g.beginPath(); g.arc(p.x + Math.cos(a) * 118, y - 20 + Math.sin(a) * 135, 48, 0, 7); g.fill(); } }
          else { g.beginPath(); g.ellipse(p.x, y - 62, r + 6, r * 0.82, 0, Math.PI, 0); g.fill(); g.fillRect(p.x - r - 6, y - 70, 26, 60); g.fillRect(p.x + r - 20, y - 70, 26, 60); }
          for (const s of [-1, 1]) { // eyes and brows
            g.fillStyle = '#fff'; g.beginPath(); g.ellipse(p.x + s * 48, y - 10, 24, p.expr === 'surprised' ? 21 : 14, 0, 0, 7); g.fill();
            g.fillStyle = '#3b2a1a'; g.beginPath(); g.arc(p.x + s * 48, y - 10, 10, 0, 7); g.fill();
            g.strokeStyle = p.hair; g.lineWidth = 8; g.lineCap = 'round'; g.beginPath();
            const by = y - (p.expr === 'surprised' ? 58 : 42);
            g.moveTo(p.x + s * 22, by + (p.expr === 'flat' ? 0 : 4)); g.lineTo(p.x + s * 76, by + (p.expr === 'smile' ? -4 : 0)); g.stroke();
          }
          g.strokeStyle = 'rgba(0,0,0,.25)'; g.lineWidth = 5; g.beginPath(); g.moveTo(p.x, y + 5); g.lineTo(p.x - 10, y + 42); g.lineTo(p.x + 8, y + 44); g.stroke();
          g.strokeStyle = '#7a2e2e'; g.fillStyle = '#7a2e2e'; g.lineWidth = 9; g.beginPath();
          if (p.expr === 'smile') { g.arc(p.x, y + 52, 52, 0.15 * Math.PI, 0.85 * Math.PI); g.stroke(); }
          else if (p.expr === 'surprised') { g.ellipse(p.x, y + 88, 20, 27, 0, 0, 7); g.fill(); }
          else { g.moveTo(p.x - 38, y + 88); g.lineTo(p.x + 38, y + 88); g.stroke(); }
          g.fillStyle = '#fff'; rr(g, p.x - 62, y + 300, 124, 50, 8); g.fill();
          g.fillStyle = '#222'; g.font = 'bold 28px system-ui, sans-serif'; g.textAlign = 'center'; g.fillText(p.name, p.x, y + 335);
        }
      },
    },
    street: {
      label: 'Crossing a street', degW: 60,
      hint: 'Large shapes, movement and layout come through side vision; the walk signal, the bus number and the street sign do not. This is why orientation-and-mobility training focuses on traffic sound, patterns and timing rather than on reading signals.',
      draw(g) {
        const sky = g.createLinearGradient(0, 0, 0, 520); sky.addColorStop(0, '#6fa8dc'); sky.addColorStop(1, '#cfe3f5'); g.fillStyle = sky; g.fillRect(0, 0, W, 520);
        const b = [[0, 150, 270, '#8d99a6'], [270, 230, 220, '#b7a38f'], [490, 110, 250, '#7f8c99'], [960, 190, 260, '#a9968a'], [1220, 90, 380, '#8794a1']];
        for (const [x, y, w, c] of b) { g.fillStyle = c; g.fillRect(x, y, w, 520 - y); g.fillStyle = 'rgba(255,255,255,.35)'; for (let wy = y + 28; wy < 470; wy += 58) for (let wx = x + 22; wx < x + w - 40; wx += 56) g.fillRect(wx, wy, 30, 34); }
        g.fillStyle = '#9a9a96'; g.fillRect(0, 520, W, 60);
        g.fillStyle = '#3c3d40'; g.fillRect(0, 580, W, 420);
        g.fillStyle = '#f2f2ee'; for (let i = 0; i < 9; i++) { const x = 330 + i * 110; g.beginPath(); g.moveTo(x, 620); g.lineTo(x + 62, 620); g.lineTo(x + 62 + (i - 4) * 26, 990); g.lineTo(x - 30 + (i - 4) * 26, 990); g.fill(); }
        // bus
        g.fillStyle = '#d83a34'; rr(g, 30, 300, 560, 270, 26); g.fill();
        g.fillStyle = '#1d2733'; rr(g, 60, 335, 500, 110, 10); g.fill();
        g.fillStyle = '#111'; rr(g, 190, 308, 250, 44, 6); g.fill();
        g.fillStyle = '#ffb21a'; g.font = 'bold 32px system-ui, sans-serif'; g.textAlign = 'center'; g.fillText('42  DOWNTOWN', 315, 341);
        g.fillStyle = '#16171a'; for (const x of [150, 470]) { g.beginPath(); g.arc(x, 575, 46, 0, 7); g.fill(); }
        // car
        g.fillStyle = '#2f6fb5'; rr(g, 1010, 470, 360, 100, 30); g.fill(); rr(g, 1080, 410, 220, 90, 30); g.fill();
        g.fillStyle = '#cfe3f5'; rr(g, 1100, 425, 180, 50, 14); g.fill();
        g.fillStyle = '#16171a'; for (const x of [1090, 1295]) { g.beginPath(); g.arc(x, 572, 34, 0, 7); g.fill(); }
        // signal pole with pedestrian signal and street sign
        g.fillStyle = '#2b2b2b'; g.fillRect(820, 130, 18, 460);
        g.fillStyle = '#1e6b3a'; rr(g, 700, 120, 260, 54, 6); g.fill(); g.fillStyle = '#fff'; g.font = 'bold 34px system-ui, sans-serif'; g.fillText('MAPLE AVE', 830, 159);
        g.fillStyle = '#151515'; rr(g, 760, 210, 138, 150, 12); g.fill();
        g.fillStyle = '#ff7a1a'; g.font = 'bold 40px system-ui, sans-serif'; g.fillText("DON'T", 829, 272); g.fillText('WALK', 829, 322);
        g.fillStyle = '#151515'; rr(g, 792, 380, 74, 28, 6); g.fill(); g.fillStyle = '#ffd21a'; g.font = 'bold 22px system-ui, sans-serif'; g.fillText('0:07', 829, 402);
        // pedestrians
        for (const [x, c] of [[1450, '#3a2f5b'], [1520, '#7a4b2a']]) { g.fillStyle = c; rr(g, x - 26, 400, 52, 150, 20); g.fill(); g.beginPath(); g.arc(x, 372, 26, 0, 7); g.fill(); }
      },
    },
    classroom: {
      label: 'Classroom', degW: 60,
      hint: 'From a desk, the board is too small and too far for side vision. Typical supports: the teacher shares notes digitally, the student uses a tablet or laptop to zoom, a camera magnifier for the board, extended time, and audio or large-format materials.',
      draw(g) {
        g.fillStyle = '#e7dfcf'; g.fillRect(0, 0, W, H);
        g.fillStyle = '#c9b48f'; g.fillRect(0, 700, W, 300);
        g.fillStyle = '#fbfbf8'; rr(g, 210, 120, 1060, 460, 8); g.fill(); g.strokeStyle = '#9aa0a6'; g.lineWidth = 12; g.stroke();
        g.fillStyle = '#1c3d7a'; g.textAlign = 'left'; g.font = '600 58px "Marker Felt", "Comic Sans MS", system-ui, sans-serif'; g.fillText('Solve for x:', 260, 210);
        g.font = '600 72px "Marker Felt", "Comic Sans MS", system-ui, sans-serif'; g.fillText('3x + 7 = 22', 300, 310);
        g.fillStyle = '#b22a2a'; g.font = '600 46px "Marker Felt", "Comic Sans MS", system-ui, sans-serif'; g.fillText('3x = 15   →   x = 5', 300, 390);
        g.fillStyle = '#1c3d7a'; g.font = '500 30px "Marker Felt", "Comic Sans MS", system-ui, sans-serif'; g.fillText('Homework: p. 112  #1–15, due Friday', 260, 520);
        g.strokeStyle = '#1e7a45'; g.lineWidth = 5; g.beginPath(); g.moveTo(900, 500); g.lineTo(900, 180); g.moveTo(880, 480); g.lineTo(1220, 480); g.stroke();
        g.strokeStyle = '#b22a2a'; g.beginPath(); g.moveTo(900, 480); g.quadraticCurveTo(1060, 470, 1200, 210); g.stroke();
        g.fillStyle = '#fff'; g.beginPath(); g.arc(1420, 190, 78, 0, 7); g.fill(); g.strokeStyle = '#333'; g.lineWidth = 9; g.stroke();
        g.lineWidth = 7; g.beginPath(); g.moveTo(1420, 190); g.lineTo(1420, 135); g.moveTo(1420, 190); g.lineTo(1462, 208); g.stroke();
        g.fillStyle = '#333'; g.font = 'bold 22px system-ui, sans-serif'; g.textAlign = 'center'; for (const [n, a] of [[12, -90], [3, 0], [6, 90], [9, 180]]) g.fillText(n, 1420 + Math.cos(a * Math.PI / 180) * 58, 198 + Math.sin(a * Math.PI / 180) * 58);
        // teacher
        g.fillStyle = '#5a3d7a'; rr(g, 60, 360, 130, 380, 40); g.fill(); g.fillStyle = '#d9a67e'; g.beginPath(); g.arc(125, 320, 52, 0, 7); g.fill(); g.fillStyle = '#3a2718'; g.beginPath(); g.arc(125, 302, 54, Math.PI, 0); g.fill();
        // students (backs of heads) and desks
        for (const [x, c, hc] of [[330, '#2a78d6', '#3a2718'], [690, '#e9a23b', '#16110d'], [1050, '#1baf7a', '#8a5a2b'], [1390, '#d55181', '#2b2b2b']]) {
          g.fillStyle = '#8a6d4a'; rr(g, x - 170, 880, 340, 120, 10); g.fill();
          g.fillStyle = c; rr(g, x - 120, 780, 240, 220, 70); g.fill();
          g.fillStyle = hc; g.beginPath(); g.arc(x, 730, 78, 0, 7); g.fill();
        }
      },
    },
  };
  Sim.scenes = scenes;

  /* ---------------- shader ---------------- */
  const FRAG = `
    precision highp float;
    uniform sampler2D tScene; uniform vec2 uGaze; uniform vec2 uTexel; uniform float uAspect; uniform float uDegW; uniform float uPxPerDeg;
    uniform vec2 uSev; uniform float uView; uniform float uSplit; uniform float uPeriph; uniform float uStyle; uniform float uFen; uniform float uRing;
    varying vec2 vUv;
    float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
    float noise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
      return mix(mix(hash(i), hash(i+vec2(1,0)), f.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y); }
    vec3 blur(vec2 uv, float lod){
      if (lod < 0.05) return textureLod(tScene, uv, 0.0).rgb;
      vec2 r = exp2(lod) * 0.7 * uTexel; vec3 c = textureLod(tScene, uv, lod).rgb * 2.0;
      for (int i = 0; i < 8; i++){ float a = float(i) * 0.7853982 + 0.4; c += textureLod(tScene, uv + r * vec2(cos(a), sin(a)), lod).rgb; }
      return c / 10.0;
    }
    float radiusDeg(float s){ return 13.0 * pow(s, 0.8); }
    // fraction of vision lost at offset d (degrees from fixation) for one eye; side=+1: blind spot to the right (right eye)
    float eyeLoss(vec2 d, float s, float side){
      if (s <= 0.001) return 0.0;
      float rad = radiusDeg(s); vec2 p = d;
      float stretch = mix(1.0, 2.0, smoothstep(0.15, 0.7, s));      // caecocentral: reaches toward the blind spot
      if (p.x * side > 0.0) p.x /= stretch;
      p.y *= 1.12;
      float dist = length(p) + (noise(d * 0.3 + side * 9.0) - 0.5) * rad * 0.4;
      float soft = mix(0.75, 0.3, s) * rad;
      float loss = mix(0.6, 1.0, s) * (1.0 - smoothstep(rad - soft, rad + soft * 0.35, dist));
      float islands = smoothstep(0.52, 0.66, noise(d * 0.55 + 31.0));   // fenestrations: small windows that can reopen
      return loss * (1.0 - uFen * islands);
    }
    float lum(vec3 c){ return dot(c, vec3(0.299, 0.587, 0.114)); }
    void main(){
      vec2 d = (vUv - uGaze) * vec2(uDegW, uDegW / uAspect);
      vec3 normal = textureLod(tScene, vUv, 0.0).rgb;
      float lL = eyeLoss(d, uSev.x, -1.0), lR = eyeLoss(d, uSev.y, 1.0);
      float cL = eyeLoss(vec2(0.0), uSev.x, -1.0), cR = eyeLoss(vec2(0.0), uSev.y, 1.0);
      float loss, sev, cen;
      if (uView < 0.5) { loss = min(lL, lR); sev = min(uSev.x, uSev.y); cen = min(cL, cR); }
      else if (uView < 1.5) { loss = lL; sev = uSev.x; cen = cL; }
      else { loss = lR; sev = uSev.y; cen = cR; }
      // What the retina can still resolve at this point.
      // MAR (minimum angle of resolution, arcmin) = 1 at a healthy fovea and grows with
      // eccentricity; disease adds a general depression on top. 60 arcmin = 1 degree.
      float ecc = length(d);
      float marEcc = uPeriph > 0.5 ? 1.0 + ecc / 2.5 : 1.0;   // normal peripheral falloff, optional
      float mar = marEcc * (1.0 + 1.5 * sev);                 // plus disease-related depression
      float detailPx = mar / 60.0 * uPxPerDeg;                // size of the finest resolvable feature
      float lodP = log2(max(1.0, detailPx / 1.5));
      vec3 c = blur(vUv, lodP);
      // colour: red-green discrimination and saturation fade
      float rg = sev * 0.85; float l0 = lum(c); float avg = 0.5 * (c.r + c.g);
      c.r = mix(c.r, avg, rg); c.g = mix(c.g, avg, rg); c += (l0 - lum(c));
      c = mix(c, vec3(lum(c)), sev * 0.3);
      vec3 far = textureLod(tScene, vUv, 6.5).rgb;
      c = mix(c, far, sev * 0.22);                                   // contrast loss
      vec3 fog = mix(vec3(lum(far)), far, 0.2); fog = mix(fog, vec3(0.52), 0.45) + (noise(vUv * 420.0) - 0.5) * 0.035;
      if (uStyle > 0.5) fog = vec3(0.03);
      c = mix(c, fog, loss);
      float ring = uRing * (1.0 - smoothstep(0.0, 0.09, abs(ecc - 0.45)));
      c = mix(c, vec3(1.0, 0.85, 0.3), ring * 0.9);
      if (uSplit > 0.0 && vUv.x < uSplit) c = normal;
      if (uSplit > 0.0) c = mix(c, vec3(1.0), 1.0 - smoothstep(0.0, 0.0018, abs(vUv.x - uSplit)));
      gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
    }`;
  const VERT = 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }';

  const SNELLEN = [20, 25, 30, 40, 50, 60, 80, 100, 125, 160, 200, 250, 320, 400, 500, 640, 800];
  // Acuity estimate: with the centre lost, the best available vision comes from just outside
  // the scotoma edge, so MAR is driven by that eccentricity plus the general depression.
  Sim.estimate = (s) => {
    if (s <= 0.001) return { den: 20, rad: 0 };
    const rad = 13 * Math.pow(s, 0.8); const mar = (1 + rad / 2.5) * (1 + 1.5 * s); const raw = 20 * mar;
    const den = SNELLEN.reduce((a, b) => (Math.abs(b - raw) < Math.abs(a - raw) ? b : a));
    return { den, rad };
  };

  // Stage presets: [leftEye, rightEye, fenestration]. Timings are typical, not a schedule.
  Sim.presets = [
    { id: 'before', label: 'Before', sev: [0, 0, 0], note: 'Typical vision. Both eyes share the work, each covering the other\'s natural blind spot.' },
    { id: 'wk1', label: 'First weeks', sev: [0, 0.45, 0], note: 'One eye has started: a painless central blur and washed-out colour in that eye only. With both eyes open the healthy eye hides it — many people only notice when they happen to cover one eye. Switch the view to “Right eye only”.' },
    { id: 'wk6', label: 'Weeks later', sev: [0, 0.9, 0], note: 'The first eye has deepened to a dense central blind area. Two-eyed vision still looks deceptively good because the other eye is doing everything.' },
    { id: 'second', label: 'Second eye', sev: [0.5, 1, 0], note: 'The second eye usually follows within weeks to a few months. Now the two central blurs overlap and everyday vision changes sharply.' },
    { id: 'nadir', label: 'Lowest point', sev: [1, 1, 0], note: 'Both eyes at their lowest. Central detail — print, faces, signs — is gone; side vision, shapes, movement and light remain. Vision almost never goes fully dark.' },
    { id: 'partial', label: 'Partial recovery', sev: [0.62, 0.7, 1], note: 'Some people later regain islands of vision inside the blind area (“fenestrations”) or a smaller, thinner scotoma, months to years afterwards. How often depends strongly on the mutation and the age at onset — see the numbers section.' },
  ];

  Sim.mount = (host) => {
    host.innerHTML = `
      <div class="subtabs" data-role="scenes" style="margin-top:0">${Object.entries(scenes).map(([k, s], i) => `<button data-scene="${k}" aria-selected="${i === 0}">${s.label}</button>`).join('')}<button data-scene="photo" aria-selected="false">Your own photo…</button><input type="file" accept="image/*" hidden></div>
      <div class="cols" style="grid-template-columns:minmax(0,2.1fr) minmax(250px,1fr);gap:18px">
        <div>
          <div class="stage" style="aspect-ratio:16/10" tabindex="0" aria-label="Vision simulation. Move the pointer, or use arrow keys, to move the point of gaze."></div>
          <p class="small muted" data-role="hint" style="margin:.7rem 0 0"></p>
        </div>
        <div class="card" style="display:grid;gap:14px;align-content:start">
          <div><div class="tag" style="margin-bottom:6px">Stage of LHON</div><div class="seg" data-role="presets">${Sim.presets.map((p, i) => `<button data-v="${p.id}" aria-pressed="${i === 4}">${p.label}</button>`).join('')}</div>
          <p class="small sec" data-role="note" style="margin:.6rem 0 0"></p></div>
          <div><div class="tag" style="margin-bottom:6px">Looking with</div><div class="seg" data-role="view"><button data-v="0" aria-pressed="true">Both eyes</button><button data-v="2">Right eye only</button><button data-v="1">Left eye only</button></div></div>
          <label class="ctl">Right eye — severity <output data-o="r"></output><input type="range" min="0" max="100" data-s="r"></label>
          <label class="ctl">Left eye — severity <output data-o="l"></output><input type="range" min="0" max="100" data-s="l"></label>
          <label class="ctl">Compare: reveal typical vision from the left <input type="range" min="0" max="100" value="0" data-s="split"></label>
          <label class="chk"><input type="checkbox" data-c="periph" checked><span>Show what side vision can actually resolve (blurrier the further from where you look)</span></label>
          <label class="chk"><input type="checkbox" data-c="dark"><span>Draw the blind area dark to see its outline (real scotomas are usually a grey or blurry smudge, not black)</span></label>
          <div class="tiles" style="grid-template-columns:1fr 1fr;margin:0;gap:10px">
            <div class="tile" style="padding:10px 12px"><div class="lab">Approx. acuity</div><div class="val" style="font-size:1.45rem" data-o="acuity"></div><div class="note" data-o="acnote"></div></div>
            <div class="tile" style="padding:10px 12px"><div class="lab">Blind area width</div><div class="val" style="font-size:1.45rem" data-o="width"></div><div class="note">of visual angle, centred on gaze</div></div>
          </div>
        </div>
      </div>`;
    const stage = host.querySelector('.stage'); const q = (s) => host.querySelector(s);
    if (!T) { stage.innerHTML = '<p style="padding:20px;color:#c3c2b7">Simulator unavailable (three.js did not load).</p>'; return; }
    let renderer;
    try { renderer = new T.WebGLRenderer({ antialias: false }); } catch (e) { stage.innerHTML = '<p style="padding:20px;color:#c3c2b7">Simulator unavailable: this browser could not start WebGL.</p>'; return; }
    renderer.setPixelRatio(Math.min(2, devicePixelRatio || 1));
    stage.appendChild(renderer.domElement); renderer.domElement.style.cursor = 'crosshair'; renderer.domElement.style.touchAction = 'none';
    const cap = document.createElement('div'); cap.className = 'hud'; cap.innerHTML = '<span class="cap">Keep your eyes on the small gold ring and move it around — the blur travels with your gaze, exactly as a scotoma does.</span>'; stage.appendChild(cap);

    const sceneCv = document.createElement('canvas'); sceneCv.width = W; sceneCv.height = H; const g = sceneCv.getContext('2d');
    const tex = new T.CanvasTexture(sceneCv); tex.generateMipmaps = true; tex.minFilter = T.LinearMipmapLinearFilter; tex.magFilter = T.LinearFilter;
    const U = {
      tScene: { value: tex }, uGaze: { value: new T.Vector2(0.5, 0.5) }, uTexel: { value: new T.Vector2(1 / W, 1 / H) }, uAspect: { value: W / H },
      uDegW: { value: 35 }, uPxPerDeg: { value: W / 35 }, uSev: { value: new T.Vector2(1, 1) }, uView: { value: 0 }, uSplit: { value: 0 },
      uPeriph: { value: 1 }, uStyle: { value: 0 }, uFen: { value: 0 }, uRing: { value: 1 },
    };
    const scene3 = new T.Scene(); const cam = new T.Camera();
    scene3.add(new T.Mesh(new T.PlaneGeometry(2, 2), new T.ShaderMaterial({ uniforms: U, vertexShader: VERT, fragmentShader: FRAG, depthTest: false })));
    let raf = 0; const render = () => { if (raf) return; raf = requestAnimationFrame(() => { raf = 0; renderer.render(scene3, cam); }); };
    const resize = () => { renderer.setSize(stage.clientWidth, stage.clientHeight, false); render(); };
    new ResizeObserver(resize).observe(stage);

    function setScene(key, img) {
      const s = scenes[key] || { degW: 50, hint: 'Your own photo, assumed to fill about 50° of your view (roughly a laptop screen at arm\'s length). Nothing is uploaded — the image stays in this browser tab.' };
      g.save(); g.clearRect(0, 0, W, H);
      if (img) { const sc = Math.max(W / img.width, H / img.height); const w = img.width * sc, h = img.height * sc; g.fillStyle = '#000'; g.fillRect(0, 0, W, H); g.drawImage(img, (W - w) / 2, (H - h) / 2, w, h); } else s.draw(g);
      g.restore(); tex.needsUpdate = true;
      U.uDegW.value = s.degW; U.uPxPerDeg.value = W / s.degW; q('[data-role="hint"]').textContent = s.hint;
      host.querySelectorAll('[data-scene]').forEach((b) => b.setAttribute('aria-selected', b.dataset.scene === key)); readout(); render();
    }
    const sev = { l: 1, r: 1 };
    function readout() {
      const v = U.uView.value; const s = v === 0 ? Math.min(sev.l, sev.r) : v === 1 ? sev.l : sev.r;
      const e = Sim.estimate(s);
      q('[data-o="acuity"]').textContent = e.den >= 800 ? '≤ 20/800' : '20/' + e.den;
      q('[data-o="acnote"]').textContent = e.den >= 200 ? 'at or beyond the legal-blindness line (20/200)' : e.den > 40 ? 'below typical driving standards' : 'near typical';
      q('[data-o="width"]').textContent = e.rad ? '≈ ' + Math.round(e.rad * 2.6) + '°' : '—';
      q('[data-o="r"]').textContent = Math.round(sev.r * 100) + '%'; q('[data-o="l"]').textContent = Math.round(sev.l * 100) + '%';
      q('[data-s="r"]').value = sev.r * 100; q('[data-s="l"]').value = sev.l * 100;
    }
    function setPreset(id) {
      const p = Sim.presets.find((x) => x.id === id); if (!p) return;
      sev.l = p.sev[0]; sev.r = p.sev[1]; U.uSev.value.set(sev.l, sev.r); U.uFen.value = p.sev[2];
      q('[data-role="note"]').textContent = p.note; readout(); render();
    }
    LHON.seg(q('[data-role="presets"]'), setPreset);
    LHON.seg(q('[data-role="view"]'), (v) => { U.uView.value = +v; readout(); render(); });
    host.addEventListener('input', (e) => {
      const s = e.target.dataset.s, c = e.target.dataset.c;
      if (s === 'r' || s === 'l') { sev[s] = e.target.value / 100; U.uSev.value.set(sev.l, sev.r); q('[data-role="presets"]').querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', false)); q('[data-role="note"]').textContent = 'Custom setting — drag each eye separately to see how the two combine.'; readout(); }
      if (s === 'split') U.uSplit.value = e.target.value / 100;
      if (c === 'periph') U.uPeriph.value = e.target.checked ? 1 : 0;
      if (c === 'dark') U.uStyle.value = e.target.checked ? 1 : 0;
      render();
    });
    const file = host.querySelector('input[type="file"]');
    host.querySelector('[data-role="scenes"]').addEventListener('click', (e) => {
      const b = e.target.closest('[data-scene]'); if (!b) return;
      if (b.dataset.scene === 'photo') file.click(); else setScene(b.dataset.scene);
    });
    file.addEventListener('change', () => {
      const f = file.files[0]; if (!f) return; const url = URL.createObjectURL(f); const img = new Image();
      img.onload = () => { setScene('photo', img); URL.revokeObjectURL(url); }; img.src = url;
    });
    const cvs = renderer.domElement;
    const gazeTo = (e) => { const r = cvs.getBoundingClientRect(); U.uGaze.value.set((e.clientX - r.left) / r.width, 1 - (e.clientY - r.top) / r.height); cap.style.opacity = 0.0; render(); };
    cvs.addEventListener('pointermove', gazeTo); cvs.addEventListener('pointerdown', gazeTo);
    stage.addEventListener('keydown', (e) => {
      const k = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, 1], ArrowDown: [0, -1] }[e.key]; if (!k) return; e.preventDefault();
      const gz = U.uGaze.value; gz.set(Math.max(0, Math.min(1, gz.x + k[0] * 0.03)), Math.max(0, Math.min(1, gz.y + k[1] * 0.04))); render();
    });
    cap.style.transition = 'opacity .6s';
    setScene('reading'); setPreset('nadir'); resize();
    return { setPreset, setScene, render };
  };
})();
