# LHON field guide

An illustrated, fully sourced guide to **Leber hereditary optic neuropathy** — written for a
non-medical family that also wants the full medical and molecular depth.

Open `site/index.html` in a browser. No build step, no network calls at runtime, no tracking.
(Some browsers restrict WebGL and local file access over `file://`; if the 3D scenes don't
appear, serve the folder instead: `python3 -m http.server --directory site 8731`.)

## What's in it

Fifteen sections, ~31,000 words, 705 inline citations to 290 sources.

| # | Section | Covers |
|---|---|---|
| 1 | Start here | Orientation, the week-one paragraph, how to read the rest |
| 2 | What else it could be | 13-cause differential with incidence rates and distinguishing features |
| 3 | The course of LHON | The four consensus stages, second-eye timing, outcomes, LHON-plus |
| 4 | What it looks like | Interactive vision simulator; lived experience; quality-of-life data |
| 5 | The mutations | The three primary variants, rarer ones, recessive LHON, modifiers |
| 6 | Down to the mitochondrion | Complex I, the respiratory chain, why retinal ganglion cells |
| 7 | Rarity, risk, recovery | Prevalence, penetrance, trends, recovery rates |
| 8 | Treatments and trials | Idebenone, gene therapy, gene editing, open trials, funding |
| 9 | Lifestyle and health | Smoking, alcohol, drugs, diet, exercise, supplements — each graded |
| 10 | A plan for a 17-year-old | School, exams, tech, driving, money, work, sport, checklists |
| 11 | For the family | Adjustment, independence, siblings, the house, the school |
| 12 | Who else in the family | Inheritance, a sister's numbers, mitochondrial donation in 2026 |
| 13 | Community and experts | Organisations, online groups, ~22 leading clinicians and researchers |
| 14 | AI in LHON | Demonstrated vs plausible, separated strictly |
| 15 | All sources | Searchable, filterable index of every citation |

## Interactive pieces

- **Visual pathway** (`js/scenes3d.js`) — three.js: ~340 nerve fibres from two eyes through the
  chiasm to the cortex, with signal pulses. Toggles between healthy, first eye, both eyes and
  chronic; the papillomacular bundle is highlighted in gold.
- **Mitochondrion** (`js/scenes3d.js`) — cristae, mtDNA rings, and a live ATP/ROS particle
  system whose rate and ratio shift when you switch to the mutated state.
- **Electron transport chain** (`js/etc.js`) — animated SVG + canvas. Electrons traverse the
  chain, protons accumulate and drive the ATP synthase rotor. Three states: healthy, LHON,
  LHON + idebenone (showing the complex III bypass).
- **Vision simulator** (`js/sim.js`) — a WebGL shader over four procedurally drawn scenes
  (reading, faces, a street crossing, a classroom) plus your own photo. Models the
  cecocentral scotoma that *moves with your gaze*, red–green loss, contrast loss, and
  eccentricity-dependent acuity. Six stage presets and per-eye severity sliders.
- **Charts** (`js/charts.js`) — every chart has a table view, keyboard-reachable tooltips, a
  source line, and works in both themes.

## Conventions

- `LHON.c('key')` renders a numbered citation; `LHON.src(...)` renders a chart source line.
  Both resolve against `js/sources.js`. An unknown key renders `[?]` and fails the smoke test.
- `LHON.g('key', 'text')` renders a glossary term with a hover/focus definition
  (`js/glossary.js`).
- `LHON.evid(0–4)` renders an evidence-strength bar.
- Blue "In plain words" boxes are jargon-free; `<details class="deep">` panels go molecular.

## Editorial rules this guide follows

1. **Every factual claim is sourced.** Where no source could be verified, the text says so
   rather than asserting the fact.
2. **Conflicting evidence is shown, not resolved.** Where good studies disagree — penetrance,
   m.3460G>A recovery, complex I activity, smoking — both numbers appear.
3. **Control arms are shown next to treatment arms.** This matters more in LHON than almost
   anywhere, because vision often improves from nadir on its own.
4. **Absolute figures from selected cohorts are flagged.** The classical penetrance figures and
   the "93% in male smokers" number are presented with the ascertainment problem attached.

## Development

```sh
npm install                  # jsdom, for the smoke test only
node tools/smoke.js          # renders every tab headlessly; checks citations,
                             # glossary keys, internal links and template output
python3 -m http.server --directory site 8731
```

## Caveats

- **Not medical advice.** It cannot diagnose anyone, and decisions belong with the treating
  clinicians.
- **Treatment and regulatory information is current as of 19 November 2026** and will age
  quickly — particularly section 8.
- Some primary sources (GeneReviews/NCBI Bookshelf, several PubMed pages, MITOMAP) blocked
  automated access during research; where a fact came via a secondary source, the text says so.
- Links in the lifestyle and supplements section resolve to a PubMed search rather than a
  single article, because that research pass was interrupted before delivering its URL list.
  No article links were invented to fill the gap.
- The AI section is deliberately thinner than the rest, for the same reason, and says so.
