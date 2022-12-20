/*
 * Copyright 2023 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('UpDown', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(12, 5.83));
    lineTo(pR(3.17, 3.17));
    lineTo(pR(1.41, -1.41));
    lineTo(pR(-4.58, -4.59));
    lineTo(pR(-4.59, 4.59));
    lineTo(pR(1.42, 1.41));
    lineTo(pR(3.17, -3.17));
    moveTo(p(12, 18.17));
    lineTo(pR(-3.17, -3.17));
    lineTo(pR(-1.41, 1.41));
    lineTo(pR(4.58, 4.59));
    lineTo(pR(4.59, -4.59));
    lineTo(pR(-1.42, -1.41));
    lineTo(pR(-3.17, 3.17));
  });
});
