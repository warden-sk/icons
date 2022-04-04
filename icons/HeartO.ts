/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';

createIcon('HeartO', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(16.5, 3));
    cubicCurveTo(hR(-1.74), pR(-3.41, 0.81), pR(-4.5, 2.09));
    cubicCurveTo(pR(-1.09, -1.28), pR(-2.76, -2.09), pR(-4.5, -2.09));
    cubicCurveTo(hR(-3.08), pR(-5.5, 2.42), pR(-5.5, 5.5));
    cubicCurveTo(vR(3.78), pR(3.4, 6.86), pR(8.55, 11.54));
    lineTo(pR(1.45, 1.31));
    lineTo(pR(1.45, -1.32));
    cubicCurveTo(pR(5.15, -4.67), pR(8.55, -7.75), pR(8.55, -11.53));
    cubicCurveTo(vR(-3.08), pR(-2.42, -5.5), pR(-5.5, -5.5));
    moveTo(pR(-4.4, 15.55));
    lineTo(pR(-0.1, 0.1));
    lineTo(pR(-0.1, -0.1));
    cubicCurveTo(pR(-4.76, -4.31), pR(-7.9, -7.16), pR(-7.9, -10.05));
    cubicCurveTo(vR(-2), pR(1.5, -3.5), pR(3.5, -3.5));
    cubicCurveTo(hR(1.54), pR(3.04, 0.99), pR(3.57, 2.36));
    lineTo(hR(1.87));
    cubicCurveTo(pR(0.52, -1.37), pR(2.02, -2.36), pR(3.56, -2.36));
    cubicCurveTo(hR(2), pR(3.5, 1.5), pR(3.5, 3.5));
    cubicCurveTo(vR(2.89), pR(-3.14, 5.74), pR(-7.9, 10.05));
  });
});
