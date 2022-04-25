/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';

createIcon('Bus', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(4, 19));
    lineTo(hR(3));
    lineTo(vR(1));
    cubicCurveTo(vR(0.55), pR(-0.45, 1), pR(-1, 1));
    lineTo(hR(-1));
    cubicCurveTo(hR(-0.55), pR(-1, -0.45), pR(-1, -1));
    lineTo(vR(-1));
    moveTo(p(17, 19));
    lineTo(hR(3));
    lineTo(vR(1));
    cubicCurveTo(vR(0.55), pR(-0.45, 1), pR(-1, 1));
    lineTo(hR(-1));
    cubicCurveTo(hR(-0.55), pR(-1, -0.45), pR(-1, -1));
    lineTo(vR(-1));
    moveTo(p(2, 7));
    lineTo(hR(1));
    lineTo(vR(4));
    lineTo(hR(-1));
    lineTo(vR(-4));
    moveTo(p(21, 7));
    lineTo(hR(1));
    lineTo(vR(4));
    lineTo(hR(-1));
    lineTo(vR(-4));
    moveTo(p(20, 2));
    lineTo(hR(-16));
    cubicCurveTo(hR(-0.55), pR(-1, 0.45), pR(-1, 1));
    lineTo(vR(16));
    lineTo(hR(18));
    lineTo(vR(-16));
    cubicCurveTo(vR(-0.55), pR(-0.45, -1), pR(-1, -1));
    moveTo(p(19, 4));
    lineTo(hR(-14));
    lineTo(vR(9));
    lineTo(hR(14));
    lineTo(vR(-9));
    moveTo(p(5, 15));
    lineTo(hR(4));
    lineTo(vR(2));
    lineTo(hR(-4));
    lineTo(vR(-2));
    moveTo(p(19, 15));
    lineTo(hR(-4));
    lineTo(vR(2));
    lineTo(hR(4));
    lineTo(vR(-2));
  });
});
