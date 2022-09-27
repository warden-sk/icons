/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('ChevronUp', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(12, 8));
    lineTo(pR(-6, 6));
    lineTo(pR(1.41, 1.41));
    lineTo(pR(4.59, -4.58));
    lineTo(pR(4.59, 4.58));
    lineTo(pR(1.41, -1.41));
    lineTo(pR(-6, -6));
  });
});
