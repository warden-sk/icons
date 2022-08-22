/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('Youtube', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(12, 17.98));
    cubicCurveTo(hR(-0.04), pR(-4.07, -0.06), pR(-5.33, -0.17));
    cubicCurveTo(pR(-0.06, -0.01), pR(-0.12, -0.02), pR(-0.18, -0.02));
    cubicCurveTo(pR(-0.41, -0.05), pR(-1.1, -0.13), pR(-1.63, -0.71));
    cubicCurveTo(pR(-0.48, -0.54), pR(-0.66, -1.69), pR(-0.66, -1.74));
    cubicCurveTo(vR(-0.02), pR(-0.17, -1.41), pR(-0.17, -2.74));
    lineTo(vR(-1.27));
    cubicCurveTo(vR(-1.32), pR(0.17, -2.66), pR(0.17, -2.68));
    cubicCurveTo(vR(-0.05), pR(0.12, -1.2), pR(0.61, -1.74));
    cubicCurveTo(pR(0.57, -0.57), pR(1.14, -0.66), pR(1.48, -0.71));
    cubicCurveTo(pR(0.05, -0.01), pR(0.1, -0.01), pR(0.14, -0.02));
    cubicCurveTo(pR(2.19, -0.17), pR(5.48, -0.18), pR(5.52, -0.18));
    cubicCurveTo(hR(0.03), hR(3.33), pR(5.5, 0.17));
    cubicCurveTo(hR(0.36), pR(1.06, 0.1), pR(1.63, 0.73));
    cubicCurveTo(pR(0.48, 0.54), pR(0.66, 1.69), pR(0.66, 1.74));
    lineTo(pR(0.23, 2.67));
    lineTo(vR(1.28));
    cubicCurveTo(vR(1.38), pR(-0.17, 2.72), pR(-0.17, 2.73));
    cubicCurveTo(pR(-0.01, 0.05), pR(-0.18, 1.2), pR(-0.66, 1.74));
    cubicCurveTo(pR(-0.52, 0.57), pR(-1.12, 0.66), pR(-1.47, 0.71));
    cubicCurveTo(pR(-0.06, 0.01), pR(-0.11, 0.02), pR(-0.15, 0.02));
    cubicCurveTo(pR(-2.19, 0.19), pR(-5.49, 0.19), pR(-5.52, 0.19));
    moveTo(p(10.09, 14.73));
    lineTo(pR(4.59, -2.7));
    lineTo(pR(-4.59, -2.75));
    lineTo(vR(5.45));
  });
});
