/**
 * nca.js
 *
 * Multi-agent Neural Cellular Automata simulation engine.
 * Based on the Sakana AI "Digital Ecosystems" PD-NCA framework.
 *
 * Phase 1 (scaffolding): rule-based, no learning, no TF.js.
 *   Attack/defense vectors are fixed per species.
 *   Useful for validating that φ produces visible regime transitions.
 *
 * Phase 2 (full): replace with TF.js.
 *   Per-species MobileNetV2-style conv nets learn attack/defense per cell.
 *   Online gradient descent runs every step.
 *   Loss = softmin(per-species aliveness) + entropy bonus.
 */

export const N_SPECIES = 5;
export const SPECIES_COLORS = [
  [255,  80,  80],  // red
  [ 80, 160, 255],  // blue
  [ 80, 220, 120],  // green
  [255, 200,  50],  // yellow
  [200,  80, 255],  // purple
];

export class NCAGrid {
  constructor(width, height) {
    this.W = width;
    this.H = height;

    // Grid: Float32Array of shape [H * W * N_SPECIES]
    // alive[y*W*N + x*N + i] = aliveness of species i at cell (x,y), ∈ [0,1]
    this.alive = new Float32Array(height * width * N_SPECIES);

    // φ-controlled simulation parameters (updated each frame via setParams)
    this.kGate     = 20;
    this.tau       = 1.0;
    this.threshold = 0.5;

    // Phase 1: fixed species "personalities" — unit vectors evenly spaced on circle
    // TODO (Phase 2): make these per-cell learned tensors (tf.Variable [H,W,N,2])
    this.attack  = new Float32Array(N_SPECIES * 2);
    this.defense = new Float32Array(N_SPECIES * 2);

    this._initPersonalities();
    this._initGrid();
  }

  _initPersonalities() {
    // TODO: assign attack[i] and defense[i] as unit vectors at angle (2π*i/N) and (2π*i/N + π/N)
  }

  _initGrid() {
    // TODO: seed each species in its own patch (5×5 cells, evenly spaced around a circle)
    //   alive[idx] = 0.9 at seed cells, 0 everywhere else
  }

  setParams(kGate, tau, threshold) {
    this.kGate     = kGate;
    this.tau       = tau;
    this.threshold = threshold;
  }

  step() {
    // One NCA update — called once per animation frame (or N times for speed)
    //
    // For each cell (x, y):
    //   1. Perception
    //        pooled[i] = 3×3 max-pool of alive[i] around (x,y)   ← presence gating
    //        avg[i]    = 3×3 avg-pool of alive[i] around (x,y)   ← growth signal
    //
    //   2. Growth gate  (paper eq. 1)
    //        gate[i] = σ( kGate * (pooled[i] − threshold) )
    //
    //   3. Presence gate
    //        present[i] = pooled[i] > 0.05 ? 1 : 0
    //
    //   4. Competition scores
    //        Phase 1: score[i] = dot(attack[i], Σ_j defense[j]) * avg[i]
    //        TODO (Phase 2): cosine(attack_cell[i], Σ_j defense_cell[j])  (per-cell learned vectors)
    //
    //   5. Competition weights
    //        weights = softmax(scores / tau)
    //
    //   6. Update
    //        newAlive[i] = clip(alive[i]*(1−decay) + avg[i]*weights[i]*gate[i]*present[i]*lr, 0, 1)
    //
    // TODO (Phase 2): wrap the above in tf.tidy() and add a gradient step:
    //   const loss = softmin(meanAliveness) − w_d * shannonEntropy(populations) / log(N)
    //   where softmin(x) = −(1/k) * log( Σ exp(−k * β * asinh(x_i/β)) )
    //   optimizer[i].minimize(() => loss)
  }

  getPopulations() {
    // TODO: return Float32Array[N_SPECIES] — mean aliveness per species across the grid
  }

  getDiversity() {
    // TODO: return Shannon entropy H = −Σ p_i log(p_i) of species population fractions
  }
}
