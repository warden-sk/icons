/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('Bookmark', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(5.04, 9.61));
    cubicCurveTo(vR(2.49), pR(1.44, 4.02), pR(6.78, 8.36));
    lineTo(pR(0.23, 0.2));
    lineTo(pR(0.22, -0.2));
    cubicCurveTo(pR(5.34, -4.34), pR(6.79, -5.87), pR(6.79, -8.36));
    cubicCurveTo(vR(-2.03), pR(-1.65, -3.68), pR(-3.68, -3.68));
    cubicCurveTo(hR(-1.59), pR(-2.53, 0.82), pR(-3.3, 1.7));
    lineTo(pR(-0.02, 0.02));
    lineTo(pR(-0.02, -0.02));
    cubicCurveTo(pR(-0.78, -0.88), pR(-1.71, -1.7), pR(-3.3, -1.7));
    cubicCurveTo(hR(-2.04), pR(-3.68, 1.65), pR(-3.68, 3.68));
    moveTo(p(5.75, 9.61));
    cubicCurveTo(vR(-1.63), pR(1.33, -2.96), pR(2.96, -2.96));
    cubicCurveTo(hR(1.5), pR(2.31, 0.92), pR(2.89, 1.59));
    lineTo(pR(0.42, 0.48));
    lineTo(pR(0.43, -0.48));
    lineTo(pR(0.01, -0.01));
    cubicCurveTo(pR(0.59, -0.67), pR(1.39, -1.59), pR(2.89, -1.59));
    cubicCurveTo(hR(1.63), pR(2.96, 1.33), pR(2.96, 2.96));
    cubicCurveTo(vR(2.15), pR(-1.34, 3.55), pR(-6.27, 7.6));
    lineTo(pR(-0.01, 0.01));
    lineTo(pR(-0.02, -0.01));
    cubicCurveTo(pR(-4.93, -4.05), pR(-6.27, -5.45), pR(-6.27, -7.6));
  });
});
