/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';

createIcon('Heart', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(12, 21.35));
    lineTo(pR(-1.45, -1.32));
    cubicCurveTo(pR(-5.15, -4.67), pR(-8.55, -7.75), pR(-8.55, -11.53));
    cubicCurveTo(vR(-3.08), pR(2.42, -5.5), pR(5.5, -5.5));
    cubicCurveTo(hR(1.74), pR(3.41, 0.81), pR(4.5, 2.09));
    cubicCurveTo(pR(1.09, -1.28), pR(2.76, -2.09), pR(4.5, -2.09));
    cubicCurveTo(hR(3.08), pR(5.5, 2.42), pR(5.5, 5.5));
    cubicCurveTo(vR(3.78), pR(-3.4, 6.86), pR(-8.55, 11.54));
    // ?
  });
});
