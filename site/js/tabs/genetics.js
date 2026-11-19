LHON.registerTab('genetics', {
  title: 'The mutations', nav: 'The mutations',
  render() {
    const c = LHON.c, g = LHON.g;
    return `
    <div class="kicker">Section 05 · Genetics</div>
    <h1>Three letters, and everything we do and do not know about them</h1>
    <p class="lede">Human ${g('mtdna', 'mitochondrial DNA')} is 16,569 letters long and holds just 37 genes. Change one letter in one of a handful of those genes and you get LHON. This section covers which letters, what is firmly established, what is half-understood, and what remains genuinely unexplained.</p>

    <h2>The genome in question</h2>
    <div class="eli5">
      <p>You have two sets of genes. The famous one lives in the cell nucleus: 3 billion letters, inherited half from each parent. The other is tiny &mdash; a circle of 16,569 letters sitting inside the mitochondria, with 37 genes, and you get it <strong>entirely from your mother</strong>. Fathers contribute none of it. That single fact drives the whole inheritance pattern of LHON.</p>
      <p>Of those 37 genes, 13 make proteins, and seven of those 13 are parts of one machine: ${g('complex1', 'Complex I')}. All three common LHON mutations hit one of those seven.</p>
    </div>

    <div class="tiles">
      <div class="tile"><div class="lab">Mitochondrial genome</div><div class="val">16,569</div><div class="note">base pairs, in a circle${c('ywm14')}</div></div>
      <div class="tile"><div class="lab">Genes it carries</div><div class="val">37</div><div class="note">13 proteins, 22 tRNAs, 2 rRNAs${c('ywm14')}</div></div>
      <div class="tile"><div class="lab">Of those, Complex I parts</div><div class="val">7</div><div class="note">ND1, ND2, ND3, ND4, ND4L, ND5, ND6 — all in the membrane arm${c('dang20')}</div></div>
      <div class="tile"><div class="lab">Copies per active cell</div><div class="val">Thousands</div><div class="note">"several thousands in metabolically active cells such as neurons"${c('ywm14')}</div></div>
    </div>

    <h2>The three primary mutations</h2>
    <div data-chart="muts"></div>
    <div data-chart="mutdetail"></div>

    <div class="callout info"><span class="ico">◆</span><div>
      <b class="t">The proportions change a lot by where you are</b>
      <p>Globally the three account for about 90% of LHON${c('genereviews')}, but the split between them is strikingly regional. In Asia m.11778G&gt;A dominates &mdash; 90.2% of 346 Chinese probands, 86.5% in Japan${c('jia06', 'ueda17')}. In north-east England m.14484T&gt;C reaches 33%${c('lopez21')}. Among French Canadians m.14484T&gt;C predominates through a founder effect, and was always ${g('homoplasmy', 'homoplasmic')} in those pedigrees${c('genereviews', 'macmillan98')}. In Madrid, unusually, m.3460G&gt;A was the most frequent${c('esteban24')}.</p>
    </div></div>

    <div data-chart="region"></div>

    <h2>Beyond the big three</h2>
    <div class="grid g2">
      <div class="card"><h4>About 30 rarer mtDNA variants</h4>
        <p class="small sec">GeneReviews tabulates 33 mtDNA variants in total. Eleven beyond the main three are footnoted as functionally confirmed in at least two independent pedigrees: m.14459G&gt;A, m.14482C&gt;G, m.14482C&gt;A, m.14495A&gt;G, m.14568C&gt;T, m.3635G&gt;A, m.3700G&gt;A, m.3733G&gt;A, m.4160T&gt;C, m.4171C&gt;A and m.10663T&gt;C${c('genereviews')}. MITOMAP maintains a "top 19" primary mutations list${c('mitomap')}.</p>
        <p class="small sec">This is why a negative three-mutation test does not end the investigation: the next step is sequencing the whole mitochondrial genome${c('jurkute19', 'srilekha25')}.</p></div>
      <div class="card"><h4>Recessive LHON — a genuinely different disease</h4>
        <p class="small sec">In 2021 a nuclear gene, <strong>DNAJC30</strong>, was shown to cause an LHON-like illness inherited in the ordinary recessive way &mdash; two copies needed, one from each parent, so fathers do transmit it${c('stenton21')}. A founder variant, c.152A&gt;G p.Tyr51Cys, accounts for about 90% of disease alleles and was found in 2.9% of a 1,202-person Central European optic neuropathy cohort${c('jmg22dnajc30')}.</p>
        <p class="small sec">It matters clinically: recessive LHON has <strong>earlier onset and more recovery</strong> than the mitochondrial form, and responds to idebenone${c('stenton21', 'stenton22')}. Other genes implicated include NDUFS2, MCAT and NDUFA12${c('lenaers23')}; by 2026, 11 nuclear complex I genes had been linked across 31 patients from 23 families, with NDUFS7, NDUFV1, NDUFAF2, NDUFAF4 and NDUFAF8 newly added${c('fiorini26')}.</p></div>
    </div>

    <h2>Homoplasmy, heteroplasmy, and why that word keeps appearing</h2>
    <div class="cols">
      <div class="prose">
        <p>Each cell holds many copies of mitochondrial DNA. If all carry the variant, that is ${g('homoplasmy', 'homoplasmy')}; if some do and some do not, ${g('heteroplasmy', 'heteroplasmy')}. LHON is <strong>usually homoplasmic</strong> &mdash; roughly 80&ndash;90% of families${c('ywm14')} &mdash; with heteroplasmy in about 10&ndash;15% of carriers${c('genereviews')}, or about 12% of individuals and 33% of families in north-east England${c('ywm03')}.</p>
        <p>Where heteroplasmy exists there appears to be a threshold. Carriers with under 75% mutant load in blood were unaffected in one study; males above 60% had more optic neuropathy in another; affected people generally sit above 70%${c('genereviews')}. No prospective study has tested this properly.</p>
        <p>Homoplasmy has two large consequences that come up later in this guide. It is why <strong>a mother passes the variant to every one of her children</strong>, and it is why <strong>embryo selection does not work</strong> for most families: if every embryo carries it, there is nothing to select${c('genereviews', 'mcfarland25')}. It is also why heteroplasmy-shifting gene editing &mdash; which works by destroying the mutant copies so the healthy ones take over &mdash; is not straightforwardly applicable to LHON${c('mok20')}.</p>
      </div>
      <div class="card"><h4>Does a de novo mutation happen?</h4>
        <p class="small sec">Up to 40% of patients have no known family history, which frightens people into assuming a new mutation${c('genereviews')}. Usually the explanation is simply low ${g('penetrance', 'penetrance')} &mdash; the variant has been passing silently through the maternal line for generations. A true de novo event is described as "rare": one de novo m.3460G&gt;A was found among 16 north-east England families${c('genereviews', 'ywm03')}.</p>
      </div>
    </div>

    <h2>Modifiers: why the same mutation behaves differently in different families</h2>
    <div class="grid g2">
      <div class="card"><h4>Haplogroup background</h4>
        <p class="small sec">Everyone's mitochondrial DNA belongs to a ${g('haplogroup', 'haplogroup')} &mdash; a branch of the maternal family tree defined by harmless variants. These branches change LHON risk measurably. In 3,613 subjects from 159 pedigrees: risk is higher with m.11778G&gt;A on haplogroup J2, m.14484T&gt;C on J1 and m.3460G&gt;A on K; and <em>lower</em> with m.11778G&gt;A on H${c('hudson07')}. In Australia, haplogroup J versus H gave an odds ratio of 2.85 (p=0.001)${c('lopez21')}. In 419 Chinese m.11778 pedigrees, haplogroups D4j, M7, M9 and M10 were enriched in high-penetrance families${c('mitomap', 'lopez21')}.</p></div>
      <div class="card"><h4>Nuclear and X-linked modifiers</h4>
        <p class="small sec">In three Chinese families, only people carrying <em>both</em> m.11778G&gt;A and an X-linked variant in <strong>PRICKLE3</strong> (p.Arg53Trp) were affected${c('yu20prickle')}. In laboratory ${g('ipsc', 'iPSC')}-derived retinal ganglion cells, the double mutation was dramatically worse than either alone: mitochondrial ATP fell to about 7&ndash;9% of control in double mutants against 66&ndash;73% with m.11778 alone${c('nie22')}. A 2026 study of 23 affected versus 28 unaffected carriers proposes heterozygous variants in metabolic and complex I pathways as a general "second hit"${c('arany26')}.</p></div>
    </div>

    <h2>What we know, half-know, and do not know</h2>
    <p class="sec" style="max-width:76ch">The single most useful thing a family can carry away from the genetics is a clear sense of which claims are solid. Here is that map, with each item graded.</p>
    <div data-chart="buckets"></div>

    <details class="deep"><summary>Deeper: the biggest open question &mdash; why is onset sudden? <span class="lvl">Unsolved</span></summary><div class="body">
      <p>A carrier has the mutation in every cell from conception. Their retinal ganglion cells work normally for fifteen, twenty, thirty years. Then over a few weeks they fail. <strong>Nothing in the literature explains this.</strong></p>
      <p>Spiegel and Sadun state it plainly: the mutations are necessary but "alone are insufficient", and "why vision loss is catastrophic and not more gradual is still not well understood", with evidence "limited given the lack of longitudinal studies in pre-clinical patients"${c('spiegel22')}. Another review simply says "some yet unknown trigger induces a respiratory chain dysfunction in the retinal ganglion cells"${c('hage21')}.</p>
      <p>Candidate explanations exist, none established:</p>
      <ul>
        <li><strong>A cascade among neighbouring axons.</strong> A 2022 model from the Sadun group has hydrogen peroxide diffusing between adjacent axons, so a small injury could trigger failure in its neighbours &mdash; which would convert a slow decline into a sudden collapse${c('carelli17', 'esmaeil22')}.</li>
        <li><strong>Loss of a compensation that was holding the line.</strong> Unaffected carriers run higher mitochondrial copy numbers (see <a href="#/cell">the cell section</a>); if that compensation fails, the margin disappears${c('giordano14')}.</li>
        <li><strong>An environmental trigger tipping a marginal system.</strong> Smoking has real supporting data; most other proposed triggers are anecdotal${c('kirkman09')}.</li>
      </ul>
      <p>The honest position: this is the central unsolved problem of LHON biology, and solving it would matter more for prevention than anything currently in trials.</p>
    </div></details>`;
  },
  init(root) {
    const C = LHON.charts, c = LHON.c;
    C.card(root.querySelector('[data-chart="muts"]'), {
      title: 'The three primary mutations account for about 90% of LHON worldwide',
      sub: 'Shares vary by region; these are the commonly quoted global figures. Roughly 30 further mtDNA variants and a growing list of nuclear genes cover most of the remainder.',
      foot: LHON.src('genereviews', 'peverelli21', 'ywm14'),
      table: { head: ['Variant', 'Gene', 'Protein change', 'Approx. share'], rows: [['m.11778G>A', 'MT-ND4', 'p.Arg340His', '~70% (60–75%)'], ['m.3460G>A', 'MT-ND1', 'p.Ala52Thr', '~15%'], ['m.14484T>C', 'MT-ND6', 'p.Met64Val', '~15%'], ['~30 rarer mtDNA variants + nuclear genes', 'various', '—', '~10%']] },
      body: (el) => C.segbar(el, [
        { label: 'm.11778G>A (MT-ND4)', value: 70, color: 'var(--series-1)' },
        { label: 'm.3460G>A (MT-ND1)', value: 11, color: 'var(--series-2)' },
        { label: 'm.14484T>C (MT-ND6)', value: 11, color: 'var(--series-3)' },
        { label: 'Rarer mtDNA variants and nuclear genes', value: 8, color: 'var(--deemph)' },
      ], { fmt: (v) => v + '%' }),
    });

    const det = [
      ['m.11778G>A', 'MT-ND4', 'p.Arg340His', 'Proton-pumping module', 'Most common everywhere; ~90% of Asian cases', 'Worst recovery: 4–25%, meta-analysis 11.3% for onset ≥15 y', 'The only variant any approved or late-stage gene therapy targets'],
      ['m.3460G>A', 'MT-ND1', 'p.Ala52Thr', 'Ubiquinone-binding module', 'Most severe biochemical defect — complex I activity fell 79% in one cybrid study', 'Poor: 15–25% (though a small LEROS subgroup saw 61% at 24 months)', 'Experts regard recovery as the worst of the three despite the quoted range'],
      ['m.14484T>C', 'MT-ND6', 'p.Met64Val', 'Proton-pumping module', 'Founder effect in French Canadians; 33% of cases in NE England', 'Best: 37–64%; 58% in French Canadians', 'Affects the ubiquinol product site rather than enzyme activity'],
    ];
    root.querySelector('[data-chart="mutdetail"]').innerHTML = `<div class="tblwrap"><table class="tbl"><thead><tr>
      <th>Variant</th><th>Gene</th><th>Amino acid</th><th>Where in Complex I</th><th>Distribution</th><th>Spontaneous recovery</th><th>Note</th></tr></thead>
      <tbody>${det.map((r) => `<tr>${r.map((v, i) => `<td${i === 0 ? ' style="font-weight:600;white-space:nowrap"' : ''}>${v}</td>`).join('')}</tr>`).join('')}</tbody></table></div>
      <p class="chart-foot">${LHON.src('genereviews', 'chi22', 'dang20', 'newman20', 'macmillan98', 'ghelli99', 'leros24')}</p>`;

    const reg = [
      { label: 'China', sub: 'n=346 probands', v: [90.2, 1.2, 8.7] },
      { label: 'Japan', sub: 'nationwide survey', v: [86.5, 6.8, 6.7] },
      { label: 'Australia', sub: '96 pedigrees', v: [64.5, 3.4, 20.3] },
      { label: 'Northern Europe', sub: 'typical range', v: [65, 10, 25] },
      { label: 'NE England', sub: 'as cited in Lopez Sanchez', v: [60, 7, 33] },
      { label: 'International self-report', sub: 'as cited in Lopez Sanchez', v: [69, 17, 13] },
    ];
    const cols = ['var(--series-1)', 'var(--series-2)', 'var(--series-3)'];
    C.card(root.querySelector('[data-chart="region"]'), {
      title: 'Which mutation, by population',
      sub: 'Percentages of genotyped cases. Rows do not always sum to 100 because rarer variants are omitted and cohorts were counted differently. Madrid is an outlier not shown here: m.3460G>A was the most frequent, 12 of 27 genotyped.',
      foot: LHON.src('jia06', 'ueda17', 'lopez21', 'genereviews', 'esteban24'),
      legend: [{ label: 'm.11778G>A', color: cols[0] }, { label: 'm.3460G>A', color: cols[1] }, { label: 'm.14484T>C', color: cols[2] }],
      table: { head: ['Population', 'm.11778G>A', 'm.3460G>A', 'm.14484T>C'], rows: reg.map((r) => [r.label + ' (' + r.sub + ')', r.v[0] + '%', r.v[1] + '%', r.v[2] + '%']) },
      body: (el) => {
        el.innerHTML = reg.map((r) => `<div style="margin-bottom:12px"><div style="display:flex;justify-content:space-between;font-size:.84rem;margin-bottom:4px"><span>${r.label}</span><span class="muted" style="font-size:.78rem">${r.sub}</span></div><div class="segbar" style="height:20px">${r.v.map((x, i) => `<div tabindex="0" style="flex:${x} 0 0;background:${cols[i]};font-size:.72rem" data-tip="${['m.11778G>A', 'm.3460G>A', 'm.14484T>C'][i]}: ${x}%">${x >= 12 ? x + '%' : ''}</div>`).join('')}<div style="flex:${Math.max(0, 100 - r.v[0] - r.v[1] - r.v[2])} 0 0;background:var(--surface-3)"></div></div></div>`).join('');
      },
    });

    const buckets = [
      ['known', 'The three primary variants cause LHON, by damaging Complex I', 4, 'genereviews'],
      ['known', 'Inheritance is strictly maternal: a mother passes it to all her children, a father to none', 4, 'genereviews'],
      ['known', 'Retinal ganglion cells die selectively; photoreceptors are spared', 4, 'genereviews'],
      ['known', 'Most carriers never lose vision — penetrance is incomplete', 4, 'lopez21'],
      ['known', 'Males are affected far more often than females (about 3:1 overall)', 4, 'poincenot20'],
      ['known', 'Smoking raises risk, roughly 2–3 fold', 3, 'kirkman09'],
      ['part', 'Haplogroup background shifts risk (J and K up, H down)', 3, 'hudson07'],
      ['part', 'Why males are more affected — oestrogen protects LHON cells in the laboratory', 2, 'giordano11'],
      ['part', 'Why the papillomacular bundle fails first — small, unmyelinated, energy-hungry fibres', 3, 'esmaeil22'],
      ['part', 'Nuclear and X-linked modifier genes exist, but only in a few documented families', 2, 'yu20prickle'],
      ['part', 'A heteroplasmy threshold exists, but has never been tested prospectively', 2, 'genereviews'],
      ['part', 'Unaffected carriers compensate by making more mitochondrial DNA', 3, 'giordano14'],
      ['unknown', 'Why only some carriers lose vision — "currently unknown"', 1, 'lopez21'],
      ['unknown', 'Why retinal ganglion cells specifically — "remains unexplained"', 1, 'genereviews'],
      ['unknown', 'Why onset is abrupt after decades of normal vision — no source explains this', 0, 'spiegel22'],
      ['unknown', 'Whether any environmental factor besides smoking matters', 1, 'layrolle24'],
    ];
    const grp = { known: ['Well understood', 'var(--series-3)'], part: ['Partly understood', 'var(--series-4)'], unknown: ['Unknown', 'var(--series-8)'] };
    root.querySelector('[data-chart="buckets"]').innerHTML = ['known', 'part', 'unknown'].map((k) => `
      <div class="card" style="margin-bottom:14px;border-left:3px solid ${grp[k][1]}">
        <h4 style="margin-bottom:10px">${grp[k][0]}</h4>
        ${buckets.filter((b) => b[0] === k).map((b) => `<div style="display:flex;gap:12px;align-items:baseline;padding:5px 0;border-top:1px solid var(--border)"><span style="flex:none;width:46px">${LHON.evid(b[2])}</span><span class="small sec">${b[1]}${c(b[3])}</span></div>`).join('')}
      </div>`).join('') + '<p class="small muted">Bars show how strong the supporting evidence is, from four (replicated human data) to zero (no explanation exists).</p>';
  },
});
