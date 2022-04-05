/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';

createIcon('Sun', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(12, 7));
    cubicCurveTo(hR(-2.76), pR(-5, 2.24), pR(-5, 5));
    cubicCurveTo(pR(2.24, 5), pR(5, 5));
    cubicCurveTo(pR(5, -2.24), pR(5, -5));
    cubicCurveTo(pR(-2.24, -5), pR(-5, -5));
    lineTo(vR(0));
    moveTo(pR(-10, 6));
    lineTo(hR(2));
    cubicCurveTo(hR(0.55), pR(1, -0.45), pR(1, -1));
    cubicCurveTo(pR(-0.45, -1), pR(-1, -1));
    lineTo(hR(-2));
    cubicCurveTo(hR(-0.55), pR(-1, 0.45), pR(-1, 1));
    cubicCurveTo(pR(0.45, 1), pR(1, 1));
    moveTo(hR(18));
    lineTo(hR(2));
    cubicCurveTo(hR(0.55), pR(1, -0.45), pR(1, -1));
    cubicCurveTo(pR(-0.45, -1), pR(-1, -1));
    lineTo(hR(-2));
    cubicCurveTo(hR(-0.55), pR(-1, 0.45), pR(-1, 1));
    cubicCurveTo(pR(0.45, 1), pR(1, 1));
    moveTo(pR(-9, -11));
    lineTo(vR(2));
    cubicCurveTo(vR(0.55), pR(0.45, 1), pR(1, 1));
    cubicCurveTo(pR(1, -0.45), pR(1, -1));
    lineTo(vR(-2));
    cubicCurveTo(vR(-0.55), pR(-0.45, -1), pR(-1, -1));
    cubicCurveTo(pR(-1, 0.45), pR(-1, 1));
    moveTo(vR(18));
    lineTo(vR(2));
    cubicCurveTo(vR(0.55), pR(0.45, 1), pR(1, 1));
    cubicCurveTo(pR(1, -0.45), pR(1, -1));
    lineTo(vR(-2));
    cubicCurveTo(vR(-0.55), pR(-0.45, -1), pR(-1, -1));
    cubicCurveTo(hR(-0.55), pR(-1, 0.45), pR(-1, 1));
    moveTo(pR(-5.01, -15.42));
    cubicCurveTo(pR(-0.39, -0.39), pR(-1.03, -0.39), hR(-1.41));
    cubicCurveTo(pR(-0.39, 0.39), pR(-0.39, 1.03), vR(1.41));
    lineTo(pR(1.06, 1.06));
    cubicCurveTo(pR(0.39, 0.39), pR(1.03, 0.39), hR(1.41));
    cubicCurveTo(pR(0.39, -1.03), vR(-1.41));
    lineTo(pR(-1.06, -1.06));
    moveTo(pR(12.37, 12.37));
    cubicCurveTo(pR(-0.39, -0.39), pR(-1.03, -0.39), hR(-1.41));
    cubicCurveTo(pR(-0.39, 0.39), pR(-0.39, 1.03), vR(1.41));
    lineTo(pR(1.06, 1.06));
    cubicCurveTo(pR(0.39, 0.39), pR(1.03, 0.39), hR(1.41));
    cubicCurveTo(pR(0.39, -0.39), pR(0.39, -1.03), vR(-1.41));
    lineTo(pR(-1.06, -1.06));
    moveTo(pR(1.06, -10.96));
    cubicCurveTo(pR(0.39, -0.39), pR(0.39, -1.03), vR(-1.41));
    cubicCurveTo(pR(-0.39, -0.39), pR(-1.03, -0.39), hR(-1.41));
    lineTo(pR(-1.06, 1.06));
    cubicCurveTo(pR(-0.39, 0.39), pR(-0.39, 1.03), vR(1.41));
    cubicCurveTo(pR(1.03, 0.39), hR(1.41));
    lineTo(pR(1.06, -1.06));
    moveTo(pR(-12.37, 12.37));
    cubicCurveTo(pR(0.39, -0.39), pR(0.39, -1.03), vR(-1.41));
    cubicCurveTo(pR(-0.39, -0.39), pR(-1.03, -0.39), hR(-1.41));
    lineTo(pR(-1.06, 1.06));
    cubicCurveTo(pR(-0.39, 0.39), pR(-0.39, 1.03), vR(1.41));
    cubicCurveTo(pR(1.03, 0.39), hR(1.41));
    lineTo(pR(1.06, -1.06));
  });
});
