/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';
import storage from '../storage';

createIcon('Sun', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(11, 2));
    cubicCurveTo(vR(-storage['0.55']), pR(storage['0.45'], -1), pR(1, -1));
    lineTo(vR(0));
    cubicCurveTo(hR(storage['0.55']), pR(1, storage['0.45']), pR(1, 1));
    lineTo(vR(2));
    cubicCurveTo(vR(storage['0.55']), pR(-storage['0.45'], 1), pR(-1, 1));
    lineTo(vR(0));
    cubicCurveTo(hR(-storage['0.55']), pR(-1, -storage['0.45']), pR(-1, -1));
    lineTo(vR(-2));
    moveTo(p(20, 11));
    cubicCurveTo(hR(-storage['0.55']), pR(-1, storage['0.45']), pR(-1, 1));
    lineTo(vR(0));
    cubicCurveTo(vR(storage['0.55']), pR(storage['0.45'], 1), pR(1, 1));
    lineTo(hR(2));
    cubicCurveTo(hR(storage['0.55']), pR(1, -storage['0.45']), pR(1, -1));
    lineTo(vR(0));
    cubicCurveTo(vR(-storage['0.55']), pR(-storage['0.45'], -1), pR(-1, -1));
    lineTo(hR(-2));
    moveTo(p(5, 12));
    cubicCurveTo(vR(-storage['0.55']), pR(-storage['0.45'], -1), pR(-1, -1));
    lineTo(hR(-2));
    cubicCurveTo(hR(-storage['0.55']), pR(-1, storage['0.45']), pR(-1, 1));
    lineTo(vR(0));
    cubicCurveTo(vR(storage['0.55']), pR(storage['0.45'], 1), pR(1, 1));
    lineTo(hR(2));
    cubicCurveTo(hR(storage['0.55']), pR(1, -storage['0.45']), pR(1, -1));
    lineTo(vR(0));
    moveTo(p(11, 22));
    cubicCurveTo(vR(storage['0.55']), pR(storage['0.45'], 1), pR(1, 1));
    lineTo(vR(0));
    cubicCurveTo(hR(storage['0.55']), pR(1, -storage['0.45']), pR(1, -1));
    lineTo(vR(-2));
    cubicCurveTo(vR(-storage['0.55']), pR(-storage['0.45'], -1), pR(-1, -1));
    lineTo(vR(0));
    cubicCurveTo(hR(-storage['0.55']), pR(-1, storage['0.45']), pR(-1, 1));
    lineTo(vR(2));
    moveTo(p(7, 12));
    cubicCurveTo(vR(-storage['2.76']), pR(2.24, -5), pR(5, -5));
    lineTo(vR(0));
    cubicCurveTo(hR(storage['2.76']), pR(5, 2.24), pR(5, 5));
    lineTo(vR(0));
    cubicCurveTo(vR(storage['2.76']), pR(-2.24, 5), pR(-5, 5));
    lineTo(vR(0));
    cubicCurveTo(hR(-storage['2.76']), pR(-5, -2.24), pR(-5, -5));
    lineTo(vR(0));
    moveTo(p(4.58, 5.99));
    cubicCurveTo(pR(-0.39, -0.39), pR(-0.39, -1.02), vR(-1.41));
    lineTo(vR(0));
    cubicCurveTo(pR(0.39, -0.39), pR(1.02, -0.39), hR(1.42));
    lineTo(pR(1.06, 1.06));
    cubicCurveTo(pR(0.39, 0.39), pR(0.39, 1.02), vR(1.41));
    lineTo(vR(0));
    cubicCurveTo(pR(-0.39, 0.39), pR(-1.02, 0.39), hR(-1.41));
    lineTo(pR(-1.06, -1.06));
    moveTo(p(16.95, 18.36));
    cubicCurveTo(pR(-0.39, -0.39), pR(-0.39, -1.02), vR(-1.41));
    lineTo(vR(0));
    cubicCurveTo(pR(0.39, -0.39), pR(1.02, -0.39), hR(1.41));
    lineTo(pR(1.06, 1.06));
    cubicCurveTo(pR(0.39, 0.39), pR(0.39, 1.02), vR(1.42));
    lineTo(vR(0));
    cubicCurveTo(pR(-0.39, 0.39), pR(-1.02, 0.39), hR(-1.41));
    lineTo(pR(-1.06, -1.06));
    moveTo(p(4.58, 19.43));
    cubicCurveTo(pR(-0.39, -0.39), pR(-0.39, -1.02), vR(-1.41));
    lineTo(pR(1.06, -1.06));
    cubicCurveTo(pR(0.39, -0.39), pR(1.02, -0.39), hR(1.41));
    lineTo(vR(0));
    cubicCurveTo(pR(0.39, 0.39), pR(0.39, 1.02), vR(1.41));
    lineTo(pR(-1.06, 1.06));
    cubicCurveTo(pR(-0.39, 0.39), pR(-1.02, 0.39), hR(-1.41));
    lineTo(vR(0));
    moveTo(p(16.95, 7.05));
    cubicCurveTo(pR(-0.39, -0.39), pR(-0.39, -1.02), vR(-1.41));
    lineTo(pR(1.06, -1.06));
    cubicCurveTo(pR(0.39, -0.39), pR(1.02, -0.39), hR(1.42));
    lineTo(vR(0));
    cubicCurveTo(pR(0.39, 0.39), pR(0.39, 1.02), vR(1.42));
    lineTo(pR(-1.06, 1.06));
    cubicCurveTo(pR(-0.39, 0.39), pR(-1.02, 0.39), hR(-1.41));
    lineTo(vR(0));
  });
});
