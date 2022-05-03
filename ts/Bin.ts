/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';
import storage from '../storage';

createIcon('Bin', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(17, 6));
    lineTo(hR(5));
    lineTo(vR(2));
    lineTo(hR(-2));
    cubicCurveTo(vR(4.33), vR(8.67), vR(13));
    cubicCurveTo(vR(storage['0.55']), pR(-storage['0.45'], 1), pR(-1, 1));
    cubicCurveTo(hR(-4.67), hR(-9.33), hR(-14));
    cubicCurveTo(hR(-storage['0.55']), pR(-1, -storage['0.45']), pR(-1, -1));
    cubicCurveTo(vR(-4.33), vR(-8.67), vR(-13));
    lineTo(hR(-2));
    lineTo(vR(-2));
    lineTo(hR(5));
    lineTo(vR(-3));
    cubicCurveTo(vR(-storage['0.55']), pR(storage['0.45'], -1), pR(1, -1));
    lineTo(hR(8));
    cubicCurveTo(hR(storage['0.55']), pR(1, storage['0.45']), pR(1, 1));
    lineTo(vR(3));
    moveTo(p(18, 8));
    lineTo(hR(-12));
    lineTo(vR(12));
    lineTo(hR(12));
    lineTo(vR(-12));
    moveTo(p(9, 11));
    lineTo(hR(2));
    lineTo(vR(6));
    lineTo(hR(-2));
    lineTo(vR(-6));
    moveTo(p(13, 11));
    lineTo(hR(2));
    lineTo(vR(6));
    lineTo(hR(-2));
    lineTo(vR(-6));
    moveTo(p(9, 4));
    lineTo(vR(2));
    lineTo(hR(6));
    lineTo(vR(-2));
    lineTo(hR(-6));
  });
});
