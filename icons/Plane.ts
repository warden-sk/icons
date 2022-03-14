/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';

createIcon('Plane', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(13, 9));
    lineTo(vR(-5.5));
    cubicCurveTo(vR(-0.8284), pR(-0.6716, -1.5), pR(-1.5, -1.5));
    cubicCurveTo(pR(-1.5, 0.6716), pR(-1.5, 1.5));
    lineTo(vR(5.5));
    // ľavé krídlo
    lineTo(pR(-8, 5));
    lineTo(vR(2));
    lineTo(pR(8, -2.5));
    //
    lineTo(vR(5.5));
    // ľavý stabilizátor
    lineTo(pR(-2, 1.5));
    lineTo(vR(1.5));
    lineTo(pR(3.5, -1));
    // pravý stabilizátor
    lineTo(pR(3.5, 1));
    lineTo(vR(-1.5));
    lineTo(pR(-2, -1.5));
    //
    lineTo(vR(-5.5));
    // pravé krídlo
    lineTo(pR(8, 2.5));
    lineTo(vR(-2));
    lineTo(pR(-8, -5));
  });
});
