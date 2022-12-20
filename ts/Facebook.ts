/*
 * Copyright 2023 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('Facebook', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(10.15, 18.82));
    lineTo(vR(-6.71));
    lineTo(hR(-1.62));
    lineTo(vR(-2.48));
    lineTo(hR(1.62));
    lineTo(vR(-1.39));
    cubicCurveTo(vR(-2.15), pR(0.97, -3.06), pR(3.23, -3.06));
    lineTo(hR(2.08));
    lineTo(vR(2.48));
    lineTo(hR(-1.27));
    cubicCurveTo(hR(-0.92), pR(-0.99, 0.29), pR(-0.99, 0.76));
    lineTo(vR(1.22));
    lineTo(hR(2.27));
    lineTo(pR(-0.32, 2.48));
    lineTo(hR(-1.95));
    lineTo(vR(6.71));
    lineTo(hR(-3.05));
    lineTo(vR(-0.01));
  });
});
