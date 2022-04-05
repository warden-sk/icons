/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';

createIcon('Tag', addPath => {
  addPath(({ lineTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(20, 10));
    lineTo(vR(-2));
    lineTo(hR(-4));
    lineTo(vR(-4));
    lineTo(hR(-2));
    lineTo(vR(4));
    lineTo(hR(-4));
    lineTo(vR(-4));
    lineTo(hR(-2));
    lineTo(vR(4));
    lineTo(hR(-4));
    lineTo(vR(2));
    lineTo(hR(4));
    lineTo(vR(4));
    lineTo(hR(-4));
    lineTo(vR(2));
    lineTo(hR(4));
    lineTo(vR(4));
    lineTo(hR(2));
    lineTo(vR(-4));
    lineTo(hR(4));
    lineTo(vR(4));
    lineTo(hR(2));
    lineTo(vR(-4));
    lineTo(hR(4));
    lineTo(vR(-2));
    lineTo(hR(-4));
    lineTo(vR(-4));
    lineTo(hR(4));
    moveTo(pR(-6, 4));
    lineTo(hR(-4));
    lineTo(vR(-4));
    lineTo(hR(4));
    lineTo(vR(4));
  });
});
