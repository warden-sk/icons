/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('Sun', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(12, 1));
    cubicCurveTo(hR(-0.55), pR(-1, 0.45), pR(-1, 1));
    lineTo(vR(2));
    cubicCurveTo(vR(0.55), pR(0.45, 1), pR(1, 1));
    cubicCurveTo(hR(0.55), pR(1, -0.45), pR(1, -1));
    lineTo(vR(-2));
    cubicCurveTo(vR(-0.55), pR(-0.45, -1), pR(-1, -1));
    moveTo(p(19, 12));
    cubicCurveTo(vR(-0.55), pR(0.45, -1), pR(1, -1));
    lineTo(hR(2));
    cubicCurveTo(hR(0.55), pR(1, 0.45), pR(1, 1));
    cubicCurveTo(vR(0.55), pR(-0.45, 1), pR(-1, 1));
    lineTo(hR(-2));
    cubicCurveTo(hR(-0.55), pR(-1, -0.45), pR(-1, -1));
    moveTo(p(5, 12));
    cubicCurveTo(vR(-0.55), pR(-0.45, -1), pR(-1, -1));
    lineTo(hR(-2));
    cubicCurveTo(hR(-0.55), pR(-1, 0.45), pR(-1, 1));
    cubicCurveTo(vR(0.55), pR(0.45, 1), pR(1, 1));
    lineTo(hR(2));
    cubicCurveTo(hR(0.55), pR(1, -0.45), pR(1, -1));
    moveTo(p(12, 23));
    cubicCurveTo(hR(-0.55), pR(-1, -0.45), pR(-1, -1));
    lineTo(vR(-2));
    cubicCurveTo(vR(-0.55), pR(0.45, -1), pR(1, -1));
    cubicCurveTo(hR(0.55), pR(1, 0.45), pR(1, 1));
    lineTo(vR(2));
    cubicCurveTo(vR(0.55), pR(-0.45, 1), pR(-1, 1));
    moveTo(p(7, 12));
    cubicCurveTo(vR(-2.76), pR(2.24, -5), pR(5, -5));
    cubicCurveTo(hR(2.76), pR(5, 2.24), pR(5, 5));
    cubicCurveTo(vR(2.76), pR(-2.24, 5), pR(-5, 5));
    cubicCurveTo(hR(-2.76), pR(-5, -2.24), pR(-5, -5));
    moveTo(p(9, 12));
    cubicCurveTo(vR(1.66), pR(1.34, 3), pR(3, 3));
    cubicCurveTo(hR(1.66), pR(3, -1.34), pR(3, -3));
    cubicCurveTo(vR(-1.66), pR(-1.34, -3), pR(-3, -3));
    cubicCurveTo(hR(-1.66), pR(-3, 1.34), pR(-3, 3));
    moveTo(p(4.58, 5.99));
    cubicCurveTo(pR(-0.39, -0.39), pR(-0.39, -1.02), vR(-1.41));
    cubicCurveTo(pR(0.39, -0.39), pR(1.02, -0.39), hR(1.42));
    lineTo(pR(1.06, 1.06));
    cubicCurveTo(pR(0.39, 0.39), pR(0.39, 1.02), vR(1.41));
    cubicCurveTo(pR(-0.39, 0.39), pR(-1.02, 0.39), hR(-1.41));
    lineTo(pR(-1.06, -1.06));
    moveTo(p(16.95, 18.36));
    cubicCurveTo(pR(-0.39, -0.39), pR(-0.39, -1.02), vR(-1.41));
    cubicCurveTo(pR(0.39, -0.39), pR(1.02, -0.39), hR(1.41));
    lineTo(pR(1.06, 1.06));
    cubicCurveTo(pR(0.39, 0.39), pR(0.39, 1.02), vR(1.42));
    cubicCurveTo(pR(-0.39, 0.39), pR(-1.02, 0.39), hR(-1.41));
    lineTo(pR(-1.06, -1.06));
    moveTo(p(4.58, 18.01));
    cubicCurveTo(pR(-0.39, 0.39), pR(-0.39, 1.02), vR(1.42));
    cubicCurveTo(pR(0.39, 0.39), pR(1.02, 0.39), hR(1.42));
    lineTo(pR(1.06, -1.06));
    cubicCurveTo(pR(0.39, -0.39), pR(0.39, -1.02), vR(-1.41));
    cubicCurveTo(pR(-0.39, -0.39), pR(-1.02, -0.39), hR(-1.41));
    lineTo(pR(-1.06, 1.06));
    moveTo(p(16.95, 7.05));
    cubicCurveTo(pR(-0.39, -0.39), pR(-0.39, -1.02), vR(-1.41));
    lineTo(pR(1.06, -1.06));
    cubicCurveTo(pR(0.39, -0.39), pR(1.02, -0.39), hR(1.42));
    cubicCurveTo(pR(0.39, 0.39), pR(0.39, 1.02), vR(1.42));
    lineTo(pR(-1.06, 1.06));
    cubicCurveTo(pR(-0.39, 0.39), pR(-1.02, 0.39), hR(-1.41));
  });
});
