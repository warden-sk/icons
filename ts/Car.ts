/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('Car', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(18.5, 10.81));
    cubicCurveTo(pR(0.75, 0.11), pR(1.38, 0.48), pR(1.77, 1.03));
    cubicCurveTo(pR(0.25, 0.34), pR(0.37, 0.71), pR(0.37, 1.11));
    lineTo(vR(0.2));
    cubicCurveTo(vR(0.84), pR(-0.68, 1.52), pR(-1.52, 1.52));
    lineTo(hR(-0.89));
    cubicCurveTo(pR(-0.17, 0.86), pR(-0.93, 1.51), pR(-1.84, 1.51));
    cubicCurveTo(hR(-0.91), pR(-1.66, -0.65), pR(-1.83, -1.51));
    lineTo(hR(-5.76));
    cubicCurveTo(pR(-0.17, 0.86), pR(-0.93, 1.51), pR(-1.84, 1.51));
    cubicCurveTo(hR(-0.91), pR(-1.66, -0.65), pR(-1.83, -1.51));
    lineTo(hR(-0.16));
    cubicCurveTo(hR(-0.84), pR(-1.52, -0.68), pR(-1.52, -1.52));
    lineTo(vR(-0.71));
    cubicCurveTo(vR(-0.02), pR(0.04, -0.77), pR(0.38, -1.66));
    cubicCurveTo(pR(0.01, -0.05), pR(0.03, -0.09), pR(0.05, -0.13));
    cubicCurveTo(pR(0.52, -1.27), pR(1.68, -2.73), pR(4.22, -2.73));
    lineTo(hR(3.5));
    cubicCurveTo(hR(0.66), pR(1.31, 0.2), pR(1.86, 0.56));
    lineTo(pR(2.88, 1.92));
    cubicCurveTo(pR(0.1, 0.07), pR(0.22, 0.12), pR(0.34, 0.13));
    lineTo(pR(1.81, 0.29));
    moveTo(p(15.24, 10.51));
    lineTo(pR(-2.17, -1.45));
    cubicCurveTo(pR(-0.43, -0.29), pR(-0.94, -0.44), pR(-1.46, -0.44));
    lineTo(hR(-0.77));
    lineTo(vR(1.88));
    lineTo(pR(4.41, 0.01));
    moveTo(p(6.86, 10.48));
    lineTo(pR(3.26, 0.01));
    lineTo(vR(-1.87));
    lineTo(hR(-2.01));
    cubicCurveTo(hR(-0.22), pR(-0.42, 0.02), pR(-0.62, 0.04));
    lineTo(pR(-0.63, 1.82));
    moveTo(p(6.1, 10.48));
    lineTo(pR(0.57, -1.64));
    cubicCurveTo(pR(-0.97, 0.33), pR(-1.56, 0.98), pR(-1.93, 1.64));
    lineTo(pR(1.36, 0));
    moveTo(p(5.81, 14.31));
    cubicCurveTo(vR(0.63), pR(0.52, 1.15), pR(1.15, 1.15));
    cubicCurveTo(hR(0.64), pR(1.16, -0.52), pR(1.16, -1.15));
    cubicCurveTo(vR(-0.64), pR(-0.52, -1.15), pR(-1.16, -1.15));
    cubicCurveTo(hR(-0.63), pR(-1.15, 0.52), pR(-1.15, 1.15));
    moveTo(p(15.24, 14.31));
    cubicCurveTo(vR(0.63), pR(0.52, 1.15), pR(1.15, 1.15));
    cubicCurveTo(hR(0.64), pR(1.15, -0.52), pR(1.15, -1.15));
    cubicCurveTo(vR(-0.64), pR(-0.52, -1.15), pR(-1.15, -1.15));
    cubicCurveTo(hR(-0.63), pR(-1.15, 0.52), pR(-1.15, 1.15));
    moveTo(p(19.11, 13.95));
    cubicCurveTo(hR(0.44), pR(0.8, -0.36), pR(0.8, -0.8));
    lineTo(hR(0.01));
    lineTo(vR(-0.2));
    cubicCurveTo(vR(-0.24), pR(-0.08, -0.46), pR(-0.24, -0.69));
    cubicCurveTo(pR(-0.27, -0.38), pR(-0.74, -0.65), pR(-1.29, -0.73));
    lineTo(pR(-1.79, -0.28));
    lineTo(pR(-12.18, -0.04));
    cubicCurveTo(pR(-0.22, 0.65), pR(-0.25, 1.19), pR(-0.26, 1.26));
    lineTo(vR(0.69));
    cubicCurveTo(vR(0.45), pR(0.36, 0.8), pR(0.8, 0.8));
    lineTo(hR(0.16));
    cubicCurveTo(pR(0.17, -0.86), pR(0.93, -1.51), pR(1.84, -1.51));
    cubicCurveTo(hR(0.91), pR(1.67, 0.65), pR(1.84, 1.51));
    lineTo(hR(5.75));
    cubicCurveTo(pR(0.17, -0.86), pR(0.93, -1.51), pR(1.83, -1.51));
    cubicCurveTo(hR(0.91), pR(1.67, 0.65), pR(1.84, 1.51));
    lineTo(hR(0.89));
  });
});
