/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';
import storage from '../storage';

createIcon('Bookmark', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(5, 3.99));
    lineTo(vR(15.49));
    cubicCurveTo(vR(0.72), pR(0.73, 1.2), pR(1.39, 0.92));
    lineTo(pR(5.61, -2.4));
    lineTo(pR(5.61, 2.4));
    cubicCurveTo(pR(0.66, 0.28), pR(1.39, -0.2), pR(1.39, -0.92));
    lineTo(vR(-15.48));
    cubicCurveTo(vR(-storage['0.55']), pR(-storage['0.45'], -1), pR(-1, -1));
    lineTo(hR(-12));
    cubicCurveTo(hR(-storage['0.55']), pR(-1, 0.44), pR(-1, 0.99));
    moveTo(p(17, 18));
    lineTo(pR(-4.63, -1.85));
    cubicCurveTo(pR(-0.24, -0.1), pR(-0.5, -0.1), hR(-0.74));
    lineTo(pR(-4.63, 1.85));
    lineTo(vR(-12));
    cubicCurveTo(vR(-storage['0.55']), pR(storage['0.45'], -1), pR(1, -1));
    lineTo(hR(8));
    cubicCurveTo(hR(storage['0.55']), pR(1, storage['0.45']), pR(1, 1));
    lineTo(vR(12));
  });
});
