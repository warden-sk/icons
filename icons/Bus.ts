/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';

createIcon('Bus', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(7, 19));
    lineTo(vR(1));
    cubicCurveTo(vR(0.55), pR(-0.45, 1), pR(-1, 1));
    lineTo(hR(-1));
    cubicCurveTo(hR(-0.55), pR(-1, -0.45), pR(-1, -1));
    lineTo(vR(-1));
    lineTo(hR(-1));
    lineTo(vR(-8));
    lineTo(hR(-1));
    lineTo(vR(-4));
    lineTo(hR(1));
    lineTo(vR(-4));
    cubicCurveTo(vR(-0.55), pR(0.45, -1), pR(1, -1));
    lineTo(hR(16));
    cubicCurveTo(hR(0.55), pR(1, 0.45), pR(1, 1));
    lineTo(vR(4));
    lineTo(hR(1));
    lineTo(vR(4));
    lineTo(hR(-1));
    lineTo(vR(8));
    lineTo(hR(-1));
    lineTo(vR(1));
    cubicCurveTo(vR(0.55), pR(-0.45, 1), pR(-1, 1));
    lineTo(hR(-1));
    cubicCurveTo(hR(-0.55), pR(-1, -0.45), pR(-1, -1));
    lineTo(vR(-1));
    lineTo(hR(-10));
    moveTo(p(5, 15));
    lineTo(vR(2));
    lineTo(hR(4));
    lineTo(vR(-2));
    lineTo(hR(-4));
    moveTo(p(15, 17));
    lineTo(hR(4));
    lineTo(vR(-2));
    lineTo(hR(-4));
    lineTo(vR(2));
    moveTo(p(5, 4));
    lineTo(vR(9));
    lineTo(hR(14));
    lineTo(vR(-9));
    lineTo(hR(-14));
  });
});
