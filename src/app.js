/**
 * app.js
 *
 * Entry point. Wires together simulation, renderer, chart, and UI.
 * Runs the animation loop.
 *
 * Import order: phi-map → nca → renderer → chart → app
 */

import { phiToParams, getWaypoints } from './phi-map.js';
import { NCAGrid }                   from './nca.js';
import { Renderer }                  from './renderer.js';
import { PopulationChart }           from './chart.js';

const GRID_W = 64;
const GRID_H = 64;
const STEPS_PER_FRAME = 3;  // NCA steps between renders (tune for perf vs smoothness)

let phi = 0.45;  // default to Edge of Chaos

// TODO: init grid, renderer, chart
// TODO: wire φ slider input event → update phi → call updateRegimeUI(phiToParams(phi))
// TODO: wire "Reset" button → grid._initGrid()

function updateRegimeUI(params) {
  // TODO: set #regime-label text = params.label
  // TODO: set #regime-label background-color = params.color
  // TODO: set #regime-description text = params.description
  // TODO: set #phi-value text = phi.toFixed(2)
  // TODO: update regime strip highlight (CSS class on the active zone marker)
}

function loop() {
  // TODO: const params = phiToParams(phi)
  // TODO: grid.setParams(params.kGate, params.tau, params.theta)
  // TODO: for (let i = 0; i < STEPS_PER_FRAME; i++) grid.step()
  // TODO: renderer.draw(grid)
  // TODO: chart.push(grid.getPopulations()); chart.draw()
  requestAnimationFrame(loop);
}

// TODO: loop()
