LHON.registerTab('lifestyle', {
  title: 'Lifestyle and health', nav: 'Lifestyle and health',
  render() {
    const c = LHON.c, g = LHON.g;
    return `
    <div class="kicker">Section 09 · Lifestyle</div>
    <h1>Smoking, drink, diet, exercise, supplements &mdash; graded honestly</h1>
    <p class="lede">This is the area where families are offered the most advice and the evidence is weakest. Everything below is graded: four bars means replicated human data, one bar means a single case report or a cell culture. Almost nothing here reaches four bars, and saying so plainly is more useful than a list of things to try.</p>

    <div class="callout info"><span class="ico">◆</span><div>
      <b class="t">The short version</b>
      <p><strong>Do not smoke.</strong> That is the one lifestyle measure with real, if imperfect, human evidence behind it. <strong>Avoid heavy or binge drinking.</strong> <strong>Check and correct vitamin B12 if it is low.</strong> <strong>Tell every prescriber about the LHON status</strong> &mdash; but do not refuse necessary treatment over a theoretical risk. Everything else on this page is expert opinion, laboratory data, or nothing at all.</p>
    </div></div>

    <h2>Smoking</h2>
    <div data-chart="smoking"></div>
    <div class="grid g2">
      <div class="card"><h4>What the main study found</h4>
        <p class="small sec">Kirkman and colleagues studied 196 affected and 206 unaffected carriers across 125 pedigrees. Any smoking versus none gave an odds ratio of <strong>1.96</strong> (95% CI 1.31&ndash;2.95); heavy maximum-intensity smoking <strong>3.16</strong> (1.82&ndash;5.50). After adjusting for age, sex and mutation, light cumulative smoking gave 1.93 and heavy 3.26 &mdash; a dose&ndash;response${c('kirkman09')}.</p>
        <p class="small sec">Notably, diet, exercise, recreational drugs, medication history and comorbidity showed <em>no</em> difference between affected and unaffected carriers in the same study${c('kirkman09')}.</p></div>
      <div class="card"><h4>And the study that disagrees</h4>
        <p class="small sec">Kerrison and colleagues studied 80 sibships and found no association with smoking &mdash; and drinkers were <em>less</em> likely to be affected (light OR 0.31, heavy OR 0.25). Their conclusion: "Tobacco and alcohol do not appear to promote vision loss"${c('kerrison00')}. This study exists and should be mentioned whenever the smoking figures are quoted.</p>
        <p class="small sec">Supporting Kirkman: late-onset patients had higher cumulative tobacco and alcohol than unaffected carriers${c('dimitriadis14')}, 58.2% of 67 late-onset Italian patients had a smoking history${c('battista26')}, and cigarette smoke condensate reduced mtDNA copy number in all fibroblasts but cut ATP only in LHON-mutant cells${c('giordano15')}.</p></div>
    </div>

    <div class="callout warn"><span class="ico">▲</span><div>
      <b class="t">One number from that study should not be repeated without context</b>
      <p>Kirkman reports lifetime penetrance of <strong>93% in men who smoked</strong> versus 66% in non-smoking men. These figures circulate widely and they are frightening. But they come from the same pedigree-ascertainment problem described in the <a href="#/numbers">numbers section</a> &mdash; the Australian registry puts baseline male penetrance at 17.5%, not 66%${c('lopez21')}. <strong>Quote the relative risk (roughly two to three times), not the absolute 93%.</strong></p>
    </div></div>

    <h3>Related exposures</h3>
    <div class="grid g2">
      <div class="card"><h4>Second-hand smoke</h4><p class="small sec">${LHON.evid(2)} One retrospective Chinese study of 147 m.11778 patients found second-hand smoke an independent risk factor for younger onset &mdash; though mask-wearing also appeared as a "risk factor" in the same analysis, which suggests confounding${c('zheng23')}.</p></div>
      <div class="card"><h4>Vaping, cannabis, wood and wildfire smoke</h4><p class="small sec">${LHON.evid(0)} No LHON studies exist. LHON organisations suggest avoiding vaping and smoke from wood stoves, bonfires, wildfires and chemical fires; this is extrapolation from the cigarette data, offered without an evidence grade${c('lhon_org', 'umdf')}.</p></div>
      <div class="card"><h4>Carbon monoxide, exhaust, solvents</h4><p class="small sec">${LHON.evid(1)} Kirkman proposes carboxyhaemoglobin as one mechanism, and 33.7% of affected carriers self-reported toxin exposure before onset (exhaust fumes n=16, dry-cleaning solvents n=13) &mdash; but with no control comparison${c('kirkman09')}. GeneReviews advises avoiding industrial toxins on general grounds${c('genereviews')}.</p></div>
      <div class="card"><h4>Does quitting after onset help?</h4><p class="small sec">${LHON.evid(1)} The only data found: in the Munich cohort, 12 of 20 who smoked at onset stopped or cut down; about 45% of quitters versus 41% of continuers showed some acuity improvement, and the authors state the numbers are far too small for conclusions${c('rabenstein21')}. <strong>There is no evidence either way. Stopping is still advised.</strong></p></div>
    </div>

    <h2>Alcohol</h2>
    <p class="sec" style="max-width:78ch">${LHON.evid(2)} Heavy drinking gave an odds ratio of 3.27 (1.44&ndash;7.46) in univariate analysis, but <strong>the association was not significant after adjustment</strong> &mdash; the authors describe it as a trend${c('kirkman09')}. Light drinking showed nothing (OR 1.01). GeneReviews advises carriers to "moderate their alcohol intake, avoiding binge-drinking episodes"${c('genereviews')}. For a 17-year-old this is an easy conversation to have early, before social drinking starts, and worth having with the siblings too.</p>

    <h2>Medications</h2>
    <div class="callout warn"><span class="ico">▲</span><div>
      <b class="t">Two respected consensus documents disagree, and the disagreement matters</b>
      <p>The Mitochondrial Medicine Society's 2015 statement advises avoiding or using with caution valproic acid, statins, metformin, high-dose paracetamol, and several antibiotic classes${c('parikh15')}.</p>
      <p>A later international Delphi consensus reviewed 46 drugs and concluded all are <strong>"generally safe"</strong> in primary mitochondrial disease, that "short term (&lt;7 days) antibiotic treatment is unlikely to be a problem... Infection is a much greater risk", and that theoretical concerns "may lead to unnecessary withholding of a drug"${c('devries20')}.</p>
      <p>GeneReviews splits the difference: "Although based largely on anecdotal evidence, avoidance of other environmental factors... is reasonable"${c('genereviews')}. A review of LHON-specific medication risk notes benefits "must be weighed against, in some cases, purely theoretical risks"${c('kogachi19')}.</p>
      <p><strong>The practical reading:</strong> tell every prescriber, prefer an equivalent alternative where one exists, and do not refuse necessary treatment.</p>
    </div></div>
    <div data-chart="meds"></div>

    <h2>Nutrition</h2>
    <div class="grid g2">
      <div class="card"><h4>Vitamin B12 ${LHON.evid(3)}</h4>
        <p class="small sec">The strongest nutritional finding. Three carriers lost vision with subnormal B12${c('pott06')}. In a Munich cohort of 244, deficiency was present in <strong>21% of carriers under 65</strong> against 5&ndash;7% in the general population, with excessive alcohol predicting deficiency. The authors are careful: the data are "not conclusive regarding vitamin B12 deficiency as determinant for disease conversion", but they recommend regular screening${c('zibold22')}.</p>
        <p class="small sec"><strong>Correcting a deficiency is sensible and cheap. Nothing shows extra B12 helps anyone who is not deficient.</strong> Note separately that some cyanocobalamin product labels carry an old warning about optic atrophy in "early Leber's disease"; the origin is 1960s literature and no modern confirmation was found${c('kogachi19')}. Worth raising with the clinician rather than self-managing.</p></div>
      <div class="card"><h4>Ketogenic diet ${LHON.evid(1)}</h4>
        <p class="small sec">Ketogenic medium lowered a heteroplasmic mutation's percentage and raised mtDNA in m.11778 cybrid cells${c('emperador19')}. That is a cell culture result. <strong>No human LHON data were found.</strong></p>
        <p class="small sec">A caution worth weighing: a modified Atkins diet caused muscle pain and enzyme leak in all five patients with mitochondrial myopathy, forcing the trial to stop early${c('ahola16')}. Different disease, but it shows that aggressive dietary intervention in mitochondrial disease is not automatically benign. The MMS position is that there is "no evidence to suggest that one can adjust a person's diet on the basis of ETC results"${c('parikh15')}.</p></div>
      <div class="card"><h4>Mediterranean and antioxidant-rich diets ${LHON.evid(0)}</h4>
        <p class="small sec">No LHON studies found. LHON Society advice to prefer fresh over processed food is generic healthy-eating guidance, which is fine as far as it goes${c('lhonsoc_life')}.</p></div>
      <div class="card"><h4>Fasting and extreme dieting ${LHON.evid(1)}</h4>
        <p class="small sec">The MMS lists fasting among catabolic stressors that can precipitate decompensation in mitochondrial disease generally${c('parikh17')}. No LHON-specific data. For a teenager this is mostly relevant as a reason to eat regularly during exams, sport and illness rather than as a dramatic restriction.</p></div>
    </div>

    <h2>Exercise</h2>
    <div class="cols">
      <div class="prose">
        <p>${LHON.evid(2)} The appealing logic is that exercise drives mitochondrial biogenesis, and unaffected carriers have more mitochondrial DNA (see <a href="#/cell">the cell section</a>). The human data come from a different disease: in mitochondrial myopathy, 12 weeks of cycling raised VO₂max 26%, citrate synthase 67% and muscle mtDNA 81% without raising mutation load (n=20)${c('jeppesen06')}; 14 weeks of endurance training improved capacity and quality of life, lost again on detraining (n=8)${c('taivassalo06')}. Both are small and uncontrolled.</p>
        <p>The MMS consensus states that "exercise-induced mitochondrial biogenesis is an appropriate target", that combined endurance and resistance training is "thought to be safe when instituted in a supervised, progressive fashion", and that <strong>cardiac screening should precede starting</strong> &mdash; which lines up with the baseline ECG advice elsewhere in this guide${c('parikh15', 'parikh17')}.</p>
        <p><strong>For LHON specifically: no exercise trials exist</strong>, Kirkman found no difference in exercise between affected and unaffected carriers${c('kirkman09')}, and nothing shows exercise raises mitochondrial numbers in retinal ganglion cells. Treat it as excellent for general health, cardiac fitness and mood &mdash; and as speculation for vision.</p>
        <p>One practical note: some people notice vision dipping temporarily when hot after exercise (the ${g('uhthoff', 'Uhthoff phenomenon')})${c('lhon_other')}. It resolves on cooling and is not damage &mdash; but knowing that in advance prevents a frightening first experience from ending someone's relationship with sport.</p>
      </div>
      <div class="card"><h4>The role models settle the question of whether sport is possible</h4>
        <p class="small sec">Xavier Marsh, LHON at 13, does varsity track and cross country, rowing, skiing and surfing${c('chop_xavier')}. Noah Malone was a Division I sprinter and is a Paralympic gold medallist and T12 100 m world champion${c('nbc_malone')}. Tucker Dupree is a three-time Paralympic swimmer${c('teamusa_dupree')}. Jeremy Poincenot won the World Blind Golf Championship${c('sdsu_poincenot')}.</p>
        <p class="small sec">See <a href="#/plan">the plan section</a> for the pathways into blind and low-vision sport.</p></div>
    </div>

    <h2>Supplements</h2>
    <div class="callout crit"><span class="ico">■</span><div>
      <b class="t">Start from the Cochrane conclusion</b>
      <p>A Cochrane review of 12 randomised trials found <strong>"no clear evidence supporting the use of any intervention in mitochondrial disorders"</strong>${c('cochrane_mito')}. LHON Society puts it as "not enough scientific evidence to support the use of these supplements in LHON"${c('lhonsoc_life')}. The Mitochondrial Medicine Society nonetheless offers CoQ10, alpha-lipoic acid and riboflavin to most patients, explicitly as consensus opinion rather than trial evidence, and L-carnitine only for documented deficiency${c('parikh15')}.</p>
      <p>Both positions are defensible. What is not defensible is spending significant money on supplements marketed for LHON on the strength of cell-culture data.</p>
    </div></div>
    <div data-chart="supps"></div>

    <h2>So: is lifestyle even a useful avenue?</h2>
    <div class="grid g2">
      <div class="card" style="border-left:3px solid var(--series-3)"><h4>For an unaffected carrier &mdash; a sister, a mother</h4>
        <ul class="small sec" style="margin-bottom:0">
          <li><strong>Not smoking</strong> is the one measure with real human support: roughly two to three times relative risk, with one contradicting study${c('kirkman09', 'kerrison00')}.</li>
          <li><strong>Avoiding heavy or binge drinking</strong> and <strong>correcting B12 deficiency</strong> are low-cost and reasonable${c('genereviews', 'zibold22')}.</li>
          <li>Everything else is expert opinion or laboratory data.</li>
          <li><strong>Sex and age remain the two most important risk factors</strong>, and penetrance varies markedly even within one family${c('genereviews')}. Lifestyle shifts odds; it guarantees nothing in either direction.</li>
          <li>Baseline risk is probably lower than older figures suggest${c('lopez21', 'mackey23')}.</li>
          <li><strong>Mental health deserves active attention.</strong> Female carriers showed raised depression risk and worse mental quality-of-life scores${c('rabenstein21')}. This is relevant to mothers in particular.</li>
        </ul></div>
      <div class="card" style="border-left:3px solid var(--series-2)"><h4>For someone already affected</h4>
        <ul class="small sec" style="margin-bottom:0">
          <li><strong>No lifestyle measure has been shown to restore vision or protect the second eye.</strong> The quitting data are inconclusive${c('rabenstein21')}.</li>
          <li>GeneReviews describes management as "mostly supportive" &mdash; visual aids and rehabilitation &mdash; with idebenone for some${c('genereviews')}.</li>
          <li>Lifestyle still matters, just for ordinary reasons: general and cardiac health, B12 status, and avoiding adding any further insult to an optic nerve that has already lost most of its reserve.</li>
          <li>The highest-value interventions for someone already affected are not nutritional. They are <a href="#/plan">rehabilitation, technology and education planning</a>.</li>
        </ul></div>
    </div>

    <div class="callout warn"><span class="ico">▲</span><div>
      <b class="t">A note on this section's sourcing</b>
      <p>The research pass that produced this section was interrupted before its source list was delivered, and several citations here resolve to a literature search rather than a single article page. The facts and figures are as reported; the links will take you to the paper rather than straight at it. Where a claim could not be verified at all, the text says so instead of citing anything.</p>
    </div></div>`;
  },
  init(root) {
    const C = LHON.charts;
    const sm = [
      { label: 'Any smoking vs none', sub: 'Kirkman 2009', lo: 1.31, hi: 2.95, mid: 1.96, color: 'var(--series-2)' },
      { label: 'Heavy smoking, max intensity', sub: 'Kirkman 2009, unadjusted', lo: 1.82, hi: 5.50, mid: 3.16, color: 'var(--series-8)' },
      { label: 'Heavy cumulative smoking', sub: 'Kirkman 2009, adjusted', lo: 1.31, hi: 8.07, mid: 3.26, color: 'var(--series-8)' },
      { label: 'Light cumulative smoking', sub: 'Kirkman 2009, adjusted', lo: 1.08, hi: 3.46, mid: 1.93, color: 'var(--series-2)' },
      { label: 'Heavy alcohol', sub: 'Kirkman 2009, univariate only — not significant after adjustment', lo: 1.44, hi: 7.46, mid: 3.27, color: 'var(--series-4)' },
      { label: 'Light alcohol', sub: 'Kirkman 2009', value: 1.01, color: 'var(--deemph)' },
      { label: 'Male sex', sub: 'Kirkman 2009 — for comparison', lo: 4.58, hi: 11.03, mid: 7.11, color: 'var(--series-1)' },
      { label: 'Any smoking', sub: 'Kerrison 2000 — found no association', value: 1, color: 'var(--deemph)' },
      { label: 'Heavy alcohol', sub: 'Kerrison 2000 — protective, if anything', value: 0.25, color: 'var(--deemph)' },
    ];
    C.card(root.querySelector('[data-chart="smoking"]'), {
      title: 'Odds ratios for losing vision, in carriers',
      sub: 'An odds ratio of 1 means no effect; the dot is the point estimate and the bar its 95% confidence interval. Male sex is included for scale — it is by far the largest risk factor measured, several times the effect of smoking. The bottom two grey rows are the study that found no effect at all.',
      foot: LHON.src('kirkman09', 'kerrison00'),
      legend: [{ label: 'Smoking — moderate effect', color: 'var(--series-2)' }, { label: 'Smoking — larger effect', color: 'var(--series-8)' }, { label: 'Alcohol', color: 'var(--series-4)' }, { label: 'Male sex (for comparison)', color: 'var(--series-1)' }, { label: 'No significant effect', color: 'var(--deemph)' }],
      table: { head: ['Exposure', 'Study', 'Odds ratio (95% CI)'], rows: sm.map((r) => [r.label, r.sub, r.value != null ? r.value : `${r.mid} (${r.lo}–${r.hi})`]) },
      body: (el) => C.hbar(el, sm, { max: 13, ticks: [0, 1, 3, 5, 7, 9, 11], fmt: (v) => v.toString() }),
    });

    const meds = [
      ['Ethambutol and other TB drugs', '3 of 46 Korean LHON patients lost vision during TB treatment; several single case reports. Against: no synergy with m.11778 in cybrid cells', 2, 'seo10'],
      ['Nucleoside-analogue antiretrovirals', '2 cases, both m.14484; authors advise warning patients of "high risk"', 2, 'mackey03'],
      ['Sulthiame and carbonic anhydrase inhibitors', '2 children lost vision soon after starting sulthiame; LHON fibroblast respiration fell sharply; authors advise avoiding', 2, 'reinert21'],
      ['Linezolid, chloramphenicol, erythromycin', 'Listed as "strong evidence" by IFOND on general mitochondrial-toxicity grounds, but no LHON-specific case reports were found in PubMed', 1, 'ifond_meds'],
      ['Aminoglycosides', 'Consensus advises avoiding in m.1555A>G / m.1494C>T carriers because of hearing loss — a different mutation, not LHON-specific', 1, 'devries20'],
      ['Valproate', 'Contraindicated in POLG disease, not in LHON', 1, 'devries20'],
      ['PDE5 inhibitors (e.g. tadalafil)', 'One case report', 0, 'kogachi19'],
      ['Ephedra-containing supplements', 'One case, in a patient who also smoked and drank', 0, 'kogachi19'],
      ['Antiandrogens', '2 late-onset cases on enzalutamide plus leuprolide', 0, 'kogachi19'],
      ['Metformin', 'IFOND calls it a "theoretical issue"; separately, one case report describes visual-field improvement on metformin. Anecdotes point both ways', 0, 'ifond_meds'],
      ['Methanol, cyanide, industrial solvents', 'Only GeneReviews’ general "industrial toxins" advice and uncontrolled self-report', 1, 'genereviews'],
    ];
    root.querySelector('[data-chart="meds"]').innerHTML = `<div class="tblwrap"><table class="tbl"><thead><tr><th>Agent</th><th>What the evidence actually is</th><th>Strength</th></tr></thead><tbody>${meds.map((r) => `<tr><td style="font-weight:600">${r[0]}</td><td>${r[1]}</td><td style="white-space:nowrap">${LHON.evid(r[2])}${LHON.c(r[3])}</td></tr>`).join('')}</tbody></table></div><p class="chart-foot">Published caution lists are maintained by IFOND and LHON Collective, derived largely from one review. ${LHON.src('ifond_meds', 'kogachi19', 'genereviews', 'devries20', 'parikh15')}</p>`;

    const supps = [
      ['Idebenone, 900 mg/day prescription', 'The only agent with randomised and phase 4 trial data in LHON. See the treatment section for the full picture. Carriers are advised not to take it', 3, 'leros24'],
      ['Coenzyme Q10 / ubiquinol', 'A 1,200 mg/day randomised trial in mitochondrial disease (n=30) found minor lactate effects and no change in strength. No LHON trial. Note CoQ10 did not rescue ATP in the idebenone experiments, apparently because it is sequestered in membranes', 1, 'glover10'],
      ['Riboflavin (B2), thiamine, alpha-lipoic acid', 'Offered by MMS consensus on the basis of small open-label studies; no randomised trial of B vitamins. Thiamine did not reverse vision loss in a combined Wernicke/LHON case', 1, 'parikh15'],
      ['Creatine', 'Cochrane: three trials, one positive and two negative. An antioxidant-plus-creatine mixture improved LHON fibroblasts in a 2025 laboratory study', 1, 'cochrane_mito'],
      ['Nicotinamide (B3)', 'The most interesting candidate. In glaucoma, a crossover trial improved inner-retinal function at 1.5–3 g/day, and a phase 2 trial of nicotinamide plus pyruvate gave short-term field improvement. In LHON: lower plasma nicotinamide found, and protection in a rotenone mouse model. A French trial (NICOLHON) is planned but not yet recruiting', 2, 'hui20'],
      ['Niacin, nicotinamide riboside, NMN', 'Niacin at 750–1,000 mg/day raised NAD+ and strength in mitochondrial myopathy, with some tendency to anaemia. Nothing in LHON', 1, 'pirinen20'],
      ['Oestrogen and phytoestrogens', 'Oestradiol rescued LHON cybrids; ER-beta-selective plant compounds did the same. One case report of hormone replacement therapy. No clinical trial', 1, 'pisano15'],
      ['Rapamycin', 'Reduced heteroplasmic m.11778 load in cybrids and was protective in a complex I knockout mouse. It is an immunosuppressant, not a supplement', 1, 'dai14'],
      ['Vitamins C and E, L-carnitine, resveratrol, curcumin, ginkgo, lutein/zeaxanthin, omega-3, melatonin', 'No LHON clinical trial results were located for any of these. LHON Society describes curcumin, lutein and vitamin mixtures as studied with "inconclusive" results', 0, 'lhonsoc_life'],
    ];
    root.querySelector('[data-chart="supps"]').innerHTML = `<div class="tblwrap"><table class="tbl"><thead><tr><th>Compound</th><th>What the evidence actually is</th><th>Strength for LHON</th></tr></thead><tbody>${supps.map((r) => `<tr><td style="font-weight:600">${r[0]}</td><td>${r[1]}</td><td style="white-space:nowrap">${LHON.evid(r[2])}${LHON.c(r[3])}</td></tr>`).join('')}</tbody></table></div><p class="chart-foot">${LHON.src('cochrane_mito', 'parikh15', 'lhonsoc_life', 'glover10', 'hui20', 'demoraes22', 'bocca21', 'otmani24', 'pirinen20', 'pisano15', 'nct_nicolhon')}</p>`;
  },
});
