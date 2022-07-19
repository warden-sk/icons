/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('Instagram', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(12, 9));
    cubicCurveTo(hR(1.66), pR(3, 1.34), pR(3, 3));
    lineTo(vR(0));
    cubicCurveTo(vR(1.66), pR(-1.34, 3), pR(-3, 3));
    lineTo(vR(0));
    cubicCurveTo(hR(-1.66), pR(-3, -1.34), pR(-3, -3));
    lineTo(vR(0));
    cubicCurveTo(vR(-1.66), pR(1.34, -3), pR(3, -3));
    lineTo(vR(0));
  });
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(3, 6));
    cubicCurveTo(vR(-1.66), pR(1.34, -3), pR(3, -3));
    lineTo(hR(12));
    cubicCurveTo(hR(1.66), pR(3, 1.34), pR(3, 3));
    lineTo(vR(12));
    cubicCurveTo(vR(1.66), pR(-1.34, 3), pR(-3, 3));
    lineTo(hR(-12));
    cubicCurveTo(hR(-1.66), pR(-3, -1.34), pR(-3, -3));
    lineTo(vR(-12));
    moveTo(p(18.5, 4.5));
    cubicCurveTo(hR(-0.55), pR(-1, 0.45), pR(-1, 1));
    lineTo(vR(0));
    cubicCurveTo(vR(0.55), pR(0.45, 1), pR(1, 1));
    lineTo(vR(0));
    cubicCurveTo(hR(0.55), pR(1, -0.45), pR(1, -1));
    lineTo(vR(0));
    cubicCurveTo(vR(-0.55), pR(-0.45, -1), pR(-1, -1));
    lineTo(vR(0));
    moveTo(p(7, 12));
    cubicCurveTo(vR(2.76), pR(2.24, 5), pR(5, 5));
    lineTo(vR(0));
    cubicCurveTo(hR(2.76), pR(5, -2.24), pR(5, -5));
    lineTo(vR(0));
    cubicCurveTo(vR(-2.76), pR(-2.24, -5), pR(-5, -5));
    lineTo(vR(0));
    cubicCurveTo(hR(-2.76), pR(-5, 2.24), pR(-5, 5));
    lineTo(vR(0));
  });
});
