/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';
import storage from '../storage';

createIcon('Plane', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(21, 14));
    lineTo(pR(-8, -5));
    lineTo(vR(-7));
    lineTo(hR(-3));
    lineTo(vR(7));
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
