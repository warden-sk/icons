/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';
import storage from '../storage';

createIcon('ChevronLeft', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(14, 6));
    lineTo(pR(1.41, 1.41));
    lineTo(pR(-4.58, 4.59));
    lineTo(pR(4.58, 4.59));
    lineTo(pR(-1.41, 1.41));
    lineTo(pR(-6, -6));
    lineTo(pR(6, -6));
  });
});