/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('Calendar', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(3, 4));
    lineTo(hR(4));
    lineTo(vR(-2));
    lineTo(hR(2));
    lineTo(vR(2));
    lineTo(hR(6));
    lineTo(vR(-2));
    lineTo(hR(2));
    lineTo(vR(2));
    lineTo(hR(4));
    lineTo(vR(18));
    lineTo(hR(-18));
    lineTo(vR(-18));
    moveTo(p(19, 20));
    lineTo(vR(-10));
    lineTo(hR(-14));
    lineTo(vR(10));
    lineTo(hR(14));
    moveTo(p(5, 8));
    lineTo(hR(14));
    lineTo(vR(-2));
    lineTo(hR(-2));
    lineTo(vR(1));
    lineTo(hR(-2));
    lineTo(vR(-1));
    lineTo(hR(-6));
    lineTo(vR(1));
    lineTo(hR(-2));
    lineTo(vR(-1));
    lineTo(hR(-2));
    lineTo(vR(2));
  });
});
