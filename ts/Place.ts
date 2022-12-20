/*
 * Copyright 2023 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('Place', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(12, 12));
    cubicCurveTo(hR(-1.1), pR(-2, -0.9), pR(-2, -2));
    cubicCurveTo(vR(-1.1), pR(0.9, -2), pR(2, -2));
    cubicCurveTo(hR(1.1), pR(2, 0.9), pR(2, 2));
    cubicCurveTo(vR(1.1), pR(-0.9, 2), pR(-2, 2));
    moveTo(p(18, 10.2));
    cubicCurveTo(vR(-3.63), pR(-2.65, -6.2), pR(-6, -6.2));
    cubicCurveTo(hR(-3.35), pR(-6, 2.57), pR(-6, 6.2));
    cubicCurveTo(vR(2.34), pR(1.95, 5.44), pR(6, 9.14));
    cubicCurveTo(pR(4.05, -3.7), pR(6, -6.8), pR(6, -9.14));
    moveTo(p(12, 2));
    cubicCurveTo(hR(4.2), pR(8, 3.22), pR(8, 8.2));
    cubicCurveTo(vR(3.32), pR(-2.67, 7.25), pR(-8, 11.8));
    cubicCurveTo(pR(-5.33, -4.55), pR(-8, -8.48), pR(-8, -11.8));
    cubicCurveTo(vR(-4.98), pR(3.8, -8.2), pR(8, -8.2));
  });
});
