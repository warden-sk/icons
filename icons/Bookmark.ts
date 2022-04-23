/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';

createIcon('Bookmark', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(6.5, 3));
    lineTo(hR(11));
    cubicCurveTo(hR(0.83), pR(1.5, 0.67), pR(1.5, 1.5));
    lineTo(vR(16.5));
    lineTo(pR(-7, -3));
    lineTo(pR(-7, 3));
    lineTo(vR(-16.5));
    cubicCurveTo(vR(-0.83), pR(0.67, -1.5), pR(1.5, -1.5));
    moveTo(p(17, 5));
    lineTo(hR(-10));
    lineTo(vR(13));
    lineTo(pR(5, -2));
    lineTo(pR(5, 2));
    lineTo(vR(-13));
  });
});
