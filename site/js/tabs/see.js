LHON.registerTab('see', {
  title: 'What it looks like', nav: 'What it looks like',
  render() {
    const c = LHON.c, g = LHON.g;
    return `
    <div class="kicker">Section 04 · The lived view</div>
    <h1>What a person with LHON sees</h1>
    <p class="lede">Descriptions only get you so far. This simulator renders the published characteristics of LHON vision loss &mdash; a dense ${g('cecocentral', 'cecocentral scotoma')} that travels with your gaze, loss of red&ndash;green discrimination, reduced contrast, and the limited resolving power of side vision &mdash; onto everyday scenes.</p>

    <div class="callout info"><span class="ico">◆</span><div>
      <b class="t">How to use it, and what it is not</b>
      <p><strong>Put your pointer where you are looking.</strong> That is the whole trick. A scotoma is not a grey blob fixed to the middle of a photograph &mdash; it moves with the eye, so whatever you try to look at is precisely what disappears. Drag around the scene and you will feel why this is so much more disabling than losing the same amount of peripheral vision.</p>
      <p>This is a <em>model</em>, built from measured parameters, not a recording of anyone's sight. Real LHON vision varies enormously between people and between days, includes effects this cannot render (${g('charles_bonnet', 'phantom images')}, glare, ${g('uhthoff', 'heat-related fluctuation')}), and &mdash; importantly &mdash; is experienced by a brain that has adapted to it, which no first-time viewer's has.</p>
    </div></div>

    <div data-sim></div>

    <h2>What changes, and what does not</h2>
    <div class="grid g2">
      <div class="card"><h4>Lost or badly degraded</h4>
        <ul class="small sec" style="margin-bottom:0">
          <li><strong>Reading</strong> ordinary print. The single hardest item in every quality-of-life study${c('kirkman09qol', 'chen23')}.</li>
          <li><strong>Recognising faces</strong>, and with them expression and eye contact${c('chen23', 'lhon_explain')}.</li>
          <li><strong>Signs, forms, fine handwork</strong>${c('chen23')}.</li>
          <li><strong>Colour discrimination</strong>, especially red against green${c('eyewiki_lhon')}.</li>
          <li><strong>Driving</strong>, in almost all cases (see <a href="#/plan">the plan section</a>).</li>
        </ul></div>
      <div class="card"><h4>Kept</h4>
        <ul class="small sec" style="margin-bottom:0">
          <li><strong>Peripheral vision.</strong> "As long as the peripheral vision is not lost, people can often still walk around independently"${c('lhon_society_sym')}.</li>
          <li><strong>Light, movement, large shapes, layout</strong> of a room.</li>
          <li><strong>Cooking, seeing steps, sport, large print</strong> &mdash; measured as the easiest items on the VF-14 scale${c('chen23')}.</li>
          <li><strong>Pupil reflexes and the body clock</strong>, because ${g('melanopsin', 'melanopsin cells')} survive${c('lamorgia10')}.</li>
          <li><strong>A life people describe as good.</strong> In UK interviews with 10 LHON and 10 dominant optic atrophy patients, the effects were chiefly psychosocial, people often adapted alone — and yet participants described relatively good vision-related quality of life, largely through social support${c('chen26')}.</li>
        </ul></div>
    </div>

    <h2>How people describe it in their own words</h2>
    <div class="grid g2">
      <div class="card"><p class="sec" style="font-size:1.02rem">&ldquo;I like to say my eyes are still healthy. I can still see the world, but my brain isn't processing it.&rdquo;</p>
        <p class="small muted" style="margin:0">Xavier Marsh, whose LHON began at 13 and affected both eyes within three months. He describes his vision as &ldquo;staticky, like a television&rdquo;, with things appearing &ldquo;out of nowhere&rdquo; when he runs. He competes in varsity track and cross country, rows, skis and surfs${c('chop_xavier')}.</p></div>
      <div class="card"><p class="sec" style="font-size:1.02rem">&ldquo;I have difficulty recognising people and colours.&rdquo;</p>
        <p class="small muted" style="margin:0">Fabrizio Sottile, Italian Paralympic swimmer, onset at 17, describing his vision as a screen filling with grey dots. He names the hardest parts as travelling alone between cities and reading for study${c('pharmaphorum18')}.</p></div>
    </div>

    <div class="eli5">
      <p>One thing that surprises people: someone with LHON often will not return your wave or your smile &mdash; not out of rudeness, but because your face is inside the blur. LHON organisations suggest a simple habit for friends, teachers and relatives: <strong>say your name when you walk up.</strong> "Hi, it's Dan." It costs nothing and removes an entire category of daily awkwardness${c('lhon_explain')}.</p>
      <p>The flip side: people with LHON often look up or slightly to the side when talking to you, because that is where their working retina is. They are looking <em>at</em> you. And they get told "you don't look blind" constantly${c('lhon_explain')}.</p>
    </div>

    <h2>Things the simulator cannot show</h2>
    <div class="grid">
      <div class="card"><h4>Light sensitivity and glare</h4><p class="small sec">Many people with LHON experience photophobia &mdash; bright light is actively uncomfortable and washes out what vision remains${c('lhon_other')}. Tinted lenses, hats and control over lighting matter more than you would expect.</p></div>
      <div class="card"><h4>Phantom images</h4><p class="small sec">${g('charles_bonnet', 'Charles Bonnet syndrome')}: vivid hallucinations of patterns, faces or scenes in people losing sight${c('lhon_other')}. It is the brain filling in missing input, not a psychiatric symptom. Knowing it is common and benign is most of the treatment.</p></div>
      <div class="card"><h4>Day-to-day fluctuation</h4><p class="small sec">Some people notice temporary worsening with exercise or heat &mdash; the ${g('uhthoff', 'Uhthoff phenomenon')} &mdash; which resolves on cooling${c('lhon_other')}. It is not new damage, but it is alarming the first time.</p></div>
      <div class="card"><h4>Adaptation</h4><p class="small sec">The biggest gap. A brain that has lived with a scotoma for two years uses eccentric fixation automatically, has learned the geometry of its own blind patch, and reads faces by hair, gait and voice. Measured vision-related quality of life <em>rises</em> over the first three years even though acuity does not${c('cui19')}.</p></div>
    </div>

    <h2>Measured quality of life &mdash; and what changes</h2>
    <div data-chart="vf14"></div>
    <div class="callout warn"><span class="ico">▲</span><div>
      <b class="t">Mental health is part of this picture, and the numbers are serious</b>
      <p>In a survey of 103 people with LHON a mean five years after onset, <strong>49.5% met criteria for presumed depression</strong>; 70.9% reported a negative impact on relationships and 73.8% on career goals${c('garcia17')}. Two findings from that study deserve emphasis:</p>
      <ul>
        <li><strong>Adolescents aged 13&ndash;20 had the lowest rates on every measure</strong>, and people aged 31&ndash;65 the highest${c('garcia17')}. Younger onset appears to be easier to adapt to, which matches the childhood outcome data elsewhere in this guide.</li>
        <li><strong>Users of electronic vision aids had better social well-being scores</strong> (median &minus;3 vs &minus;5.5, P=0.007)${c('garcia17')}. This is an association, not proof that devices cause well-being &mdash; but it is one more reason not to delay getting the technology.</li>
      </ul>
      <p>52.4% said they drew emotional support from their ophthalmologist${c('garcia17')}. Asking an eye doctor about how someone is coping is a normal and useful thing to do.</p>
    </div></div>`;
  },
  init(root) {
    LHON.sim.mount(root.querySelector('[data-sim]'));
    const C = LHON.charts;
    const rows = [
      { label: 'Unaffected carriers', sub: 'Kirkman 2009, n=206', value: 97.3, color: 'var(--series-3)' },
      { label: 'Affected, mean score', sub: 'Kirkman 2009, n=196', value: 25.1, color: 'var(--series-2)' },
      { label: 'Affected, median score', sub: 'Chen 2023, same 196 patients', value: 17.1, color: 'var(--series-2)' },
    ];
    C.card(root.querySelector('[data-chart="vf14"]'), {
      title: 'VF-14 score: how much everyday visual function is lost',
      sub: 'The VF-14 asks about 14 daily visual tasks and scores 0 (cannot do any) to 100 (no difficulty). The gap between carriers and affected people is about as wide as this instrument can measure. Notably, scores did not get worse with longer disease duration — and in a Chinese cohort followed for three years they improved.',
      foot: LHON.src('kirkman09qol', 'chen23', 'cui19'),
      legend: [{ label: 'Unaffected carriers', color: 'var(--series-3)' }, { label: 'Affected', color: 'var(--series-2)' }],
      table: { head: ['Group', 'VF-14 score'], rows: [['Unaffected carriers (n=206)', '97.3 mean'], ['Affected (n=196)', '25.1 mean'], ['Affected, same cohort re-analysed', '17.1 median'], ['Hardest tasks', 'small print, newspaper/book, signs, forms, fine handwork, recognising people'], ['Easiest tasks', 'cooking, seeing steps, sport, large print']] },
      body: (el) => {
        C.hbar(el, rows, { max: 108, ticks: [0, 25, 50, 75, 100], fmt: (v) => Math.round(v).toString() });
        el.insertAdjacentHTML('beforeend', `<p class="small muted" style="margin:12px 0 0">Hardest tasks, in order: small print, newspapers and books, signs, forms, fine handwork, recognising people. Easiest: cooking, seeing steps, sport, large print${LHON.c('chen23')}. In a three-year Chinese follow-up, cooking and television watching improved while reading did not${LHON.c('cui19')}.</p>`);
      },
    });
  },
});
