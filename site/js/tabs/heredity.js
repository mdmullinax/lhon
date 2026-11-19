LHON.registerTab('heredity', {
  title: 'Who else in the family', nav: 'Who else in the family',
  render() {
    const c = LHON.c, g = LHON.g;
    return `
    <div class="kicker">Section 12 · Inheritance</div>
    <h1>What this means for a sister, a mother, and future children</h1>
    <p class="lede">Mitochondrial inheritance has one rule, and it is absolute: it passes down the maternal line only. Once you have that, the whole family tree resolves &mdash; and so does the question most families are actually asking, which is what it means for a daughter who might want children one day.</p>

    <h2>The rule</h2>
    <div class="eli5">
      <p>Everyone gets their mitochondria from their mother's egg. Sperm contribute essentially none. So:</p>
      <ul style="margin-bottom:0">
        <li>A <strong>woman</strong> with the variant passes it to <strong>every one of her children</strong>, sons and daughters alike.</li>
        <li>A <strong>man</strong> with the variant passes it to <strong>none of his children</strong>. The line stops with him.</li>
      </ul>
    </div>
    <p class="sec" style="max-width:78ch">Formally: transmission is strictly maternal${c('genereviews')}. All siblings of a patient inherit the variant. Where the mother is ${g('heteroplasmy', 'heteroplasmic')}, a child may receive a lower mutant load, or possibly none${c('genereviews', 'ywm03')}. And a point that cannot be stressed enough: <strong>carrying the variant does not predict whether, when, or how severely vision is lost</strong>${c('genereviews')}.</p>

    <div data-chart="tree"></div>

    <h2>A sister of an affected young man: her actual numbers</h2>
    <p class="sec" style="max-width:78ch">This is the question that brings families to genetic counselling, so here are the figures plainly, from the largest pedigree study available.</p>
    <div data-chart="sister"></div>

    <div class="grid g2">
      <div class="card"><h4>Her own risk</h4>
        <p class="small sec">About <strong>5.4%</strong> in the Australian pedigree data (4.3% for m.11778G&gt;A specifically); the classical figure is about 10%; French-Canadian m.14484 families gave 5% for sisters${c('lopez21', 'genereviews', 'macmillan98')}.</p>
        <p class="small sec">One difference from her brother: <strong>female onset is spread evenly across all ages</strong>, where male onset peaks sharply at 15&ndash;24${c('lopez21')}. So her risk does not concentrate in her twenties the way his did &mdash; and it does not fall away as sharply either.</p></div>
      <div class="card"><h4>Her future children</h4>
        <p class="small sec">All of them would inherit the variant. Their risk of actually losing vision: roughly <strong>17.5% for a son and 5.4% for a daughter</strong> on the Australian overall figures${c('lopez21')}. French-Canadian m.14484 pedigrees gave 30% for nephews and 3% for nieces${c('macmillan98')}; four large Australian pedigrees gave 16.6&ndash;34.9% for nephews${c('lopez21')}.</p>
        <p class="small sec">One important modifier: <strong>if the mother is herself affected</strong>, the risk to her children is higher &mdash; 37.1% of sons and 29.5% of daughters in the Australian data, and 53% / 23% in a Dutch equivalent. The French-Canadian study found no such effect${c('lopez21', 'macmillan98')}.</p></div>
    </div>

    <div class="callout info"><span class="ico">◆</span><div>
      <b class="t">Framing that families find useful</b>
      <p>A 17-year-old sister reading this is being told that if she has a son, there is roughly a one-in-six chance he loses central vision &mdash; and roughly a five-in-six chance he does not. Both halves of that sentence are true and the second half is the larger one. The same arithmetic that makes LHON frightening also means <strong>most carriers in most generations are fine</strong>, which is exactly why the variant has travelled silently down the family line for generations without anyone knowing.</p>
      <p>It is also worth saying that she has years to think about this, that the options below are already real and improving, and that nothing needs deciding now.</p>
    </div></div>

    <h2>What genetic counselling offers</h2>
    <p class="sec" style="max-width:78ch">Molecular confirmation for each maternal relative, age- and sex-specific risk estimates, haplogroup context, advice on trigger avoidance, and a walk through reproductive options${c('genereviews', 'lopez21', 'mackey25couns')}. It is worth going even when the answer seems predictable, because the counsellor can give <em>this family's</em> numbers rather than the literature's averages.</p>

    <h2>Reproductive options</h2>
    <div data-chart="repro"></div>

    <div class="callout warn"><span class="ico">▲</span><div>
      <b class="t">Why embryo testing mostly does not work here</b>
      <p>Preimplantation genetic testing works by selecting embryos that do not carry the variant. In LHON this usually fails for a structural reason: <strong>most mothers are ${g('homoplasmy', 'homoplasmic')}</strong>, so every embryo carries it, and there is nothing to select between. And even if there were, presence of the variant does not predict disease${c('genereviews')}. For homoplasmic or high-heteroplasmy women, "PGT is not an option"${c('mcfarland25')}.</p>
      <p>Where a mother is heteroplasmic with a low load, the calculus changes and PGT may be discussable. This is precisely the kind of question to put to a genetic counsellor rather than resolve from a website.</p>
    </div></div>

    <h2>Mitochondrial donation, in 2026</h2>
    <p class="sec" style="max-width:78ch">This is the technique that replaces the mother&rsquo;s mitochondria with a donor&rsquo;s while keeping her nuclear DNA. It has moved from theory to live births, and LHON families are unusually prominent in the data.</p>

    <div class="steps">
      <div class="step"><div class="num">UK</div><div><div class="when">Legal since 2015 · 8 live births reported 2025</div><h4>United Kingdom &mdash; the only place it has produced children</h4>
        <p class="small sec">Legal under the 2015 Regulations. Newcastle Fertility Centre is the only licensed clinic and the HFEA approves each case individually; <strong>35 patients had been approved as of 1 July 2025</strong>${c('hfea', 'hfea25')}.</p>
        <p class="small sec">The 2025 New England Journal of Medicine reports: <strong>22 women underwent pronuclear transfer, producing 8 live births and 1 ongoing pregnancy</strong>. Maternal variant load in the babies' blood ranged from undetectable to 16%${c('hyslop25', 'mcfarland25')}.</p>
        <p class="small sec"><strong>LHON is a large share of this programme.</strong> Of 32 approved applications, 9 were m.11778G&gt;A, 4 were m.3460G&gt;A and 1 was m.14484T&gt;C. <strong>Five of the eight babies were born to mothers carrying LHON variants</strong> (one m.3460, four m.11778 including twins), and the ongoing pregnancy was also m.11778${c('mcfarland25')}.</p>
        <p class="small sec">Outcomes reported honestly by the authors: one m.11778 child had 12% maternal variant in blood and 13% in urine at birth. One child (mother m.3460) had self-limiting infant myoclonic epilepsy; one (mother m.4300) had hyperlipidaemia and arrhythmia, both treated. All were developing normally${c('mcfarland25')}.</p></div></div>
      <div class="step"><div class="num">AU</div><div><div class="when">Maeve’s Law 2022 · no births yet</div><h4>Australia &mdash; licensed for pre-clinical work</h4>
        <p class="small sec">Maeve's Law passed in March 2022 and took effect on 1 October 2022, with a staged framework and funding for a single trial${c('health_gov_au')}. The mitoHOPE programme at Monash holds a pre-clinical research and training licence, approved November 2025; <strong>no clinical trial has started and there are no Australian births</strong>, with first participants expected in the second half of 2027${c('mitohope')}.</p></div></div>
      <div class="step"><div class="num">US</div><div><div class="when">Blocked by appropriations rider since 2015</div><h4>United States &mdash; not legally available</h4>
        <p class="small sec">Since December 2015, annual appropriations riders have barred the FDA from accepting applications involving heritable genetic modification of embryos, so <strong>clinical research using mitochondrial replacement in humans cannot legally proceed</strong>${c('fda_mrt')}. Secondary sources describe the rider as renewed annually; this guide could not verify the exact text of the 2026 rider.</p></div></div>
    </div>

    <h2>The other options, which are available everywhere</h2>
    <div class="grid g2">
      <div class="card"><h4>Egg donation</h4><p class="small sec">Removes the mitochondrial risk entirely, because the egg's mitochondria come from the donor. The child would not be genetically related to the mother${c('lily_repro')}. The most straightforward and widely available route, and one that families sometimes overlook while focusing on newer technology.</p></div>
      <div class="card"><h4>Adoption</h4><p class="small sec">Listed alongside the others by patient organisations as a legitimate choice rather than a fallback${c('lily_repro')}.</p></div>
      <div class="card"><h4>Having children without intervention</h4><p class="small sec">Also a legitimate choice, and the one most carriers make. The children would carry the variant with roughly a 17.5% risk for sons and 5.4% for daughters of ever losing vision${c('lopez21')} — against a background in which treatments are improving and the diagnostic and support landscape in twenty years will not be today's.</p></div>
      <div class="card"><h4>Prenatal testing</h4><p class="small sec">Technically possible, hard to interpret, and for most LHON families not informative for the reasons above${c('genereviews')}.</p></div>
    </div>

    <h2>Practical things for the maternal line to do now</h2>
    <ul class="checklist" data-key="heredity" style="max-width:72ch">
      <li>Draw the maternal family tree — who is related through whom, on the mother's side only</li>
      <li>Identify which relatives are maternal-line carriers by definition (all children of a carrier woman)</li>
      <li>Arrange genetic counselling for the family, not just the patient${c('aph_teen')}</li>
      <li>Make sure every maternal-line relative knows not to smoke, and why${c('genereviews')}</li>
      <li>Make sure every maternal-line relative knows to seek same-week review for any new visual symptom${c('genereviews')}</li>
      <li>Check vitamin B12 in carriers — 21% of carriers under 65 were deficient in one cohort${c('zibold22')}</li>
      <li>Consider long-term disability insurance for unaffected carriers while they are insurable${c('lhon_fin')}</li>
      <li>Consider joining the LHON registry as a carrier — it accepts carriers, not only affected people${c('lhon_registry')}</li>
      <li>Connect carrier women with the LHON Sisterhood group${c('lhon_zoom')}</li>
    </ul>

    <div class="callout good"><span class="ico">●</span><div>
      <b class="t">What carriers should <em>not</em> do</b>
      <p><strong>Routine surveillance of asymptomatic carriers is not recommended</strong>; there is no test that predicts conversion, and repeated scanning mostly produces anxiety${c('genereviews')}. Nerve fibre swelling in a carrier "is not indicative of progression to vision loss"${c('spiegel22')}. <strong>Carriers should not take idebenone</strong> — its effects in that group are unknown${c('umdf')}.</p>
      <p>The useful posture is not vigilance but readiness: know the symptom, know who to call, and go the same week it happens.</p>
    </div></div>`;
  },
  init(root) {
    const C = LHON.charts;
    const tree = root.querySelector('[data-chart="tree"]');
    C.card(tree, {
      title: 'How the variant travels',
      sub: 'Filled shapes carry the variant. Mitochondrial DNA comes only from the egg, so every child of a carrier mother inherits it and no child of a carrier father does — regardless of the child’s sex.',
      foot: LHON.src('genereviews'),
      body: (el) => {
        const sq = (f, l) => `<div style="text-align:center"><div style="width:34px;height:34px;margin:0 auto 4px;border:2px solid var(--text-secondary);background:${f ? 'var(--series-2)' : 'transparent'}"></div><div class="small muted" style="font-size:.7rem">${l}</div></div>`;
        const ci = (f, l) => `<div style="text-align:center"><div style="width:34px;height:34px;margin:0 auto 4px;border:2px solid var(--text-secondary);border-radius:50%;background:${f ? 'var(--series-2)' : 'transparent'}"></div><div class="small muted" style="font-size:.7rem">${l}</div></div>`;
        el.innerHTML = `<div class="grid g2" style="margin:0">
          <div style="border:1px solid var(--border);border-radius:10px;padding:16px">
            <h4 style="margin:0 0 4px;font-size:.95rem">A carrier mother</h4>
            <p class="small muted">Passes it to every child</p>
            <div style="display:flex;gap:24px;justify-content:center;margin:14px 0 10px">${ci(1, 'mother')}${sq(0, 'father')}</div>
            <div style="height:16px;border-top:1px solid var(--border-strong);width:60%;margin:0 auto"></div>
            <div style="display:flex;gap:18px;justify-content:center;flex-wrap:wrap">${sq(1, 'son')}${ci(1, 'daughter')}${sq(1, 'son')}${ci(1, 'daughter')}</div>
            <p class="small sec" style="margin:14px 0 0">All four inherit it. Roughly 17.5% of the sons and 5.4% of the daughters would ever lose vision.</p>
          </div>
          <div style="border:1px solid var(--border);border-radius:10px;padding:16px">
            <h4 style="margin:0 0 4px;font-size:.95rem">An affected father</h4>
            <p class="small muted">Passes it to nobody</p>
            <div style="display:flex;gap:24px;justify-content:center;margin:14px 0 10px">${ci(0, 'mother')}${sq(1, 'father')}</div>
            <div style="height:16px;border-top:1px solid var(--border-strong);width:60%;margin:0 auto"></div>
            <div style="display:flex;gap:18px;justify-content:center;flex-wrap:wrap">${sq(0, 'son')}${ci(0, 'daughter')}${sq(0, 'son')}${ci(0, 'daughter')}</div>
            <p class="small sec" style="margin:14px 0 0">None inherit it. For an affected young man, this is usually the most reassuring single fact in the whole guide.</p>
          </div></div>
          <p class="small muted" style="margin-top:12px">Squares are male, circles female, orange = carries the variant. Carrying it is not the same as being affected.</p>`;
      },
    });

    const sis = [
      { label: 'Her own lifetime risk', sub: 'Australia, female carriers', lo: 4.6, hi: 6.3, mid: 5.4, color: 'var(--series-5)' },
      { label: 'Her own lifetime risk', sub: 'classical figure', value: 10, color: 'var(--deemph)' },
      { label: 'Each of her future sons', sub: 'Australia, overall male figure', lo: 16.1, hi: 19.1, mid: 17.5, color: 'var(--series-1)' },
      { label: 'Each of her future sons', sub: 'four large Australian pedigrees', lo: 16.6, hi: 34.9, mid: 25, color: 'var(--series-1)' },
      { label: 'Each of her future sons', sub: 'French-Canadian m.14484 nephews', value: 30, color: 'var(--series-1)' },
      { label: 'Each of her future daughters', sub: 'Australia, overall female figure', lo: 4.6, hi: 6.3, mid: 5.4, color: 'var(--series-5)' },
      { label: 'Each of her future daughters', sub: 'French-Canadian m.14484 nieces', value: 3, color: 'var(--series-5)' },
      { label: 'Her children, if she is herself affected', sub: 'sons, Australia', value: 37.1, color: 'var(--series-8)' },
      { label: 'Her children, if she is herself affected', sub: 'daughters, Australia', value: 29.5, color: 'var(--series-8)' },
    ];
    C.card(root.querySelector('[data-chart="sister"]'), {
      title: 'Risk of ever losing vision — for a carrier sister and her future children',
      sub: 'Percentages. Bars with a dot show a published range or confidence interval. The grey row is the older classical estimate, shown for comparison. The bottom two rows apply only if she herself becomes affected, which is the less likely outcome.',
      foot: LHON.src('lopez21', 'genereviews', 'macmillan98'),
      legend: [{ label: 'Female risk', color: 'var(--series-5)' }, { label: 'Male risk', color: 'var(--series-1)' }, { label: 'If the mother is herself affected', color: 'var(--series-8)' }, { label: 'Older classical estimate', color: 'var(--deemph)' }],
      table: { head: ['Who', 'Source', 'Risk'], rows: sis.map((r) => [r.label, r.sub, r.value != null ? r.value + '%' : `${r.mid}% (${r.lo}–${r.hi}%)`]) },
      body: (el) => C.hbar(el, sis, { max: 42, unit: '%', ticks: [0, 10, 20, 30, 40] }),
    });

    const repro = [
      ['Have children without intervention', 'Available everywhere', 'All children inherit the variant; ~17.5% of sons and ~5.4% of daughters would ever lose vision', 'The choice most carriers make', 'lopez21'],
      ['Egg donation', 'Available everywhere', 'Removes the mitochondrial risk completely', 'Child is not genetically related to the mother', 'lily_repro'],
      ['Adoption', 'Available everywhere', 'Removes the risk', 'Listed by patient organisations as a legitimate option', 'lily_repro'],
      ['Preimplantation genetic testing (PGT)', 'Available in many countries', 'Usually not informative in LHON', 'Most mothers are homoplasmic, so every embryo carries it; "PGT is not an option" for them', 'mcfarland25'],
      ['Prenatal testing', 'Available', 'Technically possible, hard to interpret', 'Presence of the variant does not predict disease', 'genereviews'],
      ['Mitochondrial donation', 'UK only, in practice', '8 live births reported in 2025, 5 of them to mothers with LHON variants', 'Newcastle only, each case HFEA-approved; Australia licensed for pre-clinical work; blocked in the US', 'mcfarland25'],
    ];
    root.querySelector('[data-chart="repro"]').innerHTML = `<div class="tblwrap"><table class="tbl"><thead><tr><th>Option</th><th>Where</th><th>Effect on risk</th><th>The catch</th></tr></thead><tbody>${repro.map((r) => `<tr><td style="font-weight:600">${r[0]}${LHON.c(r[4])}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td></tr>`).join('')}</tbody></table></div><p class="chart-foot">${LHON.src('genereviews', 'lily_repro', 'mcfarland25', 'hyslop25', 'hfea', 'mitohope', 'fda_mrt')}</p>`;
  },
});
