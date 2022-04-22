/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';

createIcon('Heart', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(7, 3));
    lineTo(hR(10));
    cubicCurveTo(hR(0.5), hR(1), pR(1.5, 0.5));
    cubicCurveTo(pR(0.5, 0.5), pR(0.5, 1), pR(0.5, 1.5));
    lineTo(vR(16));
    lineTo(pR(-7, -3));
    lineTo(pR(-7, 3));
    lineTo(vR(-16));
    cubicCurveTo(vR(-0.5), vR(-1), pR(0.5, -1.5));
    cubicCurveTo(pR(0.5, -0.5), pR(1, -0.5), pR(1.5, -0.5));
    moveTo(pR(10, 2));
    lineTo(hR(-10));
    lineTo(vR(13));
    lineTo(pR(5, -2));
    lineTo(pR(5, 2));
    lineTo(vR(-13));
  });
});
