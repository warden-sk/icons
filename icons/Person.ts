/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';

createIcon('Person', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(12, 13));
    cubicCurveTo(hR(-3.31), pR(-6, -2.69), pR(-6, -6));
    cubicCurveTo(vR(-3.31), pR(2.69, -6), pR(6, -6));
    cubicCurveTo(hR(3.31), pR(6, 2.69), pR(6, 6));
    cubicCurveTo(vR(3.31), pR(-2.69, 6), pR(-6, 6));
    moveTo(p(12, 3));
    cubicCurveTo(hR(-2.21), pR(-4, 1.79), pR(-4, 4));
    cubicCurveTo(vR(2.21), pR(1.79, 4), pR(4, 4));
    cubicCurveTo(hR(2.21), pR(4, -1.79), pR(4, -4));
    cubicCurveTo(vR(-2.21), pR(-1.79, -4), pR(-4, -4));
    moveTo(p(12, 14));
    cubicCurveTo(hR(4.42), pR(8, 3.58), pR(8, 8));
    lineTo(hR(-2));
    cubicCurveTo(vR(-3.31), pR(-2.69, -6), pR(-6, -6));
    cubicCurveTo(hR(-3.31), pR(-6, 2.69), pR(-6, 6));
    lineTo(hR(-2));
    cubicCurveTo(vR(-4.42), pR(3.58, -8), pR(8, -8));
  });
});
