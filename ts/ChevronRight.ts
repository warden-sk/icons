/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('ChevronRight', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(7.5, 17.7));
    lineTo(pR(5.7, -5.7));
    lineTo(pR(-5.7, -5.7));
    lineTo(pR(1.7, -1.6));
    lineTo(pR(7.3, 7.3));
    lineTo(pR(-7.3, 7.3));
    lineTo(pR(-1.7, -1.6));
  });
});
