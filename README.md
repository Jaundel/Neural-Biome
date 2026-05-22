# Neural Biome

**Research question:** can a single scalar φ ∈ [0,1] reproduce every complex-adaptive-system
regime documented in Sakana AI's [Digital Ecosystems](https://pub.sakana.ai/digital-ecosystem/) paper?

## Project structure

```
neural-biome/
├── index.html          article shell + UI (canvas, φ slider, text sections)
├── style.css           distill.pub-style layout (TODO: fill in)
└── src/
    ├── phi-map.js      φ → { kGate, tau, threshold } with 6 regime waypoints  ← START HERE
    ├── nca.js          NCA simulation engine (Phase 1: rule-based; Phase 2: TF.js)
    ├── renderer.js     Canvas 2D pixel renderer (Phase 2: WebGL / SwissGL)
    ├── chart.js        Population timeline (Phase 2: D3.js stacked area)
    └── app.js          Animation loop + UI wiring
```

## How to run

```bash
python -m http.server 8080
# open http://localhost:8080
```

## Build phases

**Phase 1 — validate φ (this scaffolding)**
- Implement `phi-map.js` waypoints + interpolation
- Implement `nca.js` with fixed attack/defense vectors (no TF.js)
- Implement `renderer.js` (Canvas 2D putImageData)
- Wire `app.js` loop + slider
- Confirm all 6 regime transitions are visually distinct

**Phase 2 — add learning**
- Swap `nca.js` internals for TF.js
- Per-cell attack/defense vectors become `tf.Variable`
- Add backprop step: `optimizer.minimize(() => softminLoss + diversityBonus)`
- Upgrade renderer to WebGL (SwissGL) for 256×256 at 60fps
- Add D3.js stacked-area population chart + diversity sparkline

**Phase 3 — the article**
- Fill in article text sections in `index.html`
- Add regime phase-space widget (2D heatmap, φ traces a path through it)
- Add "jump to φ=X" buttons per regime
- Answer the question: does φ break down at cooperation? Is that the finding?

## Key references
- Darlow, L. "Digital Ecosystems: Interactive Multi-Agent Neural Cellular Automata." Sakana AI, 2026.
  https://pub.sakana.ai/digital-ecosystem/
- Langton, C. "Computation at the edge of chaos." Physica D, 1990.
  (φ is this project's analog of Langton's λ for a learning system)
