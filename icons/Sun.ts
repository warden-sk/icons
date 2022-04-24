/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';

createIcon('Sun', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(17, 12));
    cubicCurveTo(vR(2.76), pR(-2.24, 5), pR(-5, 5));
    cubicCurveTo(hR(-2.76), pR(-5, -2.24), pR(-5, -5));
    cubicCurveTo(vR(-2.76), pR(2.24, -5), pR(5, -5));
    cubicCurveTo(hR(2.76), pR(5, 2.24), pR(5, 5));
    moveTo(p(11, 4));
    lineTo(vR(-2));
    cubicCurveTo(vR(-0.55), pR(0.45, -1), pR(1, -1));
    cubicCurveTo(hR(0.55), pR(1, 0.45), pR(1, 1));
    lineTo(vR(2));
    cubicCurveTo(vR(0.55), pR(-0.45, 1), pR(-1, 1));
    cubicCurveTo(hR(-0.55), pR(-1, -0.45), pR(-1, -1));
    moveTo(p(20, 11));
    lineTo(hR(2));
    cubicCurveTo(hR(0.55), pR(1, 0.45), pR(1, 1));
    cubicCurveTo(vR(0.55), pR(-0.45, 1), pR(-1, 1));
    lineTo(hR(-2));
    cubicCurveTo(hR(-0.55), pR(-1, -0.45), pR(-1, -1));
    cubicCurveTo(vR(-0.55), pR(0.45, -1), pR(1, -1));
    moveTo(p(2, 11));
    lineTo(hR(2));
    cubicCurveTo(hR(0.55), pR(1, 0.45), pR(1, 1));
    cubicCurveTo(vR(0.55), pR(-0.45, 1), pR(-1, 1));
    lineTo(hR(-2));
    cubicCurveTo(hR(-0.55), pR(-1, -0.45), pR(-1, -1));
    cubicCurveTo(vR(-0.55), pR(0.45, -1), pR(1, -1));
    moveTo(p(11, 22));
    lineTo(vR(-2));
    cubicCurveTo(vR(-0.55), pR(0.45, -1), pR(1, -1));
    cubicCurveTo(hR(0.55), pR(1, 0.45), pR(1, 1));
    lineTo(vR(2));
    cubicCurveTo(vR(0.55), pR(-0.45, 1), pR(-1, 1));
    cubicCurveTo(hR(-0.55), pR(-1, -0.45), pR(-1, -1));
  });
});
