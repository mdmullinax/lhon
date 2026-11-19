LHON.registerTab('start', {
  title: 'Start here', nav: 'Start here', bare: true,
  render() {
    const c = LHON.c, g = LHON.g;
    return `
    <header class="hero">
      <div class="stage" data-scene="pathway"></div>
      <div class="copy">
        <div class="kicker">A field guide for families</div>
        <h1>Leber hereditary optic neuropathy</h1>
        <p class="lede">A rare inherited condition in which the optic nerve&rsquo;s most delicate fibres fail, usually over a few weeks, usually in a young person who was perfectly well the day before. This guide explains what is happening &mdash; from the first symptom down to the single enzyme inside the mitochondrion &mdash; and what can actually be done about it.</p>
        <p style="font-size:.85rem;color:#a9a79e">Drag the scene to rotate. Every number on this site links to its source.</p>
      </div>
      <div class="hud">
        <div class="seg" data-role="pathstate">
          <button data-v="healthy" aria-pressed="true">Healthy</button>
          <button data-v="first">First eye</button>
          <button data-v="both">Both eyes</button>
          <button data-v="chronic">Chronic</button>
        </div>
        <span class="cap" data-role="pathcap"></span>
      </div>
    </header>

    <div class="pane">
      <div class="callout info"><span class="ico">◆</span><div>
        <b class="t">If you are reading this in the first week, read this paragraph and nothing else.</b>
        <p>Painless central vision loss in one eye in a teenager is <em>not</em> usually LHON &mdash; inflammation of the optic nerve is far more common${c('braithwaite20', 'takano22')}. But the two are confused often enough that the standard advice is to test for both at once${c('lamorgia24')}. The urgent questions are the treatable ones: an MRI of the brain and orbits, and blood tests for ${g('mogad', 'MOG')} and ${g('nmosd', 'AQP4')} antibodies and for vitamin B12${c('lamorgia24', 'jurkute19')}. Genetic testing for LHON takes weeks, and waiting for it should not delay the rest${c('uwlab')}. Ask for a neuro-ophthalmologist${c('nanos')}. LHON Collective's nine-step "New to LHON" guide is the best single orientation document written for families${c('lhon_new')}.</p>
      </div></div>

      <h2>What this condition actually is</h2>
      <div class="cols">
        <div class="prose">
          <div class="eli5">
            <p>Every cell runs on tiny power plants called mitochondria. They carry their own small set of genes, passed down only from your mother. In LHON, one letter in those genes is changed. Most cells shrug it off. But the nerve cells that carry sight from the eye to the brain run closer to their energy limit than almost any other cell in the body &mdash; and the very thinnest of those fibres, the ones that carry the sharp centre of your vision, are the first to run out.</p>
            <p>When they fail, the middle of what you see goes cloudy or blank. Side vision stays. Light stays. The eye itself is healthy; the cable behind it is not.</p>
          </div>
          <p>In the language of medicine: LHON is a maternally inherited mitochondrial DNA disorder causing bilateral, painless, subacute loss of central vision through the selective death of ${g('rgc', 'retinal ganglion cells')}, with earliest and heaviest loss in the small-calibre fibres of the ${g('pmb', 'papillomacular bundle')}${c('carelli17', 'esmaeil22')}. Three point mutations in ${g('complex1', 'complex I')} subunit genes &mdash; m.11778G&gt;A, m.3460G&gt;A and m.14484T&gt;C &mdash; account for roughly 90% of cases worldwide${c('genereviews', 'lopez21')}.</p>
          <p>Two features make it unlike almost anything else in medicine. First, <strong>most people who carry the mutation never lose vision</strong> &mdash; and nobody knows why the ones who do, do${c('lopez21', 'mackey23')}. Second, <strong>the loss is nearly always of central vision only</strong>: people with LHON almost never go completely dark, and they keep the peripheral vision that lets them move through the world${c('lhon_society_sym')}.</p>
        </div>
        <div>
          <div class="tiles" style="grid-template-columns:1fr;margin-top:0">
            <div class="tile"><div class="lab">How many people are affected</div><div class="val">~1 in 45,000</div><div class="note">European meta-analysis; national figures range from 1 in 31,000 (NE England) to 1 in 68,000 (Australia)${c('mascialino12', 'ywm03', 'lopez21')}</div></div>
            <div class="tile"><div class="lab">Risk for a male carrier</div><div class="val">17.5%</div><div class="note">Largest pedigree study (Australia, 2,633 male carriers). The classical textbook figure is ~50%; population-genomic estimates are as low as 1&ndash;2.5%${c('lopez21', 'mackey23', 'watson23')}</div></div>
            <div class="tile"><div class="lab">Typical age at onset</div><div class="val">Median 22</div><div class="note">In males; 41% of affected males begin between 15 and 24${c('lopez21')}</div></div>
            <div class="tile"><div class="lab">Second eye follows the first</div><div class="val">6&ndash;8 weeks</div><div class="note">Median interval; ~25% start in both eyes at once, and 97% are bilateral within a year${c('ywm09', 'meyerson15')}</div></div>
          </div>
        </div>
      </div>

      <h2>How to use this guide</h2>
      <p class="sec" style="max-width:74ch">Fifteen sections, in a deliberate order: first what else it could be, then what LHON is, then what it looks like from the inside, then the science, then what to do. You can read straight through or jump. Two conventions throughout:</p>
      <div class="grid g2">
        <div class="card"><h4>Plain words, then full depth</h4><p class="small sec">Blue boxes explain things with no jargon. Expandable panels marked <em>Deeper</em> go to the molecular level. Dotted terms like ${g('oxphos', 'oxidative phosphorylation')} define themselves when you hover or focus them.</p></div>
        <div class="card"><h4>Evidence, graded honestly</h4><p class="small sec">Every claim carries a numbered source link. Where the evidence is strong, the guide says so. Where it is one small uncontrolled study, or where good studies disagree, the guide says that too &mdash; and shows you both numbers. ${LHON.evid(4)} to ${LHON.evid(1)} bars rate strength.</p></div>
      </div>

      <h2>The sections</h2>
      <div class="grid">
        ${[
          ['differential', 'What else it could be', 'Thirteen causes of sudden vision loss in a young person, with how common each is and what distinguishes it. Start here if the diagnosis is not confirmed.'],
          ['lhon', 'The course of LHON', 'Stage by stage: the first blur, the second eye, the nadir, the chronic phase. What each test is looking for.'],
          ['see', 'What it looks like', 'An interactive simulation of central vision loss, built from the published description of the scotoma. Move your gaze and watch what happens.'],
          ['genetics', 'The mutations', 'The three primary variants, the thirty rarer ones, the recessive form, and an honest map of what is known, half-known and unknown.'],
          ['cell', 'Down to the mitochondrion', 'Complex I, the electron chain, and why these particular nerve cells and no others. Interactive 3D and an animated respiratory chain.'],
          ['numbers', 'Rarity, risk and recovery', 'Prevalence, penetrance, who recovers and how often — including why the headline penetrance numbers dropped by a factor of three.'],
          ['treat', 'Treatments and trials', 'Idebenone, gene therapy, gene editing, and the things to avoid. Current as of November 2026, including the March 2026 FDA decision.'],
          ['lifestyle', 'Lifestyle and health', 'Smoking, alcohol, B12, diet, exercise and supplements — each graded by how good the evidence actually is.'],
          ['plan', 'A plan for a 17-year-old', 'School, exams, technology, driving, money, work, sport. A concrete sequence for the first two years and beyond.'],
          ['family', 'For the family', 'Adjustment, independence without over-protection, siblings, the house, and what to say to the school.'],
          ['heredity', 'Who else in the family', 'What it means for a sister, a mother, future children — and the state of mitochondrial donation in 2026.'],
          ['community', 'Community and experts', 'Where other families are, which clinicians go to those meetings, and who leads the field.'],
          ['ai', 'What AI can and cannot do', 'Separating demonstrated results from plausible futures.'],
          ['sources', 'All sources', 'Every citation on this site, grouped and linked.'],
        ].map(([id, t, d]) => `<a class="card link" href="#/${id}"><div class="tag">${LHON.tabs[id] ? String(LHON.flat().indexOf(id) + 1).padStart(2, '0') : ''}</div><h4>${t}</h4><p class="small sec" style="margin:0">${d}</p></a>`).join('')}
      </div>

      <h2>Further reading, outside this guide</h2>
      <div class="grid g2">
        <div class="card"><h4>Start with these</h4><p class="small sec">LHON Collective's "New to LHON" nine-step guide${c('lhon_new')} and UMDF's LHON page with its support line${c('umdf')}. The Wikipedia articles on LHON and on idebenone are reasonable general overviews and are kept reasonably current${c('wikipedia_lhon','wikipedia_ide')}.</p></div>
        <div class="card"><h4>If you want the primary literature</h4><p class="small sec">GeneReviews is the standard clinical reference${c('genereviews')}; La Morgia 2024 on recognising LHON and avoiding misdiagnosis is the most directly useful paper for a family in week one${c('lamorgia24')}; Klopstock 2025 is a current short review${c('klopstock25')}.</p></div>
      </div>

      <h2>A word about reading medical literature in week one</h2>
      <div class="callout warn"><span class="ico">▲</span><div>
        <p>Two distortions are worth knowing about before you read anything else.</p>
        <p><strong>Older penetrance figures are too high.</strong> The familiar "50% of men" comes from families identified <em>because</em> somebody went blind, which selects for whatever else runs in those families. Studies that start from the general population instead find 1&ndash;2.5%${c('mackey23', 'watson23')}. Both numbers are real; they answer different questions. The honest middle for a relative of an affected person is around 17% for males and 5% for females${c('lopez21')}.</p>
        <p><strong>Trial results in LHON are unusually hard to read.</strong> Vision in LHON often improves a little on its own, from a low point, which means any treatment measured "from nadir" looks good. Most sham-controlled gene therapy trials missed their primary endpoints while both eyes improved${c('reverse20', 'rescue21', 'reflect23')}. This does not mean nothing works; it means be careful with press releases. The ${g('crr', 'treatment section')} walks through each study.</p>
      </div></div>
    </div>`;
  },
  init(root) {
    const host = root.querySelector('[data-scene="pathway"]');
    const caps = {
      healthy: 'About 1.2 million fibres leave each eye. Gold = the papillomacular bundle, which carries the sharp centre of your vision.',
      first: 'First eye affected: the gold central fibres of one eye stop conducting. The other eye still covers the gap, so vision with both eyes open can seem almost normal.',
      both: 'Both eyes: the central fibres have failed on both sides. Everything else still carries signal — which is why side vision, movement and light remain.',
      chronic: 'Chronic phase, after about a year: the central fibres are gone and the surrounding ones are thinned. The optic disc looks pale on examination.',
    };
    const cap = root.querySelector('[data-role="pathcap"]');
    const st = LHON.scenes.pathway(host, { fibers: 170, biasX: 0 });
    cap.textContent = caps.healthy;
    LHON.seg(root.querySelector('[data-role="pathstate"]'), (v) => { st && st.setState(v); cap.textContent = caps[v]; });
    this.scene = st;
  },
});
