/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';
import storage from '../storage';

createIcon('Bus', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(20, 20));
    cubicCurveTo(vR(storage['0.55']), pR(-storage['0.45'], 1), pR(-1, 1));
    lineTo(hR(-1));
    cubicCurveTo(hR(-storage['0.55']), pR(-1, -storage['0.45']), pR(-1, -1));
    lineTo(vR(-1));
    lineTo(hR(-10));
    lineTo(vR(1));
    cubicCurveTo(vR(storage['0.55']), pR(-storage['0.45'], 1), pR(-1, 1));
    lineTo(hR(-1));
    cubicCurveTo(hR(-storage['0.55']), pR(-1, -storage['0.45']), pR(-1, -1));
    lineTo(vR(-9));
    lineTo(hR(-1));
    lineTo(vR(-4));
    lineTo(hR(1));
    lineTo(vR(-3));
    cubicCurveTo(vR(-storage['0.55']), pR(storage['0.45'], -1), pR(1, -1));
    lineTo(hR(14));
    cubicCurveTo(hR(storage['0.55']), pR(1, storage['0.45']), pR(1, 1));
    lineTo(vR(3));
    lineTo(hR(1));
    lineTo(vR(4));
    lineTo(hR(-1));
    lineTo(vR(9));
    moveTo(p(18, 5));
    lineTo(hR(-12));
    lineTo(vR(8));
    lineTo(hR(12));
    lineTo(vR(-8));
    moveTo(p(6, 17));
    lineTo(hR(3));
    lineTo(vR(-2));
    lineTo(hR(-3));
    lineTo(vR(2));
    moveTo(p(18, 17));
    lineTo(vR(-2));
    lineTo(hR(-3));
    lineTo(vR(2));
    lineTo(hR(3));
  });
});
