/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('Plus', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(11.7, 7.25));
    cubicCurveTo(hR(0.2), pR(0.34, -0.17), pR(0.34, -0.37));
    lineTo(vR(-2.05));
    cubicCurveTo(vR(-0.19), pR(-0.15, -0.34), pR(-0.34, -0.34));
    cubicCurveTo(hR(-0.19), pR(-0.35, 0.15), pR(-0.35, 0.34));
    lineTo(vR(2.05));
    cubicCurveTo(vR(0.2), pR(0.15, 0.37), pR(0.35, 0.37));
    moveTo(p(7.92, 5.5));
    cubicCurveTo(pR(-0.18, 0.09), pR(-0.24, 0.3), pR(-0.13, 0.47));
    lineTo(pR(1.02, 1.79));
    cubicCurveTo(pR(0.09, 0.11), pR(0.19, 0.18), pR(0.32, 0.18));
    cubicCurveTo(hR(0.06), pR(0.1, -0.01), pR(0.15, -0.03));
    lineTo(pR(0.03, -0.01));
    cubicCurveTo(pR(0.17, -0.11), pR(0.22, -0.32), pR(0.13, -0.5));
    lineTo(pR(-1.03, -1.77));
    cubicCurveTo(pR(-0.09, -0.17), pR(-0.3, -0.24), pR(-0.47, -0.13));
    moveTo(p(11.7, 8.48));
    cubicCurveTo(hR(-1.96), pR(-3.56, 1.6), pR(-3.56, 3.56));
    cubicCurveTo(vR(1.97), pR(1.6, 3.56), pR(3.56, 3.56));
    cubicCurveTo(hR(0.2), pR(0.35, 0.15), pR(0.35, 0.34));
    cubicCurveTo(vR(0.22), pR(-0.15, 0.37), pR(-0.35, 0.37));
    cubicCurveTo(hR(-2.35), pR(-4.27, -1.92), pR(-4.27, -4.27));
    cubicCurveTo(vR(-2.35), pR(1.92, -4.27), pR(4.27, -4.27));
    cubicCurveTo(hR(0.2), pR(0.35, 0.15), pR(0.35, 0.35));
    cubicCurveTo(pR(0, 0.22), pR(-0.15, 0.37), pR(-0.35, 0.37));
    moveTo(p(5.16, 8.27));
    cubicCurveTo(pR(-0.1, 0.17), pR(-0.04, 0.39), pR(0.13, 0.48));
    lineTo(pR(1.77, 1.03));
    cubicCurveTo(pR(0.07, 0.02), pR(0.13, 0.04), pR(0.17, 0.04));
    cubicCurveTo(hR(0.13), pR(0.26, -0.06), pR(0.33, -0.17));
    cubicCurveTo(pR(0.09, -0.17), pR(0.04, -0.39), pR(-0.13, -0.5));
    lineTo(pR(-1.79, -1.01));
    cubicCurveTo(pR(-0.17, -0.11), pR(-0.39, -0.04), pR(-0.48, 0.13));
    moveTo(p(4.49, 12.39));
    cubicCurveTo(hR(-0.19), pR(-0.34, -0.15), pR(-0.34, -0.35));
    cubicCurveTo(vR(-0.19), pR(0.15, -0.34), pR(0.34, -0.34));
    lineTo(hR(2.05));
    cubicCurveTo(hR(0.22), pR(0.37, 0.15), pR(0.37, 0.34));
    cubicCurveTo(vR(0.2), pR(-0.15, 0.35), pR(-0.37, 0.35));
    lineTo(hR(-2.05));
    moveTo(p(7.55, 14.44));
    cubicCurveTo(pR(0.09, 0.17), pR(0.04, 0.39), pR(-0.13, 0.47));
    lineTo(pR(-1.79, 1.04));
    cubicCurveTo(pR(-0.04, 0.02), pR(-0.11, 0.04), pR(-0.17, 0.04));
    cubicCurveTo(hR(-0.13), pR(-0.24, -0.07), pR(-0.3, -0.18));
    cubicCurveTo(pR(-0.11, -0.17), pR(-0.04, -0.39), pR(0.13, -0.47));
    lineTo(pR(1.77, -1.04));
    cubicCurveTo(pR(0.18, -0.09), pR(0.39, -0.04), pR(0.5, 0.13));
    moveTo(p(9.3, 16.18));
    cubicCurveTo(pR(0.17, 0.11), pR(0.22, 0.32), pR(0.13, 0.5));
    lineTo(pR(-1.04, 1.77));
    cubicCurveTo(pR(-0.06, 0.11), pR(-0.17, 0.18), pR(-0.3, 0.18));
    cubicCurveTo(hR(-0.07), hR(-0.11), pR(-0.17, -0.04));
    cubicCurveTo(pR(-0.18, -0.09), pR(-0.24, -0.32), pR(-0.13, -0.48));
    lineTo(pR(1.02, -1.79));
    cubicCurveTo(pR(0.11, -0.17), pR(0.32, -0.21), pR(0.5, -0.13));
  });
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(9.36, 12.04));
    cubicCurveTo(vR(-0.34), pR(0.09, -0.69), pR(0.24, -1.01));
    cubicCurveTo(pR(0.09, -0.17), vR(-0.39), pR(-0.17, -0.48));
    cubicCurveTo(pR(-0.18, -0.09), pR(-0.39, -0.02), pR(-0.48, 0.17));
    cubicCurveTo(pR(-0.19, 0.43), pR(-0.3, 0.86), pR(-0.3, 1.32));
    cubicCurveTo(vR(0.8), pR(0.3, 1.57), pR(0.89, 2.16));
    cubicCurveTo(pR(0.09, 0.06), pR(0.17, 0.09), pR(0.26, 0.09));
    cubicCurveTo(hR(0.09), pR(0.17, -0.02), pR(0.26, -0.09));
    cubicCurveTo(pR(0.13, -0.15), pR(0.13, -0.37), vR(-0.52));
    cubicCurveTo(pR(-0.45, -0.43), pR(-0.69, -1.03), pR(-0.69, -1.64));
    moveTo(p(10.36, 10.15));
    cubicCurveTo(pR(-0.07, 0.04), pR(-0.13, 0.06), pR(-0.21, 0.06));
    cubicCurveTo(hR(-0.11), pR(-0.22, -0.06), pR(-0.28, -0.15));
    cubicCurveTo(pR(-0.11, -0.17), pR(-0.07, -0.39), pR(0.09, -0.5));
    cubicCurveTo(pR(0.3, -0.21), pR(0.6, -0.37), pR(0.95, -0.45));
    cubicCurveTo(pR(0.2, -0.07), pR(0.39, 0.07), pR(0.45, 0.24));
    cubicCurveTo(pR(0.04, 0.2), pR(-0.06, 0.39), pR(-0.26, 0.45));
    cubicCurveTo(pR(-0.26, 0.06), pR(-0.52, 0.17), pR(-0.73, 0.34));
    moveTo(p(12.04, 19.25));
    cubicCurveTo(vR(0.19), pR(-0.15, 0.34), pR(-0.34, 0.34));
    cubicCurveTo(hR(-0.19), pR(-0.35, -0.15), pR(-0.35, -0.34));
    lineTo(vR(-2.05));
    cubicCurveTo(vR(-0.21), pR(0.15, -0.37), pR(0.35, -0.37));
    cubicCurveTo(hR(0.2), pR(0.34, 0.15), pR(0.34, 0.37));
    lineTo(vR(2.05));
  });
});
