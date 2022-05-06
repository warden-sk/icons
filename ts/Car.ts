/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';
import storage from '../storage';

createIcon('Car', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(20, 19));
    cubicCurveTo(vR(storage['0.55']), pR(-storage['0.45'], 1), pR(-1, 1));
    lineTo(hR(-1));
    cubicCurveTo(hR(-storage['0.55']), pR(-1, -storage['0.45']), pR(-1, -1));
    lineTo(vR(-1));
    lineTo(hR(-10));
    lineTo(vR(1));
    cubicCurveTo(vR(storage['0.55']), pR(-storage['0.45'], 1), pR(-1, 1));
    lineTo(hR(-1));
    cubicCurveTo(hR(-storage['0.55']), pR(-1, -storage['0.45']), pR(-1, -1));
    lineTo(vR(-6));
    lineTo(pR(1.36, -8.16));
    cubicCurveTo(pR(0.08, -0.48), pR(0.5, -0.84), pR(0.99, -0.84));
    lineTo(hR(11.31));
    cubicCurveTo(hR(0.49), pR(0.91, 0.35), pR(0.99, 0.84));
    lineTo(pR(1.36, 8.16));
    lineTo(vR(6));
    moveTo(p(17, 6));
    lineTo(hR(-10));
    lineTo(pR(-1, 6));
    lineTo(hR(12));
    lineTo(pR(-1, -6));
    moveTo(p(6, 16));
    lineTo(hR(3));
    lineTo(vR(-2));
    lineTo(hR(-3));
    lineTo(vR(2));
    moveTo(p(18, 16));
    lineTo(vR(-2));
    lineTo(hR(-3));
    lineTo(vR(2));
    lineTo(hR(3));
  });
});
