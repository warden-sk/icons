/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('ChevronLeft', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(14.62, 5.52));
    lineTo(pR(1.36, 1.36));
    lineTo(pR(-5.15, 5.15));
    lineTo(pR(5.15, 5.16));
    lineTo(pR(-1.36, 1.36));
    lineTo(pR(-6.52, -6.52));
    lineTo(pR(6.52, -6.52));
  });
});
