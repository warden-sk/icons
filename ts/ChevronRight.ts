/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';
import storage from '../storage';

createIcon('ChevronRight', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(8.59, 7.41));
    lineTo(pR(1.41, -1.41));
    lineTo(pR(6, 6));
    lineTo(pR(-6, 6));
    lineTo(pR(-1.41, -1.41));
    lineTo(pR(4.58, -4.59));
    lineTo(pR(-4.58, -4.59));
  });
});