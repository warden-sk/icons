/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('Search', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(14.04, 14.49));
    lineTo(pR(4.13, 4.13));
    lineTo(hR(0.03));
    lineTo(pR(0.41, -0.41));
    cubicCurveTo(pR(0.02, -0.02), pR(0.02, -0.06), vR(-0.08));
    lineTo(pR(-4.07, -4.07));
    lineTo(pR(-0.02, -0.05));
    lineTo(pR(0.02, -0.03));
    cubicCurveTo(pR(0.8, -0.97), pR(1.23, -2.13), pR(1.23, -3.37));
    cubicCurveTo(pR(0.02, -1.35), pR(-0.5, -2.63), pR(-1.45, -3.61));
    cubicCurveTo(pR(-0.98, -0.99), pR(-2.29, -1.54), pR(-3.69, -1.54));
    cubicCurveTo(hR(-2.84), pR(-5.15, 2.31), pR(-5.15, 5.14));
    cubicCurveTo(vR(2.84), pR(2.31, 5.14), pR(5.15, 5.14));
    cubicCurveTo(hR(1.24), pR(2.41, -0.42), pR(3.39, -1.23));
    lineTo(pR(0.03, -0.03));
    moveTo(p(6.19, 10.65));
    cubicCurveTo(vR(-2.46), pR(2, -4.47), pR(4.47, -4.47));
    cubicCurveTo(hR(2.46), pR(4.46, 2), pR(4.46, 4.47));
    cubicCurveTo(vR(1.2), pR(-0.46, 2.33), pR(-1.3, 3.17));
    cubicCurveTo(pR(-0.82, 0.82), pR(-1.96, 1.3), pR(-3.12, 1.3));
    cubicCurveTo(hR(-2.49), pR(-4.51, -2.01), pR(-4.51, -4.47));
  });
});
