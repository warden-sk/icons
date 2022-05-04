/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';
import storage from '../storage';

createIcon('Bin', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(11, 11));
    lineTo(hR(-2));
    lineTo(vR(6));
    lineTo(hR(2));
    lineTo(vR(-6));
    moveTo(p(15, 11));
    lineTo(hR(-2));
    lineTo(vR(6));
    lineTo(hR(2));
    lineTo(vR(-6));
  });
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(22, 6));
    lineTo(hR(-5));
    lineTo(vR(-4));
    lineTo(hR(-10));
    lineTo(vR(4));
    lineTo(hR(-5));
    lineTo(vR(2));
    lineTo(hR(2));
    lineTo(vR(14));
    lineTo(hR(16));
    lineTo(vR(-14));
    lineTo(hR(2));
    lineTo(vR(-2));
    moveTo(p(6, 8));
    lineTo(hR(12));
    lineTo(vR(12));
    lineTo(hR(-12));
    lineTo(vR(-12));
    moveTo(p(9, 6));
    lineTo(vR(-2));
    lineTo(hR(6));
    lineTo(vR(2));
    lineTo(hR(-6));
  });
});
