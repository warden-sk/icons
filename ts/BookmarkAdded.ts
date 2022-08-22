/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('BookmarkAdded', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(11.68, 18.6));
    cubicCurveTo(pR(-5.91, -4.81), pR(-7.52, -6.51), pR(-7.52, -9.3));
    cubicCurveTo(vR(-2.3), pR(1.87, -4.17), pR(4.17, -4.17));
    cubicCurveTo(hR(1.75), pR(2.8, 0.87), pR(3.66, 1.84));
    cubicCurveTo(pR(0.87, -0.97), pR(1.92, -1.84), pR(3.66, -1.84));
    cubicCurveTo(hR(2.3), pR(4.17, 1.87), pR(4.17, 4.17));
    cubicCurveTo(vR(2.79), pR(-1.6, 4.49), pR(-7.52, 9.3));
    lineTo(pR(-0.3, 0.27));
    lineTo(pR(-0.32, -0.27));
  });
});
