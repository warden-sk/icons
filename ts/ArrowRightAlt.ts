/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';
import storage from '../storage';

createIcon('ArrowRightAlt', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(16, 16));
    lineTo(pR(4, -4));
    lineTo(pR(-4, -4));
    lineTo(vR(3));
    lineTo(hR(-12));
    lineTo(vR(2));
    lineTo(hR(12));
    lineTo(vR(3));
  });
});
