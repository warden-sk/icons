/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('Youtube', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(18.34, 9.3));
    cubicCurveTo(vR(0), pR(-0.14, -0.95), pR(-0.53, -1.38));
    cubicCurveTo(pR(-0.48, -0.52), pR(-1.05, -0.57), pR(-1.29, -0.57));
    cubicCurveTo(pR(-1.81, -0.14), pR(-4.53, -0.14), pR(-4.53, -0.14));
    cubicCurveTo(vR(0), hR(-2.71), pR(-4.53, 0.14));
    cubicCurveTo(pR(-0.03, 0.01), pR(-0.07, 0.01), pR(-0.12, 0.02));
    cubicCurveTo(pR(-0.27, 0.04), pR(-0.72, 0.1), pR(-1.17, 0.55));
    cubicCurveTo(pR(-0.38, 0.43), pR(-0.48, 1.38), pR(-0.48, 1.38));
    cubicCurveTo(vR(0), pR(-0.14, 1.09), pR(-0.14, 2.19));
    lineTo(vR(1.05));
    cubicCurveTo(vR(1.1), pR(0.14, 2.24), pR(0.14, 2.24));
    cubicCurveTo(vR(0), pR(0.14, 0.95), pR(0.52, 1.38));
    cubicCurveTo(pR(0.41, 0.45), pR(0.96, 0.52), pR(1.29, 0.56));
    lineTo(pR(0.02, 0));
    cubicCurveTo(pR(0.05, 0.01), pR(0.09, 0.01), pR(0.12, 0.02));
    cubicCurveTo(pR(1.05, 0.09), pR(4.38, 0.14), pR(4.38, 0.14));
    cubicCurveTo(vR(0), hR(2.72), pR(4.53, -0.14));
    cubicCurveTo(pR(0.04, -0.01), pR(0.08, -0.01), pR(0.13, -0.02));
    cubicCurveTo(pR(0.28, -0.04), pR(0.75, -0.1), pR(1.16, -0.55));
    cubicCurveTo(pR(0.38, -0.43), pR(0.53, -1.38), pR(0.53, -1.38));
    cubicCurveTo(vR(0), pR(0.14, -1.1), pR(0.14, -2.24));
    lineTo(vR(-1.05));
    cubicCurveTo(pR(-0.09, -1.1), pR(-0.19, -2.19), pR(-0.19, -2.19));
    moveTo(p(10.38, 9.63));
    lineTo(pR(4.05, 2.43));
    lineTo(pR(-4.05, 2.38));
    lineTo(vR(-4.82));
  });
});
