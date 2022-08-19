/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('Facebook', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(13.85, 8.37));
    cubicCurveTo(hR(-0.76), pR(-0.91, 0.24), pR(-0.91, 0.72));
    lineTo(vR(1.09));
    lineTo(hR(1.86));
    lineTo(pR(-0.24, 1.86));
    lineTo(hR(-1.62));
    lineTo(vR(5.53));
    lineTo(hR(-2.34));
    lineTo(vR(-5.53));
    lineTo(hR(-1.34));
    lineTo(vR(-1.86));
    lineTo(hR(1.34));
    lineTo(vR(-1.24));
    cubicCurveTo(vR(-1.57), pR(0.62, -2.43), pR(2.57, -2.43));
    lineTo(hR(1.62));
    lineTo(vR(1.86));
    lineTo(hR(-0.95));
  });
});
