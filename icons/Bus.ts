/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';
import storage from '../storage';

createIcon('Bus', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(4, 11));
    cubicCurveTo(hR(-storage['0.55']), pR(-1, -storage['0.45']), pR(-1, -1));
    lineTo(vR(-2));
    cubicCurveTo(vR(-storage['0.55']), pR(storage['0.45'], -1), pR(1, -1));
    lineTo(vR(-3));
    cubicCurveTo(vR(-storage['0.55']), pR(storage['0.45'], -1), pR(1, -1));
    lineTo(hR(14));
    cubicCurveTo(hR(storage['0.55']), pR(1, storage['0.45']), pR(1, 1));
    lineTo(vR(3));
    cubicCurveTo(hR(storage['0.55']), pR(1, storage['0.45']), pR(1, 1));
    lineTo(vR(2));
    cubicCurveTo(vR(storage['0.55']), pR(-storage['0.45'], 1), pR(-1, 1));
    lineTo(vR(9));
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
    moveTo(p(8, 17));
    cubicCurveTo(hR(storage['0.55']), pR(1, -storage['0.45']), pR(1, -1));
    cubicCurveTo(vR(-storage['0.55']), pR(-storage['0.45'], -1), pR(-1, -1));
    lineTo(hR(-1));
    cubicCurveTo(hR(-storage['0.55']), pR(-1, storage['0.45']), pR(-1, 1));
    cubicCurveTo(vR(storage['0.55']), pR(storage['0.45'], 1), pR(1, 1));
    lineTo(hR(1));
    moveTo(p(18, 16));
    cubicCurveTo(vR(-storage['0.55']), pR(-storage['0.45'], -1), pR(-1, -1));
    lineTo(hR(-1));
    cubicCurveTo(hR(-storage['0.55']), pR(-1, storage['0.45']), pR(-1, 1));
    cubicCurveTo(vR(storage['0.55']), pR(storage['0.45'], 1), pR(1, 1));
    lineTo(hR(1));
    cubicCurveTo(hR(storage['0.55']), pR(1, -storage['0.45']), pR(1, -1));
    moveTo(p(18, 6));
    cubicCurveTo(vR(-storage['0.55']), pR(-storage['0.45'], -1), pR(-1, -1));
    lineTo(hR(-10));
    cubicCurveTo(hR(-storage['0.55']), pR(-1, storage['0.45']), pR(-1, 1));
    lineTo(vR(6));
    cubicCurveTo(vR(storage['0.55']), pR(storage['0.45'], 1), pR(1, 1));
    lineTo(hR(10));
    cubicCurveTo(hR(storage['0.55']), pR(1, -storage['0.45']), pR(1, -1));
    lineTo(vR(-6));
  });
});
