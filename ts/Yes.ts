/*
 * Copyright 2023 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('Yes', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(18.61, 8.52));
    lineTo(pR(-1.66, -1.66));
    lineTo(pR(-6.96, 6.96));
    lineTo(pR(-2.94, -2.95));
    lineTo(pR(-1.66, 1.66));
    lineTo(pR(2.94, 2.95));
    lineTo(pR(1.66, 1.66));
    lineTo(pR(1.66, -1.66));
    lineTo(pR(6.96, -6.96));
  });
});
