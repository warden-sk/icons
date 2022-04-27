/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';
import storage from '../storage';

createIcon('BookmarkAdded', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(18, 3));
    cubicCurveTo(hR(storage['0.55']), pR(1, storage['0.45']), pR(1, 1));
    lineTo(vR(15.48));
    cubicCurveTo(vR(0.72), pR(-0.73, 1.2), pR(-1.39, 0.92));
    lineTo(pR(-5.61, -2.4));
    lineTo(pR(-5.61, 2.4));
    cubicCurveTo(pR(-0.66, 0.28), pR(-1.39, -0.2), pR(-1.39, -0.92));
    lineTo(vR(-15.48));
    cubicCurveTo(vR(-storage['0.55']), pR(storage['0.45'], -1), pR(1, -1));
    lineTo(hR(12));
  });
});
