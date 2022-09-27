/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('Calendar', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(3, 5));
    cubicCurveTo(vR(-0.55), pR(0.45, -1), pR(1, -1));
    lineTo(hR(3));
    lineTo(vR(-2));
    lineTo(hR(2));
    lineTo(vR(2));
    lineTo(hR(6));
    lineTo(vR(-2));
    lineTo(hR(2));
    lineTo(vR(2));
    lineTo(hR(3));
    cubicCurveTo(hR(0.55), pR(1, 0.45), pR(1, 1));
    lineTo(vR(16));
    cubicCurveTo(vR(0.55), pR(-0.45, 1), pR(-1, 1));
    lineTo(hR(-16));
    cubicCurveTo(hR(-0.55), pR(-1, -0.45), pR(-1, -1));
    lineTo(vR(-16));
    moveTo(p(19, 20));
    lineTo(vR(-10));
    lineTo(hR(-14));
    lineTo(vR(10));
    lineTo(hR(14));
    moveTo(p(5, 8));
    lineTo(vR(-2));
    lineTo(hR(2));
    lineTo(vR(1));
    lineTo(hR(2));
    lineTo(vR(-1));
    lineTo(hR(6));
    lineTo(vR(1));
    lineTo(hR(2));
    lineTo(vR(-1));
    lineTo(hR(2));
    lineTo(vR(2));
    lineTo(hR(-14));
  });
});
