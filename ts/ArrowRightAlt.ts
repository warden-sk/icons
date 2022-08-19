/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('ArrowRightAlt', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(12.18, 6.89));
    lineTo(pR(1.37, -1.36));
    lineTo(pR(6.52, 6.52));
    lineTo(pR(-6.52, 6.52));
    lineTo(pR(-1.37, -1.36));
    lineTo(pR(4.08, -4.07));
    lineTo(hR(-12.25));
    lineTo(vR(-1.93));
    lineTo(hR(12.47));
    lineTo(pR(-4.3, -4.3));
  });
});
