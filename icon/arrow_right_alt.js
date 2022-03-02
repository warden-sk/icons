/*
 * Copyright 2022 Marek Kobida
 */

const { createIcon } = require('../createIcon');

createIcon('arrow_right_alt', addPath => {
  addPath((path, { hR, p, pR, vR }) => {
    path.moveTo(p(16.01, 11));
    path.lineTo(hR(-12.01));
    path.lineTo(vR(2));
    path.lineTo(hR(12.01));
    path.lineTo(vR(3));
    path.lineTo(pR(3.99, -4));
    path.lineTo(pR(-3.99, -4));
  });
});
