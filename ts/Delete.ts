/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';


createIcon('Delete', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR }) => {
    moveTo(p(5, 13));
    lineTo(hR(14));
    lineTo(vR(-2));
    lineTo(hR(-14));
    lineTo(vR(2));
  });
});
