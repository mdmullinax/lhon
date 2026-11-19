LHON.registerTab('lhon', {
  title: 'The course of LHON', nav: 'The course of LHON',
  render() {
    const c = LHON.c, g = LHON.g;
    return `
    <div class="kicker">Section 03 · The clinical course</div>
    <h1>What actually happens, stage by stage</h1>
    <p class="lede">LHON has an unusually well-described arc. The 2017 international consensus divides it into four stages, and knowing which one someone is in determines almost everything: which tests mean what, which treatments are even options, and what to expect next.</p>

    <h2>The four stages</h2>
    <div data-chart="stages"></div>

    <div class="grid g2">
      <div class="card"><div class="tag">Stage 1</div><h4>Asymptomatic carrier</h4>
        <p class="small sec">Vision is normal and the person usually has no idea. But sensitive testing can already find things: thickening of the temporal ${g('rnfl', 'nerve fibre layer')}, ${g('telangiectatic', 'corkscrew vessels')} around the disc, subtle colour-vision changes, reduced contrast sensitivity, abnormal electrophysiology, and microvascular changes on OCT-angiography${c('spiegel22', 'lamorgia24')}.</p>
        <p class="small sec"><strong>Crucially, none of these predict who will convert.</strong> Nerve fibre swelling in a carrier "is not indicative of progression to vision loss"${c('spiegel22')}. There is no screening test that says when or whether.</p></div>
      <div class="card"><div class="tag">Stage 2 · under 6 months</div><h4>Subacute</h4>
        <p class="small sec">The painless central blur appears and deepens. The optic disc may look hyperaemic and swollen but does not leak dye on ${g('fluorescein', 'angiography')}; in 20&ndash;40% it looks entirely normal${c('meyerson15', 'ywm09')}. Pallor typically appears around six weeks${c('meyerson15')}.</p>
        <p class="small sec">This is the window in which treatment decisions get made, because every available or trialled therapy targets this phase or the one after it.</p></div>
      <div class="card"><div class="tag">Stage 3 · 6–12 months</div><h4>Dynamic</h4>
        <p class="small sec">Acuity has usually reached its ${g('nadir', 'lowest point')} and begins to stabilise, though visual fields and OCT measurements can keep changing${c('spiegel22', 'lamorgia24')}. On OCT, temporal thinning is clear by about three months, superior and inferior by six to nine${c('lamorgia24')}.</p></div>
      <div class="card"><div class="tag">Stage 4 · beyond 12 months</div><h4>Chronic / atrophic</h4>
        <p class="small sec">The optic disc is pale, with non-glaucomatous cupping. Most people here meet the criteria for ${g('legal_blind', 'legal blindness')}${c('genereviews', 'ywm09')}. Late improvement is still possible, particularly with m.14484T&gt;C, but the structural loss is settled.</p></div>
    </div>

    <div class="callout warn"><span class="ico">▲</span><div>
      <b class="t">Sources disagree on when the lowest point is reached</b>
      <p>One review puts the nadir at 4&ndash;6 weeks after onset${c('ywm09')}; another at about six months${c('lamorgia24')}; a third says loss continues for roughly six months and stabilises around a year${c('spiegel22')}. These are not contradictions so much as different measures (acuity vs fields vs structure) and different cohorts. Treat "weeks to about six months" as the honest range.</p>
    </div></div>

    <h2>The second eye</h2>
    <p class="sec" style="max-width:76ch">For most families this is the question that dominates the first weeks: will the other eye go too? The numbers are stark and worth knowing plainly.</p>
    <div data-chart="secondeye"></div>
    <p class="small muted">The longest intervals recorded between first and second eye are 16 to 18 years${c('ywm09', 'eyewiki_lhon')} &mdash; rare, but it means "it's been two years and the other eye is fine" is not a guarantee.</p>

    <h2>Where vision ends up</h2>
    <div data-chart="outcome"></div>

    <div class="eli5">
      <p>"Counting fingers" is a formal measurement, not a figure of speech: it means someone can tell how many fingers you are holding up at a set distance but cannot read the largest letter on the chart. "Off-chart" means below the bottom line. Both sound catastrophic, and the vision loss is severe &mdash; but remember what is <em>preserved</em>: side vision, light, movement, large shapes, the ability to walk around a room, and in many cases the ability to see a face is there without seeing whose it is.</p>
    </div>

    <h2>The shape of the blind area</h2>
    <div class="cols">
      <div class="prose">
        <p>The defect is a dense ${g('cecocentral', 'central or cecocentral scotoma')} that enlarges over the first months, mostly within the central 20 degrees of vision${c('meyerson15', 'genereviews')}. In one analysis of field patterns, early defects were centrocecal in 53.1% and paracentral in 24.5%; late in the disease, 42.9% had become diffuse and 36.7% showed central constriction${c('lamorgia24')}.</p>
        <p>Colour vision is affected early, in a red&ndash;green pattern that tracks visual acuity, and subtle colour defects can precede symptoms${c('eyewiki_lhon', 'lamorgia24')}.</p>
        <p>The <a href="#/see">next section</a> lets you see all of this directly rather than reading about it.</p>
        <p><a class="btn primary" href="#/see" style="text-decoration:none;display:inline-block;margin-top:6px">Open the vision simulator →</a></p>
      </div>
      <div class="card">
        <h4>Why pupils keep working</h4>
        <p class="small sec">About 1% of retinal ganglion cells contain ${g('melanopsin', 'melanopsin')} and sense light directly, driving pupil constriction and the body clock. These cells are relatively spared in LHON. In a post-mortem study, melanopsin cells rose from about 1% of all ganglion cells in controls to 3.1% in mild and 38.5% in severe LHON &mdash; not because there were more of them, but because so many others had died (74&ndash;98% of all axons lost)${c('lamorgia10')}.</p>
        <p class="small sec">Clinically this means someone can have profound vision loss and still have briskly reactive pupils &mdash; and still keep a normally entrained sleep&ndash;wake cycle${c('lamorgia10')}.</p>
      </div>
    </div>

    <h2>Children are different</h2>
    <div class="grid g2">
      <div class="card"><h4>It often does not look like LHON</h4>
        <p class="small sec">In a UK childhood-onset cohort, presentation was classically acute in 63%, slowly progressive in 15%, and insidious in 22%${c('majander17')}. A child whose vision declines slowly over years is often investigated for something else entirely &mdash; delays of 3 to 15 years are documented${c('majander17')}.</p></div>
      <div class="card"><h4>The outcome is better</h4>
        <p class="small sec">Of 67 children, 39% reached 0.5 decimal acuity (about 20/40) or better in at least one eye, and 19% remained below 0.05${c('majander17')}. In REALITY, mean final acuity for onset at 12 or younger was 0.65 ${g('logmar', 'logMAR')} against 1.46 for later onset${c('reality21')}. Onset before age 9 does better than onset at 9&ndash;12${c('barboni23')}.</p></div>
    </div>

    <details class="deep"><summary>Deeper: what OCT shows, month by month <span class="lvl">Imaging detail</span></summary><div class="body">
      <p>The ${g('oct', 'OCT')} sequence is one of the more elegant pieces of LHON science, because it shows the axons swelling before they die.</p>
      <ul>
        <li><strong>Carrier state:</strong> temporal nerve fibre layer thickening may already be present${c('lamorgia24', 'spiegel22')}.</li>
        <li><strong>At onset:</strong> the fibre layer thickens temporally and inferiorly first, then superiorly and nasally. Barboni's early work found thickening in the 360° average and in superior, nasal and inferior quadrants &mdash; but <em>not</em> temporal, because temporal fibres are already being lost while the rest are still swelling${c('lamorgia24')}.</li>
        <li><strong>1–3 months:</strong> in a series of 98 m.11778G&gt;A patients (538 scans), the temporal quadrant declined slowly then thinned rapidly to about 12 months, while other quadrants thickened at 1&ndash;3 months before thinning rapidly to about 24 months${c('lamorgia24')}.</li>
        <li><strong>Macular ganglion cells</strong> are lost <em>before</em> nerve fibre layer thinning is visible, and in one 2025 series dropped sharply within 0&ndash;45 days &mdash; faster than in optic neuritis, which is diagnostically useful${c('lamorgia24', 'zimmermann25')}.</li>
      </ul>
      <p>The underlying interpretation: the swelling is axoplasmic stasis &mdash; the cellular transport system stalling &mdash; possibly combined with a compensatory increase in mitochondria, before the axons give way${c('carelli17', 'ywm14')}.</p>
    </div></details>

    <h2>LHON plus: when it is not only the eyes</h2>
    <p class="sec" style="max-width:76ch">In most people LHON affects vision and nothing else. A minority have additional features, which is why a baseline ECG and a neurological review are advised at diagnosis${c('genereviews', 'parikh17')}.</p>
    <div class="grid g2">
      <div class="card"><h4>Cardiac pre-excitation</h4>
        <p class="small sec">${g('wpw', 'Wolff–Parkinson–White')}-type pre-excitation was reported in about 9% in each of two older series (163 and 51 patients)${c('finsterer18')}, and a Paris cohort of 73 found cardiac abnormalities in 23.2%. GeneReviews notes that pre-excitation needs no intervention in the absence of cardiac symptoms, and that a Finnish excess of arrhythmia was not replicated elsewhere${c('genereviews')}. One review calls it "rare"${c('ywm09')}. The practical answer is the cheap one: get a baseline ECG.</p></div>
      <div class="card"><h4>Harding disease (an MS-like illness)</h4>
        <p class="small sec">In 56 collected cases, women outnumbered men 2.1 to 1, m.11778G&gt;A was commonest, about 50% were registered blind and about 72% had no visual recovery${c('pfeffer13')}. Statistically the co-occurrence is consistent with chance, but the phenotype is distinct${c('pfeffer13')}.</p></div>
      <div class="card"><h4>Neurological features</h4>
        <p class="small sec">Dystonia, tremor, peripheral neuropathy, myopathy and Leigh-like disease have been described, often with specific rarer variants such as m.14459G&gt;A or m.4160T&gt;C${c('ywm09', 'genereviews')}.</p></div>
      <div class="card"><h4>Routine surveillance of carriers</h4>
        <p class="small sec">Not recommended. Carriers should instead seek prompt review for any visual symptom${c('genereviews')} &mdash; which, given that no test predicts conversion, is the only thing that actually helps.</p></div>
    </div>`;
  },
  init(root) {
    const C = LHON.charts;
    C.card(root.querySelector('[data-chart="stages"]'), {
      title: 'The four stages, from the 2017 international consensus',
      sub: 'Time runs from the first symptom in the first eye. Boundaries are conventions for research and treatment decisions, not biological switches — people cross them gradually.',
      foot: LHON.src('carelli17consensus', 'lamorgia24', 'spiegel22', 'balta23'),
      legend: [{ label: 'Before symptoms', color: 'var(--deemph)' }, { label: 'Subacute', color: 'var(--series-2)' }, { label: 'Dynamic', color: 'var(--series-4)' }, { label: 'Chronic', color: 'var(--series-1)' }],
      table: { head: ['Stage', 'Timing', 'Defining feature'], rows: [['Asymptomatic carrier', 'Before onset', 'Normal vision; subtle OCT and colour findings possible but not predictive'], ['Subacute', '0–6 months', 'Active vision loss; disc pseudo-oedema; the treatment window'], ['Dynamic', '6–12 months', 'Acuity stabilising; fields and OCT still changing'], ['Chronic', 'Beyond 12 months', 'Optic atrophy; most meet legal-blindness criteria']] },
      body: (el) => C.gantt(el, [
        { label: 'Asymptomatic carrier', sub: 'years to decades', segs: [{ from: -6, to: 0, color: 'var(--deemph)', tip: '<b>Asymptomatic</b>Normal vision. No test predicts who converts.' }] },
        { label: 'Subacute', sub: '0–6 months', segs: [{ from: 0, to: 6, color: 'var(--series-2)', tip: '<b>Subacute (0–6 months)</b>Active loss. Disc pseudo-oedema. The window for every current treatment.' }], marks: [{ at: 0, color: 'var(--series-2)', tip: '<b>Onset</b>Painless central blur, usually one eye' }, { at: 1.6, color: 'var(--text-primary)', tip: '<b>~6 weeks</b>Median interval to the second eye; disc pallor begins to appear' }] },
        { label: 'Dynamic', sub: '6–12 months', segs: [{ from: 6, to: 12, color: 'var(--series-4)', tip: '<b>Dynamic (6–12 months)</b>Acuity stabilising; fields and OCT still moving.' }] },
        { label: 'Chronic', sub: 'beyond 12 months', segs: [{ from: 12, to: 30, color: 'var(--series-1)', tip: '<b>Chronic (>12 months)</b>Optic atrophy. Late partial recovery still possible, especially with m.14484T>C.' }] },
      ], { start: -6, end: 30, step: 6 }),
    });

    C.card(root.querySelector('[data-chart="secondeye"]'), {
      title: 'How the second eye follows',
      sub: 'Roughly a quarter of people lose vision in both eyes at once; for the rest the second eye follows, usually within two months.',
      foot: LHON.src('ywm09', 'meyerson15', 'genereviews'),
      table: { head: ['Pattern', 'Share'], rows: [['Both eyes at once (simultaneous)', '~25%'], ['One eye then the other (sequential)', '~75%'], ['Median interval, sequential cases', '6–8 weeks (GeneReviews: 2–3 months average)'], ['Bilateral within 1 year', '97%'], ['Longest reported interval', '16–18 years']] },
      body: (el) => {
        C.segbar(el, [
          { label: 'Both eyes at onset', value: 25, color: 'var(--series-2)' },
          { label: 'Second eye follows (median 6–8 weeks)', value: 72, color: 'var(--series-1)' },
          { label: 'Beyond 1 year', value: 3, color: 'var(--deemph)', note: 'including rare intervals of 16–18 years' },
        ], { fmt: (v) => v + '%' });
      },
    });

    const out = [
      { label: 'Final acuity, m.11778G>A', sub: 'REALITY, onset ≥15 y', value: 1.55, text: '1.55 logMAR ≈ 20/700' },
      { label: 'Final acuity, m.3460G>A', sub: 'REALITY', value: 1.52, text: '1.52 logMAR ≈ 20/660' },
      { label: 'Final acuity, m.11778G>A', sub: 'REALITY, all ages', value: 1.46, text: '1.46 logMAR ≈ 20/580' },
      { label: 'Final acuity, m.14484T>C', sub: 'REALITY', value: 0.97, text: '0.97 logMAR ≈ 20/190', color: 'var(--series-3)' },
      { label: 'Final acuity, onset ≤12 y', sub: 'REALITY', value: 0.65, text: '0.65 logMAR ≈ 20/90', color: 'var(--series-3)' },
    ];
    C.card(root.querySelector('[data-chart="outcome"]'), {
      title: 'Mean final visual acuity, by mutation and age at onset',
      sub: 'Lower is better. 1.0 logMAR = 20/200, the legal-blindness line. The m.14484T>C variant and childhood onset (green) end up meaningfully better than the rest. From the REALITY retrospective study, 44 patients — a small cohort, so read these as directions rather than precise predictions.',
      foot: LHON.src('reality21', 'genereviews'),
      legend: [{ label: 'Worse outcome groups', color: 'var(--series-1)' }, { label: 'Better outcome groups', color: 'var(--series-3)' }],
      table: { head: ['Group', 'Mean final acuity (logMAR)', 'Approximate Snellen'], rows: out.map((r) => [r.label + ' — ' + r.sub, r.value, r.text.split('≈ ')[1]]) },
      body: (el) => {
        C.hbar(el, out, { max: 1.95, ticks: [0, 0.5, 1, 1.5], fmt: (v) => v.toFixed(1) });
        el.insertAdjacentHTML('beforeend', '<p class="small muted" style="margin:10px 0 0">Across cohorts, most people reach 20/200 or worse at the lowest point, and "counting fingers or worse" is typical. Complete loss of light perception is rare.</p>');
      },
    });
  },
});
