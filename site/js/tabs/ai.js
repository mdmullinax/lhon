LHON.registerTab('ai', {
  title: 'What AI can and cannot do', nav: 'AI in LHON',
  render() {
    const c = LHON.c, g = LHON.g;
    return `
    <div class="kicker">Section 14 · Artificial intelligence</div>
    <h1>Where AI genuinely helps, and where it is just a press release</h1>
    <p class="lede">Rare disease attracts a lot of claims about artificial intelligence. Some of them describe real, published, working tools. Most describe things that are plausible and have not been done. This section keeps those two categories strictly apart, because conflating them wastes the time of families who have very little to spare.</p>

    <div class="callout warn"><span class="ico">▲</span><div>
      <b class="t">A caveat about this section specifically</b>
      <p>The research pass covering this topic was cut short before it finished, so this section is shorter and less complete than the rest of the guide. What is here is sourced; what is missing is missing. Treat it as a partial map rather than a survey, and see the note at the end of the page.</p>
    </div></div>

    <h2>Already demonstrated</h2>
    <div class="grid g2">
      <div class="card" style="border-left:3px solid var(--series-3)"><h4>Predicting whether a variant is harmful</h4>
        <p class="small sec">This is the most mature application and it touches LHON directly. When someone's genetic test finds a rare mitochondrial variant that is not one of the three known ones, somebody has to judge whether it is causing the disease or is harmless. Machine learning does a real job here.</p>
        <ul class="small sec" style="margin-bottom:0">
          <li><strong>APOGEE 2</strong> &mdash; a machine-learning ensemble purpose-built for scoring mitochondrial missense variants${c('bianco23')}.</li>
          <li><strong>MitoTIP</strong> &mdash; scores mitochondrial tRNA variants, and is integrated into MITOMAP, the reference mitochondrial database${c('sonney17', 'mitomap')}.</li>
          <li><strong>AlphaMissense</strong> &mdash; derived from AlphaFold, scores missense variants proteome-wide${c('cheng23')}.</li>
          <li><strong>MitImpact</strong> &mdash; annotates mitochondrial DNA variants and incorporates these predictors${c('mitimpact')}.</li>
        </ul>
        <p class="small sec" style="margin-top:.6rem"><strong>Why this matters to a family:</strong> if the three-mutation test is negative and whole mitochondrial sequencing finds something unusual, these tools are part of how the laboratory decides what to tell you${c('jurkute19', 'srilekha25')}.</p></div>
      <div class="card" style="border-left:3px solid var(--series-3)"><h4>Structure prediction applied to Complex I</h4>
        <p class="small sec">AlphaFold made high-quality protein structure predictions freely available at proteome scale${c('alphafold')}. For LHON this is useful context rather than a breakthrough: ${g('complex1', 'Complex I')} has been solved experimentally by cryo-electron microscopy, and the detailed structural picture in <a href="#/cell">the cell section</a> &mdash; the 45 subunits, the modules, the 25 Å quinone channel &mdash; comes from that experimental work, not from prediction${c('kampjut22')}.</p>
        <p class="small sec">Where prediction does add value is in judging novel variants: knowing where an altered amino acid sits in the folded structure helps decide whether a change is likely to matter.</p></div>
      <div class="card" style="border-left:3px solid var(--series-3)"><h4>Assistive technology &mdash; the one with immediate impact</h4>
        <p class="small sec">This is where AI already changes daily life for someone with central vision loss, today, mostly for free. Seeing AI narrates surroundings on iOS and Android; Google Lookout handles text, documents, scene exploration, currency, food labels and image question-answering; Be My AI and Be My Eyes provide AI and human description, including hands-free on smart glasses; Envision Glasses read text and describe scenes with a built-in assistant${c('seeingai', 'lookout', 'bemyeyes', 'envision')}.</p>
        <p class="small sec">Measured benefit specifically in LHON has not been demonstrated &mdash; but users of electronic vision aids did show better social well-being scores in the LHON quality-of-life survey${c('garcia17')}. See <a href="#/plan">the plan section</a> for how to get these set up.</p></div>
      <div class="card" style="border-left:3px solid var(--series-4)"><h4>Reading retinal images</h4>
        <p class="small sec">Deep learning on fundus photographs and ${g('oct', 'OCT')} is a large and successful field in ophthalmology generally. For <em>LHON specifically</em> &mdash; detecting it, or distinguishing it from other optic neuropathies &mdash; this guide could not verify a published, validated system. The clinical discriminators that would feed such a model are known and are described in <a href="#/differential">the differential section</a>: the OCT swelling-then-thinning sequence, early macular ganglion cell loss, and the absence of fluorescein leakage${c('lamorgia24', 'zimmermann25')}.</p>
        <p class="small sec">Given how often LHON is initially misdiagnosed, this is an obvious and worthwhile target. Treat claims that it has been solved with scepticism until you see the validation data.</p></div>
    </div>

    <h2>Plausible, but not yet done for LHON</h2>
    <div class="grid g2">
      <div class="card" style="border-left:3px solid var(--deemph)"><h4>Designing better mitochondrial editors</h4>
        <p class="small sec">The 2025 result that restored vision in an LHON mouse hinged on moving from a highly active editor that caused off-target damage to a <strong>high-fidelity</strong> variant${c('natcomm25')}. Specificity engineering of exactly this kind is a natural fit for computational design. The published LHON work does not describe AI-designed editors, so this is an opportunity rather than an achievement.</p></div>
      <div class="card" style="border-left:3px solid var(--deemph)"><h4>Designing better delivery vehicles</h4>
        <p class="small sec">Machine-learning-guided design of ${g('aav', 'AAV')} capsids is an active field in gene therapy broadly. No LHON-specific application was verified for this guide.</p></div>
      <div class="card" style="border-left:3px solid var(--deemph)"><h4>Synthetic control arms and natural-history modelling</h4>
        <p class="small sec">This is arguably where AI could matter most for LHON, for a concrete reason visible throughout <a href="#/treat">the treatment section</a>: nearly every controversial result in LHON comes down to <strong>comparison against historical or external controls</strong>. LEROS used an external natural-history control including Snellen data from the 1950s${c('leros24')}; RESTORE compared against 408 matched natural-history eyes${c('restore25')}. Better statistical modelling of natural history would directly improve the quality of those comparisons. The registries described in <a href="#/treat">the treatment section</a> are the raw material for it.</p></div>
      <div class="card" style="border-left:3px solid var(--deemph)"><h4>Drug discovery and repurposing</h4>
        <p class="small sec">Widely claimed across rare disease; no verified LHON-specific published example was found for this guide.</p></div>
    </div>

    <h2>What AI should not be used for here</h2>
    <div class="callout crit"><span class="ico">■</span><div>
      <ul style="margin-bottom:0">
        <li><strong>Deciding whether a symptom needs urgent assessment.</strong> The whole point of <a href="#/differential">the differential section</a> is that several causes of new vision loss are urgently treatable and distinguishing them requires an examination, an MRI and blood tests. A chatbot cannot look at an optic disc.</li>
        <li><strong>Estimating an individual's risk.</strong> No test or model predicts which carrier converts &mdash; that is stated as unknown in the primary literature${c('lopez21', 'spiegel22')}. A confident-sounding number from a language model is invented.</li>
        <li><strong>Evaluating treatment claims.</strong> The LHON literature is full of results that look positive until you notice the control arm improved just as much. This is exactly the error pattern that a fluent summary smooths over.</li>
        <li><strong>Checking whether this guide is current.</strong> The treatment landscape moved twice in 2026 alone. The dated sources at the bottom of each page are there so you can check them against the originals.</li>
      </ul>
    </div></div>

    <div class="callout info"><span class="ico">◆</span><div>
      <b class="t">The honest summary</b>
      <p>For a family today, <strong>the real AI story in LHON is not research &mdash; it is the phone in your pocket.</strong> Variant prediction quietly improves the quality of a genetic report you will never see the internals of. Editor and capsid design may matter in a decade. But an app that reads a restaurant menu aloud, describes a photograph, or tells you which door is which works this afternoon, costs nothing, and is the single most immediately useful piece of technology in this entire guide.</p>
    </div></div>

    <h2>Note on this section</h2>
    <p class="small muted" style="max-width:80ch">The automated research pass for this topic was halted by a safety classifier partway through delivering its findings, so the coverage here is thinner than the rest of the guide and no attempt was made to fill the gaps from memory. Specifically unverified: AI applied to OCT or fundus images for LHON detection; AI-guided base editor or capsid design applied to LHON; and AI drug repurposing for mitochondrial disease. If any of those matter to you, they are worth searching directly rather than trusting the absence of a claim here.</p>`;
  },
});
