/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('Facebook', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(16, 15));
    lineTo(pR(0.5, -3));
    lineTo(hR(-3));
    lineTo(vR(-1.5));
    cubicCurveTo(vR(-0.83), pR(0.67, -1.5), pR(1.5, -1.5));
    lineTo(hR(1.5));
    lineTo(vR(-3));
    lineTo(hR(-1.5));
    cubicCurveTo(hR(-2.49), pR(-4.5, 2.01), pR(-4.5, 4.5));
    lineTo(vR(1.5));
    lineTo(hR(-3));
    lineTo(vR(3));
    lineTo(hR(3));
    lineTo(vR(6));
    lineTo(hR(-4.5));
    cubicCurveTo(hR(-1.66), pR(-3, -1.34), pR(-3, -3));
    lineTo(vR(-12));
    cubicCurveTo(vR(-1.66), pR(1.34, -3), pR(3, -3));
    lineTo(hR(12));
    cubicCurveTo(hR(1.66), pR(3, 1.34), pR(3, 3));
    lineTo(vR(12));
    cubicCurveTo(vR(1.66), pR(-1.34, 3), pR(-3, 3));
    lineTo(hR(-4.5));
    lineTo(vR(-6));
    lineTo(hR(2.5));
  });
});
