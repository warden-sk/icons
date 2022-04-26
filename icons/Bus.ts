/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';

createIcon('Bus', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(4, 20));
    lineTo(vR(-9));
    cubicCurveTo(hR(-0.55), pR(-1, -0.45), pR(-1, -1));
    lineTo(vR(-2));
    cubicCurveTo(vR(-0.55), pR(0.45, -1), pR(1, -1));
    lineTo(vR(-3));
    cubicCurveTo(vR(-0.55), pR(0.45, -1), pR(1, -1));
    lineTo(hR(14));
    cubicCurveTo(hR(0.55), pR(1, 0.45), pR(1, 1));
    lineTo(vR(3));
    cubicCurveTo(hR(0.55), pR(1, 0.45), pR(1, 1));
    lineTo(vR(2));
    cubicCurveTo(vR(0.55), pR(-0.45, 1), pR(-1, 1));
    lineTo(vR(9));
    cubicCurveTo(vR(0.55), pR(-0.45, 1), pR(-1, 1));
    lineTo(hR(-1));
    cubicCurveTo(hR(-0.55), pR(-1, -0.45), pR(-1, -1));
    lineTo(vR(-1));
    lineTo(hR(-10));
    lineTo(vR(1));
    cubicCurveTo(vR(0.55), pR(-0.45, 1), pR(-1, 1));
    lineTo(hR(-1));
    cubicCurveTo(hR(-0.55), pR(-1, -0.45), pR(-1, -1));
    moveTo(p(7, 17));
    lineTo(hR(1));
    cubicCurveTo(hR(0.55), pR(1, -0.45), pR(1, -1));
    cubicCurveTo(vR(-0.55), pR(-0.45, -1), pR(-1, -1));
    lineTo(hR(-1));
    cubicCurveTo(hR(-0.55), pR(-1, 0.45), pR(-1, 1));
    cubicCurveTo(vR(0.55), pR(0.45, 1), pR(1, 1));
    moveTo(p(18, 16));
    cubicCurveTo(vR(-0.55), pR(-0.45, -1), pR(-1, -1));
    lineTo(hR(-1));
    cubicCurveTo(hR(-0.55), pR(-1, 0.45), pR(-1, 1));
    cubicCurveTo(vR(0.55), pR(0.45, 1), pR(1, 1));
    lineTo(hR(1));
    cubicCurveTo(hR(0.55), pR(1, -0.45), pR(1, -1));
    moveTo(p(18, 12));
    lineTo(vR(-6));
    cubicCurveTo(vR(-0.55), pR(-0.45, -1), pR(-1, -1));
    lineTo(hR(-10));
    cubicCurveTo(hR(-0.55), pR(-1, 0.45), pR(-1, 1));
    lineTo(vR(6));
    cubicCurveTo(vR(0.55), pR(0.45, 1), pR(1, 1));
    lineTo(hR(10));
    cubicCurveTo(hR(0.55), pR(1, -0.45), pR(1, -1));
  });
});
