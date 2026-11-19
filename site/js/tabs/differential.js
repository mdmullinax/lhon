LHON.registerTab('differential', {
  title: 'What else it could be', nav: 'What else it could be',
  render() {
    const c = LHON.c, g = LHON.g;
    return `
    <div class="kicker">Section 02 · The differential</div>
    <h1>Vision just changed in one eye. What are the possibilities?</h1>
    <p class="lede">A young person notices, often on an ordinary day, that one eye has gone cloudy in the middle. This section fans out across everything that plausibly causes that, roughly how likely each is, and the specific features that separate them.</p>

    <div class="callout crit"><span class="ico">■</span><div>
      <b class="t">The reason this matters so much</b>
      <p>Several conditions on this list are treatable, and some are <em>urgently</em> treatable &mdash; ${g('nmosd', 'NMOSD')} in particular can do permanent damage within days if missed. LHON is not urgently treatable in the same way. So the work-up is built to rule out the treatable causes first, fast, while the genetic test runs in the background${c('lamorgia24', 'jurkute19')}. Nobody should be told "it's probably LHON, let's wait for the gene test".</p>
    </div></div>

    <h2>How common is each cause?</h2>
    <p class="sec" style="max-width:76ch">There is no published study that breaks down every cause of sudden optic neuropathy specifically in adolescents, and this guide will not invent one. What follows is the closest honest answer: population incidence rates for each condition, so you can see the orders of magnitude. Note these are rates in the <em>whole</em> population &mdash; the mix changes a lot once a doctor has examined the eye.</p>

    <div data-chart="incidence"></div>

    <div class="callout info"><span class="ico">◆</span><div>
      <b class="t">What this chart does and does not tell you</b>
      <p>It shows that optic neuritis is roughly 10 to 100 times more common than LHON as a new event in the population${c('braithwaite20', 'takano22', 'esteban24')}. It does <em>not</em> give you the odds for one particular person, because examination findings shift those odds enormously. Pain on eye movement makes optic neuritis far more likely; a painless onset in a male teenager with a maternal family history of vision loss makes LHON far more likely. The table below is where those features live.</p>
    </div></div>

    <h2>Once a doctor has examined the eye, what are the odds?</h2>
    <p class="sec" style="max-width:76ch">Two studies get closer to the question families actually ask. Neither covers LHON &mdash; which is itself informative, because it means LHON was too rare to appear in either cohort.</p>
    <div data-chart="aetiology"></div>

    <h2>When someone is referred as "optic neuritis", what do they actually have?</h2>
    <p class="sec" style="max-width:76ch">This is one of the most useful studies in the whole differential. Stunkel and colleagues looked at 122 patients referred to a neuro-ophthalmology clinic with a presumed diagnosis of optic neuritis, and found that <strong>59.8% had something else</strong>${c('stunkel18')}. The commonest alternatives were not exotic.</p>
    <div data-chart="stunkel"></div>

    <h2>The full fan-out</h2>
    <p class="sec">Thirteen causes, with the features that distinguish them. Sort or scan; the LHON row is highlighted.</p>
    <div data-chart="difftable"></div>

    <h2>The four features that do most of the work</h2>
    <div class="grid g2">
      <div class="card"><h4>1. Does it hurt?</h4><p class="small sec">Pain on eye movement is present in 62&ndash;92% of typical optic neuritis and about 89% of MOGAD eyes${c('ew_on', 'takai24')}. LHON is <strong>painless</strong>${c('eyewiki_lhon')}. This single question moves the odds more than any other.</p></div>
      <div class="card"><h4>2. How fast, and how far down?</h4><p class="small sec">Optic neuritis bottoms out around two weeks and then <em>recovers</em> &mdash; 94% reach 20/40 or better at five years${c('ew_on')}. LHON keeps declining over weeks to months and typically settles at 20/200 or worse${c('ywm09', 'genereviews')}. Direction of travel at six weeks is highly informative.</p></div>
      <div class="card"><h4>3. One eye or two?</h4><p class="small sec">Typical optic neuritis is usually one eye. LHON begins in one eye in about 75% of cases but the second follows in a median 6&ndash;8 weeks, and 97% are bilateral within a year${c('ywm09', 'meyerson15')}. Toxic and nutritional causes are bilateral and symmetric from the start${c('ew_nutr')}.</p></div>
      <div class="card"><h4>4. What do the pupils do?</h4><p class="small sec">In most asymmetric optic neuropathies one pupil reacts less (an ${g('rapd', 'RAPD')}). In LHON, pupil reflexes are relatively <strong>preserved</strong>, because the ${g('melanopsin', 'melanopsin cells')} that drive them are largely spared${c('lamorgia10', 'lamorgia24')}. A strikingly normal pupil response alongside dense vision loss is a classic LHON clue.</p></div>
    </div>

    <details class="deep"><summary>Deeper: the fundus findings that look like inflammation but are not <span class="lvl">Clinical detail</span></summary><div class="body">
      <p>In acute LHON the optic disc often looks hyperaemic and swollen, with dilated corkscrew vessels around it &mdash; ${g('telangiectatic', 'peripapillary telangiectatic microangiopathy')} &mdash; and the nerve fibre layer looks thickened${c('meyerson15', 'eyewiki_lhon')}. An examiner who stops there may call it papillitis and start steroids.</p>
      <p>The discriminator is ${g('fluorescein', 'fluorescein angiography')}: inflammatory disc swelling leaks dye; LHON ${g('pseudoedema', 'pseudo-oedema')} does not${c('lamorgia24')}. Two further traps:</p>
      <ul>
        <li>The posterior pole looks <strong>completely normal in roughly 20&ndash;40%</strong> of affected people, so a normal-looking disc does not exclude LHON${c('meyerson15', 'ywm09')}.</li>
        <li>Pallor may take about six weeks to appear, so an early normal-looking nerve is expected${c('meyerson15', 'genereviews')}.</li>
      </ul>
      <p>MRI is also less clean than textbooks suggest. T2 signal change in the nerves, chiasm or tracts was seen in 57% of LHON patients in one series (71% with m.11778G&gt;A), and chiasmal enlargement in 22%${c('xu24')}. Contrast enhancement is rare but reported${c('horiuchi25')}. So MRI changes do not rule LHON out, and a normal MRI does not rule inflammation out.</p>
    </div></details>

    <h2>The work-up, and what each test is for</h2>
    <div class="steps">
      ${[
        ['Day 0–3', 'Examination by an ophthalmologist, ideally a neuro-ophthalmologist', `Acuity, colour vision, pupil responses, dilated fundus examination, and automated visual fields to map the ${g('scotoma', 'blind area')}. This is what decides how urgent everything else is${c('lamorgia24', 'nanos')}.`],
        ['Day 0–7', 'MRI of brain and orbits with contrast', `Primarily to exclude compression (a tumour pressing on the nerve) and to look for demyelinating lesions. In LHON the brain is usually normal, though the nerve itself may show T2 change${c('xu24', 'lamorgia24')}.`],
        ['Day 0–7', 'Blood: MOG-IgG and AQP4-IgG by cell-based assay', `These identify the two antibody-mediated diseases that are treatable and damaging if missed. Results typically take one to two weeks${c('ew_mogad', 'ew_nmo')}.`],
        ['Day 0–7', 'Blood: vitamin B12, folate, copper (± homocysteine, methylmalonic acid)', `Nutritional optic neuropathy mimics LHON closely &mdash; same painless, bilateral, ${g('cecocentral', 'cecocentral')} pattern &mdash; and is reversible if caught early${c('ew_nutr', 'lamorgia24')}. Deficiency can also precipitate loss in an LHON carrier${c('pott06', 'zibold22')}.`],
        ['Day 0–14', 'OCT of the retinal nerve fibre layer and macular ganglion cells', `Shows the characteristic sequence: swelling of the ${g('rnfl', 'nerve fibre layer')} first, then thinning. Macular ganglion cell loss appears before nerve fibre thinning and can be rapid${c('lamorgia24', 'zimmermann25')}.`],
        ['Week 1–8', 'Genetic test: the three primary mtDNA mutations', `Covers roughly 90% of LHON${c('genereviews')}. Turnaround is commonly quoted at three to six weeks and can be longer${c('uwlab', 'zimmermann25')}.`],
        ['If negative', 'Whole mitochondrial genome sequencing, then nuclear genes', `About 30 further mtDNA variants are recognised${c('genereviews')}; if those are negative, recessive genes such as DNAJC30 are tested${c('stenton21', 'fiorini26')}.`],
        ['At diagnosis', 'Baseline ECG', `A minority of LHON cohorts show cardiac ${g('wpw', 'pre-excitation')}; a baseline tracing is advised${c('genereviews', 'finsterer18', 'parikh17')}.`],
      ].map(([when, h, body], i) => `<div class="step"><div class="num">${i + 1}</div><div><div class="when">${when}</div><h4>${h}</h4><p class="small sec" style="margin:0">${body}</p></div></div>`).join('')}
    </div>

    <h2>How often is LHON missed at first?</h2>
    <p class="sec" style="max-width:76ch">Reviews state that LHON is "often" first labelled optic neuritis and treated with steroids${c('lamorgia24', 'zimmermann25')}. A precise percentage does not appear to exist in the literature &mdash; this guide looked and could not find one. What can be quantified is the delay:</p>
    <div data-chart="delay"></div>
    <p class="small muted">Childhood-onset LHON is the extreme case: when onset is slow rather than sudden, delays of 3 to 15 years before diagnosis have been documented${c('majander17')}.</p>

    <div class="callout good"><span class="ico">●</span><div>
      <b class="t">What a family can reasonably ask for</b>
      <ul style="margin-bottom:0">
        <li>"Has MOG and AQP4 antibody testing been sent?" &mdash; the two most consequential treatable mimics.</li>
        <li>"Has B12 been checked?" &mdash; cheap, fast, and reversible if low.</li>
        <li>"Can we have an OCT today, and repeat it in a few weeks?" &mdash; the pattern of change over time is diagnostic in a way a single scan is not${c('zimmermann25')}.</li>
        <li>"Can the genetic test be sent now rather than after the other results?" &mdash; it runs in parallel and takes the longest.</li>
        <li>"Is there a neuro-ophthalmologist we can see?" &mdash; the NANOS directory lists them by location${c('nanos')}.</li>
      </ul>
    </div></div>`;
  },
  init(root) {
    const C = LHON.charts, c1 = 'var(--series-1)', c2 = 'var(--series-2)';
    const inc = [
      { label: 'Optic neuritis', sub: 'adults, UK', value: 4.5, tip: '<b>Optic neuritis (adults)</b>4.5 per 100,000 per year, UK population study (Braithwaite 2020)' },
      { label: 'NAION', sub: 'all ages, range', lo: 2.3, hi: 10.3, mid: 5, tip: '<b>NAION</b>2.3–10.3 per 100,000 per year; mean age 57–65, so uncommon in teenagers' },
      { label: 'Idiopathic intracranial hypertension', sub: 'Scotland, all ages', value: 2.65, tip: '<b>IIH</b>2.65 per 100,000 per year overall; 10.7 in women aged 15–44 (Goudie 2019)' },
      { label: 'Optic neuritis', sub: 'ages 1–17, UK', value: 0.77, tip: '<b>Optic neuritis (children)</b>0.77 per 100,000 per year (Braithwaite 2020)' },
      { label: 'MOGAD', sub: 'all ages', lo: 0.16, hi: 0.48, mid: 0.3, tip: '<b>MOGAD</b>1.6–4.8 per million per year = 0.16–0.48 per 100,000' },
      { label: 'NMOSD', sub: 'all ages', lo: 0.037, hi: 0.73, mid: 0.2, tip: '<b>NMOSD</b>0.037–0.73 per 100,000 per year; paediatric 0.01–0.06' },
      { label: 'LHON', sub: 'Japan, derived', lo: 0.05, hi: 0.1, mid: 0.07, color: c2, tip: '<b>LHON</b>Derived from Japan’s estimated 69–117 new cases/year in ~125 million people. Spain (Madrid) gives ~0.02 per 100,000. No direct incidence rate is published.' },
    ];
    C.card(root.querySelector('[data-chart="incidence"]'), {
      title: 'New cases per 100,000 people per year',
      sub: 'Population incidence, all ages unless noted. Bars with a dot show a published range with its midpoint. LHON (orange) is derived arithmetic, not a published rate — see the note.',
      foot: LHON.src('braithwaite20', 'ew_naion', 'goudie19', 'hor23', 'papp21', 'takano22', 'esteban24'),
      legend: [{ label: 'Published incidence', color: c1 }, { label: 'LHON (derived, not a published rate)', color: c2 }],
      table: { head: ['Condition', 'Group', 'Per 100,000/year'], rows: inc.map((r) => [r.label, r.sub, r.value != null ? r.value : `${r.lo}–${r.hi}`]) },
      body: (el) => C.hbar(el, inc, { max: 11, ticks: [0, 2, 4, 6, 8, 10], fmt: (v) => (Math.round(v * 100) / 100).toString() }),
    });

    const aeti = [
      { label: 'Multiple sclerosis', a: 57, b: 14 }, { label: 'Idiopathic / isolated', a: 29, b: 40 },
      { label: 'MOGAD', a: 5, b: 29 }, { label: 'NMOSD (AQP4)', a: 3, b: 11 },
      { label: 'ADEM', a: 0, b: 7 }, { label: 'Other (infectious, sarcoid, drug, seronegative)', a: 6, b: 0 },
    ];
    C.card(root.querySelector('[data-chart="aetiology"]'), {
      title: 'Causes of optic neuritis: all ages versus children',
      sub: 'Left bars: a population-based series of 110 patients of all ages (Olmsted County). Right bars: the PON1 prospective paediatric study, 28 two-year completers, median age 10.3. Note how the mix shifts with age — MOGAD is six times more prominent in children, and MS four times less. Neither cohort contained a case of LHON.',
      foot: LHON.src('hassan20', 'pineles22'),
      legend: [{ label: 'All ages (Hassan 2020, n=110)', color: 'var(--series-1)' }, { label: 'Children (PON1, n=28)', color: 'var(--series-2)' }],
      table: { head: ['Cause', 'All ages', 'Children (PON1)'], rows: aeti.map((r) => [r.label, r.a + '%', r.b + '%']).concat([['PON1: bilateral at onset', '—', '32%'], ['PON1: acuity at presentation → 6 months', '—', '~20/125 → ~20/25']]) },
      body: (el) => {
        el.innerHTML = aeti.map((r) => `<div style="margin-bottom:10px"><div class="small sec" style="margin-bottom:3px">${r.label}</div>
          <div style="display:grid;grid-template-columns:1fr auto;gap:8px;align-items:center"><div style="display:grid;gap:3px">
          <div tabindex="0" data-tip="All ages: ${r.a}%" style="height:11px;width:${r.a * 1.55}%;min-width:2px;background:var(--series-1);border-radius:0 4px 4px 0"></div>
          <div tabindex="0" data-tip="Children: ${r.b}%" style="height:11px;width:${r.b * 1.55}%;min-width:2px;background:var(--series-2);border-radius:0 4px 4px 0"></div>
          </div><span class="small muted" style="font-variant-numeric:tabular-nums;white-space:nowrap">${r.a}% · ${r.b}%</span></div></div>`).join('')
          + '<p class="small muted" style="margin:10px 0 0">In PON1, 32% were bilateral at onset and acuity improved from about 20/125 to about 20/25 by six months — the recovery trajectory that most clearly separates optic neuritis from LHON.</p>';
      },
    });

    const stunkel = [
      { label: 'Headache with eye pain', value: 22 }, { label: 'Functional vision loss', value: 19 },
      { label: 'Retinal or macular disease', value: 15 }, { label: 'NAION', value: 12 },
      { label: 'Tumour / compression', value: 5 },
    ];
    C.card(root.querySelector('[data-chart="stunkel"]'), {
      title: 'Of 122 patients referred as "optic neuritis", 59.8% had something else',
      sub: 'The commonest actual diagnoses, as a percentage of the referred group. LHON did not appear in this series at all — a reminder that it is genuinely rare even among people who look like they might have it.',
      foot: LHON.src('stunkel18'),
      table: { head: ['Actual diagnosis', 'Share of referrals'], rows: stunkel.map((r) => [r.label, r.value + '%']) },
      body: (el) => C.hbar(el, stunkel, { max: 26, unit: '%', ticks: [0, 10, 20] }),
    });

    const diff = [
      ['LHON', 'Teens–20s, 2–3× more males', 'Painless', 'Weeks–months, one eye then the other', 'Central/cecocentral', 'Preserved pupils, disc pseudo-oedema that does not leak dye', 'Uncommon (4–64% by mutation)', 'Idebenone where available; supportive care', 1],
      ['Typical optic neuritis (MS/idiopathic)', 'Mean 35.6; 69% female', 'Pain on movement in 62–92%', 'Days, nadir ~2 weeks', 'Central, variable', 'RAPD, red desaturation, MRI nerve enhancement in 94%', 'Excellent: 94% ≥20/40 at 5 years', 'Steroids speed recovery; MS risk assessment', 0],
      ['MOGAD', '~30–50% paediatric; sexes equal', 'Pain in ~89% of eyes', 'Days', 'Variable, often severe at onset', 'Disc swelling ~95%, long lesions, MOG-IgG positive', 'Usually good; ~35% relapse long-term', 'IV steroids with taper; IVIG or plasma exchange', 0],
      ['NMOSD (AQP4)', 'Peak 40–59; up to 9:1 female', 'Often painful', 'Days, severe', 'Severe, often bilateral or chiasmal', 'AQP4-IgG positive, long posterior lesions', 'Poor untreated', 'Urgent steroids, plasma exchange, eculizumab/inebilizumab/rituximab', 0],
      ['NAION', 'Mean 57–65; 23% under 50 in one series', 'Painless (pain 8–12%)', 'Hours–days', 'Altitudinal (top or bottom half)', 'Disc swelling always; small crowded disc', '3-line gain in 13–43%', 'No proven therapy', 0],
      ['Compressive / infiltrative', 'Any age; glioma median 6.5 y', 'Usually painless', 'Slow, sometimes noticed suddenly', 'Variable', 'Proptosis, RAPD, MRI diagnostic', 'Depends on cause', 'Observation, chemotherapy or surgery', 0],
      ['Toxic / nutritional', 'Any age', 'Painless', 'Subacute, bilateral and symmetric', 'Cecocentral — same pattern as LHON', 'No RAPD, early colour loss; low B12/copper, or ethambutol etc.', 'Good if caught early; poor after ~3 months', 'Replace deficiency or stop the agent', 0],
      ['Dominant optic atrophy', 'First two decades', 'Painless', 'Insidious, bilateral', 'Central', 'Blue-yellow colour defects, no RAPD, family history', 'No recovery; 13–46% registered blind', 'Supportive', 0],
      ['Papilloedema / IIH', 'Often young women with obesity', 'Headache, transient obscurations', 'Variable', 'Enlarged blind spot, peripheral constriction', 'Bilateral disc swelling', 'Good if pressure controlled', 'Weight loss is the only disease-modifying therapy', 0],
      ['Neuroretinitis', 'Mean ~24.5 in infectious cases', 'Usually painless (7.7%)', 'Days', 'Central', 'Macular star at 1–3 weeks; Bartonella serology', '93% reach 20/40 or better', 'Treat the infection', 0],
      ['Traumatic optic neuropathy', 'Mean 34; 85% male', 'Trauma history', 'Immediate', 'Variable', 'RAPD; disc normal at first, atrophy at 3–6 weeks', '15–57% improve spontaneously', 'Steroids unproven', 0],
      ['Functional (non-organic) vision loss', '5–12% of neuro-ophthalmology patients', 'Variable', 'Variable', 'Tunnel or cloverleaf, inconsistent', 'Normal pupils and examination', 'Most normalise with reassurance', 'Reassurance; 16–53% also have organic disease', 0],
      ['Retinal mimics (CSC, AZOOR, Stargardt)', 'CSC 9.9/100,000 men; AZOOR mostly women, mid-30s', 'Painless', 'Variable', 'Central distortion, photopsia, enlarged blind spot', 'OCT fluid or ellipsoid-zone loss; normal nerve', 'CSC 84–100% resolve by 6 months', 'Depends on cause', 0],
    ];
    const host = root.querySelector('[data-chart="difftable"]');
    host.innerHTML = `<div class="tblwrap"><table class="tbl"><thead><tr>
      <th style="min-width:160px">Condition</th><th>Who</th><th>Pain</th><th>Speed &amp; pattern</th><th>Field defect</th><th>Key findings</th><th>Natural recovery</th><th>Treatment</th></tr></thead>
      <tbody>${diff.map((r) => `<tr class="${r[8] ? 'hl' : ''}">${r.slice(0, 8).map((v, i) => `<td${i === 0 ? ' style="font-weight:600"' : ''}>${v}</td>`).join('')}</tr>`).join('')}</tbody></table></div>
      <p class="chart-foot">${LHON.src('eyewiki_lhon', 'ew_on', 'ew_mogad', 'ew_nmo', 'ew_naion', 'ew_nutr', 'ew_tox', 'ew_glioma', 'ew_nr', 'ew_ton', 'ew_fvl', 'ew_csc', 'ew_azoor', 'ywm09', 'takai24', 'goudie19')}</p>`;

    const delay = [
      { label: 'REALITY cohort', sub: 'onset to first study visit, median', value: 1.9, text: '1.9 months (median)' },
      { label: 'REALITY cohort', sub: 'onset to first study visit, mean', value: 5.7, text: '5.7 months (mean)' },
      { label: 'Seen within 3 months', sub: 'share of REALITY cohort', value: 0, text: '61% of patients' },
    ];
    C.card(root.querySelector('[data-chart="delay"]'), {
      title: 'Time from first symptom to specialist assessment',
      sub: 'From the REALITY retrospective natural-history study (44 patients). The gap between the median and the mean tells you the distribution has a long tail: most are seen quickly, some wait a very long time.',
      foot: LHON.src('reality21'),
      table: { head: ['Measure', 'Value'], rows: [['Median time to first study visit', '1.9 months'], ['Mean time to first study visit', '5.7 months'], ['Seen within 3 months', '61%'], ['Childhood insidious onset, reported delays', '3–15 years']] },
      body: (el) => C.hbar(el, delay.slice(0, 2), { max: 7, unit: ' mo', ticks: [0, 2, 4, 6] }),
    });
  },
});
