/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('Search', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(18.7, 19.39));
    lineTo(pR(-0.03, -0.02));
    cubicCurveTo(pR(-0.03, -0.03), pR(-3.1, -3.09), pR(-4.5, -4.49));
    cubicCurveTo(pR(-1.07, 0.89), pR(-2.36, 1.36), pR(-3.75, 1.36));
    cubicCurveTo(hR(-3.21), pR(-5.81, -2.61), pR(-5.81, -5.81));
    cubicCurveTo(vR(-3.21), pR(2.61, -5.81), pR(5.81, -5.81));
    cubicCurveTo(hR(1.58), pR(3.06, 0.62), pR(4.17, 1.74));
    cubicCurveTo(pR(1.08, 1.1), pR(1.67, 2.55), pR(1.64, 4.07));
    cubicCurveTo(vR(1.36), pR(-0.46, 2.65), pR(-1.32, 3.73));
    lineTo(pR(4.44, 4.49));
    lineTo(pR(0.02, 0.08));
    cubicCurveTo(vR(0.08), pR(-0.02, 0.13), pR(-0.05, 0.17));
    lineTo(pR(-0.42, 0.42));
    lineTo(pR(-0.1, 0.07));
    lineTo(hR(-0.1));
    moveTo(p(10.48, 5.68));
    cubicCurveTo(hR(-2.64), pR(-4.79, 2.15), pR(-4.79, 4.79));
    cubicCurveTo(vR(2.64), pR(2.17, 4.79), pR(4.83, 4.79));
    cubicCurveTo(hR(1.24), pR(2.46, -0.51), pR(3.34, -1.39));
    cubicCurveTo(pR(0.9, -0.9), pR(1.39, -2.1), pR(1.39, -3.39));
    cubicCurveTo(pR(0.01, -2.65), pR(-2.13, -4.8), pR(-4.77, -4.8));
  });
});
