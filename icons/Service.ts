/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';

createIcon('Service', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { p, pR, vR }) => {
    moveTo(p(8.1, 13.34));
    lineTo(pR(2.83, -2.83));
    lineTo(pR(-7.02, -7.01));
    cubicCurveTo(pR(-1.56, 1.56), pR(-1.56, 4.09), vR(5.66));
    lineTo(pR(4.19, 4.18));
    moveTo(pR(6.78, -1.81));
    cubicCurveTo(pR(1.53, 0.71), pR(3.68, 0.21), pR(5.27, -1.38));
    cubicCurveTo(pR(1.91, -1.91), pR(2.28, -4.65), pR(0.81, -6.12));
    cubicCurveTo(pR(-1.46, -1.46), pR(-4.2, -1.1), pR(-6.12, 0.81));
    cubicCurveTo(pR(-1.59, 1.59), pR(-2.09, 3.74), pR(-1.38, 5.27));
    lineTo(pR(-9.76, 9.76));
    lineTo(pR(1.41, 1.41));
    lineTo(pR(6.89, -6.87));
    lineTo(pR(6.88, 6.88));
    lineTo(pR(1.41, -1.41));
    lineTo(pR(-6.88, -6.88));
    lineTo(pR(1.47, -1.47));
  });
});
