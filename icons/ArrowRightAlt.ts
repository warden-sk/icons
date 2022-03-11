/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';

// ✅
createIcon('ArrowRightAlt', addPath => {
  addPath(({ lineTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(16.01, 11));
    lineTo(hR(-12.01));
    lineTo(vR(2));
    lineTo(hR(12.01));
    lineTo(vR(3));
    lineTo(pR(3.99, -4));
    lineTo(pR(-3.99, -4));
  });
});
