LHON.registerTab('community', {
  title: 'Community and experts', nav: 'Community and experts',
  render() {
    const c = LHON.c;
    return `
    <div class="kicker">Section 13 · People</div>
    <h1>Where the other families are, and who leads the field</h1>
    <p class="lede">LHON has an unusually active community for a condition this rare &mdash; largely because a handful of affected families built it. It also has the useful property that the clinicians and researchers actually turn up: the annual conference puts trial investigators in the same room as newly diagnosed teenagers.</p>

    <div class="callout good"><span class="ico">●</span><div>
      <b class="t">If you do one thing from this page</b>
      <p>LHON Collective runs monthly Zoom groups including <strong>Affected Teens</strong> and <strong>Affected Young Adults</strong>, led by Jessica Loomer and Xavier Marsh &mdash; both of whom have LHON themselves${c('lhon_zoom')}. For a 17-year-old, talking to someone who was 13 when it happened to them is worth more than any document, including this one.</p>
      <p>"LHON Live!" runs the <strong>first Wednesday of each month at 8 pm Eastern</strong>${c('lhon_zoom')}. UMDF's support line is <strong>(888) 900-6486</strong> and will match a family with an ambassador, "likely a fellow LHON patient or family member"${c('umdf')}.</p>
    </div></div>

    <h2>Organisations</h2>
    <div data-chart="orgs"></div>

    <h2>Online</h2>
    <div class="grid g2">
      <div class="card"><h4>Facebook is where the volume is</h4>
        <p class="small sec">"LHON &ndash; Global Group" is private, with <strong>over 6,000 members worldwide</strong> &mdash; the only group size this guide could verify${c('lhon_social')}. LHON Collective links roughly 55 further groups: Moms and Dads of LHON-affected "Kids of All Ages", Spouses, Affected Women, Sisterhood (carriers), Onset at 60+, mutation-specific groups (3460, 14484, DNAJC30 and others), LHON Plus, LHON-MS, Assistive Technology, Education, Employment, Parenting, 12 US regions and around 25 countries${c('lhon_social')}.</p></div>
      <div class="card"><h4>Elsewhere</h4>
        <p class="small sec">Instagram: @lhonproject and @lhoncollective${c('lhon_social', 'lhon_org')}. Podcast: MitoAction's <em>Energy in Action</em> episode 100, "LHON Collective", December 2023${c('mitoaction_pod')}. YouTube and blogs listed by LHON Collective include the documentary <em>Blindsided</em>, the channels Lacking Acuity, Life After Sight Loss and My Visually Impaired Life, the blog Girl Gone Blind, and Noah Malone's book <em>Losing Vision, Not Dreams</em>${c('lhon_media')}.</p>
        <p class="small sec">Monthly LHON Live recordings are archived publicly and run through November 2026${c('umdf_live')}. <strong>No LHON subreddit or Discord server surfaced</strong> in this research — if you want one, it may not exist yet.</p></div>
    </div>

    <h2>Do clinicians and researchers actually show up?</h2>
    <p class="sec" style="max-width:78ch">Yes, and specifically. This matters because it means a family can ask questions of the people running the trials rather than reading press releases about them.</p>
    <div class="grid g2">
      <div class="card"><h4>The conference</h4>
        <p class="small sec">The 2025 LHON Conference (19&ndash;21 June 2025) ran inside the UMDF Mitochondrial Medicine meeting, with speakers including Rustum Karanjia (Ottawa), Anne Chiaramello (Georgetown), Xavier Lloria (Chiesi), Nadia Penrod (Milken Institute), Karmen Trzupek (Global Genes), psychologist Jonathan Dator and UMDF's CEO${c('lhon_conf')}.</p>
        <p class="small sec"><strong>The 2027 LHON Conference is standalone: 30 April &ndash; 2 May 2027, DoubleTree San Diego Mission Valley, with early-bird registration at $225 until 31 December 2026</strong>${c('lhon_conf')}. UMDF's 2027 Mitochondrial Medicine meeting is in Philadelphia, family programme 17&ndash;19 June 2027, co-presented with CHOP's Center for Mitochondrial and Epigenomic Medicine${c('umdf_conf')}.</p></div>
      <div class="card"><h4>Advisory roles and Q&amp;As</h4>
        <p class="small sec">Rustum Karanjia sits on UMDF's Scientific and Medical Advisory Board and is the only ophthalmologist on it${c('umdf_sab')}. LHON Collective runs a "Research in Progress" seminar series and a Research Resource Working Group${c('lhon_org')}. LHON Live hosted "Dr. Amie Koch &amp; LHON Research" in August 2026${c('umdf_live')}. In the UK, Patrick Yu-Wai-Man presented at LHON Society days in 2019, 2022 and 2024${c('lhon_society')}.</p>
        <p class="small sec">Notably, <strong>LHON Collective lists no medical advisory board</strong>, and IFOND says it has a scientific board but names no members${c('lhon_org', 'ifond')}.</p></div>
    </div>

    <h2>The people who lead this field</h2>
    <p class="sec" style="max-width:78ch">Verified against institutional pages and publication records in November 2026. Tags: <span class="pill"><i></i>past</span> foundational work, <span class="pill blue"><i></i>current</span> actively practising or publishing, <span class="pill good"><i></i>future</span> working on what comes next.</p>
    <div data-chart="people"></div>

    <h2>Where to be seen, in the United States</h2>
    <div class="grid g2">
      <div class="card"><h4>Centres LHON Collective names</h4>
        <p class="small sec">Duke (Durham), Emory (Atlanta), Stanford Byers (Palo Alto &mdash; Y. Joyce Liao), UCLA Doheny (Pasadena &mdash; Alfredo Sadun), University of Colorado (Aurora &mdash; Prem Subramanian) and Wills Eye (Philadelphia)${c('lhon_care', 'liao_stanford', 'subramanian')}. Bascom Palmer in Miami is an additional research site${c('bascom_lab')}.</p></div>
      <div class="card"><h4>How to find someone anywhere</h4>
        <p class="small sec">The <strong>NANOS "Find a Neuro-Ophthalmologist" directory</strong> lists them by location${c('nanos')}. LHON Collective also suggests asking in the regional Facebook groups, which in practice is often how families find the one local specialist who has seen LHON before${c('lhon_care')}.</p>
        <p class="small sec">Being seen at a trial-running centre matters for a reason beyond expertise: when an eligibility window opens, sites contact their own patients first.</p></div>
    </div>

    <h2>The video in the original brief</h2>
    <div class="card" style="max-width:80ch">
      <p class="small sec" style="margin:0"><strong>"Leber hereditary optic neuropathy"</strong> &mdash; Neuro-Ophthalmology with Dr. Andrew G. Lee, published 22 January 2019, 3 minutes 55 seconds, about 27,700 views. The posted description is the single word "LHON"${c('lee_video')}.</p>
      <p class="small muted" style="margin:.6rem 0 0">The transcript could not be retrieved, so this guide cannot summarise the content from the video itself. Dr Lee's channel is a well-regarded teaching resource aimed at clinicians and trainees; a four-minute overview from it is a reasonable orientation but is not a substitute for the detail in <a href="#/lhon">the clinical course section</a>.</p>
    </div>

    <h2>What could not be verified</h2>
    <p class="small muted" style="max-width:80ch">Facebook group sizes other than the global group. Any Reddit or Discord community. LHON Society (UK) activity after July 2024. LHON Canada's 2026 Montreal conference dates and speakers. LHON Deutschland's website URL, and any dedicated Dutch LHON site. NFB and AFB teen programme details (their sites blocked automated access). The date and text of the joint statement on the FDA idebenone decision.</p>`;
  },
  init(root) {
    const orgs = [
      ['LHON Collective (lhon.org)', 'USA / global', 'The main hub. Formed 2022 when the Poincenot and Marsh families joined efforts; 501(c)(3). Nine-step "New to LHON" guide, ~18 volunteer leaders including "LHON Navigators", the LHON Medical Registry on RARE-X (open to carriers too), and monthly Zoom groups covering teens, young adults, moms, dads, carriers, spouses, onset at 60+, LHON Plus, assistive technology, education, employment and five US regions.', 'lhon_org'],
      ['UMDF (umdf.org)', 'USA', 'Support line (888) 900-6486, matching families with an ambassador who usually has LHON themselves. Hosts the LHON events calendar, archives LHON Live recordings, and runs the mitoSHARE registry. Its calendar showed 12 LHON events between December 2026 and March 2027.', 'umdf_events'],
      ['LHON Society', 'United Kingdom', 'Patient-led charity (no. 1157206). Buddy scheme; emotional, education and employment support; Facebook group. The most recent event listed on its site is a Patient and Family Day in Manchester, July 2024 — no 2025–26 event was found.', 'lhon_society'],
      ['LHON Canada', 'Canada', 'Own registry, Facebook group, a scholarship, and a 2026 Montreal conference (dates not published on the page found). Six board members; no medical advisors listed.', 'lhon_canada'],
      ['IFOND', 'USA / international', 'All-volunteer research funder since 1995; has sponsored Brazilian LHON pedigree fieldwork since 2001. Current projects: Karanjia (rehabilitation outcome metrics), Votruba (astrocytes), Golmohammadi/Sadun (cytokines). Also publishes a medication-caution list.', 'ifond'],
      ['Ouvrir les Yeux', 'France', 'Youth section ("Pôle Jeunesse"), a 24/7 answering line, a medico-scientific committee and a young-researcher prize. Active 2026 programme including a patients’ afternoon at EUROMIT in Angers and a mental-health research day at CHU Toulouse.', 'ouvrir'],
      ['LHON Deutschland e.V.', 'Germany', 'Runs a yearly meeting of "patients, families, clinicians, and researchers". Website URL could not be found for this guide.', 'lhon_global'],
      ['LHON Eye Society (lhon.se)', 'Sweden', 'Founded March 2012; 160 members by December 2014. No recent dated events found.', 'lhonse'],
      ['Mito Foundation', 'Australia', 'Helpline 1300 977 180, one-on-one peer support, the Mito Registry, and regular online meet-ups scheduled through October 2027.', 'mitofoundation'],
      ['MitoAction', 'USA', 'Mito411 helpline 1-888-MITO-411, a weekly support call and the Energy in Action podcast. No LHON-specific page.', 'mitoaction'],
      ['Mitocon', 'Italy', 'Help line, Zoom "Spazi Rari" groups, a clinical registry with 2,024 enrolled, and a conference in Rimini, 1–3 October 2027.', 'mitocon'],
      ['The Lily Foundation', 'United Kingdom', '"1500 families supported" in mitochondrial disease generally. Publishes a clear guide to mitochondrial reproductive options.', 'lily'],
      ['Lighthouse Guild', 'USA', 'Free national teen phone support group, a young-adult group (ages 20–34) and parent groups — phone 212-769-6318. Also runs up to 20 undergraduate scholarships a year for legally blind students.', 'lighthouse'],
      ['Foundation Fighting Blindness', 'USA', 'Chapters, the My Retina Tracker registry and the VISIONS conference. Note its homepage focus is Leber congenital amaurosis — a different condition with a confusingly similar name.', 'ffb'],
    ];
    root.querySelector('[data-chart="orgs"]').innerHTML = `<div class="tblwrap"><table class="tbl"><thead><tr><th style="min-width:150px">Organisation</th><th>Where</th><th>What it offers</th></tr></thead><tbody>${orgs.map((r) => `<tr><td style="font-weight:600">${r[0]}${LHON.c(r[3])}</td><td style="white-space:nowrap">${r[1]}</td><td>${r[2]}</td></tr>`).join('')}</tbody></table></div>`;

    const people = [
      ['Nancy J. Newman', 'Emory Eye Center, Atlanta, USA', 'LeoDelle Jolley Chair and director of neuro-ophthalmology. Clinical features of m.11778 pedigrees (1991); first author on RESCUE (2021) and REFLECT (2023); outcomes meta-analysis (2025).', 'past current', 'newman_emory'],
      ['Valérie Biousse', 'Emory, Atlanta, USA', 'Professor; NANOS president. RESTORE long-term follow-up (2021).', 'current', 'biousse_emory'],
      ['Alfredo A. Sadun', 'Doheny Eye Center UCLA, Pasadena, USA', 'Thornton Chair, accepting new patients. Brazilian m.11778 pedigree work (2003); the axonal-stress model explaining why thin fibres fail first; CoQ10 trapping in complex I (PNAS 2023).', 'past current', 'sadun_ucla'],
      ['Rustum Karanjia', 'University of Ottawa Eye Institute, Canada', 'First author of the elamipretide randomised trial (2024); the only ophthalmologist on UMDF’s advisory board; regular speaker at the LHON conference.', 'current future', 'karanjia24'],
      ['Valerio Carelli', 'University of Bologna, Italy', 'Full professor, chief of the neurogenetics laboratory. Senior author on melanopsin-cell sparing (2010); lead author of the 2017 international consensus statement; recessive complex I optic atrophy (2026).', 'past current', 'carelli_cv'],
      ['Chiara La Morgia', 'IRCCS Istituto delle Scienze Neurologiche, Bologna, Italy', 'First author on melanopsin-cell sparing (2010) and on the 2024 paper on recognising LHON to avoid misdiagnosis — the single most useful clinical paper for families.', 'current', 'lamorgia24'],
      ['Piero Barboni', 'Bologna and Milan, Italy', 'The OCT natural history of LHON; childhood-onset outcomes (2023); late-onset cohort (2026).', 'current', 'barboni23'],
      ['Patrick Yu-Wai-Man', 'University of Cambridge and Moorfields, London, UK', 'Bilateral improvement after unilateral injection (2020); LEROS (2024); five-year gene therapy outcomes (2025); gene therapy versus idebenone (2026). Co-author of GeneReviews.', 'current future', 'ywm_moorfields'],
      ['Patrick F. Chinnery', 'University of Cambridge, UK', 'Head of department, MRC Mitochondrial Biology Unit. Senior author on RHODOS (2011); co-author of the LHON GeneReviews chapter.', 'past current', 'chinnery_cam'],
      ['Thomas Klopstock', 'Friedrich-Baur-Institute, LMU Munich, Germany', 'Speaker of mitoNET. First author of RHODOS (2011) and senior author on LEROS (2024) and a 2025 LHON review.', 'current', 'klopstock_ern'],
      ['Holger Prokisch', 'TUM / Helmholtz Munich, Germany', 'Discovery of DNAJC30 recessive LHON (2021, 2022) — the finding that added a whole new inheritance mode to the disease.', 'current future', 'stenton21'],
      ['José-Alain Sahel', 'University of Pittsburgh, USA, and Sorbonne, Paris', 'Department chair; GenSight co-founder; senior author on the lenadogene nolparvovec trials.', 'current', 'sahel_pitt'],
      ['Catherine Vignal-Clermont', 'Rothschild Foundation and Quinze-Vingts, Paris, France', 'REVEAL (2021); five-year safety across 189 patients (2023); co-author of a widely used treatment and management review.', 'current', 'hage21'],
      ['Mark L. Moster and Robert C. Sergott', 'Wills Eye, Philadelphia, USA', 'Moster led REVERSE at Wills, which enrolled more patients than any other site. Sergott is chief of neuro-ophthalmology and published on predictors of outcome (2025).', 'current', 'wills20'],
      ['Byron L. Lam', 'Bascom Palmer, Miami, USA', 'Led the NEI-backed phase 1 gene therapy trial in 28 patients — safe but without demonstrated efficacy. The investigators turned toward mitochondrial gene editing.', 'current future', 'lam24'],
      ['John Guy', 'Bascom Palmer, Miami, USA', 'Pioneered mitochondrial-targeted AAV gene therapy and attracted about $25M in NIH funding over two decades. Described by his institution as the late John Guy.', 'past', 'bascom_lab'],
      ['David A. Mackey', 'Lions Eye Institute / University of Western Australia, Perth', 'The Australian risk-of-vision-loss work (2021) that revised penetrance downward, the UK Biobank reconciliation (2023), and genetic counselling guidance (2025).', 'past current', 'mackey_lei'],
      ['Bin Li', 'Wuhan, China', 'The first rAAV2-ND4 trials (2016); founder and CEO of Neurophth, with ND4 and ND1 programmes.', 'current future', 'neurophth23'],
      ['Douglas C. Wallace', 'CHOP / University of Pennsylvania, USA', 'Identified the first LHON mitochondrial DNA mutation in 1988 — the paper that began the entire field of mitochondrial genetic medicine.', 'past', 'wallace88'],
      ['Michal Minczuk', 'MRC Mitochondrial Biology Unit, Cambridge, UK', 'In vivo mitochondrial base editing delivered by AAV (2022).', 'future', 'minczuk_group'],
      ['David R. Liu', 'Broad Institute / Harvard, USA', 'Co-developed DdCBE, the first mitochondrial base editor (2020) — the discovery that made editing mtDNA possible at all.', 'future', 'liugroup'],
      ['Jin-Soo Kim', 'South Korea', 'Developed TALEDs for adenine base editing in mitochondria (2022); co-author on the 2025 work that restored vision in an LHON mouse.', 'future', 'ibs22'],
    ];
    const tagmap = { past: ['', 'past'], current: ['blue', 'current'], future: ['good', 'future'] };
    root.querySelector('[data-chart="people"]').innerHTML = `<div class="grid g2">${people.map((p) => `
      <div class="card"><div style="display:flex;justify-content:space-between;gap:8px;align-items:flex-start">
        <div><h4 style="margin:0">${p[0]}</h4><div class="tag">${p[1]}</div></div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end">${p[3].split(' ').map((t) => `<span class="pill ${tagmap[t][0]}"><i></i>${tagmap[t][1]}</span>`).join('')}</div>
      </div><p class="small sec" style="margin:.6rem 0 0">${p[2]}${LHON.c(p[4])}</p></div>`).join('')}</div>`;
  },
});
