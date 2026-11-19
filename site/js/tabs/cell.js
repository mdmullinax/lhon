LHON.registerTab('cell', {
  title: 'Down to the mitochondrion', nav: 'Down to the mitochondrion',
  render() {
    const c = LHON.c, g = LHON.g;
    return `
    <div class="kicker">Section 06 · Cellular and molecular</div>
    <h1>Inside the cell, where it actually goes wrong</h1>
    <p class="lede">This is the deepest section of the guide. It starts with what a mitochondrion does, follows the electrons through the machinery, shows precisely what each LHON mutation breaks, and then answers the question that makes LHON strange: of all the cells in the body running on these same mitochondria, why do only the optic nerve&rsquo;s fail?</p>

    <h2>The mitochondrion</h2>
    <div class="cols">
      <div>
        <div class="stage" data-scene="mito" style="aspect-ratio:16/10">
          <div class="hud"><div class="seg" data-role="mitostate"><button data-v="healthy" aria-pressed="true">Healthy</button><button data-v="lhon">With an LHON mutation</button></div><span class="cap" data-role="mitocap"></span></div>
        </div>
        <p class="small muted" style="margin-top:8px">Drag to rotate. Gold particles are ATP; red are ${g('ros', 'reactive oxygen species')}. The rate and ratio shift when you switch states.</p>
      </div>
      <div class="prose">
        <div class="eli5">
          <p>A mitochondrion is a bean-shaped compartment with two membranes. The inner one is folded into sheets called cristae, which is where the work happens: packed along those folds are the machines that turn food energy into ATP, the molecule every cell spends to do anything at all.</p>
          <p>Floating in the middle are little rings of DNA &mdash; the mitochondrial genome. Each mitochondrion has several; each cell has many mitochondria.</p>
        </div>
        <p>Mechanically: electrons stripped from food are handed to a chain of four protein complexes embedded in the inner membrane. As they pass, three of those complexes pump protons out into the intermembrane space. The protons then flow back in through ATP synthase, a genuine rotary motor, which uses the flow to make ${g('atp', 'ATP')}${c('kampjut22')}.</p>
        <p>This is ${g('oxphos', 'oxidative phosphorylation')}, and it is where LHON breaks.</p>
      </div>
    </div>

    <h2>The chain, running</h2>
    <p class="sec" style="max-width:76ch">Switch between the three states below. Watch the electron flow through Complex I, the protons piling up above the membrane, the rotor turning, and the ATP coming out &mdash; then what happens when Complex I is faulty, and what idebenone does about it.</p>
    <div data-etc></div>

    <h2>Complex I, in detail</h2>
    <div class="tiles">
      <div class="tile"><div class="lab">Subunits</div><div class="val">45</div><div class="note">~1 million daltons, 14 core subunits, ≥15 assembly factors${c('kampjut22', 'dang20')}</div></div>
      <div class="tile"><div class="lab">Encoded by mtDNA</div><div class="val">7</div><div class="note">ND1–ND6 and ND4L; the other 38 come from the nucleus${c('dang20')}</div></div>
      <div class="tile"><div class="lab">Protons pumped</div><div class="val">4</div><div class="note">per NADH oxidised, in the standard model — though this has been challenged${c('kampjut22')}</div></div>
      <div class="tile"><div class="lab">Distance coupled</div><div class="val">&gt;200 Å</div><div class="note">between the redox chemistry and the pumping machinery${c('kampjut22')}</div></div>
    </div>

    <details class="deep"><summary>Deeper: how Complex I is organised, and where each mutation sits <span class="lvl">Structural biology</span></summary><div class="body">
      <p>Complex I is L-shaped, with a peripheral arm reaching into the matrix and a membrane arm embedded in the inner membrane. It is usefully divided into three modules${c('dang20')}:</p>
      <ul>
        <li><strong>N-module</strong> (NDUFV1, NDUFV2, NDUFS1): accepts electrons from NADH onto a flavin (FMN) as a hydride.</li>
        <li><strong>Q-module</strong> (NDUFS2/3/7/8 plus <strong>ND1</strong> and ND3): holds the remaining iron&ndash;sulfur clusters and forms the ubiquinone binding site. There are 8&ndash;9 Fe&ndash;S clusters, only 7 on the main electron path, and the quinone site is a channel about 25 Å long${c('kampjut22', 'dang20')}.</li>
        <li><strong>P-module</strong> (<strong>ND2, ND4, ND4L, ND5, ND6</strong>): does the proton translocation.</li>
      </ul>
      <p>So the three LHON mutations are not interchangeable in mechanism. <strong>m.3460G&gt;A hits ND1, at the quinone site.</strong> <strong>m.11778G&gt;A (ND4) and m.14484T&gt;C (ND6) hit the proton-pumping arm.</strong> That structural difference lines up with the biochemistry below${c('dang20')}.</p>
    </div></details>

    <h2>What each mutation actually does</h2>
    <div class="callout warn"><span class="ico">▲</span><div>
      <b class="t">This is an area where good studies genuinely disagree</b>
      <p>One cybrid study found complex I activity fell 79% with m.3460G&gt;A and 20% with m.11778G&gt;A, with no obvious effect from m.14484T&gt;C; other studies found no significant reduction in m.11778 cybrids at all${c('chi22')}. More bluntly, one group notes there is "no validated biochemical method to prove their pathogenicity on fibroblasts", and confirmed LHON mutations often show <em>no detectable</em> respiratory chain defect in accessible tissue${c('peverelli21')}. Enzyme activity, it turns out, is the wrong thing to measure.</p>
    </div></div>

    <div data-chart="biochem"></div>

    <div class="grid g2">
      <div class="card"><h4>ATP synthesis is the consistent defect</h4>
        <p class="small sec">Baracca and colleagues found that in ${g('cybrid', 'cybrid')} cells all three mutations impaired <strong>complex I-driven</strong> ATP synthesis and the respiratory control ratio, while succinate-driven (complex II) synthesis was unaffected &mdash; and total cellular ATP was preserved${c('baracca05')}. That last detail is the key to the whole disease: <strong>most cells compensate</strong>, through glycolysis and complex II pathways, so total ATP does not fall${c('chi22')}. Cells that cannot compensate are the ones that die.</p></div>
      <div class="card"><h4>Oxidative stress rises</h4>
        <p class="small sec">ROS production is increased in cybrids carrying all three primary mutations${c('chi22')}. In one experiment LHON cybrids in glucose showed about three-fold ROS over controls, rising a further two-fold in galactose, with a 35% fall in mitochondrial membrane potential at 24 hours, mitochondrial fragmentation, apoptosis and reduced baseline SOD2 activity${c('giordano11')}. Compromised complex I also primes cells for apoptosis${c('chi22')}.</p></div>
      <div class="card"><h4>The m.14484T>C puzzle</h4>
        <p class="small sec">This variant often shows <em>normal</em> complex I activity. Ghelli and colleagues found platelet particles from nine homoplasmic carriers had normal specific activity but significantly increased sensitivity to inhibitors of the ubiquinol product site &mdash; concluding the mutation affects the residues forming that site rather than the enzyme's throughput${c('ghelli99')}. Met64 sits in ND6's most conserved region. It is also the variant with the best prognosis.</p></div>
      <div class="card"><h4>Patient-derived nerve cells tell a harsher story</h4>
        <p class="small sec">When researchers grew ${g('ipsc', 'iPSC')}-derived retinal ganglion cells from a patient family, the yield of ganglion cells fell from 58.3% in controls to 37.9% with m.11778G&gt;A alone, and to 26.6% and 6.7% in double mutants also carrying PRICKLE3. Mitochondrial ATP in double-mutant cells was about 7&ndash;9% of control; baseline caspase-3 was 137&ndash;188% of control, rising to 284&ndash;506% under stress${c('nie22')}.</p>
        <p class="small sec"><strong>The same study found only mild changes in the patients' skin fibroblasts.</strong> The cell type matters enormously &mdash; which is exactly the point of the next heading.</p></div>
    </div>

    <h2>Why the optic nerve, and nothing else?</h2>
    <p class="sec" style="max-width:78ch">Every cell in the body carries the same mutation. The answer is anatomical, and once you see it, it is hard to unsee.</p>

    <div data-chart="axon"></div>

    <div class="cols">
      <div class="prose">
        <p>Each optic nerve carries about <strong>1.2 million axons</strong>${c('carelli17')}. Within the eye and retina those axons are <strong>unmyelinated</strong> &mdash; they have to be, because ${g('myelin', 'myelin')} is opaque and the retina must stay transparent for light to reach the photoreceptors behind it. Unmyelinated conduction is far more expensive than the insulated, saltatory kind.</p>
        <p>So mitochondria are packed densely along that prelaminar stretch, and then &mdash; abruptly, at the ${g('lamina', 'lamina cribrosa')} &mdash; their numbers drop sharply as the axons acquire myelin and pass out of the eye${c('carelli17')}. That prelaminar segment has "higher energy needs and concentration of mitochondria than most, if not all other, neurons"${c('hage21')}.</p>
        <p>Within that already-stressed population, the thinnest fibres fail first. The Sadun group's modelling makes the argument quantitative: energy <em>demand</em> scales with axonal surface area, while ATP <em>supply</em> scales with axonal volume. Small axons therefore have the worst surface-to-volume ratio and the thinnest margin${c('pan12')}. The ${g('pmb', 'papillomacular bundle')} &mdash; carrying central vision &mdash; contains the smallest fibres of all${c('carelli17', 'esmaeil22')}.</p>
        <p>This explains the whole clinical picture in one stroke: central vision goes, peripheral vision stays, temporal disc pallor appears, and the field defect is centrocecal.</p>
      </div>
      <div>
        <div class="card"><h4>Then why do pupils still work?</h4>
          <p class="small sec">About 1% of retinal ganglion cells are ${g('melanopsin', 'melanopsin-containing')} and drive the pupil reflex and body clock. They are large cells, and relatively resistant. In post-mortem retinas where <strong>74&ndash;98% of all axons had been lost</strong>, melanopsin cells had risen from about 1% of ganglion cells in controls to 3.1% (mild LHON) and 38.5% (severe LHON) &mdash; relative sparing, not growth${c('lamorgia10')}.</p>
          <p class="small sec">The authors are refreshingly candid about the reason: "we do not presently know" whether these cells have distinct mitochondrial metabolism; large cell size is a proposed protective factor${c('lamorgia10', 'carelli17')}.</p></div>
        <div class="card"><h4>And why do axons swell before they die?</h4>
          <p class="small sec">The subacute phase, "preceding the massive loss of macular RGCs", is "characterized by axonal swelling", possibly from compensatory mitochondrial biogenesis plus stalled axonal transport${c('carelli17')}. Clinically that is the thickened ${g('rnfl', 'nerve fibre layer')} seen on OCT and the disc ${g('pseudoedema', 'pseudo-oedema')} that does not leak dye${c('ywm14')}.</p></div>
      </div>
    </div>

    <h2>What protects the carriers who never convert</h2>
    <div class="callout good"><span class="ico">●</span><div>
      <b class="t">The mitochondrial biogenesis finding</b>
      <p>This is arguably the most hopeful result in LHON cell biology. Giordano and colleagues measured mitochondrial DNA copy number and found that <strong>unaffected carriers make more of it than affected relatives do</strong>${c('giordano14')}.</p>
      <ul>
        <li>In blood from three m.11778G&gt;A pedigrees: 481 ± 18 copies per cell in the mutant lineage versus 178 ± 6 in controls (P&lt;0.0001), with <em>carriers higher than affected</em>. An Italian cohort of 39 families (64 affected, 68 carriers) showed the same direction${c('giordano14')}.</li>
        <li>A proposed threshold around <strong>500 copies</strong> separated affected from carriers; logistic regression gave carrier probability near 100% above ~600 copies and near 0% below ~300${c('giordano14')}.</li>
        <li>In muscle: carriers &gt; affected &gt; controls. In three discordant sibling pairs, all three carriers exceeded their affected brothers${c('giordano14')}.</li>
        <li>Carriers' fibroblasts raised mtDNA about 1.5-fold under galactose stress and repopulated fastest after depletion; affected lines were slowest and mostly died. Carriers had higher PPRC1 and TFAM messenger RNA${c('giordano14')}.</li>
      </ul>
      <p><strong>The authors' own caveats matter.</strong> Five carriers in Family 1 later converted, four of them at 277&ndash;381 copies. Candidate gene variants and haplogroups showed no association. The retina and optic nerve data rest on a single carrier. And the blood measure "needs validation before use as a biomarker" &mdash; so this is <em>not</em> a test anyone can order to predict risk${c('giordano14')}.</p>
    </div></div>

    <details class="deep"><summary>Deeper: oestrogen, and a possible reason males are hit harder <span class="lvl">Mechanism</span></summary><div class="body">
      <p>In LHON cybrids, 100 nM 17β-oestradiol reversed ROS overproduction, prevented the 35% drop in membrane potential, reduced apoptosis and fragmentation, activated SOD2, raised mtDNA content about 2.5-fold, induced biogenesis regulators (PGC-1α/β, NRF1/2, TFAM) up to about 12-fold at six hours, and produced up to a 40% ATP gain in galactose${c('giordano11')}.</p>
      <p>Every effect was blocked by the oestrogen-receptor antagonist ICI 182780, so the pathway is receptor-mediated. Oestrogen receptor beta localises to the mitochondrial network of human retinal ganglion cells and was retained in surviving cells of an LHON patient${c('giordano11')}. ER-beta-selective plant-derived compounds reproduce the protection in cybrids${c('pisano15')}.</p>
      <p>The authors frame this as a <em>candidate</em> explanation for the male predominance, not proof. It is also suggestive that 85.2% of women in a late-onset Italian cohort were postmenopausal${c('battista26')} &mdash; but that is an observation about a selected group, not evidence that hormone treatment helps anyone. No clinical trial supports hormonal therapy in LHON${c('chen22tx')}.</p>
    </div></details>

    <h2>Analogies that hold up</h2>
    <p class="sec" style="max-width:76ch">Reputable sources mostly avoid analogy; the two that appear in the literature are Carelli's "we can use the eye as a window on the brain" and the framing of LHON as "the tip of the neurodegeneration iceberg"${c('carelli17')}, and Hage's description of onset as "an earthquake in the life of an otherwise healthy individual"${c('hage21')}. The following are this guide&rsquo;s own, built directly on the sourced facts above rather than borrowed:</p>
    <div class="grid">
      <div class="card"><h4>Thin wires overheat first</h4><p class="small sec">Energy demand scales with surface area, supply with volume. Thin axons have the worst ratio, so they are the first to fail &mdash; exactly as the modelling describes${c('pan12')}.</p></div>
      <div class="card"><h4>The uphill stretch of road</h4><p class="small sec">The unmyelinated prelaminar segment is where the engine works hardest, and it is precisely where the mitochondria are crowded. Past the lamina cribrosa the road flattens and the engine eases off${c('carelli17')}.</p></div>
      <div class="card"><h4>Carriers run more engines at lower load</h4><p class="small sec">The biogenesis finding in one line: people who stay well have more mitochondrial copies, so no individual one is working at its limit${c('giordano14')}.</p></div>
    </div>`;
  },
  init(root) {
    const C = LHON.charts;
    const caps = { healthy: 'Healthy: cristae lit, ATP streaming out, very little ROS.', lhon: 'With an LHON mutation: Complex I passes fewer electrons, so ATP output falls and more electrons leak onto oxygen as ROS.' };
    const cap = root.querySelector('[data-role="mitocap"]');
    const st = LHON.scenes.mito(root.querySelector('[data-scene="mito"]'));
    cap.textContent = caps.healthy;
    LHON.seg(root.querySelector('[data-role="mitostate"]'), (v) => { st && st.setState(v); cap.textContent = caps[v]; });
    LHON.etc.mount(root.querySelector('[data-etc]'));

    const bio = [
      { label: 'Complex I activity', sub: 'm.3460G>A, one cybrid study', value: 21, text: '−79%', color: 'var(--series-2)' },
      { label: 'Complex I activity', sub: 'm.11778G>A, same study', value: 80, text: '−20%', color: 'var(--series-2)' },
      { label: 'Complex I activity', sub: 'm.11778G>A, other studies', value: 100, text: 'no significant reduction', color: 'var(--deemph)' },
      { label: 'Complex I activity', sub: 'm.14484T>C', value: 100, text: 'no obvious effect', color: 'var(--deemph)' },
      { label: 'Total cellular ATP', sub: 'all three, in cybrids', value: 100, text: 'preserved — cells compensate', color: 'var(--series-3)' },
      { label: 'Mitochondrial ATP in patient RGCs', sub: 'm.11778G>A alone, iPSC-derived', value: 70, text: '66–73% of control', color: 'var(--series-1)' },
      { label: 'Mitochondrial ATP in patient RGCs', sub: 'm.11778G>A + PRICKLE3', value: 8, text: '6.5–8.6% of control', color: 'var(--series-8)' },
    ];
    C.card(root.querySelector('[data-chart="biochem"]'), {
      title: 'Measured effects, as a percentage of normal',
      sub: 'The top four rows show why enzyme activity is a poor guide: results conflict and two mutations look almost normal. The bottom rows show what happens when you measure the actual cell type at risk — patient-derived retinal ganglion cells — instead of a cell line or a skin fibroblast.',
      foot: LHON.src('chi22', 'baracca05', 'nie22', 'peverelli21'),
      table: { head: ['Measure', 'Model', 'Result'], rows: bio.map((r) => [r.label, r.sub, r.text]) },
      legend: [{ label: 'Reduced', color: 'var(--series-2)' }, { label: 'Severely reduced', color: 'var(--series-8)' }, { label: 'Preserved', color: 'var(--series-3)' }, { label: 'No significant change', color: 'var(--deemph)' }],
      body: (el) => C.hbar(el, bio, { max: 128, unit: '%', ticks: [0, 25, 50, 75, 100] }),
    });

    const axon = [
      { label: 'Axons per optic nerve', value: 1.2, text: '~1.2 million', color: 'var(--series-1)' },
      { label: 'Melanopsin cells', sub: 'share of all ganglion cells, controls', value: 0.012, text: '~1%', color: 'var(--series-4)' },
      { label: 'Axons lost in severe LHON', sub: 'post-mortem', value: 1.176, text: '74–98%', color: 'var(--series-8)' },
    ];
    C.card(root.querySelector('[data-chart="axon"]'), {
      title: 'The scale of what is lost',
      sub: 'Post-mortem counts from LHON retinas. The melanopsin population survives in roughly its original numbers while the rest of the nerve is destroyed, which is why it rises from about 1% to as much as 38.5% of the surviving cells.',
      foot: LHON.src('carelli17', 'lamorgia10'),
      table: { head: ['Measure', 'Value'], rows: [['Axons in one optic nerve', '~1,200,000'], ['Melanopsin ganglion cells, controls', '0.9–1.5% of all RGCs'], ['Total axon loss, severe LHON (post-mortem)', '74–98%'], ['Melanopsin share after loss, mild LHON', '3.1%'], ['Melanopsin share after loss, severe LHON', '38.5%'], ['Melanopsin density, LHON vs controls', '9 and 8 cells/mm² vs 18, 13, 8']] },
      body: (el) => C.hbar(el, axon, { max: 1.45, ticks: [0, 0.5, 1], fmt: (v) => (v >= 1 ? v.toFixed(1) + 'M' : (v * 1000).toFixed(0) + 'K') }),
    });
  },
});
