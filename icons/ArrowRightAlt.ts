/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';

// ✅
createIcon('ArrowRightAlt', addPath => {
  addPath(({ lineTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(16, 11));
    lineTo(hR(-12));
    lineTo(vR(2));
    lineTo(hR(12));
    lineTo(vR(3));
    lineTo(pR(4, -4));
    lineTo(pR(-4, -4));
  });
});
