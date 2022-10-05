/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('MenuOpen', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(3, 18));
    lineTo(hR(13));
    lineTo(vR(-2));
    lineTo(hR(-13));
    lineTo(vR(2));
    moveTo(p(3, 13));
    lineTo(hR(10));
    lineTo(vR(-2));
    lineTo(hR(-10));
    lineTo(vR(2));
    moveTo(p(3, 6));
    lineTo(vR(2));
    lineTo(hR(13));
    lineTo(vR(-2));
    lineTo(hR(-13));
    moveTo(p(21, 15.59));
    lineTo(pR(-3.58, -3.59));
    lineTo(pR(3.58, -3.59));
    lineTo(pR(-1.41, -1.41));
    lineTo(pR(-5, 5));
    lineTo(pR(5, 5));
    lineTo(pR(1.41, -1.41));
  });
});
