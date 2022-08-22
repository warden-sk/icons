/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('Filter', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(10.1, 16.3));
    cubicCurveTo(hR(-0.3), pR(-0.5, -0.2), pR(-0.5, -0.5));
    cubicCurveTo(vR(-0.3), pR(0.2, -0.5), pR(0.5, -0.5));
    lineTo(hR(3.8));
    cubicCurveTo(hR(0.3), pR(0.5, 0.2), pR(0.5, 0.5));
    cubicCurveTo(vR(0.3), pR(-0.2, 0.5), pR(-0.5, 0.5));
    lineTo(hR(-3.8));
    moveTo(p(7.5, 12.5));
    cubicCurveTo(hR(-0.3), pR(-0.5, -0.2), pR(-0.5, -0.5));
    cubicCurveTo(vR(-0.3), pR(0.2, -0.5), pR(0.5, -0.5));
    lineTo(hR(9));
    cubicCurveTo(hR(0.3), pR(0.5, 0.2), pR(0.5, 0.5));
    cubicCurveTo(vR(0.3), pR(-0.2, 0.5), pR(-0.5, 0.5));
    lineTo(hR(-9));
    moveTo(p(5, 8.7));
    cubicCurveTo(hR(-0.3), pR(-0.5, -0.2), pR(-0.5, -0.5));
    cubicCurveTo(vR(-0.3), pR(0.2, -0.5), pR(0.5, -0.5));
    lineTo(hR(14));
    cubicCurveTo(hR(0.3), pR(0.5, 0.2), pR(0.5, 0.5));
    cubicCurveTo(vR(0.3), pR(-0.2, 0.5), pR(-0.5, 0.5));
    lineTo(hR(-14));
  });
});
