/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';

createIcon('Sun', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(16.85, 5.74));
    lineTo(pR(1.24, -1.24));
    cubicCurveTo(pR(0.34, -0.34), pR(0.94, -0.3), pR(1.33, 0.09));
    cubicCurveTo(pR(0.39, 0.39), pR(0.43, 0.99), pR(0.09, 1.33));
    lineTo(pR(-1.24, 1.24));
    cubicCurveTo(pR(-0.34, 0.34), pR(-0.94, 0.3), pR(-1.33, -0.09));
    cubicCurveTo(pR(-0.39, -0.39), pR(-0.43, -0.98), pR(-0.09, -1.33));
    moveTo(p(5.73, 7.15));
    lineTo(pR(-1.24, -1.24));
    cubicCurveTo(pR(-0.34, -0.34), pR(-0.3, -0.93), pR(0.09, -1.32));
    cubicCurveTo(pR(0.39, -0.39), pR(0.99, -0.43), pR(1.33, -0.09));
    lineTo(pR(1.24, 1.24));
    cubicCurveTo(pR(0.34, 0.34), pR(0.3, 0.94), pR(-0.09, 1.33));
    cubicCurveTo(pR(-0.39, 0.39), pR(-0.98, 0.43), pR(-1.33, 0.09));
    moveTo(p(18.09, 19.5));
    lineTo(pR(-1.24, -1.24));
    cubicCurveTo(pR(-0.34, -0.34), pR(-0.3, -0.94), pR(0.09, -1.33));
    cubicCurveTo(pR(0.39, -0.39), pR(0.99, -0.43), pR(1.33, -0.09));
    lineTo(pR(1.24, 1.24));
    cubicCurveTo(pR(0.34, 0.34), pR(0.3, 0.94), pR(-0.09, 1.33));
    cubicCurveTo(pR(-0.39, 0.39), pR(-0.99, 0.43), pR(-1.33, 0.09));
    moveTo(p(4.5, 18.09));
    lineTo(pR(1.24, -1.24));
    cubicCurveTo(pR(0.34, -0.34), pR(0.94, -0.3), pR(1.33, 0.09));
    cubicCurveTo(pR(0.39, 0.39), pR(0.43, 0.99), pR(0.09, 1.33));
    lineTo(pR(-1.24, 1.24));
    cubicCurveTo(pR(-0.34, 0.34), pR(-0.94, 0.3), pR(-1.33, -0.09));
    cubicCurveTo(pR(-0.39, -0.39), pR(-0.43, -0.98), pR(-0.09, -1.33));
    moveTo(p(11, 4));
    lineTo(vR(-2));
    cubicCurveTo(vR(-0.55), pR(0.45, -1), pR(1, -1));
    cubicCurveTo(hR(0.55), pR(1, 0.45), pR(1, 1));
    lineTo(vR(2));
    cubicCurveTo(vR(0.55), pR(-0.45, 1), pR(-1, 1));
    cubicCurveTo(hR(-0.55), pR(-1, -0.45), pR(-1, -1));
    moveTo(p(20, 11));
    lineTo(hR(2));
    cubicCurveTo(hR(0.55), pR(1, 0.45), pR(1, 1));
    cubicCurveTo(vR(0.55), pR(-0.45, 1), pR(-1, 1));
    lineTo(hR(-2));
    cubicCurveTo(hR(-0.55), pR(-1, -0.45), pR(-1, -1));
    cubicCurveTo(vR(-0.55), pR(0.45, -1), pR(1, -1));
    moveTo(p(2, 11));
    lineTo(hR(2));
    cubicCurveTo(hR(0.55), pR(1, 0.45), pR(1, 1));
    cubicCurveTo(vR(0.55), pR(-0.45, 1), pR(-1, 1));
    lineTo(hR(-2));
    cubicCurveTo(hR(-0.55), pR(-1, -0.45), pR(-1, -1));
    cubicCurveTo(vR(-0.55), pR(0.45, -1), pR(1, -1));
    moveTo(p(11, 22));
    lineTo(vR(-2));
    cubicCurveTo(vR(-0.55), pR(0.45, -1), pR(1, -1));
    cubicCurveTo(hR(0.55), pR(1, 0.45), pR(1, 1));
    lineTo(vR(2));
    cubicCurveTo(vR(0.55), pR(-0.45, 1), pR(-1, 1));
    cubicCurveTo(hR(-0.55), pR(-1, -0.45), pR(-1, -1));
    moveTo(p(17, 12));
    cubicCurveTo(vR(2.76), pR(-2.24, 5), pR(-5, 5));
    cubicCurveTo(hR(-2.76), pR(-5, -2.24), pR(-5, -5));
    cubicCurveTo(vR(-2.76), pR(2.24, -5), pR(5, -5));
    cubicCurveTo(hR(2.76), pR(5, 2.24), pR(5, 5));
  });
});
