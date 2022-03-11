/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';

createIcon('Sun', addPath => {
  // ✅
  addPath(({ cubicCurveTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(12, 7));
    cubicCurveTo(hR(-2.76), pR(-5, 2.24), pR(-5, 5));
    cubicCurveTo(vR(2.76), pR(2.24, 5), pR(5, 5));
    cubicCurveTo(hR(2.76), pR(5, -2.24), pR(5, -5));
    cubicCurveTo(vR(-2.76), pR(-2.24, -5), pR(-5, -5));
  });

  // down ✅
  addPath(({ cubicCurveTo, lineTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(11, 20));
    lineTo(vR(2));
    cubicCurveTo(vR(0.55), pR(0.45, 1), pR(1, 1));
    cubicCurveTo(hR(0.55), pR(1, -0.45), pR(1, -1));
    lineTo(vR(-2));
    cubicCurveTo(vR(-0.55), pR(-0.45, -1), pR(-1, -1));
    cubicCurveTo(hR(-0.55), pR(-1, 0.45), pR(-1, 1));
  });

  // down left ✅
  addPath(({ cubicCurveTo, lineTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(7.05, 18.36));
    cubicCurveTo(pR(0.39, -0.39), pR(0.39, -1.03), vR(-1.41));
    cubicCurveTo(pR(-0.39, -0.39), pR(-1.03, -0.39), hR(-1.41));
    lineTo(pR(-1.06, 1.06));
    cubicCurveTo(pR(-0.39, 0.39), pR(-0.39, 1.03), vR(1.41));
    cubicCurveTo(pR(0.39, 0.39), pR(1.03, 0.39), hR(1.41));
  });

  // down right ✅
  addPath(({ cubicCurveTo, lineTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(18.36, 16.95));
    cubicCurveTo(pR(-0.39, -0.39), pR(-1.03, -0.39), hR(-1.41));
    cubicCurveTo(pR(-0.39, 0.39), pR(-0.39, 1.03), vR(1.41));
    lineTo(pR(1.06, 1.06));
    cubicCurveTo(pR(0.39, 0.39), pR(1.03, 0.39), hR(1.41));
    cubicCurveTo(pR(0.39, -0.39), pR(0.39, -1.03), vR(-1.41));
  });

  // left ✅
  addPath(({ cubicCurveTo, lineTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(2, 13));
    lineTo(hR(2));
    cubicCurveTo(hR(0.55), pR(1, -0.45), pR(1, -1));
    cubicCurveTo(vR(-0.55), pR(-0.45, -1), pR(-1, -1));
    lineTo(hR(-2));
    cubicCurveTo(hR(-0.55), pR(-1, 0.45), pR(-1, 1));
    cubicCurveTo(vR(0.55), pR(0.45, 1), pR(1, 1));
  });

  // right ✅
  addPath(({ cubicCurveTo, lineTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(20, 13));
    lineTo(hR(2));
    cubicCurveTo(hR(0.55), pR(1, -0.45), pR(1, -1));
    cubicCurveTo(vR(-0.55), pR(-0.45, -1), pR(-1, -1));
    lineTo(hR(-2));
    cubicCurveTo(hR(-0.55), pR(-1, 0.45), pR(-1, 1));
    cubicCurveTo(vR(0.55), pR(0.45, 1), pR(1, 1));
  });

  // up ✅
  addPath(({ cubicCurveTo, lineTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(11, 2));
    lineTo(vR(2));
    cubicCurveTo(vR(0.55), pR(0.45, 1), pR(1, 1));
    cubicCurveTo(hR(0.55), pR(1, -0.45), pR(1, -1));
    lineTo(vR(-2));
    cubicCurveTo(vR(-0.55), pR(-0.45, -1), pR(-1, -1));
    cubicCurveTo(hR(-0.55), pR(-1, 0.45), pR(-1, 1));
  });

  // up left ✅
  addPath(({ cubicCurveTo, lineTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(5.99, 4.58));
    cubicCurveTo(pR(-0.39, -0.39), pR(-1.03, -0.39), hR(-1.41));
    cubicCurveTo(pR(-0.39, 0.39), pR(-0.39, 1.03), vR(1.41));
    lineTo(pR(1.06, 1.06));
    cubicCurveTo(pR(0.39, 0.39), pR(1.03, 0.39), hR(1.41));
    cubicCurveTo(pR(0.39, -0.39), pR(0.39, -1.03), vR(-1.41));
  });

  // up right ✅
  addPath(({ cubicCurveTo, lineTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(19.42, 5.99));
    cubicCurveTo(pR(0.39, -0.39), pR(0.39, -1.03), vR(-1.41));
    cubicCurveTo(pR(-0.39, -0.39), pR(-1.03, -0.39), hR(-1.41));
    lineTo(pR(-1.06, 1.06));
    cubicCurveTo(pR(-0.39, 0.39), pR(-0.39, 1.03), vR(1.41));
    cubicCurveTo(pR(0.39, 0.39), pR(1.03, 0.39), hR(1.41));
  });
});
