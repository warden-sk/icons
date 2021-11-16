/*
 * Copyright 2021 Marek Kobida
 */

const { createIcon } = require('../createIcon');

// TODO
createIcon('bookmark_add', addPath => {
  addPath((path, { hR, p, pR, vR }) => {
    path.moveTo(p(17, 11));
    path.lineTo(vR(6.97));
    path.lineTo(pR(-5, -2.14));
    path.lineTo(pR(-5, 2.14));
    path.lineTo(vR(-12.97));
    path.lineTo(hR(6));
    path.lineTo(vR(-2));
    path.lineTo(hR(-6));
    path.cubicCurveTo(pR(-1.1, 0), pR(-2, 0.9), pR(-2, 2));
    path.lineTo(vR(16));
    path.lineTo(pR(7, -3));
    path.lineTo(pR(7, 3));
    path.lineTo(vR(-10));
    path.lineTo(hR(-2));
  });
});
