/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';

createIcon('chevron_right', addPath => {
  addPath((path, { p, pR }) => {
    path.moveTo(p(10, 6));
    path.lineTo(pR(-1.41, 1.41));
    path.lineTo(pR(4.58, 4.59));
    path.lineTo(pR(-4.58, 4.59));
    path.lineTo(pR(1.41, 1.41));
    path.lineTo(pR(6, -6));
    path.lineTo(pR(-6, -6));
  });
});
