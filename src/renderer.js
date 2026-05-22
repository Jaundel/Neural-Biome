/**
 * renderer.js
 *
 * Draws the NCA grid onto a <canvas> element each frame.
 * Each pixel's color = weighted blend of SPECIES_COLORS by per-species aliveness.
 *
 * Phase 1: Canvas 2D + ImageData (putImageData — fast enough for 64×64 at 30fps)
 * TODO (Phase 2): upgrade to WebGL (SwissGL or raw GLSL) for 256×256 at 60fps
 */

export class Renderer {
  constructor(canvas, gridW, gridH) {
    // TODO: store canvas, get 2D context, create ImageData buffer (gridW × gridH × 4 bytes)
  }

  draw(grid) {
    // TODO: for each cell (x, y):
    //   r = g = b = 0
    //   for each species i:
    //     a = grid.alive[y*W*N + x*N + i]
    //     r += SPECIES_COLORS[i][0] * a
    //     g += SPECIES_COLORS[i][1] * a
    //     b += SPECIES_COLORS[i][2] * a
    //   imageData[pixel] = [clip(r,0,255), clip(g,0,255), clip(b,0,255), 255]
    // putImageData onto canvas (scaled up with imageSmoothingEnabled = false)
  }
}
