/*
 * Copyright 2021 Marek Kobida
 */

const { createIcon } = require('../createIcon');

createIcon('sun', addPath => {
  addPath((path, { p, x, y }) => {
    path.moveTo(p(17, 12));
    path.arcTo(x() - 10, y(), 5, 5, 0);
    path.arcTo(x() + 10, y(), 5, 5, 0);
  });

  // up
  addPath((path, { p, vR, x, y }) => {
    path.moveTo(p(11, 2));
    path.arcTo(x() + 2, y(), 1, 1, 0, 1);
    path.lineTo(vR(2));
    path.arcTo(x() - 2, y(), 1, 1, 0, 1);
  });

  // down
  addPath((path, { p, vR, x, y }) => {
    path.moveTo(p(11, 20));
    path.arcTo(x() + 2, y(), 1, 1, 0, 1);
    path.lineTo(vR(2));
    path.arcTo(x() - 2, y(), 1, 1, 0, 1);
  });

  // left
  addPath((path, { hR, p, x, y }) => {
    path.moveTo(p(2, 13));
    path.arcTo(x(), y() - 2, 1, 1, 0, 1);
    path.lineTo(hR(2));
    path.arcTo(x(), y() + 2, 1, 1, 0, 1);
  });

  // right
  addPath((path, { hR, p, x, y }) => {
    path.moveTo(p(20, 13));
    path.arcTo(x(), y() - 2, 1, 1, 0, 1);
    path.lineTo(hR(2));
    path.arcTo(x(), y() + 2, 1, 1, 0, 1);
  });

  const A = 1.415;
  const B = 1.06;

  // up left
  addPath((path, { p, pR, x, y }) => {
    path.strokeColor = '#f00';
    path.strokeWidth = 0.25;
    path.moveTo(p(4.575 + A, 4.575)); // ?
    path.arcTo(x() - A, y() + A, 1, 1, 1);
    path.lineTo(pR(B, B));
    path.arcTo(x() + A, y() - A, 1, 1, 1);
  });

  // up right
  addPath((path, { p, pR, x, y }) => {
    path.strokeColor = '#f00';
    path.strokeWidth = 0.25;
    path.moveTo(p(18.0108, 4.575)); // ?
    path.arcTo(x() + A, y() + A, 1, 1, 0, 1);
    path.lineTo(pR(-B, B));
    path.arcTo(x() - A, y() - A, 1, 1, 0, 1);
  });

  // down left
  addPath((path, { p, pR, x, y }) => {
    path.strokeColor = '#f00';
    path.strokeWidth = 0.25;
    path.moveTo(p(5.636, 16.9497)); // ?
    path.arcTo(x() + A, y() + A, 1, 1, 0, 1);
    path.lineTo(pR(-B, B));
    path.arcTo(x() - A, y() - A, 1, 1, 0, 1);
  });

  // down right
  addPath((path, { p, pR, x, y }) => {
    path.strokeColor = '#f00';
    path.strokeWidth = 0.25;
    path.moveTo(p(16.9497, 16.9497 + A)); // ?
    path.arcTo(x() + A, y() - A, 1, 1, 0, 1);
    path.lineTo(pR(B, B));
    path.arcTo(x() - A, y() + A, 1, 1, 0, 1);
  });
});
