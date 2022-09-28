/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('Notification', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(12, 22));
    cubicCurveTo(hR(1.1), pR(2, -0.9), pR(2, -2));
    lineTo(hR(-4));
    cubicCurveTo(vR(1.1), pR(0.9, 2), pR(2, 2));
    moveTo(p(18, 16));
    lineTo(vR(-5));
    cubicCurveTo(vR(-3.07), pR(-1.63, -5.64), pR(-4.5, -6.32));
    lineTo(vR(-0.68));
    cubicCurveTo(vR(-0.83), pR(-0.67, -1.5), pR(-1.5, -1.5));
    cubicCurveTo(hR(-0.83), pR(-1.5, 0.67), pR(-1.5, 1.5));
    lineTo(vR(0.68));
    cubicCurveTo(pR(-2.86, 0.68), pR(-4.5, 3.24), pR(-4.5, 6.32));
    lineTo(vR(5));
    lineTo(pR(-2, 2));
    lineTo(vR(1));
    lineTo(hR(16));
    lineTo(vR(-1));
    lineTo(pR(-2, -2));
    moveTo(p(16, 17));
    lineTo(hR(-8));
    lineTo(vR(-6));
    cubicCurveTo(vR(-2.48), pR(1.51, -4.5), pR(4, -4.5));
    cubicCurveTo(hR(2.49), pR(4, 2.02), pR(4, 4.5));
    lineTo(vR(6));
  });
});
