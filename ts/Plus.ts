/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';
import storage from '../storage';

createIcon('Plus', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(13, 13));
    lineTo(hR(6));
    lineTo(vR(-2));
    lineTo(hR(-6));
    lineTo(vR(-6));
    lineTo(hR(-2));
    lineTo(vR(6));
    lineTo(hR(-6));
    lineTo(vR(2));
    lineTo(hR(6));
    lineTo(vR(6));
    lineTo(hR(2));
    lineTo(vR(-6));
  });
});
