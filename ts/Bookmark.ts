/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';
import storage from '../storage';

createIcon('Bookmark', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(12, 18));
    lineTo(pR(-8, 4));
    lineTo(vR(-20));
    lineTo(hR(16));
    lineTo(vR(20));
    lineTo(pR(-8, -4));
    moveTo(p(12, 16));
    lineTo(pR(6, 3));
    lineTo(vR(-15));
    lineTo(hR(-12));
    lineTo(vR(15));
    lineTo(pR(6, -3));
  });
});
