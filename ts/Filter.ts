/*
 * Copyright 2023 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('Filter', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(14, 18));
    lineTo(hR(-4));
    lineTo(vR(-2));
    lineTo(hR(4));
    lineTo(vR(2));
    moveTo(p(3, 8));
    lineTo(vR(-2));
    lineTo(hR(18));
    lineTo(vR(2));
    lineTo(hR(-18));
    moveTo(p(18, 13));
    lineTo(hR(-12));
    lineTo(vR(-2));
    lineTo(hR(12));
    lineTo(vR(2));
  });
});
