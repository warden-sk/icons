/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('Delete', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(16.94, 6.63));
    lineTo(pR(0.52, 0.52));
    lineTo(pR(-4.9, 4.9));
    lineTo(pR(4.9, 4.9));
    lineTo(pR(-0.52, 0.52));
    lineTo(pR(-4.9, -4.9));
    lineTo(pR(-4.9, 4.9));
    lineTo(pR(-0.52, -0.52));
    lineTo(pR(4.9, -4.9));
    lineTo(pR(-4.9, -4.9));
    lineTo(pR(0.52, -0.52));
    lineTo(pR(4.9, 4.9));
    lineTo(pR(4.9, -4.9));
  });
});
