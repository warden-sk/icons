/*
 * Copyright 2023 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('Search', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(15.5, 14));
    lineTo(hR(-0.79));
    lineTo(pR(-0.28, -0.27));
    cubicCurveTo(pR(0.98, -1.14), pR(1.57, -2.62), pR(1.57, -4.23));
    cubicCurveTo(vR(-3.59), pR(-2.91, -6.5), pR(-6.5, -6.5));
    cubicCurveTo(hR(-3.59), pR(-6.5, 2.91), pR(-6.5, 6.5));
    cubicCurveTo(vR(3.59), pR(2.91, 6.5), pR(6.5, 6.5));
    cubicCurveTo(hR(1.61), pR(3.09, -0.59), pR(4.23, -1.57));
    lineTo(pR(0.27, 0.28));
    lineTo(vR(0.79));
    lineTo(pR(5, 4.99));
    lineTo(pR(1.49, -1.49));
    lineTo(pR(-4.99, -5));
    lineTo(vR(0));
    moveTo(p(9.5, 14));
    cubicCurveTo(hR(-2.49), pR(-4.5, -2.01), pR(-4.5, -4.5));
    cubicCurveTo(vR(-2.49), pR(2.01, -4.5), pR(4.5, -4.5));
    cubicCurveTo(hR(2.49), pR(4.5, 2.01), pR(4.5, 4.5));
    cubicCurveTo(vR(2.49), pR(-2.01, 4.5), pR(-4.5, 4.5));
  });
});
