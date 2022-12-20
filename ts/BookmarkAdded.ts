/*
 * Copyright 2023 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('BookmarkAdded', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(4.46, 5.46));
    cubicCurveTo(pR(1.95, -1.95), pR(5.12, -1.95), hR(7.07));
    lineTo(pR(0.46, 0.46));
    lineTo(pR(0.46, -0.46));
    cubicCurveTo(pR(1.95, -1.95), pR(5.12, -1.95), hR(7.07));
    cubicCurveTo(pR(1.95, 1.95), pR(1.95, 5.12), vR(7.07));
    lineTo(pR(-7.54, 7.54));
    lineTo(pR(-7.54, -7.54));
    cubicCurveTo(pR(-1.95, -1.95), pR(-1.95, -5.12), vR(-7.07));
  });
});
