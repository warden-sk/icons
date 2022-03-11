/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';

// ✅
createIcon('Plus', addPath => {
  addPath((path, { hR, p, vR }) => {
    path.moveTo(p(19, 13));
    path.lineTo(hR(-6));
    path.lineTo(vR(6));
    path.lineTo(hR(-2));
    path.lineTo(vR(-6));
    path.lineTo(hR(-6));
    path.lineTo(vR(-2));
    path.lineTo(hR(6));
    path.lineTo(vR(-6));
    path.lineTo(hR(2));
    path.lineTo(vR(6));
    path.lineTo(hR(6));
    path.lineTo(vR(2));
  });
});
