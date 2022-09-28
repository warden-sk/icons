/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('Calendar', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(5.52, 18.48));
    lineTo(vR(-11.92));
    lineTo(hR(3.12));
    lineTo(vR(-1.04));
    lineTo(hR(1.01));
    lineTo(vR(1.04));
    lineTo(hR(4.71));
    lineTo(vR(-1.04));
    lineTo(hR(1.01));
    lineTo(vR(1.04));
    lineTo(hR(3.12));
    lineTo(vR(11.93));
    lineTo(hR(-12.97));
    lineTo(vR(-0.01));
    moveTo(p(17.48, 17.48));
    lineTo(vR(-7.31));
    lineTo(hR(-10.96));
    lineTo(vR(7.31));
    lineTo(hR(10.96));
    moveTo(p(17.48, 9.16));
    lineTo(vR(-1.6));
    lineTo(hR(-2.11));
    lineTo(vR(1.04));
    lineTo(hR(-1.01));
    lineTo(vR(-1.04));
    lineTo(hR(-4.72));
    lineTo(vR(1.04));
    lineTo(hR(-1));
    lineTo(vR(-1.04));
    lineTo(hR(-2.12));
    lineTo(vR(1.59));
    lineTo(hR(10.96));
    lineTo(vR(0.01));
  });
});
