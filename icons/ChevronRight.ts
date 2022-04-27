/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';

createIcon('ChevronRight', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(9.29, 6.71));
    cubicCurveTo(pR(-0.39, 0.39), pR(-0.39, 1.02), pR(0, 1.41));
    lineTo(pR(3.88, 3.88));
    lineTo(pR(-3.88, 3.88));
    cubicCurveTo(pR(-0.39, 0.39), pR(-0.39, 1.02), pR(0, 1.41));
    cubicCurveTo(pR(0.39, 0.39), pR(1.02, 0.39), hR(1.41));
    lineTo(pR(4.59, -4.59));
    cubicCurveTo(pR(0.39, -0.39), pR(0.39, -1.02), vR(-1.41));
    lineTo(pR(-4.59, -4.59));
    cubicCurveTo(pR(-0.39, -0.39), pR(-1.02, -0.39), hR(-1.41));
  });
});
