/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('Delete', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(19, 6.41));
    lineTo(pR(-1.41, -1.41));
    lineTo(pR(-5.59, 5.59));
    lineTo(pR(-5.59, -5.59));
    lineTo(pR(-1.41, 1.41));
    lineTo(pR(5.59, 5.59));
    lineTo(pR(-5.59, 5.59));
    lineTo(pR(1.41, 1.41));
    lineTo(pR(5.59, -5.59));
    lineTo(pR(5.59, 5.59));
    lineTo(pR(1.41, -1.41));
    lineTo(pR(-5.59, -5.59));
    lineTo(pR(5.59, -5.59));
  });
});
