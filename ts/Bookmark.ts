/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('Bookmark', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(11.68, 18.6));
    cubicCurveTo(pR(-5.91, -4.81), pR(-7.52, -6.51), pR(-7.52, -9.3));
    cubicCurveTo(vR(-2.3), pR(1.87, -4.17), pR(4.17, -4.17));
    cubicCurveTo(hR(1.75), pR(2.8, 0.87), pR(3.66, 1.84));
    cubicCurveTo(pR(0.87, -0.97), pR(1.92, -1.84), pR(3.66, -1.84));
    cubicCurveTo(hR(2.3), pR(4.17, 1.87), pR(4.17, 4.17));
    cubicCurveTo(vR(2.79), pR(-1.6, 4.49), pR(-7.52, 9.3));
    lineTo(pR(-0.3, 0.27));
    lineTo(pR(-0.32, -0.27));
    moveTo(p(8.34, 6.14));
    cubicCurveTo(hR(-1.74), pR(-3.16, 1.42), pR(-3.16, 3.16));
    cubicCurveTo(vR(2.32), pR(1.45, 3.85), pR(6.82, 8.25));
    cubicCurveTo(pR(5.37, -4.41), pR(6.82, -5.93), pR(6.82, -8.25));
    cubicCurveTo(vR(-1.74), pR(-1.42, -3.16), pR(-3.16, -3.16));
    cubicCurveTo(hR(-1.61), pR(-2.48, 0.99), pR(-3.11, 1.72));
    lineTo(pR(-0.55, 0.62));
    lineTo(pR(-0.55, -0.62));
    cubicCurveTo(pR(-0.64, -0.73), pR(-1.51, -1.72), pR(-3.11, -1.72));
  });
});
