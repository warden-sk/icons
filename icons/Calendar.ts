/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';

createIcon('Calendar', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(20, 3));
    lineTo(hR(-1));
    lineTo(vR(-2));
    lineTo(hR(-2));
    lineTo(vR(2));
    lineTo(hR(-10));
    lineTo(vR(-2));
    lineTo(hR(-2));
    lineTo(vR(2));
    lineTo(hR(-1));
    cubicCurveTo(hR(-1.1), pR(-2, 0.9), pR(-2, 2));
    lineTo(vR(16));
    cubicCurveTo(vR(1.1), pR(0.9, 2), pR(2, 2));
    lineTo(hR(16));
    cubicCurveTo(hR(1.1), pR(2, -0.9), pR(2, -2));
    lineTo(vR(-16));
    cubicCurveTo(vR(-1.1), pR(-0.9, -2), pR(-2, -2));
    moveTo(vR(18));
    lineTo(hR(-16));
    lineTo(vR(-13));
    lineTo(hR(16));
    lineTo(vR(13));
  });
});
