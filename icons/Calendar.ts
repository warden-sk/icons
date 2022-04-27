/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';
import storage from '../storage';

createIcon('Calendar', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { hR, p, vR }) => {
    moveTo(p(17, 11));
    lineTo(vR(2));
    lineTo(hR(-2));
    lineTo(vR(-2));
    lineTo(hR(2));
    moveTo(p(7, 17));
    lineTo(vR(-2));
    lineTo(hR(2));
    lineTo(vR(2));
    lineTo(hR(-2));
    moveTo(p(13, 17));
    lineTo(vR(-2));
    lineTo(hR(-2));
    lineTo(vR(2));
    lineTo(hR(2));
    moveTo(p(17, 15));
    lineTo(vR(2));
    lineTo(hR(-2));
    lineTo(vR(-2));
    lineTo(hR(2));
    moveTo(p(13, 13));
    lineTo(vR(-2));
    lineTo(hR(-2));
    lineTo(vR(2));
    lineTo(hR(2));
    moveTo(p(9, 11));
    lineTo(vR(2));
    lineTo(hR(-2));
    lineTo(vR(-2));
    lineTo(hR(2));
  });
  addPath(({ cubicCurveTo, lineTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(20, 22));
    cubicCurveTo(hR(storage['0.55']), pR(1, -storage['0.45']), pR(1, -1));
    lineTo(vR(-16));
    cubicCurveTo(vR(-storage['0.55']), pR(-storage['0.45'], -1), pR(-1, -1));
    lineTo(hR(-3));
    lineTo(vR(-1));
    cubicCurveTo(vR(-storage['0.55']), pR(-storage['0.45'], -1), pR(-1, -1));
    cubicCurveTo(hR(-storage['0.55']), pR(-1, storage['0.45']), pR(-1, 1));
    lineTo(vR(1));
    lineTo(hR(-6));
    lineTo(vR(-1));
    cubicCurveTo(vR(-storage['0.55']), pR(-storage['0.45'], -1), pR(-1, -1));
    cubicCurveTo(hR(-storage['0.55']), pR(-1, storage['0.45']), pR(-1, 1));
    lineTo(vR(1));
    lineTo(hR(-3));
    cubicCurveTo(hR(-storage['0.55']), pR(-1, storage['0.45']), pR(-1, 1));
    lineTo(vR(16));
    cubicCurveTo(vR(storage['0.55']), pR(storage['0.45'], 1), pR(1, 1));
    lineTo(hR(16));
    moveTo(p(5, 9));
    cubicCurveTo(vR(-storage['0.55']), pR(storage['0.45'], -1), pR(1, -1));
    lineTo(hR(12));
    cubicCurveTo(hR(storage['0.55']), pR(1, storage['0.45']), pR(1, 1));
    lineTo(vR(10));
    cubicCurveTo(vR(storage['0.55']), pR(-storage['0.45'], 1), pR(-1, 1));
    lineTo(hR(-12));
    cubicCurveTo(hR(-storage['0.55']), pR(-1, -storage['0.45']), pR(-1, -1));
    lineTo(vR(-10));
  });
});
