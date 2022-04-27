/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';
import storage from '../storage';

createIcon('Bookmark', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(5, 21));
    lineTo(vR(-17.01));
    cubicCurveTo(vR(-storage['0.55']), pR(storage['0.45'], -0.99), pR(1, -0.99));
    lineTo(hR(12));
    cubicCurveTo(hR(storage['0.55']), pR(1, storage['0.45']), pR(1, 1));
    lineTo(vR(17));
    lineTo(pR(-7, -3));
    lineTo(pR(-7, 3));
    moveTo(p(12, 16));
    lineTo(pR(5, 2));
    lineTo(vR(-13));
    lineTo(hR(-10));
    lineTo(vR(13));
    lineTo(pR(5, -2));
  });
});
