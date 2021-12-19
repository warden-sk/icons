/*
 * Copyright 2021 Marek Kobida
 */

const { createIcon } = require('../createIcon.beta');

createIcon('plus', addPath => {
  addPath((path, { hR, p, vR }) => {
    path.moveTo(p(13, 5));
    path.lineTo(hR(-2));
    path.lineTo(vR(6));
    path.lineTo(hR(-6));
    path.lineTo(vR(2));
    path.lineTo(hR(6));
    path.lineTo(vR(6));
    path.lineTo(hR(2));
    path.lineTo(vR(-6));
    path.lineTo(hR(6));
    path.lineTo(vR(-2));
    path.lineTo(hR(-6));
    path.lineTo(vR(-6));
  });
});
