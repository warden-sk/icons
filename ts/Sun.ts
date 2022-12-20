/*
 * Copyright 2023 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('Sun', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(12, 6.85));
    cubicCurveTo(hR(0.28), pR(0.51, -0.24), pR(0.51, -0.53));
    lineTo(vR(-2.27));
    cubicCurveTo(vR(-0.28), pR(-0.22, -0.51), pR(-0.51, -0.51));
    cubicCurveTo(hR(-0.29), pR(-0.51, 0.22), pR(-0.51, 0.51));
    lineTo(vR(2.26));
    cubicCurveTo(vR(0.29), pR(0.23, 0.54), pR(0.51, 0.54));
    moveTo(p(4.87, 8.47));
    lineTo(pR(1.98, 1.15));
    cubicCurveTo(pR(0.08, 0.03), pR(0.16, 0.05), pR(0.22, 0.05));
    cubicCurveTo(hR(0.19), pR(0.37, -0.1), pR(0.47, -0.26));
    cubicCurveTo(pR(0.13, -0.25), pR(0.05, -0.56), pR(-0.19, -0.71));
    lineTo(pR(-1.96, -1.11));
    cubicCurveTo(pR(-0.08, -0.05), pR(-0.17, -0.08), pR(-0.26, -0.08));
    cubicCurveTo(hR(-0.18), pR(-0.35, 0.1), pR(-0.45, 0.26));
    cubicCurveTo(pR(-0.08, 0.12), pR(-0.1, 0.26), pR(-0.06, 0.4));
    cubicCurveTo(pR(0.04, 0.13), pR(0.13, 0.24), pR(0.25, 0.3));
    moveTo(p(8.73, 7.36));
    cubicCurveTo(pR(0.1, 0.16), pR(0.26, 0.25), pR(0.44, 0.25));
    cubicCurveTo(hR(0.08), pR(0.14, -0.02), pR(0.26, -0.07));
    cubicCurveTo(pR(0.13, -0.08), pR(0.22, -0.2), pR(0.25, -0.34));
    cubicCurveTo(pR(0.02, -0.13), vR(-0.27), pR(-0.07, -0.38));
    lineTo(pR(-1.12, -1.95));
    cubicCurveTo(pR(-0.1, -0.17), pR(-0.27, -0.26), pR(-0.45, -0.26));
    cubicCurveTo(hR(-0.09), pR(-0.19, 0.03), pR(-0.26, 0.07));
    cubicCurveTo(pR(-0.12, 0.06), pR(-0.22, 0.17), pR(-0.25, 0.3));
    cubicCurveTo(pR(-0.04, 0.14), pR(-0.02, 0.28), pR(0.05, 0.4));
    lineTo(pR(1.15, 1.98));
    moveTo(p(14.6, 7.55));
    cubicCurveTo(pR(0.09, 0.03), pR(0.17, 0.05), pR(0.23, 0.05));
    cubicCurveTo(hR(0.19), pR(0.37, -0.1), pR(0.47, -0.25));
    lineTo(pR(1.12, -1.97));
    cubicCurveTo(pR(0.08, -0.12), pR(0.1, -0.26), pR(0.06, -0.4));
    cubicCurveTo(pR(-0.04, -0.13), pR(-0.13, -0.24), pR(-0.24, -0.3));
    cubicCurveTo(pR(-0.08, -0.05), pR(-0.17, -0.08), pR(-0.27, -0.08));
    cubicCurveTo(hR(-0.19), pR(-0.35, 0.1), pR(-0.43, 0.26));
    lineTo(pR(-1.15, 1.96));
    cubicCurveTo(pR(-0.13, 0.27), pR(-0.05, 0.57), pR(0.21, 0.73));
    moveTo(p(16.46, 9.43));
    cubicCurveTo(pR(0.09, 0.15), pR(0.28, 0.25), pR(0.47, 0.25));
    cubicCurveTo(hR(0.08), pR(0.13, -0.02), pR(0.25, -0.07));
    lineTo(pR(1.94, -1.14));
    cubicCurveTo(pR(0.12, -0.06), pR(0.22, -0.17), pR(0.25, -0.31));
    cubicCurveTo(pR(0.04, -0.14), pR(0.02, -0.28), pR(-0.05, -0.39));
    cubicCurveTo(pR(-0.08, -0.17), pR(-0.25, -0.27), pR(-0.44, -0.27));
    cubicCurveTo(hR(-0.09), pR(-0.19, 0.03), pR(-0.26, 0.07));
    lineTo(pR(-1.99, 1.13));
    cubicCurveTo(pR(-0.22, 0.17), pR(-0.29, 0.48), pR(-0.17, 0.73));
    moveTo(p(12, 7.16));
    cubicCurveTo(hR(-2.67), pR(-4.84, 2.17), pR(-4.84, 4.84));
    cubicCurveTo(vR(2.67), pR(2.17, 4.84), pR(4.84, 4.84));
    cubicCurveTo(hR(2.67), pR(4.84, -2.17), pR(4.84, -4.84));
    cubicCurveTo(vR(-2.67), pR(-2.17, -4.84), pR(-4.84, -4.84));
    moveTo(p(12, 15.8));
    cubicCurveTo(hR(-2.09), pR(-3.8, -1.7), pR(-3.8, -3.8));
    cubicCurveTo(vR(-2.1), pR(1.7, -3.8), pR(3.8, -3.8));
    cubicCurveTo(hR(2.09), pR(3.8, 1.7), pR(3.8, 3.8));
    cubicCurveTo(vR(2.1), pR(-1.71, 3.8), pR(-3.8, 3.8));
    moveTo(p(19.13, 15.53));
    lineTo(pR(-1.96, -1.15));
    cubicCurveTo(pR(-0.08, -0.04), pR(-0.17, -0.06), pR(-0.26, -0.06));
    cubicCurveTo(hR(-0.19), pR(-0.36, 0.09), pR(-0.46, 0.26));
    cubicCurveTo(pR(-0.12, 0.25), pR(-0.04, 0.56), pR(0.19, 0.69));
    lineTo(pR(1.98, 1.15));
    cubicCurveTo(pR(0.05, 0.02), pR(0.14, 0.06), pR(0.25, 0.06));
    cubicCurveTo(hR(0.18), pR(0.35, -0.09), pR(0.44, -0.25));
    cubicCurveTo(pR(0.08, -0.12), pR(0.1, -0.26), pR(0.06, -0.4));
    cubicCurveTo(pR(-0.03, -0.13), pR(-0.12, -0.24), pR(-0.24, -0.3));
    moveTo(p(12, 17.15));
    cubicCurveTo(hR(-0.29), pR(-0.51, 0.23), pR(-0.51, 0.53));
    lineTo(vR(2.26));
    cubicCurveTo(vR(0.28), pR(0.22, 0.51), pR(0.51, 0.51));
    cubicCurveTo(hR(0.29), pR(0.51, -0.22), pR(0.51, -0.51));
    lineTo(vR(-2.26));
    cubicCurveTo(vR(-0.3), pR(-0.22, -0.53), pR(-0.51, -0.53));
    moveTo(p(15.3, 16.64));
    cubicCurveTo(pR(-0.1, -0.16), pR(-0.26, -0.25), pR(-0.45, -0.25));
    cubicCurveTo(hR(-0.09), pR(-0.18, 0.02), pR(-0.27, 0.07));
    cubicCurveTo(pR(-0.24, 0.15), pR(-0.32, 0.45), pR(-0.18, 0.72));
    lineTo(pR(1.14, 1.95));
    cubicCurveTo(pR(0.1, 0.16), pR(0.26, 0.25), pR(0.44, 0.25));
    cubicCurveTo(hR(0.08), hR(0.16), pR(0.25, -0.06));
    cubicCurveTo(pR(0.13, -0.06), pR(0.22, -0.18), pR(0.26, -0.33));
    cubicCurveTo(pR(0.03, -0.14), pR(0.01, -0.28), pR(-0.06, -0.37));
    lineTo(pR(-1.13, -1.98));
    moveTo(p(6.85, 12));
    cubicCurveTo(vR(-0.29), pR(-0.23, -0.51), pR(-0.53, -0.51));
    lineTo(hR(-2.27));
    cubicCurveTo(hR(-0.28), pR(-0.51, 0.22), pR(-0.51, 0.51));
    cubicCurveTo(vR(0.28), pR(0.22, 0.51), pR(0.51, 0.51));
    lineTo(hR(2.26));
    cubicCurveTo(hR(0.31), pR(0.54, -0.22), pR(0.54, -0.51));
    moveTo(p(19.95, 11.49));
    lineTo(hR(-2.26));
    cubicCurveTo(hR(-0.29), pR(-0.53, 0.23), pR(-0.53, 0.51));
    cubicCurveTo(vR(0.28), pR(0.24, 0.51), pR(0.53, 0.51));
    lineTo(hR(2.26));
    cubicCurveTo(hR(0.28), pR(0.51, -0.22), pR(0.51, -0.51));
    cubicCurveTo(pR(-0.01, -0.28), pR(-0.23, -0.51), pR(-0.51, -0.51));
    moveTo(p(7.54, 14.57));
    cubicCurveTo(pR(-0.1, -0.16), pR(-0.27, -0.26), pR(-0.45, -0.26));
    cubicCurveTo(hR(-0.09), pR(-0.18, 0.03), pR(-0.26, 0.08));
    lineTo(pR(-1.94, 1.14));
    cubicCurveTo(pR(-0.12, 0.06), pR(-0.22, 0.17), pR(-0.25, 0.3));
    cubicCurveTo(pR(-0.04, 0.14), pR(-0.02, 0.28), pR(0.06, 0.4));
    cubicCurveTo(pR(0.1, 0.16), pR(0.26, 0.25), pR(0.44, 0.25));
    cubicCurveTo(hR(0.11), pR(0.2, -0.04), pR(0.25, -0.06));
    lineTo(pR(1.97, -1.14));
    cubicCurveTo(pR(0.23, -0.13), pR(0.32, -0.43), pR(0.18, -0.71));
    moveTo(p(9.42, 16.45));
    cubicCurveTo(pR(-0.07, -0.04), pR(-0.16, -0.06), pR(-0.24, -0.06));
    cubicCurveTo(hR(-0.19), pR(-0.36, 0.1), pR(-0.45, 0.25));
    lineTo(pR(-1.14, 1.96));
    cubicCurveTo(pR(-0.08, 0.11), pR(-0.1, 0.25), pR(-0.07, 0.38));
    cubicCurveTo(pR(0.04, 0.14), pR(0.13, 0.26), pR(0.24, 0.32));
    cubicCurveTo(pR(0.1, 0.07), pR(0.18, 0.07), pR(0.26, 0.07));
    cubicCurveTo(hR(0.18), pR(0.33, -0.08), pR(0.47, -0.25));
    lineTo(pR(1.12, -1.95));
    cubicCurveTo(pR(0.08, -0.12), pR(0.1, -0.26), pR(0.06, -0.4));
    cubicCurveTo(pR(-0.04, -0.12), pR(-0.12, -0.24), pR(-0.25, -0.32));
  });
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(10.34, 13.18));
    cubicCurveTo(pR(-0.25, -0.35), pR(-0.38, -0.76), pR(-0.38, -1.18));
    cubicCurveTo(vR(-0.14), pR(0.01, -0.28), pR(0.04, -0.41));
    cubicCurveTo(pR(0.06, -0.27), pR(-0.12, -0.54), pR(-0.39, -0.59));
    cubicCurveTo(pR(-0.27, -0.06), pR(-0.54, 0.12), pR(-0.59, 0.39));
    cubicCurveTo(pR(-0.04, 0.2), pR(-0.06, 0.4), pR(-0.06, 0.61));
    cubicCurveTo(vR(0.64), pR(0.2, 1.25), pR(0.56, 1.77));
    cubicCurveTo(pR(0.09, 0.13), pR(0.2, 0.26), pR(0.31, 0.37));
    cubicCurveTo(pR(0.1, 0.1), pR(0.23, 0.15), pR(0.36, 0.15));
    cubicCurveTo(hR(0.13), pR(0.26, -0.05), pR(0.35, -0.14));
    cubicCurveTo(pR(0.2, -0.2), pR(0.2, -0.51), pR(0.01, -0.71));
    cubicCurveTo(pR(-0.08, -0.09), pR(-0.15, -0.17), pR(-0.21, -0.26));
    moveTo(p(10.66, 9.26));
    cubicCurveTo(pR(-0.25, 0.12), pR(-0.49, 0.28), pR(-0.69, 0.47));
    cubicCurveTo(pR(-0.21, 0.19), pR(-0.22, 0.5), pR(-0.04, 0.71));
    cubicCurveTo(pR(0.1, 0.11), pR(0.24, 0.17), pR(0.37, 0.17));
    cubicCurveTo(hR(0.12), pR(0.24, -0.04), pR(0.34, -0.13));
    cubicCurveTo(pR(0.14, -0.13), pR(0.3, -0.23), pR(0.47, -0.31));
    cubicCurveTo(pR(0.25, -0.12), pR(0.35, -0.42), pR(0.23, -0.67));
    cubicCurveTo(pR(-0.13, -0.26), pR(-0.43, -0.36), pR(-0.68, -0.24));
  });
});
