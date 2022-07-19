/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('Youtube', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(22, 7));
    cubicCurveTo(vR(-1.66), pR(-1.34, -3), pR(-3, -3));
    lineTo(hR(-14));
    cubicCurveTo(hR(-1.66), pR(-3, 1.34), pR(-3, 3));
    lineTo(vR(10));
    cubicCurveTo(vR(1.66), pR(1.34, 3), pR(3, 3));
    lineTo(hR(14));
    cubicCurveTo(hR(1.66), pR(3, -1.34), pR(3, -3));
    lineTo(vR(-10));
    moveTo(p(9, 16));
    lineTo(vR(-8));
    lineTo(pR(8, 4));
    lineTo(pR(-8, 4));
  });
});
