/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';
import storage from '../storage';

createIcon('Calendar', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(21, 21));
    cubicCurveTo(vR(storage['0.55']), pR(-storage['0.45'], 1), pR(-1, 1));
    lineTo(hR(-16));
    cubicCurveTo(hR(-storage['0.55']), pR(-1, -storage['0.45']), pR(-1, -1));
    lineTo(vR(-16));
    cubicCurveTo(vR(-storage['0.55']), pR(storage['0.45'], -1), pR(1, -1));
    lineTo(hR(3));
    lineTo(vR(-2));
    lineTo(hR(2));
    lineTo(vR(2));
    lineTo(hR(6));
    lineTo(vR(-2));
    lineTo(hR(2));
    lineTo(vR(2));
    lineTo(hR(3));
    cubicCurveTo(hR(storage['0.55']), pR(1, storage['0.45']), pR(1, 1));
    lineTo(vR(16));
    moveTo(p(19, 20));
    lineTo(vR(-12));
    lineTo(hR(-14));
    lineTo(vR(12));
    lineTo(hR(14));
  });
});
