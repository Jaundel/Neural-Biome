/**
 * chart.js
 *
 * Population timeline — draws a stacked area chart of per-species aliveness over time.
 * Mirrors the "timeline dashboard" from the Sakana platform.
 *
 * Phase 1: Canvas 2D, no dependencies.
 * TODO (Phase 2): replace with D3.js stacked area chart + Shannon diversity sparkline
 */

const HISTORY_LEN = 300;  // number of steps to keep

export class PopulationChart {
  constructor(canvas) {
    // TODO: store canvas, init ctx, init history buffer Float32Array[HISTORY_LEN * N_SPECIES]
  }

  push(populations) {
    // TODO: append populations snapshot to ring buffer, drop oldest
  }

  draw() {
    // TODO: draw stacked area chart from history
    //   x-axis = time steps,  y-axis = population fraction [0,1]
    //   one filled area per species, colored by SPECIES_COLORS
    //   draw diversity (Shannon H) as a white sparkline on top
    // TODO (Phase 2): add checkpoint markers and param-change indicators (vertical lines)
  }
}
