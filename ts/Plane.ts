/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('Plane', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(21, 14));
    lineTo(pR(-8, -5));
    lineTo(vR(-5.5));
    cubicCurveTo(vR(-0.83), pR(-0.67, -1.5), pR(-1.5, -1.5));
    lineTo(vR(0));
    cubicCurveTo(hR(-0.83), pR(-1.5, 0.67), pR(-1.5, 1.5));
    lineTo(vR(5.5));
    lineTo(pR(-8, 5));
    lineTo(vR(2));
    lineTo(pR(8, -2.5));
    lineTo(vR(5.5));
    lineTo(pR(-2, 1.5));
    lineTo(vR(1.5));
    lineTo(pR(3.5, -1));
    lineTo(pR(3.5, 1));
    lineTo(vR(-1.5));
    lineTo(pR(-2, -1.5));
    lineTo(vR(-5.5));
    lineTo(pR(8, 2.5));
    lineTo(vR(-2));
  });
});
