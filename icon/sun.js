/*
 * Copyright 2022 Marek Kobida
 */

const { createIcon } = require('../createIcon');

createIcon('sun', addPath => {
  addPath((path, { hR, p, pR, vR }) => {
    path.moveTo(p(12, 7));
    path.cubicCurveTo(hR(-2.76), pR(-5, 2.24), pR(-5, 5));
    path.cubicCurveTo(vR(2.76), pR(2.24, 5), pR(5, 5));
    path.cubicCurveTo(hR(2.76), pR(5, -2.24), pR(5, -5));
    path.cubicCurveTo(vR(-2.76), pR(-2.24, -5), pR(-5, -5));
  });

  // down
  addPath((path, { hR, p, pR, vR }) => {
    path.moveTo(p(11, 20));
    path.lineTo(vR(2));
    path.cubicCurveTo(vR(0.55), pR(0.45, 1), pR(1, 1));
    path.cubicCurveTo(hR(0.55), pR(1, -0.45), pR(1, -1));
    path.lineTo(vR(-2));
    path.cubicCurveTo(vR(-0.55), pR(-0.45, -1), pR(-1, -1));
    path.cubicCurveTo(hR(-0.55), pR(-1, 0.45), pR(-1, 1));
  });

  // down left
  addPath((path, { hR, p, pR, vR }) => {
    path.moveTo(p(7.05, 18.36));
    path.cubicCurveTo(pR(0.39, -0.39), pR(0.39, -1.03), vR(-1.41));
    path.cubicCurveTo(pR(-0.39, -0.39), pR(-1.03, -0.39), hR(-1.41));
    path.lineTo(pR(-1.06, 1.06));
    path.cubicCurveTo(pR(-0.39, 0.39), pR(-0.39, 1.03), vR(1.41));
    path.cubicCurveTo(pR(0.39, 0.39), pR(1.03, 0.39), hR(1.41));
  });

  // down right
  addPath((path, { hR, p, pR, vR }) => {
    path.moveTo(p(18.36, 16.95));
    path.cubicCurveTo(pR(-0.39, -0.39), pR(-1.03, -0.39), hR(-1.41));
    path.cubicCurveTo(pR(-0.39, 0.39), pR(-0.39, 1.03), vR(1.41));
    path.lineTo(pR(1.06, 1.06));
    path.cubicCurveTo(pR(0.39, 0.39), pR(1.03, 0.39), hR(1.41));
    path.cubicCurveTo(pR(0.39, -0.39), pR(0.39, -1.03), vR(-1.41));
  });

  // left
  addPath((path, { hR, p, pR, vR }) => {
    path.moveTo(p(2, 13));
    path.lineTo(hR(2));
    path.cubicCurveTo(hR(0.55), pR(1, -0.45), pR(1, -1));
    path.cubicCurveTo(vR(-0.55), pR(-0.45, -1), pR(-1, -1));
    path.lineTo(hR(-2));
    path.cubicCurveTo(hR(-0.55), pR(-1, 0.45), pR(-1, 1));
    path.cubicCurveTo(vR(0.55), pR(0.45, 1), pR(1, 1));
  });

  // right
  addPath((path, { hR, p, pR, vR }) => {
    path.moveTo(p(20, 13));
    path.lineTo(hR(2));
    path.cubicCurveTo(hR(0.55), pR(1, -0.45), pR(1, -1));
    path.cubicCurveTo(vR(-0.55), pR(-0.45, -1), pR(-1, -1));
    path.lineTo(hR(-2));
    path.cubicCurveTo(hR(-0.55), pR(-1, 0.45), pR(-1, 1));
    path.cubicCurveTo(vR(0.55), pR(0.45, 1), pR(1, 1));
  });

  // up
  addPath((path, { hR, p, pR, vR }) => {
    path.moveTo(p(11, 2));
    path.lineTo(vR(2));
    path.cubicCurveTo(vR(0.55), pR(0.45, 1), pR(1, 1));
    path.cubicCurveTo(hR(0.55), pR(1, -0.45), pR(1, -1));
    path.lineTo(vR(-2));
    path.cubicCurveTo(vR(-0.55), pR(-0.45, -1), pR(-1, -1));
    path.cubicCurveTo(hR(-0.55), pR(-1, 0.45), pR(-1, 1));
  });

  // up left
  addPath((path, { hR, p, pR, vR }) => {
    path.moveTo(p(5.99, 4.58));
    path.cubicCurveTo(pR(-0.39, -0.39), pR(-1.03, -0.39), hR(-1.41));
    path.cubicCurveTo(pR(-0.39, 0.39), pR(-0.39, 1.03), vR(1.41));
    path.lineTo(pR(1.06, 1.06));
    path.cubicCurveTo(pR(0.39, 0.39), pR(1.03, 0.39), hR(1.41));
    path.cubicCurveTo(pR(0.39, -0.39), pR(0.39, -1.03), vR(-1.41));
  });

  // up right
  addPath((path, { hR, p, pR, vR }) => {
    path.moveTo(p(19.42, 5.99));
    path.cubicCurveTo(pR(0.39, -0.39), pR(0.39, -1.03), vR(-1.41));
    path.cubicCurveTo(pR(-0.39, -0.39), pR(-1.03, -0.39), hR(-1.41));
    path.lineTo(pR(-1.06, 1.06));
    path.cubicCurveTo(pR(-0.39, 0.39), pR(-0.39, 1.03), vR(1.41));
    path.cubicCurveTo(pR(0.39, 0.39), pR(1.03, 0.39), hR(1.41));
  });
});
