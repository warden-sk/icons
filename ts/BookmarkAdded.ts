/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';
import storage from '../storage';

createIcon('BookmarkAdded', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(12, 18));
    lineTo(pR(-8, 4));
    lineTo(vR(-19));
    cubicCurveTo(vR(-storage['0.55']), pR(storage['0.45'], -1), pR(1, -1));
    lineTo(hR(14));
    cubicCurveTo(hR(storage['0.55']), pR(1, storage['0.45']), pR(1, 1));
    lineTo(vR(19));
    lineTo(pR(-8, -4));
  });
});
