LHON.registerTab('treat', {
  title: 'Treatments and trials', nav: 'Treatments and trials',
  render() {
    const c = LHON.c, g = LHON.g;
    return `
    <div class="kicker">Section 08 · Treatment · current as of 19 November 2026</div>
    <h1>What exists, what is in trials, and what to avoid</h1>
    <p class="lede">This is the fastest-moving section of the guide and the one most likely to be out of date when you read it. Two things changed in 2026: the FDA declined to approve idebenone in the United States in March, and the leading gene therapy programme is running on compassionate access in France while its company reports going-concern uncertainty.</p>

    <div class="callout crit"><span class="ico">■</span><div>
      <b class="t">Read this before anything else on the page</b>
      <p>Interpreting LHON trials is unusually hard, for one structural reason: <strong>vision in LHON often improves somewhat on its own from its lowest point</strong>. Any study that measures improvement "from nadir" without a proper control will therefore look impressive. Most of the sham-controlled gene therapy trials <em>missed their primary endpoints</em> &mdash; not because nothing happened, but because the untreated eye improved just as much${c('reverse20', 'rescue21', 'reflect23')}. The charts below show the control arms as well as the treated ones.</p>
    </div></div>

    <div class="subtabs">
      <button data-p="ide" aria-selected="true">Idebenone</button>
      <button data-p="gene">Gene therapy</button>
      <button data-p="editing">Gene editing</button>
      <button data-p="other">Other therapies</button>
      <button data-p="trials">Open trials</button>
      <button data-p="funding">Who pays</button>
    </div>

    <section class="subpane" data-p="ide">
      <h2>Idebenone (Raxone)</h2>
      <div class="eli5"><p>The faulty part is Complex I, the first station on the electron chain. Idebenone is a small molecule that gets loaded with electrons elsewhere in the cell and then hands them to Complex III &mdash; the third station. It is a detour around the roadblock. It does not fix the mutation; it tries to keep the lights on.</p></div>
      <p>Mechanically: ${g('nqo1', 'NQO1')} in the cytosol reduces idebenone, and the reduced form shuttles electrons into the respiratory chain at complex III, bypassing ${g('complex1', 'complex I')}${c('haefeli11', 'klopstock25')}. The evidence that this is the real mechanism is unusually clean &mdash; under 60 µM rotenone, ATP in HepG2 cells fell to about 2% of control and idebenone restored it to 71 ± 6%; blocking NQO1 with dicoumarol abolished the rescue, and so did blocking complex III with antimycin A${c('haefeli11')}. Coenzyme Q10 did not rescue at all, even after a week${c('haefeli11')}.</p>

      <div data-chart="idetrials"></div>

      <div class="grid g2">
        <div class="card"><h4>Dose and timing</h4>
          <p class="small sec">900 mg/day, as two 150 mg tablets three times daily with food${c('ema_raxone')}. The 2017 consensus advises starting as soon as possible in people within a year of onset, continuing at least one year to assess response, and continuing a further year if recovery is confirmed${c('carelli17consensus', 'chen22tx')}. The expanded-access authors suggested at least 18&ndash;24 months, with a mean time to first recovery of 9.5 months (range 2.5&ndash;26.5)${c('catarino20')}.</p></div>
        <div class="card"><h4>Safety</h4>
          <p class="small sec">Benign by the standards of most drugs. EMA lists nasopharyngitis and cough as very common, diarrhoea and back pain as common${c('ema_raxone')}. In LEROS (n=198), 24.7% had treatment-related adverse events and 5.1% discontinued because of them; the commonest were headache (18.7%) and nasopharyngitis (16.7%), with no new safety signals${c('leros24')}. In RHODOS adverse events were indistinguishable from placebo${c('klopstock11')}.</p>
          <p class="small sec"><strong>UMDF advises that unaffected carriers should not take it</strong>, because the effects in that group are unknown${c('umdf')}.</p></div>
      </div>

      <h3>Where you can actually get it, as of November 2026</h3>
      <div data-chart="reg"></div>

      <div class="callout warn"><span class="ico">▲</span><div>
        <b class="t">For a family in the United States: an honest answer</b>
        <p>Idebenone is <strong>not approved in the US</strong>. Chiesi's application was accepted for priority review in September 2025 with a goal date of 28 February 2026; on 5 March 2026 the FDA issued a Complete Response Letter asking for additional clinical data from adequate and well-controlled studies, plus manufacturing and Drug Master File work. <strong>No new safety concerns were raised</strong>${c('ot_crl26', 'chiesi_crl26')}. UMDF and LHON Collective issued a joint statement${c('umdf_fda')}. No resubmission or new trial had been announced as of November 2026.</p>
        <p>This guide searched for an authoritative description of how US patients currently obtain idebenone &mdash; import, compounding, cost &mdash; and <strong>could not find one</strong>. The Santhera US expanded-access programme (NCT04381091) is listed as no longer available. This is a question to put directly to a neuro-ophthalmologist with LHON experience, or to LHON Collective, rather than to the internet${c('lhon_care', 'lhon_org')}.</p>
        <p>For scale on cost where it <em>is</em> available: the UK list price is reported at £6,364 for a 30-day supply.</p>
      </div></div>
    </section>

    <section class="subpane" data-p="gene" hidden>
      <h2>Gene therapy</h2>
      <div class="eli5"><p>You cannot easily put a new gene inside a mitochondrion. So the trick &mdash; called ${g('allotopic', 'allotopic expression')} &mdash; is to put a working copy of the gene in the cell's <em>nucleus</em> instead, with a postal label attached that tells the cell to send the finished protein back into the mitochondrion. A harmless virus (${g('aav', 'AAV')}) delivers it, injected into the jelly of the eye${c('chi22')}.</p></div>

      <h3>Lenadogene nolparvovec (LUMEVOQ / GS010, GenSight)</h3>
      <p class="sec">Targets <strong>m.11778G&gt;A (ND4) only</strong>. In cybrid cells, AAV-ND4 increased ATP synthesis and roughly tripled survival${c('chi22')}.</p>
      <div data-chart="genetrials"></div>

      <div class="grid g2">
        <div class="card"><h4>The bilateral puzzle</h4>
          <p class="small sec">RESCUE and REVERSE each injected one eye and gave the other a sham. Both eyes improved by roughly the same amount &mdash; about three lines in the treated eye and nearly as much in the sham${c('reverse20', 'rescue21', 'chi22')}. The explanation offered is that the vector travels to the other eye: in non-human primates after unilateral injection, viral DNA was quantifiable throughout the injected eye and detected at lower levels in some contralateral tissues at three and six months, favouring transport along the optic nerve and chiasm over blood-borne spread${c('calkins21', 'chi22')}.</p>
          <p class="small sec">Sceptics make the obvious counter-point: <strong>every sham-controlled primary endpoint was missed</strong>${c('panfoli25')}. Both readings are in the peer-reviewed literature.</p>
          <p class="small sec">Two further comparisons are often quoted and both are indirect and sponsor-linked: a meta-analysis putting eye-level recovery at 17% untreated, 31% on idebenone and 59% after gene therapy${c('newman25meta')}, and a matched comparison giving 60.4% versus 35.4% for idebenone at 24 months (OR 2.78)${c('ywm26bjo')}. Neither is a head-to-head randomised trial.</p></div>
        <div class="card"><h4>Regulatory and company status</h4>
          <p class="small sec">The EMA application was <strong>withdrawn in April 2023</strong>; the provisional view was that it could not be authorised, citing no significant difference between treated and sham eyes, insufficient evidence for bilateral treatment, and manufacturing questions${c('ema_lumevoq')}. As of September 2026 it has no marketing authorisation anywhere${c('gensight_sep26')}.</p>
          <p class="small sec">France authorised compassionate access in December 2025, with first individual approvals on 9 March 2026, at €425,000 per injection${c('gensight_mar26', 'gensight_h126')}. Single-patient expanded access was cleared by the FDA in October 2025 and January 2026${c('gensight_mar26')}. A first paid named-patient treatment took place in Israel in July 2026${c('gensight_sep26')}.</p>
          <p class="small sec"><strong>The company reported cash of €0.7M at 30 September 2026, a going-concern "material uncertainty", and runway only to late March 2027 contingent on a bridge financing</strong>${c('gensight_q326')}. The planned phase 3, RECOVER, is not registered and is "expected in H2 2027, subject to securing financing"${c('gensight_h126')}. Families should factor this in.</p></div>
      </div>

      <h3>Other gene therapy programmes</h3>
      <div class="grid g2">
        <div class="card"><h4>Neurophth (Wuhan)</h4>
          <p class="small sec">NR082/NFS-01 for ND4: a phase 1/2 of 12 patients with onset over six months, one eye treated, found 2 of 6 (low dose) and 4 of 6 (high dose) eyes improving at least 0.3 logMAR at 52 weeks, with uveitis but no serious adverse events${c('jiang25')}. A phase 3 in China (NCT07406854, 95 enrolled, sham-controlled, ages 12&ndash;75) is active and not recruiting, with primary completion estimated May 2026 and no results posted${c('nct_nr082p3')}. The ND1 programme (NFS-02) in the US and China was terminated after 11 enrolled; an investigator-led Chinese ND1 study of 12 patients reported improvement in 4 of 6 low-dose injected eyes${c('li25nd1')}.</p></div>
        <div class="card"><h4>The NIH / Bascom Palmer trial</h4>
          <p class="small sec">John Guy pioneered mitochondrial-targeted AAV; the phase 1 trial led by Byron Lam treated 28 patients with unilateral injection. Uveitis occurred in 8 of 28 (29%), dose-related. <strong>All 8 patients who were treated in a still-good eye lost 15 or more letters in that eye within a year.</strong> The authors concluded efficacy was "likely small and not dose-related" and that a randomised untreated control is needed${c('lam22', 'lam24', 'nei22')}. The investigators turned toward mitochondrial gene editing${c('nei22')}.</p></div>
      </div>
    </section>

    <section class="subpane" data-p="editing" hidden>
      <h2>Gene editing: the frontier</h2>
      <div class="eli5"><p>Gene therapy adds a working copy of a gene. Gene <em>editing</em> would correct the original typo. For mitochondria this was impossible until recently, for a mundane reason: CRISPR needs a guide RNA to find its target, and nobody can reliably get RNA inside a mitochondrion. Proteins can be imported; RNA cannot${c('mok20')}.</p></div>

      <div class="steps">
        <div class="step"><div class="num">1</div><div><div class="when">2020</div><h4>DdCBE: a bacterial toxin makes it possible</h4>
          <p class="small sec">Mok and colleagues found <strong>DddA</strong>, a toxin from <em>Burkholderia cenocepacia</em> that deaminates cytidines within double-stranded DNA &mdash; the first enzyme able to do so, which is what made double-stranded mtDNA editable at all. They split it into two inactive halves, each fused to a TALE protein array that reassemble only at the target, making the whole thing <strong>RNA-free</strong>. Efficiencies in HEK293T cells ran 4.6% to 49%, with product purity ≥99.5% and no detectable indels${c('mok20')}.</p></div></div>
        <div class="step"><div class="num">2</div><div><div class="when">2022</div><h4>TALEDs extend it to A-to-G edits</h4>
          <p class="small sec">Cho, Kim and colleagues produced TALE-linked deaminases capable of adenine editing in mitochondrial DNA${c('ibs22')} &mdash; important because the commonest LHON mutation, m.11778G&gt;A, needs an A-to-G correction. In vivo mitochondrial base editing in mice was demonstrated by the Minczuk group the same year${c('minczuk_group')}.</p></div></div>
        <div class="step"><div class="num">3</div><div><div class="when">November 2025</div><h4>Correction in a living LHON mouse</h4>
          <p class="small sec">A Nature Communications paper reported that a high-fidelity editor was used to create mice carrying MT-ND4 m.11778G&gt;A, which showed retinal ganglion cell loss and impaired vision; intravitreal AAV delivery of TALEDs then <strong>restored both the genotype and the visual phenotype</strong>, and optimised TALEDs corrected the mutation in LHON patient-derived cells with minimal off-target effects${c('natcomm25')}. An earlier, more active editor variant caused off-target mtDNA mutations and developmental arrest in embryos, which is why the high-fidelity version was needed${c('natcomm25')}.</p></div></div>
      </div>

      <div class="callout warn"><span class="ico">▲</span><div>
        <b class="t">What this does and does not mean</b>
        <p>It is a genuinely important result &mdash; reported as the first demonstration of gene-editing efficacy in a living mitochondrial-disease model. <strong>There is no human trial of mitochondrial gene editing for LHON, and none announced.</strong> The distance from "works in a mouse eye" to "offered in clinic" is typically a decade and frequently infinite.</p>
        <p>One further point of mechanism worth knowing: the older <em>nuclease</em> approaches (mitoTALEN, mtZFN) work by cutting mutant mtDNA so it is degraded, shifting the ${g('heteroplasmy', 'heteroplasmy')} ratio toward the healthy copies. <strong>That strategy is largely unavailable in LHON</strong>, because 80&ndash;90% of families are ${g('homoplasmy', 'homoplasmic')} &mdash; there is no healthy population to select for, so cutting would simply deplete the mtDNA${c('ywm14', 'mok20')}. Base editing sidesteps this, which is precisely why it matters here.</p>
      </div></div>
    </section>

    <section class="subpane" data-p="other" hidden>
      <h2>Other therapies tried</h2>
      <div data-chart="others"></div>

      <h3>Unproven stem-cell treatment: a specific warning</h3>
      <div class="callout crit"><span class="ico">■</span><div>
        <p>Clinics sell intravitreal "stem cell" treatment for optic neuropathy. One uncontrolled series reports gains "up to 35 letters" in LHON${c('weiss16')}. Against that, a New England Journal of Medicine report describes <strong>three patients blinded</strong> after intravitreal autologous "stem cells" at a US clinic, with acuity at one year ranging from 20/200 to no light perception${c('kuriyan17')}.</p>
        <p>The FDA's position: the only approved stem-cell products are cord-blood blood-forming cells; it has received reports of "blindness, tumor formation, infections"; and <strong>if you are being charged outside a clinical trial, "you are likely being deceived"</strong>. A ClinicalTrials.gov listing is not an endorsement${c('fda_stemcell')}.</p>
        <p>This is the single clearest "do not" in the entire guide.</p>
      </div></div>
    </section>

    <section class="subpane" data-p="trials" hidden>
      <h2>Trials open or ongoing, November 2026</h2>
      <div data-chart="trialtable"></div>

      <div class="callout warn"><span class="ico">▲</span><div>
        <b class="t">For a 17-year-old within weeks of onset, specifically</b>
        <p>This guide searched ClinicalTrials.gov and <strong>found no interventional trial currently enrolling acute-stage patients</strong>. The constraints that exclude this profile:</p>
        <ul>
          <li>Every gene-therapy route requires <strong>at least six months since onset</strong> and the ND4 mutation.</li>
          <li>The US-based trials listed are <strong>adults only</strong>.</li>
          <li>NICOLHON (nicotinamide) admits age 16 and over with onset under 18 months, but is France-only, requires French social security, and is <strong>not yet recruiting</strong>${c('nct_nicolhon')}.</li>
        </ul>
        <p>This is frustrating and it is also the plain truth. Two things that <em>are</em> available immediately and are worth doing: <strong>join a registry</strong> (they are how future trials find people), and <strong>establish care with a neuro-ophthalmologist at a centre that runs LHON trials</strong>, because eligibility windows open and close quickly and sites contact their own patients first${c('lhon_registry', 'lhon_care', 'nanos')}.</p>
      </div></div>

      <h3>Registries worth joining now</h3>
      <div class="grid g2">
        <div class="card"><h4>LHON Medical Registry (RARE-X)</h4><p class="small sec">Run by LHON Collective with Global Genes, open to affected people <em>and carriers</em> worldwide${c('lhon_registry')}.</p></div>
        <div class="card"><h4>UMDF mitoSHARE</h4><p class="small sec">UMDF's patient registry, which actively recruits LHON families${c('umdf')}.</p></div>
        <div class="card"><h4>NAMDC registry (NCT01694940)</h4><p class="small sec">North American Mitochondrial Disease Consortium, Columbia plus sites across the US and Canada; recruiting${c('ct_lhon')}.</p></div>
        <div class="card"><h4>Global mitochondrial registry (NCT05554835)</h4><p class="small sec">LMU Munich; Germany, Austria and Italy; recruiting${c('ct_lhon')}.</p></div>
      </div>
    </section>

    <section class="subpane" data-p="funding" hidden>
      <h2>Who has paid for LHON research</h2>
      <p class="sec" style="max-width:78ch">Families often want to know whether anyone is actually working on this. The money is a reasonable proxy, and it is more than you might expect for a disease this rare &mdash; though heavily concentrated in two or three programmes.</p>
      <div data-chart="money"></div>

      <div class="grid g2">
        <div class="card"><h4>Public money (NIH)</h4>
          <p class="small sec">John Guy's gene-therapy line at Bascom Palmer totals about <strong>$25.0 million</strong> across FY1999&ndash;2023, the largest components being a $5.80M clinical trial award (U10EY023558, 2014&ndash;18), $5.11M (R24EY018600, 2008&ndash;12), $4.59M (R24EY028785, 2019&ndash;23), $3.73M (R01EY012355, 1999&ndash;2016) and $3.38M (R01EY017141, 2007&ndash;19)${c('nih_reporter')}. A separate NCATS award to Anne Chiaramello at George Washington for MELAS/LHON-Plus runs about $4.59M, 2021&ndash;26${c('nih_reporter')}.</p>
          <p class="small sec">A broad text search for "LHON" in NIH RePORTER returns 236 project-years totalling $112M, but that sweeps in many unrelated grants and should not be quoted as an LHON total.</p></div>
        <div class="card"><h4>Industry</h4>
          <p class="small sec"><strong>Idebenone:</strong> Santhera licensed Raxone to Chiesi in 2019 for up to CHF 105M (CHF 50M upfront plus up to CHF 55M in milestones); in the 2023 full divestment Chiesi assumed a €25.3M French reimbursement settlement and Santhera remained eligible for up to $10M in US milestones${c('santhera19', 'globalgenes23')}. Santhera sponsored RHODOS, the expanded-access programme and LEROS${c('klopstock11', 'catarino20', 'leros24')}.</p>
          <p class="small sec"><strong>GenSight:</strong> IPO raised €40M in July 2016${c('euronext16')}, followed by repeated smaller raises, including €1.0M from existing shareholders in October 2026${c('gensight_q326')}. <strong>Neurophth:</strong> a Series C+ of nearly $95M in August 2023${c('neurophth_funding')}.</p></div>
        <div class="card"><h4>Philanthropy</h4>
          <p class="small sec">UMDF and Mito Foundation awarded $500k across 8 grants in 2026, including $100k for an ND4 gene-therapy project at the Centre for Eye Research Australia${c('umdf_research')}. IFOND has funded LHON work since 1995 and currently supports projects by Karanjia, Votruba and the Sadun group${c('ifond')}.</p></div>
        <div class="card"><h4>What could not be found</h4>
          <p class="small sec">This guide could not find amounts for Foundation Fighting Blindness, AFM-Telethon, EU framework programmes, or LHON Collective's own research spending, nor grant sizes for Fight for Sight and Telethon Italy &mdash; though both are acknowledged as funders in the trial papers${c('reverse20', 'reflect23')}.</p></div>
      </div>
    </section>`;
  },
  init(root) {
    const C = LHON.charts;
    const ide = [
      { label: 'RHODOS, primary endpoint', sub: '24-week RCT, 85 patients', value: 0, text: 'Missed: −0.064 logMAR, P=0.291', color: 'var(--series-8)' },
      { label: 'RHODOS, main secondary', sub: 'best visual acuity', value: 0, text: 'Missed: −0.120 logMAR, P=0.078', color: 'var(--series-8)' },
      { label: 'RHODOS, discordant-acuity subgroup', sub: 'post hoc, n=30', value: 0, text: 'Positive: −0.285 logMAR, P=0.011', color: 'var(--series-4)' },
      { label: 'Expanded access, all mutations', sub: 'Catarino 2020, n=87', value: 46, color: 'var(--series-1)' },
      { label: 'Expanded access, m.14484T>C', sub: 'Catarino 2020', value: 75, color: 'var(--series-3)' },
      { label: 'Expanded access, m.3460G>A', sub: 'Catarino 2020', value: 41, color: 'var(--series-1)' },
      { label: 'Expanded access, m.11778G>A', sub: 'Catarino 2020', value: 39, color: 'var(--series-1)' },
      { label: 'Dutch cohort', sub: 'van Everdingen 2022, n=72', value: 56, color: 'var(--series-1)' },
      { label: 'LEROS, treated subacute/dynamic eyes', sub: 'at 12 months', value: 42.3, color: 'var(--series-1)' },
      { label: 'LEROS, natural-history control', sub: 'at 12 months', value: 20.7, color: 'var(--deemph)' },
      { label: 'LEROS, treated chronic eyes', sub: 'at 12 months', value: 50.3, color: 'var(--series-1)' },
      { label: 'LEROS, chronic control', sub: 'at 12 months', value: 38.6, color: 'var(--deemph)' },
    ];
    C.card(root.querySelector('[data-chart="idetrials"]'), {
      title: 'Idebenone: what each study actually showed',
      sub: 'Bars are the percentage of patients or eyes achieving clinically relevant recovery. The three top rows are RHODOS, the only randomised placebo-controlled trial — it missed its primary endpoint, and the positive result is a post hoc subgroup. LEROS met its primary endpoint but against an external historical control, not a randomised one.',
      foot: LHON.src('klopstock11', 'rhodos_ofu', 'catarino20', 'leros24', 'chen22tx'),
      legend: [{ label: 'Treated', color: 'var(--series-1)' }, { label: 'Control / natural history', color: 'var(--deemph)' }, { label: 'Best-responding subgroup', color: 'var(--series-3)' }, { label: 'Endpoint missed', color: 'var(--series-8)' }],
      table: {
        head: ['Study', 'Design', 'Result'],
        rows: [
          ['RHODOS (Klopstock 2011)', '24-week double-blind RCT; 85 patients (55 idebenone 900 mg/day, 30 placebo); ages 14–64; onset within 5 years', 'Primary endpoint missed (−0.064 logMAR, P=0.291). Main secondary −0.120, P=0.078. Post hoc discordant-acuity subgroup (n=30): −0.285, P=0.011'],
          ['RHODOS-OFU (2013)', 'Single follow-up visit, 58 analysed, median 30 months off drug', 'Best-eye difference −0.173 logMAR (~8 letters), P=0.085 (not significant). Per-eye −0.228, P=0.0011'],
          ['Expanded Access (Catarino 2020)', 'Retrospective, uncontrolled; 111 patients, 38 sites, 10 countries; 87 in efficacy set', 'Clinically relevant recovery 46.0%: m.11778 39%, m.3460 41%, m.14484 75%. Mean time to first recovery 9.5 months'],
          ['LEROS (Yu-Wai-Man 2024)', 'Open-label phase 4, 199 enrolled, 24 months, external natural-history control', 'Primary endpoint met: 42.3% vs 20.7% at 12 months in subacute/dynamic eyes (OR 2.29, p=0.002). Chronic eyes 50.3% vs 38.6%, p=0.009'],
          ['LEROS, by mutation', '—', 'Clearest benefit in m.11778G>A. No benefit in m.3460G>A, where treated subacute eyes did worse than natural history at 24 months (0.53 logMAR, p=0.001; small numbers)'],
          ['LEROS limitations', '—', 'Non-randomised historical control, some of it Snellen data dating to the 1950s. Funded by Santhera'],
        ],
      },
      body: (el) => {
        C.hbar(el, ide, { max: 92, unit: '%', ticks: [0, 20, 40, 60, 80] });
        el.insertAdjacentHTML('beforeend', '<p class="small muted" style="margin:12px 0 0">The top three rows report logMAR differences rather than percentages and are shown as text only. Open the table view for the full design of each study and its limitations.</p>');
      },
    });

    const reg = [
      ['European Union', 'Approved', 'Authorised 8 Sept 2015 for ages 12+, still "under exceptional circumstances". Holder is Chiesi. Orphan exclusivity expired Sept 2025.', 'good'],
      ['England', 'Recommended', 'NICE TA1093, published 28 Aug 2025, recommends it for ages 12+ under a commercial arrangement. An earlier draft had been negative. Eligible numbers quoted as ~250 (NICE) or up to 471 (Chiesi).', 'good'],
      ['Scotland', 'Restricted use', 'SMC accepted 8 May 2017 for patients not yet severely sight impaired, contingent on a patient access scheme.', 'good'],
      ['Wales & Northern Ireland', 'Access', 'Available since 2021.', 'good'],
      ['United States', 'Not approved', 'NDA accepted for priority review Sept 2025; FDA issued a Complete Response Letter announced 5 Mar 2026, requesting additional controlled clinical data plus manufacturing work. No new safety concerns. No resubmission announced as of Nov 2026.', 'crit'],
      ['Australia', 'Under evaluation', 'TGA lists a Raxone application from Chiesi Australia accepted March 2026. PBS status not found.', 'warn'],
      ['Canada', 'Not found', 'No Health Canada approval for LHON was found. Reimbursement status not found.', 'warn'],
      ['Chile, Bahrain, Taiwan', 'Approved', 'Listed as approved by UMDF.', 'good'],
    ];
    root.querySelector('[data-chart="reg"]').innerHTML = `<div class="tblwrap"><table class="tbl"><thead><tr><th>Where</th><th>Status</th><th>Detail</th></tr></thead><tbody>${reg.map((r) => `<tr><td style="font-weight:600;white-space:nowrap">${r[0]}</td><td><span class="pill ${r[3]}"><i></i>${r[1]}</span></td><td>${r[2]}</td></tr>`).join('')}</tbody></table></div><p class="chart-foot">${LHON.src('ema_raxone', 'nice_ta1093', 'chiesi_nice25', 'smc_ide', 'ot_crl26', 'chiesi_crl26', 'umdf')}</p>`;

    const gene = [
      { label: 'REVERSE, treated eye', sub: 'week 96, onset 6–12 mo, n=37', value: 15, color: 'var(--series-1)' },
      { label: 'REVERSE, sham eye', sub: 'week 96', value: 13, color: 'var(--deemph)' },
      { label: 'RESCUE, treated eye', sub: 'recovery from nadir, onset ≤6 mo, n=38', value: 10, color: 'var(--series-1)' },
      { label: 'RESCUE, sham eye', sub: 'recovery from nadir', value: 9, color: 'var(--deemph)' },
    ];
    C.card(root.querySelector('[data-chart="genetrials"]'), {
      title: 'Why the gene therapy trials are hard to interpret',
      sub: 'ETDRS letters gained. In both trials the injected eye and the untreated sham eye improved by nearly the same amount — which is why both missed their primary endpoints. The company explains this as the vector reaching the second eye; critics read it as the natural course of the disease.',
      foot: LHON.src('reverse20', 'rescue21', 'reflect23', 'restore25', 'calkins21', 'panfoli25', 'ema_lumevoq'),
      legend: [{ label: 'Treated eye', color: 'var(--series-1)' }, { label: 'Sham / untreated eye', color: 'var(--deemph)' }],
      table: {
        head: ['Study', 'Design', 'Result'],
        rows: [
          ['REVERSE (Yu-Wai-Man 2020)', '37 patients, onset 6–12 months, one eye treated and one sham', 'Primary endpoint missed (P=0.894). At week 96, treated eyes gained 15 letters, sham eyes 13'],
          ['RESCUE (Newman 2021)', '38 patients, onset ≤6 months', 'Primary endpoint missed (−0.01 logMAR, P=0.89). Vision fell to nadir at week 24 then recovered ~10 letters treated, ~9 sham'],
          ['REFLECT (Newman 2023)', '98 patients, bilateral vs unilateral plus placebo', 'Primary endpoint not significant. Improvement from nadir at 1.5 y: −0.38/−0.33 logMAR bilateral vs −0.33/−0.26 unilateral. Intraocular inflammation in 70.7% of treated eyes vs 10.2% of placebo eyes, mostly mild'],
          ['REFLECT 5-year (company release, Feb 2025)', '—', 'Clinically relevant recovery from nadir 75% bilateral vs 60% unilateral'],
          ['RESTORE 5-year (Yu-Wai-Man 2025)', '62 enrolled, 55 completed', 'Treated and sham eyes both improved −0.4 logMAR from nadir; between-eye difference 0 (P=.99). 80.6% had at least one eye on-chart. Against 408 matched natural-history eyes, advantage −0.32 logMAR (P<.001). Authors note no untreated control and that measuring from nadir invites regression to the mean'],
          ['Indirect comparisons (sponsor-linked)', '—', 'Newman 2025 meta-analysis: eye-level recovery 17% untreated, 31% idebenone, 59% gene therapy. Yu-Wai-Man 2026: 60.4% vs 35.4% for idebenone at 24 months, OR 2.78. Both are indirect and sponsor-linked'],
        ],
      },
      body: (el) => C.hbar(el, gene, { max: 19, unit: ' letters', ticks: [0, 5, 10, 15] }),
    });

    const others = [
      ['Elamipretide eye drops', 'Phase 2 RCT, 12 patients, m.11778, 1–10 years from onset (Karanjia & Sadun 2024)', 'Missed its visual acuity endpoint. A post hoc visual-field signal reported. No serious adverse events.', 2, 'karanjia24'],
      ['EPI-743 / vatiquinone', 'Open-label, 5 acute patients (Sadun 2012)', '4 of 5 improved — but uncontrolled, and no adequately powered trial exists.', 1, 'sadun12'],
      ['Cyclosporine', 'Open-label trial in acute one-eye cases (Angers, n=12)', 'Did not prevent second-eye involvement.', 1, 'chen22tx'],
      ['Brimonidine eye drops', 'Open-label, 9 patients (Newman 2005)', 'All 9 lost vision in the second eye. Negative.', 1, 'newman05'],
      ['Near-infrared light / photobiomodulation', 'NCT01389817', 'Terminated after 4 patients. No efficacy data found.', 0, 'ct_lhon'],
      ['Hormonal therapy', 'Preclinical only', 'Oestrogens protect LHON cells in the laboratory; no treatment is recommended.', 1, 'chen22tx'],
      ['Curcumin; bezafibrate', 'Curcumin (Thailand, n=70) and bezafibrate (Necker, n=14), both completed', 'No results found.', 0, 'ct_lhon'],
    ];
    root.querySelector('[data-chart="others"]').innerHTML = `<div class="tblwrap"><table class="tbl"><thead><tr><th>Therapy</th><th>Evidence</th><th>Result</th><th>Strength</th></tr></thead><tbody>${others.map((r) => `<tr><td style="font-weight:600">${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${LHON.evid(r[3])}${LHON.c(r[4])}</td></tr>`).join('')}</tbody></table></div>`;

    const trials = [
      ['REVISE (NCT07303296)', 'GS010 phase 2, GenSight', 'Paris', 'Recruiting on registry; all slots already identified', 'Age 15+ at onset; ND4; onset 6 months to 1.5 years; both eyes affected; no idebenone within 7 days', 'nct_revise'],
      ['NICOLHON (NCT07258667)', 'Nicotinamide 2 g/day, CHU Angers', 'Angers, France', 'Not yet recruiting', 'Age 16+; m.11778 or m.3460; onset under 18 months; French social security required', 'nct_nicolhon'],
      ['NR082 phase 3 (NCT07406854)', 'Neurophth, sham-controlled, bilateral', 'Beijing', 'Active, not recruiting; primary completion est. May 2026', 'Ages 12–75; onset 6 months to 10 years', 'nct_nr082p3'],
      ['NR082 expanded access (NCT07949149)', 'Neurophth', 'Shiyan, China', 'Recruiting', 'Former control-arm subjects only', 'ct_lhon'],
      ['Glycerol tributyrate (NCT06792500)', 'MELAS / LHON-Plus, NIH-funded', 'Washington DC', 'Not yet recruiting; start March 2027', 'Ages 18–65', 'nct_tributyrate'],
      ['RECOVER', 'GS010 phase 3, GenSight', '—', 'Not registered; "H2 2027, subject to securing financing"', '—', 'gensight_h126'],
    ];
    root.querySelector('[data-chart="trialtable"]').innerHTML = `<div class="tblwrap"><table class="tbl"><thead><tr><th>Study</th><th>What</th><th>Where</th><th>Status</th><th>Who is eligible</th></tr></thead><tbody>${trials.map((r) => `<tr><td style="font-weight:600">${r[0]}${LHON.c(r[5])}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td></tr>`).join('')}</tbody></table></div><p class="chart-foot">Queried 19 November 2026. ${LHON.src('ct_lhon')}</p>`;

    const money = [
      { label: 'NIH — Guy gene therapy programme', sub: 'FY1999–2023, summed by core project', value: 25.0, color: 'var(--series-1)', text: '~$25.0M' },
      { label: 'Neurophth Series C+', sub: 'August 2023', value: 95, color: 'var(--series-2)', text: '~$95M' },
      { label: 'Santhera → Chiesi licence', sub: '2019, upfront plus milestones', value: 118, color: 'var(--series-2)', text: 'up to CHF 105M ≈ $118M' },
      { label: 'GenSight IPO', sub: 'July 2016', value: 44, color: 'var(--series-2)', text: '€40M ≈ $44M' },
      { label: 'NIH — Chiaramello, MELAS/LHON-Plus', sub: '2021–26', value: 4.59, color: 'var(--series-1)', text: '~$4.59M' },
      { label: 'UMDF + Mito Foundation grants', sub: '2026, 8 grants', value: 0.5, color: 'var(--series-3)', text: '$500K' },
    ];
    C.card(root.querySelector('[data-chart="money"]'), {
      title: 'Money that has gone into LHON, where amounts are findable',
      sub: 'Converted roughly to US dollars for comparison. These are not strictly comparable instruments — an NIH grant total spanning 24 years sits beside a single venture round and a licensing deal including milestones that may never be paid. Read it as a rough map of where effort has been concentrated, not a league table.',
      foot: LHON.src('nih_reporter', 'neurophth_funding', 'santhera19', 'globalgenes23', 'euronext16', 'umdf_research'),
      legend: [{ label: 'Public (NIH)', color: 'var(--series-1)' }, { label: 'Industry', color: 'var(--series-2)' }, { label: 'Philanthropy', color: 'var(--series-3)' }],
      table: { head: ['Funder / programme', 'Period', 'Amount'], rows: money.map((r) => [r.label, r.sub, r.text]) },
      body: (el) => C.hbar(el, money, { max: 138, ticks: [0, 25, 50, 75, 100, 125], fmt: (v) => '$' + v + 'M' }),
    });
  },
});
