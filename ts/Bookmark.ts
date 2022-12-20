/*
 * Copyright 2023 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('Bookmark', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(4.46, 5.46));
    cubicCurveTo(pR(1.95, -1.95), pR(5.12, -1.95), pR(7.07, 0));
    lineTo(pR(0.47, 0.47));
    lineTo(pR(0.46, -0.46));
    cubicCurveTo(pR(1.95, -1.95), pR(5.12, -1.95), hR(7.07));
    cubicCurveTo(pR(1.95, 1.95), pR(1.95, 5.12), vR(7.07));
    lineTo(pR(-7.54, 7.54));
    lineTo(pR(-7.54, -7.54));
    cubicCurveTo(pR(-1.95, -1.95), pR(-1.95, -5.12), vR(-7.07));
    moveTo(p(18.12, 11.12));
    cubicCurveTo(pR(1.17, -1.17), pR(1.17, -3.07), vR(-4.24));
    cubicCurveTo(pR(-1.17, -1.17), pR(-3.07, -1.17), hR(-4.24));
    lineTo(pR(-1.88, 1.88));
    lineTo(pR(-1.88, -1.88));
    cubicCurveTo(pR(-1.17, -1.17), pR(-3.07, -1.17), hR(-4.24));
    cubicCurveTo(pR(-1.17, 1.17), pR(-1.17, 3.07), vR(4.24));
    lineTo(pR(6.12, 6.12));
    lineTo(pR(6.12, -6.12));
  });
});
