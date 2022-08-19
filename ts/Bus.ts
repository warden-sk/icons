/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('Bus', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(16.32, 6.59));
    cubicCurveTo(hR(2.1), pR(3.88, 1.5), pR(4.21, 3.58));
    cubicCurveTo(pR(0.07, 0.39), pR(0.1, 0.79), pR(0.1, 1.19));
    lineTo(vR(3.77));
    cubicCurveTo(vR(0.62), pR(-0.5, 1.13), pR(-1.12, 1.13));
    lineTo(hR(-1.02));
    cubicCurveTo(pR(-0.17, 0.71), pR(-0.82, 1.25), pR(-1.58, 1.25));
    cubicCurveTo(hR(-0.77), pR(-1.41, -0.53), pR(-1.58, -1.25));
    lineTo(hR(-5.47));
    cubicCurveTo(pR(-0.17, 0.71), pR(-0.82, 1.25), pR(-1.58, 1.25));
    cubicCurveTo(hR(-0.8), pR(-1.47, -0.58), pR(-1.6, -1.35));
    lineTo(pR(-3.23, -1.28));
    lineTo(vR(-6.45));
    cubicCurveTo(vR(-1.01), pR(0.82, -1.84), pR(1.84, -1.84));
    lineTo(hR(11.04));
    moveTo(p(19.91, 11.36));
    cubicCurveTo(vR(-0.36), pR(-0.03, -0.72), pR(-0.09, -1.07));
    cubicCurveTo(pR(-0.29, -1.72), pR(-1.76, -2.98), pR(-3.51, -2.98));
    lineTo(hR(-0.59));
    lineTo(vR(3.41));
    cubicCurveTo(pR(0.15, 0.32), pR(1.05, 2.04), pR(4.19, 2.16));
    lineTo(vR(-1.52));
    moveTo(p(5.28, 7.3));
    cubicCurveTo(hR(-0.61), pR(-1.11, 0.5), pR(-1.11, 1.12));
    lineTo(vR(2));
    lineTo(hR(3.16));
    lineTo(vR(-3.12));
    lineTo(hR(-2.05));
    moveTo(p(7.38, 15.89));
    cubicCurveTo(pR(0.01, 0.49), pR(0.41, 0.89), pR(0.91, 0.89));
    cubicCurveTo(hR(0.49), pR(0.89, -0.4), pR(0.91, -0.89));
    cubicCurveTo(vR(0), pR(0, 0), pR(0, -0.01));
    cubicCurveTo(pR(0, 0), pR(0, -0.01), pR(0, -0.01));
    cubicCurveTo(vR(-0.5), pR(-0.41, -0.91), pR(-0.91, -0.91));
    cubicCurveTo(hR(-0.5), pR(-0.91, 0.4), pR(-0.91, 0.91));
    cubicCurveTo(pR(0, 0), pR(0, 0.01), pR(0, 0.02));
    moveTo(p(16.01, 15.89));
    cubicCurveTo(pR(0.01, 0.49), pR(0.41, 0.89), pR(0.91, 0.89));
    cubicCurveTo(hR(0.5), pR(0.91, -0.41), pR(0.91, -0.91));
    cubicCurveTo(vR(-0.5), pR(-0.41, -0.91), pR(-0.91, -0.91));
    cubicCurveTo(hR(-0.5), pR(-0.91, 0.41), pR(-0.91, 0.91));
    cubicCurveTo(vR(0), pR(0, 0), pR(0, 0.01));
    cubicCurveTo(pR(0, 0), pR(0, 0.01), pR(0, 0.01));
    moveTo(p(16.91, 14.25));
    cubicCurveTo(hR(0.78), pR(1.43, 0.55), pR(1.59, 1.29));
    lineTo(hR(1));
    cubicCurveTo(hR(0.23), pR(0.41, -0.18), pR(0.41, -0.41));
    lineTo(vR(-1.54));
    cubicCurveTo(pR(-3.26, -0.12), pR(-4.45, -1.81), pR(-4.78, -2.45));
    lineTo(hR(-10.97));
    lineTo(vR(3.23));
    lineTo(pR(2.56, 1.01));
    cubicCurveTo(pR(0.21, -0.66), pR(0.82, -1.14), pR(1.55, -1.14));
    cubicCurveTo(hR(0.78), pR(1.43, 0.55), pR(1.59, 1.29));
    lineTo(hR(5.45));
    cubicCurveTo(pR(0.16, -0.73), pR(0.81, -1.29), pR(1.59, -1.29));
    moveTo(p(8.05, 7.3));
    lineTo(vR(3.12));
    lineTo(hR(3.12));
    lineTo(vR(-3.12));
    lineTo(hR(-3.12));
    moveTo(p(15.01, 7.3));
    lineTo(hR(-3.12));
    lineTo(vR(3.12));
    lineTo(hR(3.12));
    lineTo(vR(-3.12));
  });
});
