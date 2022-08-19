/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('Calendar', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(5.48, 18.61));
    lineTo(vR(-12.05));
    lineTo(hR(3.24));
    lineTo(vR(-1.08));
    lineTo(hR(0.72));
    lineTo(vR(1.08));
    lineTo(hR(5.22));
    lineTo(vR(-1.08));
    lineTo(hR(0.71));
    lineTo(vR(1.08));
    lineTo(hR(3.24));
    lineTo(vR(12.05));
    lineTo(pR(-13.13, 0));
    moveTo(p(17.89, 17.89));
    lineTo(vR(-7.92));
    lineTo(hR(-11.7));
    lineTo(vR(7.92));
    lineTo(hR(11.7));
    moveTo(p(17.89, 9.25));
    lineTo(vR(-1.98));
    lineTo(hR(-2.52));
    lineTo(vR(1.08));
    lineTo(hR(-0.71));
    lineTo(vR(-1.08));
    lineTo(hR(-5.22));
    lineTo(vR(1.08));
    lineTo(hR(-0.72));
    lineTo(vR(-1.08));
    lineTo(hR(-2.52));
    lineTo(vR(1.98));
    lineTo(hR(11.7));
  });
});
