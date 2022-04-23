/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';

createIcon('Calendar', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(21, 5.5));
    lineTo(vR(15));
    cubicCurveTo(vR(0.83), pR(-0.67, 1.5), pR(-1.5, 1.5));
    lineTo(hR(-15));
    cubicCurveTo(hR(-0.83), pR(-1.5, -0.67), pR(-1.5, -1.5));
    lineTo(vR(-15));
    cubicCurveTo(vR(-0.83), pR(0.67, -1.5), pR(1.5, -1.5));
    lineTo(hR(2.5));
    lineTo(vR(-2));
    lineTo(hR(2));
    lineTo(vR(2));
    lineTo(hR(6));
    lineTo(vR(-2));
    lineTo(hR(2));
    lineTo(vR(2));
    lineTo(hR(2.5));
    cubicCurveTo(hR(0.83), pR(1.5, 0.67), pR(1.5, 1.5));
    moveTo(p(19, 8));
    lineTo(hR(-14));
    lineTo(vR(12));
    lineTo(hR(14));
    lineTo(vR(-12));
  });
  addPath(({ cubicCurveTo, lineTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(7, 15));
    lineTo(hR(2));
    lineTo(vR(2));
    lineTo(hR(-2));
    lineTo(vR(-2));
    moveTo(pR(11, 15));
    lineTo(hR(2));
    lineTo(vR(2));
    lineTo(hR(-2));
    lineTo(vR(-2));
    moveTo(pR(15, 15));
    lineTo(hR(2));
    lineTo(vR(2));
    lineTo(hR(-2));
    lineTo(vR(-2));
    moveTo(pR(15, 11));
    lineTo(hR(2));
    lineTo(vR(2));
    lineTo(hR(-2));
    lineTo(vR(-2));
    moveTo(pR(11, 11));
    lineTo(hR(2));
    lineTo(vR(2));
    lineTo(hR(-2));
    lineTo(vR(-2));
    moveTo(pR(7, 11));
    lineTo(hR(2));
    lineTo(vR(2));
    lineTo(hR(-2));
    lineTo(vR(-2));
  });
});
