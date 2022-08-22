/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('Delete', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(5.9, 17.4));
    lineTo(pR(5.4, -5.4));
    lineTo(pR(-5.4, -5.4));
    lineTo(pR(0.7, -0.7));
    lineTo(pR(5.4, 5.4));
    lineTo(pR(5.4, -5.4));
    lineTo(pR(0.7, 0.7));
    lineTo(pR(-5.4, 5.4));
    lineTo(pR(5.4, 5.4));
    lineTo(pR(-0.7, 0.7));
    lineTo(pR(-5.4, -5.4));
    lineTo(pR(-5.4, 5.4));
    lineTo(pR(-0.7, -0.7));
  });
});
