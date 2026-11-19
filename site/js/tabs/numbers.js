LHON.registerTab('numbers', {
  title: 'Rarity, risk and recovery', nav: 'Rarity, risk, recovery',
  render() {
    const c = LHON.c, g = LHON.g;
    return `
    <div class="kicker">Section 07 · Epidemiology</div>
    <h1>How rare, how likely, how often does vision come back</h1>
    <p class="lede">Three questions families ask immediately, and all three have answers that changed substantially in the last five years. This section gives the current numbers, shows the older ones beside them, and explains why they differ &mdash; because the difference is not a mistake, it is the most interesting thing about LHON epidemiology.</p>

    <h2>How rare is it?</h2>
    <div data-chart="dots"></div>
    <div data-chart="prev"></div>

    <div class="callout info"><span class="ico">◆</span><div>
      <b class="t">The gap between "carrying it" and "having it" is enormous</b>
      <p>Prevalence of <em>vision loss</em> is roughly 1 in 31,000 to 1 in 68,000${c('ywm03', 'lopez21')}. But the frequency of <em>carrying</em> one of these variants, measured in general populations rather than in families, is far higher: about 1 in 350 newborns in one screening study, about 1 in 800&ndash;900 homoplasmic carriers in gnomAD and Australian population genomics, and more than 1 in 1,000 in UK Biobank${c('elliott08', 'watson23', 'mackey23')}.</p>
      <p>Put the two together and the arithmetic is unavoidable: <strong>the overwhelming majority of people carrying an LHON mutation never find out.</strong></p>
    </div></div>

    <h2>Penetrance: the number that fell by a factor of three</h2>
    <p class="sec" style="max-width:78ch">${g('penetrance', 'Penetrance')} is the share of carriers who actually lose vision. If you read older material you will meet "about 50% of males and 10% of females". Newer work gives much lower figures, and the reason is a classic piece of epidemiological reasoning worth understanding.</p>
    <div data-chart="penet"></div>

    <div class="grid g2">
      <div class="card"><h4>Why the old numbers were too high</h4>
        <p class="small sec">Classical pedigree studies start from a family that came to attention <em>because someone went blind</em>. Such families are enriched for whatever else raises risk &mdash; haplogroup, modifier genes, shared environment &mdash; and unaffected male relatives were often simply not counted${c('mackey23', 'lopez21')}. The Australian authors note that in their largest pedigree, the share of adult males losing vision fell from 75% to below 15% within two generations, attributing this partly to better counting of unaffected men${c('lopez21')}.</p></div>
      <div class="card"><h4>Why the new numbers are not the whole story either</h4>
        <p class="small sec">Population-genomic estimates of 1&ndash;2.5% come from people found incidentally in biobanks, who have no selected family background at all${c('mackey23', 'watson23')}. Mackey's own reconciliation: the pedigree figure (~17% for males) applies to <strong>relatives of an affected person</strong>, and the 1&ndash;2.5% figure to <strong>incidental carriers</strong>${c('mackey23')}.</p>
        <p class="small sec"><strong>For a family reading this guide, the pedigree numbers are the relevant ones.</strong> You are, by definition, in the first group.</p></div>
    </div>

    <h2>Who, and at what age</h2>
    <div class="cols">
      <div>
        <div data-chart="age"></div>
      </div>
      <div>
        <div class="tiles" style="grid-template-columns:1fr;margin-top:0">
          <div class="tile"><div class="lab">Male to female ratio</div><div class="val">~3 : 1</div><div class="note">In 1,517 patients; approximately 1:1 under age 5 and over 45. Australia 2.92:1; Japan 93.2% male${c('poincenot20', 'lopez21', 'ueda17')}</div></div>
          <div class="tile"><div class="lab">Peak onset, males</div><div class="val">15–24</div><div class="note">41.3% of affected males. Female onset is spread evenly across ages${c('lopez21')}</div></div>
          <div class="tile"><div class="lab">Onset at 50 or older</div><div class="val">5–12%</div><div class="note">Estimates: 10%, 9.2%, or 5.4% of males and 11.8% of females${c('poincenot20', 'kirkman09', 'lopez21')}</div></div>
          <div class="tile"><div class="lab">A male carrier reaching 50 unaffected</div><div class="val">&lt;1 in 20</div><div class="note">remaining lifetime risk — though it "never falls to zero"${c('genereviews')}</div></div>
        </div>
      </div>
    </div>

    <h2>Is LHON becoming more common? And could screens be involved?</h2>
    <div class="callout crit"><span class="ico">■</span><div>
      <b class="t">The direct answer: no evidence of either</b>
      <p><strong>On frequency:</strong> no evidence that LHON onset is becoming more frequent was found. Japan's estimated new cases were <em>lower</em> in 2019 (69) than 2014 (117)${c('takano22', 'ueda17')}. In Australia's largest pedigree, penetrance fell across generations${c('lopez21')}. What <em>is</em> changing is who gets counted: LHON variants now appear on consumer genotyping arrays, revealing large numbers of unaffected carriers, and women and older patients were under-ascertained historically${c('mackey23', 'poincenot20')}.</p>
      <p><strong>On mutation frequency:</strong> these variants are inherited and usually homoplasmic, and de novo events are rare${c('genereviews')}. No study suggests any exposure changes how often the mutation arises. Screens cannot plausibly do this.</p>
      <p><strong>On screens as a trigger:</strong> no study shows that screens or blue light trigger LHON. One study has actually measured screen time: Zheng and colleagues studied 147 Chinese m.11778G&gt;A patients and found median onset age fell from 16.65 to 14.17 years during COVID-19 restrictions, with screen time higher (p=0.007). <strong>But in multivariate analysis only second-hand smoke and mask-wearing were independent risk factors; screen time was "insignificantly associated"</strong>${c('zheng23')}. It is a small, retrospective, single-centre questionnaire study, and mask-wearing appearing as a "risk factor" is a strong hint of confounding.</p>
      <p>A 2025 paper proposes light toxicity as a cofactor, but it is a hypothesis paper with no data and does not mention screens${c('gonzalez25')}. A 2024 review of environmental factors in LHON has no section on light or screens at all${c('layrolle24')}.</p>
      <p><strong>Honest summary:</strong> the question is reasonable and has not been properly studied. Nothing currently supports it. Smoking is the exposure with real evidence &mdash; see the <a href="#/lifestyle">lifestyle section</a>.</p>
    </div></div>

    <h2>Recovery</h2>
    <p class="sec" style="max-width:78ch">Some vision comes back for some people. How often depends more on which mutation you carry than on anything else &mdash; which is why getting the genetic result matters for expectations, even though it does not change treatment much.</p>
    <div data-chart="recov"></div>

    <div class="grid g2">
      <div class="card"><h4>When recovery happens</h4>
        <p class="small sec">The Dutch cohort found recovery "did not take place within the first year" and "was uncommon after four years"${c('spruijt06')}. No other source quantifies the window. Partial recovery often appears as islands of vision inside the blind area &mdash; "fenestrations" &mdash; or as a smaller, less dense scotoma, rather than a clean return to normal. Recovery, when it occurs, is "usually incomplete"${c('genereviews')}.</p></div>
      <div class="card"><h4>What counts as recovery</h4>
        <p class="small sec">Definitions varied across older studies, which is part of why the ranges are so wide${c('newman20', 'genereviews')}. Modern trials use ${g('crr', 'clinically relevant recovery')}: moving from off-chart to at least 5 ETDRS letters, or gaining at least 10 letters if already on-chart${c('leros24')}. For calibration: spontaneous CRR was 5.3% in the RHODOS placebo arm but 15.2% at six months in the LEROS natural-history group${c('leros24')}.</p></div>
      <div class="card"><h4>Age at onset matters as much as mutation</h4>
        <p class="small sec">Onset at 12 or younger: 39% reached about 20/40 or better in at least one eye, and 19% stayed below 0.05${c('majander17')}. Onset before 9 does better than 9&ndash;12${c('barboni23')}. Teen and adult onset with m.11778G&gt;A has the worst outcome of any group${c('reality21', 'newman20')}.</p></div>
      <div class="card"><h4>A conflict worth flagging</h4>
        <p class="small sec">m.3460G&gt;A is usually quoted at 15&ndash;25% recovery and regarded by experts as having the worst prognosis${c('genereviews')}. Yet the LEROS natural-history cohort saw <strong>61.1% spontaneous recovery at 24 months</strong> in early-phase m.3460 eyes${c('leros24')}. The sample was small. Both numbers are in the literature; neither should be presented alone.</p></div>
    </div>

    <details class="deep"><summary>Deeper: why "how many people have LHON in the US" has no good answer <span class="lvl">Data quality</span></summary><div class="body">
      <p>This guide looked for a peer-reviewed count of people affected in the United States or worldwide and did not find one.</p>
      <p>The figures circulating &mdash; about 100 new US cases a year, about 4,000 legally blind in the US, about 35,000 worldwide &mdash; come from an advocacy organisation's website and are given without a source${c('lhon_demo')}. They may well be reasonable; they are simply not verifiable, and this guide will not launder them into a citation they do not have.</p>
      <p>What <em>is</em> published: Japan estimated 117 new cases in 2014 and 69 in 2019${c('ueda17', 'takano22')}; Denmark estimated about 15 newly affected families per century${c('rosenberg16')}. Extrapolating from those to the US means assuming comparable ancestry mix and ascertainment, which is exactly the assumption the penetrance literature shows to be shaky.</p>
    </div></details>`;
  },
  init(root) {
    const C = LHON.charts;
    const dh = root.querySelector('[data-chart="dots"]');
    C.card(dh, {
      title: 'One in 45,000',
      sub: 'The European meta-analysis figure for the prevalence of LHON-related vision loss. Each dot is a person; the orange one has LHON. Country estimates range from 1 in 31,000 to 1 in 127,000.',
      foot: LHON.src('mascialino12', 'ywm03', 'lopez21', 'esteban24'),
      body: (el) => C.dotMatrix(el, { n: 45000, height: 215, hit: 20310, label: 'one person with LHON' }),
    });

    const prev = [
      { label: 'NE England', sub: 'Yu-Wai-Man 2003', value: 3.22, text: '1 in 31,000' },
      { label: 'Netherlands', sub: 'Spruijt 2006 — "very likely an underestimation"', value: 2.56, text: '1 in 39,000' },
      { label: 'Europe, meta-analysis', sub: 'Mascialino 2012', value: 2.22, text: '1 in 45,000', color: 'var(--series-2)' },
      { label: 'Finland', sub: 'Puomila 2007', value: 2.0, text: '1 in 50,000' },
      { label: 'Japan', sub: 'Takano 2022, 2,491 patients', value: 2.0, text: '1 in 50,000' },
      { label: 'Denmark', sub: 'Rosenberg 2016, 104 living affected', value: 1.85, text: '1 in 54,000' },
      { label: 'Australia', sub: 'Lopez Sanchez 2021', value: 1.46, text: '1 in 68,403' },
      { label: 'Madrid', sub: 'Esteban-Vasallo 2024, capture–recapture', value: 0.79, text: '1 in 127,000' },
    ];
    C.card(root.querySelector('[data-chart="prev"]'), {
      title: 'Prevalence of LHON vision loss, by country',
      sub: 'Cases per 100,000 people. Differences reflect real genetic variation (founder effects, haplogroup distribution) and differences in how thoroughly each country counted. Orange is the pooled European figure.',
      foot: LHON.src('ywm03', 'spruijt06', 'mascialino12', 'puomila07', 'takano22', 'rosenberg16', 'lopez21', 'esteban24'),
      legend: [{ label: 'National estimate', color: 'var(--series-1)' }, { label: 'European meta-analysis', color: 'var(--series-2)' }],
      table: { head: ['Population', 'Per 100,000', 'As "1 in N"'], rows: prev.map((r) => [r.label + ' — ' + r.sub, r.value, r.text]) },
      body: (el) => C.hbar(el, prev, { max: 4.3, ticks: [0, 1, 2, 3, 4], fmt: (v) => v.toFixed(2) }),
    });

    const pen = [
      { label: 'Males — classical pedigrees', sub: 'GeneReviews / Spruijt 2006', value: 50, color: 'var(--deemph)' },
      { label: 'Males — Australian pedigrees', sub: 'Lopez Sanchez 2021, n=2,633 carriers', lo: 16.1, hi: 19.1, mid: 17.5, color: 'var(--series-1)' },
      { label: 'Males — Dutch, as recounted', sub: 'cited in Lopez Sanchez 2021', value: 29, color: 'var(--series-1)' },
      { label: 'Females — classical pedigrees', sub: 'GeneReviews', value: 10, color: 'var(--deemph)' },
      { label: 'Females — Australian pedigrees', sub: 'Lopez Sanchez 2021, n=2,935 carriers', lo: 4.6, hi: 6.3, mid: 5.4, color: 'var(--series-5)' },
      { label: 'Everyone — UK Biobank based', sub: 'Mackey 2023', value: 2.5, color: 'var(--series-3)' },
      { label: 'Everyone — Australian population genomes', sub: 'Watson 2023, 5 carriers in 4,012', lo: 0.5, hi: 3.4, mid: 1.11, color: 'var(--series-3)' },
    ];
    C.card(root.querySelector('[data-chart="penet"]'), {
      title: 'Lifetime chance that a carrier loses vision',
      sub: 'Grey = the classical textbook figures. Blue and pink = large modern pedigree studies, the right numbers for relatives of an affected person. Green = population-genomic estimates for carriers found incidentally, with no family history. Bars with a dot show a published confidence interval.',
      foot: LHON.src('genereviews', 'lopez21', 'mackey23', 'watson23', 'spruijt06'),
      legend: [{ label: 'Classical pedigree figures', color: 'var(--deemph)' }, { label: 'Modern pedigree studies — males', color: 'var(--series-1)' }, { label: 'Modern pedigree studies — females', color: 'var(--series-5)' }, { label: 'Population-genomic, incidental carriers', color: 'var(--series-3)' }],
      table: { head: ['Estimate', 'Source', 'Value'], rows: [['Males, classical', 'GeneReviews', '~50%'], ['Males, Australia', 'Lopez Sanchez 2021', '17.5% (CI 16.1–19.1)'], ['Males, Netherlands', 'cited in Lopez Sanchez', '29%'], ['Females, classical', 'GeneReviews', '~10%'], ['Females, Australia', 'Lopez Sanchez 2021', '5.4% (CI 4.6–6.3)'], ['By mutation, males (Australia)', 'Lopez Sanchez 2021', 'm.11778 16.2%, m.14484 18.4%, m.3460 18.0%'], ['By mutation, females (Australia)', 'Lopez Sanchez 2021', 'm.11778 4.3%, m.14484 3.4%, m.3460 5.7%'], ['Overall, UK Biobank', 'Mackey 2023', '~2.5%'], ['Overall, Australian genomes', 'Watson 2023', '1.11% (CI 0.5–3.4)']] },
      body: (el) => C.hbar(el, pen, { max: 58, unit: '%', ticks: [0, 10, 20, 30, 40, 50] }),
    });

    const age = [
      { label: 'Median onset, males', sub: 'Australia (range 1–67)', value: 22 },
      { label: 'Median onset, females', sub: 'Australia (range 2–81)', value: 21 },
      { label: 'Mean onset', sub: 'Kirkman 2009 (SD 14.9)', value: 27.9 },
      { label: 'Median onset, males', sub: 'Japan 2019', value: 28.5 },
      { label: 'Median onset, females', sub: 'Japan 2019', value: 49.5 },
    ];
    C.card(root.querySelector('[data-chart="age"]'), {
      title: 'Age at onset',
      sub: 'In years. The Japanese figures differ markedly from the Australian ones; the authors attribute the rise over time to population ageing. Onset in childhood is not rare: 8.8% of affected males and 10.1% of affected females were 10 or younger.',
      foot: LHON.src('lopez21', 'kirkman09', 'takano22'),
      table: { head: ['Measure', 'Age (years)'], rows: [['Median, males (Australia)', '22, range 1–67'], ['Median, females (Australia)', '21, range 2–81'], ['Mean (Kirkman 2009)', '27.9 (SD 14.9)'], ['Median, males (Japan 2019)', '28.5'], ['Median, females (Japan 2019)', '49.5'], ['Onset at ≤10 years', '8.8% of males, 10.1% of females'], ['Onset under 12 (REALITY)', '5 of 44 = 11%']] },
      body: (el) => C.hbar(el, age, { max: 56, unit: ' y', ticks: [0, 10, 20, 30, 40, 50] }),
    });

    const rec = [
      { label: 'm.14484T>C', sub: 'GeneReviews range', lo: 37, hi: 64, mid: 50, color: 'var(--series-3)' },
      { label: 'm.14484T>C', sub: 'French Canadians', value: 58, color: 'var(--series-3)' },
      { label: 'm.3460G>A', sub: 'GeneReviews range', lo: 15, hi: 25, mid: 20, color: 'var(--series-4)' },
      { label: 'm.3460G>A', sub: 'LEROS natural history, 24 mo, small n', value: 61.1, color: 'var(--series-4)' },
      { label: 'm.11778G>A', sub: 'GeneReviews range', lo: 4, hi: 25, mid: 14.4, color: 'var(--series-2)' },
      { label: 'm.11778G>A', sub: 'Newman meta-analysis, all ages', value: 14.4, color: 'var(--series-2)' },
      { label: 'm.11778G>A', sub: 'Newman meta-analysis, onset ≥15 y', value: 11.3, color: 'var(--series-2)' },
      { label: 'Onset ≤12 years', sub: '≈20/40 or better in one eye', value: 39, color: 'var(--series-1)' },
    ];
    C.card(root.querySelector('[data-chart="recov"]'), {
      title: 'Spontaneous recovery, by mutation and age',
      sub: 'Percentage of patients showing meaningful visual recovery without treatment. The ranges are wide because older studies defined "recovery" differently. Note the two m.3460G>A rows: the usual quoted range and a conflicting recent cohort result, both shown.',
      foot: LHON.src('genereviews', 'macmillan98', 'newman20', 'leros24', 'majander17', 'spruijt06'),
      legend: [{ label: 'm.14484T>C — best outcome', color: 'var(--series-3)' }, { label: 'm.3460G>A', color: 'var(--series-4)' }, { label: 'm.11778G>A — worst outcome', color: 'var(--series-2)' }, { label: 'Childhood onset', color: 'var(--series-1)' }],
      table: { head: ['Group', 'Source', 'Recovery'], rows: rec.map((r) => [r.label, r.sub, r.value != null ? r.value + '%' : r.lo + '–' + r.hi + '%']) },
      body: (el) => C.hbar(el, rec, { max: 76, unit: '%', ticks: [0, 20, 40, 60] }),
    });
  },
});
