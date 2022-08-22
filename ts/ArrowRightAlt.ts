/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('ArrowRightAlt', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(12, 17.7));
    lineTo(pR(4.4, -4.4));
    lineTo(hR(-13.4));
    lineTo(vR(-2.3));
    lineTo(hR(13.6));
    lineTo(pR(-4.6, -4.7));
    lineTo(pR(1.6, -1.6));
    lineTo(pR(7.4, 7.3));
    lineTo(pR(-7.4, 7.3));
    lineTo(pR(-1.6, -1.6));
  });
});
