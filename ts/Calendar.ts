/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';
import storage from '../storage';

createIcon('Calendar', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(17, 11));
    lineTo(vR(2));
    lineTo(hR(-2));
    lineTo(vR(-2));
    lineTo(hR(2));
    moveTo(p(7, 17));
    lineTo(vR(-2));
    lineTo(hR(2));
    lineTo(vR(2));
    lineTo(hR(-2));
    moveTo(p(13, 17));
    lineTo(vR(-2));
    lineTo(hR(-2));
    lineTo(vR(2));
    lineTo(hR(2));
    moveTo(p(17, 15));
    lineTo(vR(2));
    lineTo(hR(-2));
    lineTo(vR(-2));
    lineTo(hR(2));
    moveTo(p(13, 13));
    lineTo(vR(-2));
    lineTo(hR(-2));
    lineTo(vR(2));
    lineTo(hR(2));
    moveTo(p(9, 11));
    lineTo(vR(2));
    lineTo(hR(-2));
    lineTo(vR(-2));
    lineTo(hR(2));
  });
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(7, 4));
    lineTo(hR(-4));
    lineTo(vR(18));
    lineTo(hR(18));
    lineTo(vR(-18));
    lineTo(hR(-4));
    lineTo(vR(-2));
    lineTo(hR(-2));
    lineTo(vR(2));
    lineTo(hR(-6));
    lineTo(vR(-2));
    lineTo(hR(-2));
    lineTo(vR(2));
    moveTo(p(19, 8));
    lineTo(vR(12));
    lineTo(hR(-14));
    lineTo(vR(-12));
    lineTo(hR(14));
  });
});
