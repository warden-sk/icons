/*
 * Copyright 2023 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('Instagram', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(12, 8.36));
    cubicCurveTo(hR(-1.97), pR(-3.58, 1.61), pR(-3.58, 3.58));
    cubicCurveTo(vR(1.97), pR(1.61, 3.58), pR(3.58, 3.58));
    cubicCurveTo(hR(1.97), pR(3.58, -1.61), pR(3.58, -3.58));
    cubicCurveTo(vR(-1.97), pR(-1.61, -3.58), pR(-3.58, -3.58));
    moveTo(p(12, 14.09));
    cubicCurveTo(hR(-1.18), pR(-2.15, -0.96), pR(-2.15, -2.15));
    cubicCurveTo(vR(-1.2), pR(0.94, -2.15), pR(2.15, -2.15));
    cubicCurveTo(hR(1.2), pR(2.15, 0.94), pR(2.15, 2.15));
    cubicCurveTo(vR(1.19), pR(-0.97, 2.15), pR(-2.15, 2.15));
    moveTo(p(15.64, 7.49));
    cubicCurveTo(hR(-0.51), pR(-0.92, 0.41), pR(-0.92, 0.92));
    cubicCurveTo(vR(0.51), pR(0.41, 0.92), pR(0.92, 0.92));
    cubicCurveTo(hR(0.51), pR(0.92, -0.41), pR(0.92, -0.92));
    cubicCurveTo(vR(-0.51), pR(-0.41, -0.92), pR(-0.92, -0.92));
  });
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(17.75, 6.26));
    cubicCurveTo(pR(-0.69, -0.74), pR(-1.71, -1.13), pR(-2.97, -1.13));
    lineTo(hR(-5.61));
    cubicCurveTo(hR(-2.42), pR(-4.04, 1.63), pR(-4.04, 4.04));
    lineTo(vR(5.61));
    cubicCurveTo(vR(1.19), pR(0.42, 2.26), pR(1.19, 3.03));
    cubicCurveTo(pR(0.76, 0.7), pR(1.76, 1.07), pR(2.91, 1.07));
    lineTo(hR(5.55));
    cubicCurveTo(hR(1.11), pR(2.14, -0.37), pR(2.97, -1.07));
    cubicCurveTo(pR(0.74, -0.69), pR(1.13, -1.71), pR(1.13, -2.97));
    lineTo(vR(-5.67));
    cubicCurveTo(vR(-1.17), pR(-0.39, -2.18), pR(-1.13, -2.91));
    moveTo(p(17.44, 14.83));
    cubicCurveTo(vR(0.81), pR(-0.25, 1.42), pR(-0.78, 1.89));
    cubicCurveTo(pR(-0.43, 0.43), pR(-1.09, 0.66), pR(-1.89, 0.66));
    lineTo(hR(-5.55));
    cubicCurveTo(hR(-0.8), pR(-1.46, -0.23), pR(-1.89, -0.66));
    cubicCurveTo(pR(-0.46, -0.46), pR(-0.72, -1.16), pR(-0.72, -1.95));
    lineTo(vR(-5.6));
    cubicCurveTo(vR(-0.83), pR(0.24, -1.46), pR(0.72, -1.89));
    cubicCurveTo(pR(0.43, -0.43), pR(1.09, -0.66), pR(1.89, -0.66));
    lineTo(hR(5.61));
    cubicCurveTo(hR(0.83), pR(1.46, 0.24), pR(1.89, 0.72));
    cubicCurveTo(pR(0.46, 0.46), pR(0.72, 1.14), pR(0.72, 1.89));
    lineTo(vR(5.6));
  });
});
