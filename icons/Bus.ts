/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';

createIcon('Bus', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(4, 16));
    cubicCurveTo(vR(0.88), pR(0.39, 1.67), pR(1, 2.22));
    lineTo(vR(1.78));
    cubicCurveTo(vR(0.55), pR(0.45, 1), pR(1, 1));
    lineTo(hR(1));
    cubicCurveTo(hR(0.55), pR(1, -0.45), pR(1, -1));
    lineTo(vR(-1));
    lineTo(hR(8));
    lineTo(vR(1));
    cubicCurveTo(vR(0.55), pR(0.45, 1), pR(1, 1));
    lineTo(hR(1));
    cubicCurveTo(hR(0.55), pR(1, -0.45), pR(1, -1));
    lineTo(vR(-1.78));
    cubicCurveTo(pR(0.61, -0.55), pR(1, -1.34), pR(1, -2.22));
    lineTo(vR(-10));
    cubicCurveTo(vR(-3.5), pR(-3.58, -4), pR(-8, -4));
    cubicCurveTo(pR(-8, 0.5), pR(-8, 4));
    lineTo(vR(10));
    moveTo(pR(3.5, 1));
    cubicCurveTo(hR(-0.83), pR(-1.5, -0.67), pR(-1.5, -1.5));
    cubicCurveTo(pR(0.67, -1.5), pR(1.5, -1.5));
    cubicCurveTo(pR(1.5, 0.67), pR(1.5, 1.5));
    cubicCurveTo(pR(-0.67, 1.5), pR(-1.5, 1.5));
    moveTo(hR(9));
    cubicCurveTo(hR(-0.83), pR(-1.5, -0.67), pR(-1.5, -1.5));
    cubicCurveTo(pR(0.67, -1.5), pR(1.5, -1.5));
    cubicCurveTo(pR(1.5, 0.67), pR(1.5, 1.5));
    cubicCurveTo(pR(-0.67, 1.5), pR(-1.5, 1.5));
    moveTo(pR(1.5, -6));
    lineTo(hR(-12));
    lineTo(vR(-5));
    lineTo(hR(12));
    lineTo(vR(5));
  });
});
