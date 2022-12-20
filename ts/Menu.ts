/*
 * Copyright 2023 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('Menu', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(3, 18));
    lineTo(hR(18));
    lineTo(vR(-2));
    lineTo(hR(-18));
    lineTo(vR(2));
    moveTo(p(3, 13));
    lineTo(hR(18));
    lineTo(vR(-2));
    lineTo(hR(-18));
    lineTo(vR(2));
    moveTo(p(3, 6));
    lineTo(vR(2));
    lineTo(hR(18));
    lineTo(vR(-2));
    lineTo(hR(-18));
  });
});
