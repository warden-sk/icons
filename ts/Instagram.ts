/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('Instagram', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(15.71, 9.09));
    cubicCurveTo(vR(0.37), pR(-0.3, 0.67), pR(-0.67, 0.67));
    cubicCurveTo(hR(-0.37), pR(-0.67, -0.3), pR(-0.67, -0.67));
    cubicCurveTo(vR(-0.37), pR(0.3, -0.67), pR(0.67, -0.67));
    cubicCurveTo(hR(0.37), pR(0.67, 0.3), pR(0.67, 0.67));
    moveTo(p(12.04, 9.13));
    cubicCurveTo(hR(-1.57), pR(-2.86, 1.29), pR(-2.86, 2.86));
    cubicCurveTo(vR(1.57), pR(1.29, 2.86), pR(2.86, 2.86));
    cubicCurveTo(hR(1.57), pR(2.86, -1.29), pR(2.86, -2.86));
    cubicCurveTo(vR(-1.57), pR(-1.28, -2.86), pR(-2.86, -2.86));
    moveTo(p(12.04, 13.85));
    cubicCurveTo(hR(-1), pR(-1.86, -0.81), pR(-1.86, -1.86));
    cubicCurveTo(vR(-1.05), pR(0.81, -1.86), pR(1.86, -1.86));
    cubicCurveTo(hR(1.05), pR(1.86, 0.81), pR(1.86, 1.86));
    cubicCurveTo(vR(1.05), pR(-0.85, 1.86), pR(-1.86, 1.86));
  });
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(14.33, 6.46));
    cubicCurveTo(hR(0.95), pR(1.81, 0.29), pR(2.38, 0.91));
    cubicCurveTo(pR(0.62, 0.62), pR(0.91, 1.43), pR(0.91, 2.34));
    lineTo(vR(4.67));
    cubicCurveTo(vR(0.95), pR(-0.29, 1.81), pR(-0.91, 2.38));
    cubicCurveTo(pR(-0.62, 0.53), pR(-1.43, 0.86), pR(-2.38, 0.86));
    lineTo(hR(-4.57));
    cubicCurveTo(hR(-0.91), pR(-1.72, -0.29), pR(-2.34, -0.86));
    cubicCurveTo(pR(-0.62, -0.62), pR(-0.95, -1.48), pR(-0.95, -2.43));
    lineTo(vR(-4.62));
    cubicCurveTo(vR(-1.96), pR(1.29, -3.24), pR(3.24, -3.24));
    lineTo(hR(4.62));
    moveTo(p(15.95, 16));
    cubicCurveTo(pR(0.43, -0.38), pR(0.67, -0.91), pR(0.67, -1.62));
    lineTo(vR(-4.62));
    cubicCurveTo(vR(-0.67), pR(-0.24, -1.24), pR(-0.62, -1.62));
    cubicCurveTo(pR(-0.38, -0.43), pR(-0.95, -0.62), pR(-1.62, -0.62));
    lineTo(hR(-4.62));
    cubicCurveTo(hR(-0.67), pR(-1.24, 0.19), pR(-1.62, 0.57));
    cubicCurveTo(pR(-0.43, 0.38), pR(-0.62, 0.95), pR(-0.62, 1.63));
    lineTo(vR(4.63));
    cubicCurveTo(vR(0.71), pR(0.24, 1.29), pR(0.62, 1.67));
    cubicCurveTo(pR(0.38, 0.38), pR(0.96, 0.57), pR(1.63, 0.57));
    lineTo(hR(4.57));
    cubicCurveTo(hR(0.67), pR(1.24, -0.19), pR(1.62, -0.57));
  });
});
