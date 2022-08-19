/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('Filter', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(10.3, 15.88));
    cubicCurveTo(hR(-0.2), pR(-0.36, -0.16), pR(-0.36, -0.36));
    cubicCurveTo(vR(-0.2), pR(0.16, -0.36), pR(0.36, -0.36));
    lineTo(hR(3.48));
    cubicCurveTo(hR(0.2), pR(0.36, 0.16), pR(0.36, 0.36));
    cubicCurveTo(vR(0.2), pR(-0.16, 0.36), pR(-0.36, 0.36));
    lineTo(hR(-3.48));
    moveTo(p(7.98, 12.4));
    cubicCurveTo(hR(-0.2), pR(-0.36, -0.16), pR(-0.36, -0.36));
    cubicCurveTo(vR(-0.2), pR(0.16, -0.36), pR(0.36, -0.36));
    lineTo(hR(8.13));
    cubicCurveTo(hR(0.2), pR(0.36, 0.16), pR(0.36, 0.36));
    cubicCurveTo(vR(0.2), pR(-0.16, 0.36), pR(-0.36, 0.36));
    lineTo(hR(-8.13));
    moveTo(p(5.66, 8.91));
    cubicCurveTo(hR(-0.2), pR(-0.36, -0.16), pR(-0.36, -0.36));
    cubicCurveTo(vR(-0.2), pR(0.16, -0.36), pR(0.36, -0.36));
    lineTo(hR(12.77));
    cubicCurveTo(hR(0.2), pR(0.36, 0.16), pR(0.36, 0.36));
    cubicCurveTo(vR(0.2), pR(-0.16, 0.36), pR(-0.36, 0.36));
    lineTo(hR(-12.77));
  });
});
