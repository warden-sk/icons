/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('Car', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(16.8, 16.67));
    cubicCurveTo(hR(-1.01), pR(-1.88, -0.7), pR(-2.11, -1.67));
    lineTo(hR(-6.17));
    cubicCurveTo(pR(-0.23, 0.97), pR(-1.11, 1.67), pR(-2.11, 1.67));
    cubicCurveTo(hR(-1.01), pR(-1.88, -0.7), pR(-2.11, -1.67));
    lineTo(hR(-0.1));
    cubicCurveTo(hR(-0.99), pR(-1.79, -0.8), pR(-1.79, -1.79));
    lineTo(vR(-0.78));
    cubicCurveTo(vR(-0.11), pR(0.06, -0.92), pR(0.43, -1.89));
    cubicCurveTo(pR(0.01, -0.05), pR(0.03, -0.11), pR(0.07, -0.16));
    cubicCurveTo(pR(0.58, -1.38), pR(1.88, -3.05), pR(4.75, -3.05));
    lineTo(hR(3.85));
    cubicCurveTo(hR(0.75), pR(1.49, 0.22), pR(2.11, 0.64));
    lineTo(pR(3.18, 2.12));
    cubicCurveTo(pR(0.1, 0.07), pR(0.21, 0.11), pR(0.33, 0.13));
    lineTo(pR(2, 0.31));
    cubicCurveTo(pR(0.86, 0.13), pR(1.58, 0.55), pR(2.02, 1.18));
    cubicCurveTo(pR(0.28, 0.4), pR(0.43, 0.83), pR(0.43, 1.28));
    lineTo(vR(0.23));
    cubicCurveTo(vR(0.99), pR(-0.8, 1.79), pR(-1.79, 1.79));
    lineTo(hR(-0.89));
    cubicCurveTo(pR(-0.22, 0.97), pR(-1.1, 1.66), pR(-2.1, 1.66));
    moveTo(p(16.8, 13.34));
    cubicCurveTo(hR(-0.64), pR(-1.16, 0.52), pR(-1.16, 1.16));
    cubicCurveTo(vR(0.64), pR(0.52, 1.16), pR(1.16, 1.16));
    cubicCurveTo(hR(0.64), pR(1.16, -0.52), pR(1.16, -1.16));
    cubicCurveTo(vR(-0.64), pR(-0.52, -1.16), pR(-1.16, -1.16));
    moveTo(p(6.41, 13.34));
    cubicCurveTo(hR(-0.64), pR(-1.16, 0.52), pR(-1.16, 1.16));
    cubicCurveTo(vR(0.64), pR(0.52, 1.16), pR(1.16, 1.16));
    cubicCurveTo(hR(0.64), pR(1.16, -0.52), pR(1.16, -1.16));
    cubicCurveTo(vR(-0.64), pR(-0.52, -1.16), pR(-1.16, -1.16));
    moveTo(p(19.8, 13.99));
    cubicCurveTo(hR(0.43), pR(0.78, -0.35), pR(0.78, -0.78));
    lineTo(vR(-0.23));
    cubicCurveTo(vR(-0.24), pR(-0.08, -0.47), pR(-0.24, -0.7));
    cubicCurveTo(pR(-0.28, -0.4), pR(-0.77, -0.68), pR(-1.35, -0.77));
    lineTo(pR(-1.97, -0.31));
    lineTo(pR(-13.34, -0.02));
    cubicCurveTo(pR(-0.22, 0.67), pR(-0.25, 1.22), pR(-0.25, 1.28));
    lineTo(vR(0.76));
    cubicCurveTo(vR(0.43), pR(0.35, 0.78), pR(0.78, 0.78));
    lineTo(hR(0.09));
    cubicCurveTo(pR(0.23, -0.97), pR(1.11, -1.67), pR(2.11, -1.67));
    cubicCurveTo(hR(1.01), pR(1.88, 0.7), pR(2.11, 1.67));
    lineTo(hR(6.17));
    cubicCurveTo(pR(0.23, -0.97), pR(1.11, -1.67), pR(2.11, -1.67));
    cubicCurveTo(hR(1.01), pR(1.88, 0.7), pR(2.11, 1.67));
    lineTo(hR(0.89));
    lineTo(vR(-0.01));
    moveTo(p(15.16, 10.2));
    lineTo(pR(-2.09, -1.39));
    cubicCurveTo(pR(-0.46, -0.31), pR(-1, -0.47), pR(-1.55, -0.47));
    lineTo(hR(-0.74));
    lineTo(vR(1.85));
    lineTo(pR(4.38, 0.01));
    moveTo(p(9.77, 10.19));
    lineTo(vR(-1.85));
    lineTo(hR(-2.1));
    cubicCurveTo(hR(-0.2), pR(-0.4, 0.01), pR(-0.6, 0.03));
    lineTo(pR(-0.62, 1.8));
    lineTo(pR(3.32, 0.02));
    moveTo(p(5.37, 10.17));
    lineTo(pR(0.52, -1.51));
    cubicCurveTo(pR(-0.73, 0.3), pR(-1.32, 0.8), pR(-1.75, 1.51));
    lineTo(hR(1.23));
  });
});
