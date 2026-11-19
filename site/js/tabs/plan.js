LHON.registerTab('plan', {
  title: 'A plan for a 17-year-old', nav: 'A plan for a 17-year-old',
  render() {
    const c = LHON.c, g = LHON.g;
    return `
    <div class="kicker">Section 10 · The game plan</div>
    <h1>A concrete plan for a 17-year-old</h1>
    <p class="lede">Written for a family in the United States, with notes for the UK, Canada and Australia. The organising idea: a seventeen-year-old has roughly eighteen months before several doors &mdash; school services, exam accommodations, vocational rehabilitation &mdash; change shape or close. Sequencing matters more than effort here.</p>

    <div class="callout crit"><span class="ico">■</span><div>
      <b class="t">The three things that are genuinely time-critical</b>
      <ol style="margin-bottom:0">
        <li><strong>Get an ${g('iep', 'IEP')} in place, not a 504 plan, and get it before the 18th birthday.</strong> An IEP brings a ${g('tvi', 'teacher of the visually impaired')}, the ${g('ecc', 'expanded core curriculum')} and legally required transition planning. A 504 plan brings accommodations only, need not be written down, and guarantees no transition support${c('aph_504')}. Transition services must be in the IEP "not later than the first IEP to be in effect when the child turns 16", and rights transfer to the student at the age of majority with one year's notice${c('cfr300320')}.</li>
        <li><strong>Open a vocational rehabilitation case.</strong> State ${g('vr', 'VR')} typically begins around 16 and can pay for assistive technology, ${g('om', 'O&M')} training, a low-vision evaluation, and <em>college tuition, books and supplies</em>${c('lhon_vr')}. ${g('pre_ets', 'Pre-ETS')} services are available while still in school${c('preets')}.</li>
        <li><strong>File for exam accommodations now, not in exam season.</strong> ACT requests go through the school and must be approved <em>before</em> testing; from June 2026 the deadline is the regular registration deadline${c('act_acc')}. College Board requests go through the school's SSD coordinator${c('bluebook')}.</li>
      </ol>
    </div></div>

    <h2>The first two years, in order</h2>
    <div class="steps">
      ${[
        ['Weeks 0–6', 'Medical: finish the work-up, do not wait on genetics', `The <a href="#/differential">differential section</a> lists the tests. In parallel: a baseline ECG${c('parikh17')}, and a conversation about idebenone with a neuro-ophthalmologist who knows LHON${c('nanos', 'lhon_care')}.`],
        ['Weeks 0–6', 'Register for a low-vision evaluation and O&M assessment', `Not later. Altpeter's LHON-specific study found a mean magnification need of 13.2×, reading speed of 53 words per minute, and an unfavourably placed ${g('prl', 'preferred retinal locus')} in 7 of 12 patients${c('altpeter13')} — these are fixable problems, and a low-vision optometrist is who fixes them.`],
        ['Weeks 2–8', 'School: request an IDEA evaluation in writing', `IDEA defines visual impairment as one that "even with correction, adversely affects a child's educational performance", and explicitly includes partial sight; services run to age 21${c('parenthub')}. Put the request in writing — that starts the legal clock.`],
        ['Weeks 2–8', 'Start the technology, before vision stabilises', `Learn ${g('eccentric', 'the tools')} while there is still time to practise. Screen readers and magnification are free and built in. Hold off only on expensive hardware — LHON Collective advises waiting "until your LHON vision has stabilized before making an expensive purchase", trying before buying, considering used equipment, and asking VR or the school to fund it${c('lhon_at')}.`],
        ['Month 2–4', 'Open the VR case and ask about Pre-ETS', `Five federally required services: job exploration counselling, work-based learning, counselling on postsecondary options, workplace readiness and self-advocacy instruction. VR agencies must reserve at least 15% of federal funds for them${c('preets')}. State directory at rsa.ed.gov/about/states${c('lhon_vr')}.`],
        ['Month 2–4', 'Register for accessible books', `Bookshare requires a qualifying print disability certified by school or medical staff — an IEP or 504 plan is <em>not</em> required${c('bookshare')}. Learning Ally offers human-read textbooks at $99/year for first-time home members${c('learningally')}. The National Library Service is free and a doctor, teacher or librarian can certify eligibility${c('nls')}.`],
        ['Month 3–6', 'File exam accommodations', `Through the school's SSD coordinator for College Board, and the TAA system for ACT${c('bluebook', 'act_acc')}. Bluebook supports NVDA, JAWS, VoiceOver, ChromeVox and Narrator; zoom replaces large print; refreshable braille is supported${c('bluebook')}.`],
        ['Month 3–6', 'Have the driving conversation deliberately, not by default', `See below. Doing this as a planned conversation rather than a series of failed attempts preserves a lot of dignity.`],
        ['Month 6–12', 'College or career planning with disability services in the loop', `There is no IEP in college. Disability offices provide assistive technology, note-takers, extra test time and readers under ADA and Section 504. Students who lose vision late may need independent-living training from VR or a community agency${c('lhon_edu')}.`],
        ['Month 6–18', 'Scholarships, summer programmes, and peer connection', `Lighthouse Guild funds up to 20 undergraduate awards a year for legally blind students (2026 deadline was 28 February)${c('lg_scholar')}; NFB offers thirty awards, raised to $10,000, deadline 31 March, with convention attendance required${c('nfb_scholar')}. Residential training centres include the Carroll Center, Colorado Center for the Blind and Louisiana Center for the Blind${c('lhon_vr')}.`],
        ['Year 2', 'Financial and legal groundwork', `See the money section below: ABLE account, the blindness tax deduction, SSI/SSDI if applicable, and — specifically for unaffected siblings — long-term disability insurance${c('irs_able', 'lhon_fin')}.`],
      ].map(([when, h, body], i) => `<div class="step"><div class="num">${i + 1}</div><div><div class="when">${when}</div><h4>${h}</h4><p class="small sec" style="margin:0">${body}</p></div></div>`).join('')}
    </div>

    <h2>Technology, as of 2026</h2>
    <p class="sec" style="max-width:78ch">A practical point from the quality-of-life data: users of electronic vision aids had measurably better social well-being scores than non-users${c('garcia17')}. That is an association rather than proof, but combined with how little the built-in tools cost, it argues strongly for starting early.</p>
    <div data-chart="tech"></div>

    <div class="eli5">
      <p><strong>The single highest-value hour</strong> a family can spend in the first month: sit down with the phone and the laptop already in the house and turn on the accessibility features. VoiceOver, Zoom and Magnifier on Apple devices; Narrator on Windows; the free NVDA screen reader${c('apple_a11y', 'narrator', 'nvda')}. They cost nothing, they are already installed, and learning them while vision is changing is far easier than learning them afterwards.</p>
    </div>

    <h2>Driving</h2>
    <div class="cols">
      <div class="prose">
        <p>Nearly all US states require 20/40 best-corrected acuity for an unrestricted licence, with restricted-licence cut-offs running up to 20/120${c('ew_driving')}. Most people with established LHON will not meet either.</p>
        <p>${g('bioptic', 'Bioptic telescope')} driving is permitted in most but not all US states &mdash; one 2025 survey listed Iowa, Connecticut and Utah as exceptions, while EyeWiki also lists Alabama; <strong>these sources conflict, so check the state DMV directly</strong>${c('bioptic25', 'ew_driving')}. Bioptic carrier-lens requirements are typically in the 20/60 to 20/200 range, so many people with LHON would not qualify in any case. No LHON-specific guidance on bioptics was found.</p>
        <p>In the UK the standard is 6/12 and reading a number plate at 20 metres, and bioptics are not permitted${c('ukdrive', 'bioptic25')}.</p>
        <p>LHON Collective's advice is blunt and worth repeating: <strong>"It's far better to stop driving a month sooner than necessary, than one day too late."</strong> Driving on one good eye is specifically risky because the second eye may decline quickly${c('lhon_mob')}.</p>
      </div>
      <div class="card"><h4>How families plan around it</h4>
        <ul class="small sec" style="margin-bottom:0">
          <li>Public transit, paratransit, Uber and Lyft; navigation apps${c('lhon_mob')}.</li>
          <li>Choosing a walkable place to live, and weighting campus walkability in college choice${c('lhon_mob')}.</li>
          <li>Building the O&M skills that make all of this routine rather than exceptional.</li>
          <li>Naming the grief. APH notes that parents "may grieve on the day your child would have earned their driver's license"${c('aph_teen')}. For a 17-year-old in the US this is often the single most emotionally loaded loss, more than reading. Treating it as a real loss, rather than a logistics problem, tends to go better.</li>
        </ul></div>
    </div>

    <h2>Money and legal status</h2>
    <div data-chart="money"></div>
    <div class="grid g2">
      <div class="card"><h4>United Kingdom</h4><p class="small sec">An ophthalmologist issues a <strong>Certificate of Vision Impairment</strong> (sight impaired or severely sight impaired); a copy goes to local social services for registration and concessions${c('lhon_society_reg')}. <strong>Disabled Students' Allowance</strong> is up to £27,783 a year and is not means-tested${c('dsa')}. EHCPs run to age 25${c('lhon_society')}.</p></div>
      <div class="card"><h4>Canada and Australia</h4><p class="small sec">Canada: the Disability Tax Credit and CNIB card use 20/200 or a field of 20 degrees or less${c('cnib')}. Australia: Disability Support Pension (Blind) from age 16 for vision below 6/60 or a field within 10 degrees, with <strong>no income or assets test</strong>${c('dsp_blind')}. NDIS details were not verified for this guide.</p></div>
    </div>

    <h2>Work, and the statistic worth correcting</h2>
    <div class="callout good"><span class="ico">●</span><div>
      <b class="t">The "70% unemployment" figure is wrong</b>
      <p>It circulates constantly and it is not supported by current data. In the 2023 American Community Survey, <strong>52.3% of working-age (18&ndash;64) US adults with visual impairment were employed and 8.1% were unemployed</strong> &mdash; explicitly "not 70%"${c('nrtc')}. The general-population employment comparison is 76.3%. Older AFB figures from a different survey put the 2017 employment-population ratio at 35% against 70%${c('afb_emp')}.</p>
      <p>There is a real employment gap and it should not be minimised. But a newly diagnosed teenager being told that seven in ten blind people are unemployed is being given a false number at the worst possible moment.</p>
      <p>LHON Collective's practical advice for anyone already working: do not quit hastily, and use the Job Accommodation Network and VR${c('lhon_emp')}.</p>
    </div></div>

    <h2>Sport</h2>
    <div class="cols">
      <div class="prose">
        <p>Sport is one of the easiest wins available and tends to be underused. USABA runs USA Goalball and USA Blind Soccer, with open goalball tryouts as a documented pathway toward LA 2028 and youth world-championship teams${c('usaba')}. Classification matters: B1 is no sight to light perception, B2 up to 20/600, B3 from 20/600 to 20/200, and B4 to 20/70 within USABA competition${c('usaba_class')} &mdash; so a typical LHON acuity places someone squarely in a competitive class.</p>
        <p>LHON Collective also lists tandem cycling, guide running (United in Stride, Achilles), blind hockey, judo, rowing, skiing, golf and beep baseball, and notes that some organisations offer equipment and travel grants${c('lhon_sport')}.</p>
      </div>
      <div class="card"><h4>People with LHON, verified</h4>
        <ul class="small sec" style="margin-bottom:0">
          <li><strong>Noah Malone</strong> — diagnosed at 13; Division I sprinter at Indiana State; Tokyo Paralympic relay gold and two silvers; 2023 T12 100 m world champion${c('nbc_malone')}.</li>
          <li><strong>Tucker Dupree</strong> — diagnosed October 2006 as a high-school senior; three-time Paralympian, one silver and three bronze in swimming${c('teamusa_dupree')}.</li>
          <li><strong>Jeremy Poincenot</strong> — onset at 19; said "I was probably suicidal"; went on to win the 2010 World Blind Golf Championship${c('sdsu_poincenot')}.</li>
          <li><strong>Fabrizio Sottile</strong> — Italian Paralympic swimmer, onset at 17${c('pharmaphorum18')}.</li>
          <li>Also listed by LHON Collective with media links: Joe McCormick (Harvard computer science, beep baseball), Chaz Davis (Paralympic marathoner), Blake Steinecke (US blind hockey, works in tech), Henry Escobedo, Abby Duffy (para skier), Mark DeMontis (founded Courage Canada)${c('lhon_media')}.</li>
        </ul></div>
    </div>

    <h2>A checklist you can actually tick</h2>
    <p class="sec">This saves to your browser only &mdash; nothing is sent anywhere.</p>
    <div class="grid g2">
      <div class="card"><h4>Medical</h4><ul class="checklist" data-key="plan-med">
        <li>MRI brain and orbits with contrast completed</li>
        <li>MOG-IgG and AQP4-IgG sent</li>
        <li>Vitamin B12, folate and copper checked</li>
        <li>OCT done, with a repeat scheduled</li>
        <li>Genetic testing sent (three primary mutations)</li>
        <li>Baseline ECG done</li>
        <li>Neuro-ophthalmologist identified and seen</li>
        <li>Idebenone discussed explicitly, with a decision recorded</li>
        <li>Low-vision evaluation booked</li>
      </ul></div>
      <div class="card"><h4>School and exams</h4><ul class="checklist" data-key="plan-school">
        <li>IDEA evaluation requested in writing</li>
        <li>IEP meeting scheduled (not a 504 plan)</li>
        <li>Teacher of the Visually Impaired assigned</li>
        <li>Orientation and mobility assessment arranged</li>
        <li>Expanded core curriculum discussed at the IEP meeting</li>
        <li>Transition plan written into the IEP</li>
        <li>College Board SSD request filed</li>
        <li>ACT accommodations request filed through the school</li>
        <li>Teachers briefed — including "say your name"</li>
      </ul></div>
      <div class="card"><h4>Technology</h4><ul class="checklist" data-key="plan-tech">
        <li>Screen reader turned on and being practised daily</li>
        <li>System magnification and high contrast configured</li>
        <li>Seeing AI or Google Lookout installed</li>
        <li>Be My Eyes installed</li>
        <li>Bookshare account approved</li>
        <li>Learning Ally or NLS set up</li>
        <li>Video magnifier trialled before any purchase</li>
        <li>VR or school asked to fund the hardware</li>
      </ul></div>
      <div class="card"><h4>Rights, money, future</h4><ul class="checklist" data-key="plan-money">
        <li>Vocational rehabilitation case opened</li>
        <li>Pre-ETS services requested</li>
        <li>State commission for the blind contacted</li>
        <li>ABLE account considered</li>
        <li>Blindness tax deduction noted for filing</li>
        <li>Free Matter for the Blind mailing understood</li>
        <li>Scholarship deadlines diarised (NFB 31 March, Lighthouse Guild 28 February)</li>
        <li>LHON registry joined</li>
        <li>Long-term disability insurance considered for unaffected siblings</li>
        <li>A sport or activity tried at least once</li>
      </ul></div>
    </div>`;
  },
  init(root) {
    const C = LHON.charts;
    const tech = [
      ['Built-in screen readers', 'VoiceOver (Apple), Narrator (Windows 11, Ctrl+Win+Enter), TalkBack (Android), and the free NVDA — latest release 2026.3.1', 'Free', 'apple_a11y'],
      ['Built-in magnification', 'Apple Zoom, Magnifier, Accessibility Reader, display and text-size settings, Braille Access, Live Recognition', 'Free', 'apple_a11y'],
      ['Commercial screen readers', 'JAWS, ZoomText and Fusion — named by LHON Collective and supported in College Board’s Bluebook exam app', 'Paid; often VR-funded', 'lhon_at'],
      ['OCR and AI description', 'Seeing AI (free, iOS and Android) narrates the world around you; Google Lookout (Android) has text, document, explore, currency, food-label and image Q&A modes', 'Free', 'seeingai'],
      ['Remote sighted help', 'Be My Eyes (free volunteer video calls) and Aira (subscription)', 'Free / paid', 'lhon_at'],
      ['Smart glasses', 'Be My Eyes on Meta AI glasses — a voice command starts a hands-free volunteer call, available in the US, UK, Canada and Australia. Envision Glasses (on Google Glass Enterprise 2) read text, describe scenes and include an AI assistant. LHON Collective also lists eSight, IrisVision, Patriot ViewPoint and EchoVision', 'Paid; no independent evidence of benefit in LHON was found', 'bemyeyes'],
      ['Accessible books', 'Bookshare (certified print disability; no IEP required), Learning Ally ($99/yr home membership), National Library Service (free, BARD downloads)', 'Free to low cost', 'bookshare'],
      ['Video magnifiers (CCTV)', 'Recommended by LHON Collective; state VR may fund them', 'Paid; often VR-funded', 'lhon_at'],
      ['Gaming', 'High-contrast modes, colour adjustment, larger text, menu narration, directional haptics and spatial audio are increasingly common; current consoles have narrated interfaces and zoom', 'Varies', 'aav_gaming'],
    ];
    root.querySelector('[data-chart="tech"]').innerHTML = `<div class="tblwrap"><table class="tbl"><thead><tr><th>Category</th><th>What is available in 2026</th><th>Cost</th></tr></thead><tbody>${tech.map((r) => `<tr><td style="font-weight:600">${r[0]}${LHON.c(r[3])}</td><td>${r[1]}</td><td style="white-space:nowrap">${r[2]}</td></tr>`).join('')}</tbody></table></div><p class="chart-foot">${LHON.src('apple_a11y', 'narrator', 'nvda', 'seeingai', 'lookout', 'bemyeyes', 'envision', 'bookshare', 'learningally', 'nls', 'lhon_at', 'aav_gaming')}</p>`;

    const money = [
      ['Legal blindness (US)', 'Best-corrected acuity 20/200 or worse in the better eye, or a visual field of 20 degrees or less. It is an administrative threshold for services, not a statement that someone sees nothing', 'ssa_blind'],
      ['SSI vs SSDI', 'SSI depends on income and assets; SSDI depends on work history. Medicare follows after 24 months of benefits. Making the appointment protects the benefit start date', 'lhon_fin'],
      ['2026 earnings limits', 'Substantial gainful activity $2,830/month for blind people vs $1,690 non-blind; SSI federal rate $994/month', 'ssa_sga'],
      ['ABLE accounts', 'Eligible if blindness or disability began before age 46 (raised from 26, effective 2026). 2026 contribution limit $20,000. Distributions are tax-free for qualified disability expenses', 'irs_able'],
      ['Blindness tax deduction', 'An additional standard deduction: $1,600, or $2,000 if unmarried, for tax year 2025. The 2026 amount was not verified for this guide', 'irs551'],
      ['Free Matter for the Blind', 'Braille, large print (14-point or larger), audio and adapted devices mail free for eligible people', 'usps703'],
      ['Insurance — for siblings', 'LHON Collective specifically urges unaffected carriers to consider long-term disability insurance. This is easy to arrange before any diagnosis and hard afterwards', 'lhon_fin'],
    ];
    root.querySelector('[data-chart="money"]').innerHTML = `<div class="tblwrap"><table class="tbl"><thead><tr><th>Item</th><th>What it means (United States)</th></tr></thead><tbody>${money.map((r) => `<tr><td style="font-weight:600;white-space:nowrap">${r[0]}${LHON.c(r[2])}</td><td>${r[1]}</td></tr>`).join('')}</tbody></table></div><p class="chart-foot">${LHON.src('ssa_blind', 'ssa_sga', 'irs_able', 'irs551', 'usps703', 'lhon_fin', 'nls')}</p>`;
  },
});
