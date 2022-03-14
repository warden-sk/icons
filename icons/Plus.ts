/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';

createIcon('Plus', addPath => {
  addPath(({ lineTo, moveTo }, { hR, p, vR }) => {
    moveTo(p(19, 13));
    lineTo(hR(-6));
    lineTo(vR(6));
    lineTo(hR(-2));
    lineTo(vR(-6));
    lineTo(hR(-6));
    lineTo(vR(-2));
    lineTo(hR(6));
    lineTo(vR(-6));
    lineTo(hR(2));
    lineTo(vR(6));
    lineTo(hR(6));
    lineTo(vR(2));
  });
});
