/*
 * Copyright 2023 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('ArrowRightAlt', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(20, 12));
    lineTo(pR(-4, 4));
    lineTo(vR(-3));
    lineTo(hR(-12));
    lineTo(vR(-2));
    lineTo(hR(12));
    lineTo(vR(-3));
    lineTo(pR(4, 4));
  });
});
