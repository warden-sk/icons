/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';

createIcon('BookmarkAdded', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(18, 3));
    cubicCurveTo(hR(0.55), pR(1, 0.45), pR(1, 1));
    lineTo(vR(17));
    lineTo(pR(-7, -3));
    lineTo(pR(-7, 3));
    lineTo(vR(-17));
    cubicCurveTo(vR(-0.55), pR(0.45, -1), pR(1, -1));
    lineTo(hR(12));
  });
});
