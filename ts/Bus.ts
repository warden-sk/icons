/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';
import storage from '../storage';

createIcon('Bus', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(20, 21));
    lineTo(hR(-3));
    lineTo(vR(-2));
    lineTo(hR(-10));
    lineTo(vR(2));
    lineTo(hR(-3));
    lineTo(vR(-10));
    lineTo(hR(-1));
    lineTo(vR(-4));
    lineTo(hR(1));
    lineTo(vR(-4));
    lineTo(hR(16));
    lineTo(vR(4));
    lineTo(hR(1));
    lineTo(vR(4));
    lineTo(hR(-1));
    lineTo(vR(10));
    moveTo(p(18, 5));
    lineTo(hR(-12));
    lineTo(vR(8));
    lineTo(hR(12));
    lineTo(vR(-8));
    moveTo(p(6, 17));
    lineTo(hR(3));
    lineTo(vR(-2));
    lineTo(hR(-3));
    lineTo(vR(2));
    moveTo(p(18, 17));
    lineTo(vR(-2));
    lineTo(hR(-3));
    lineTo(vR(2));
    lineTo(hR(3));
  });
});
