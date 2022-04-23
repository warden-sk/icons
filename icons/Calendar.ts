/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';

createIcon('Calendar', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { hR, p, pR, vR }) => {
    /* (1) */
    moveTo(p(21, 6));
    lineTo(vR(14));
    cubicCurveTo(vR(0.5), vR(1), pR(-0.5, 1.5));
    cubicCurveTo(pR(-0.5, 0.5), pR(-1, 0.5), pR(-1.5, 0.5));
    lineTo(hR(-14));
    cubicCurveTo(hR(-0.5), hR(-1), pR(-1.5, -0.5));
    cubicCurveTo(pR(-0.5, -0.5), pR(-0.5, -1), pR(-0.5, -1.5));
    lineTo(vR(-14));
    cubicCurveTo(vR(-0.5), vR(-1), pR(0.5, -1.5));
    cubicCurveTo(pR(0.5, -0.5), pR(1, -0.5), pR(1.5, -0.5));
    lineTo(hR(2));
    lineTo(vR(-2));
    lineTo(hR(2));
    lineTo(vR(2));
    lineTo(hR(6));
    lineTo(vR(-2));
    lineTo(hR(2));
    lineTo(vR(2));
    lineTo(hR(2));
    cubicCurveTo(hR(0.5), hR(1), pR(1.5, 0.5));
    cubicCurveTo(pR(0.5, 0.5), pR(0.5, 1), pR(0.5, 1.5));
    /* (2) */
    moveTo(p(19, 8));
    lineTo(hR(-14));
    lineTo(vR(12));
    lineTo(hR(14));
    lineTo(vR(-12));
  });
  addPath(({ cubicCurveTo, lineTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(7, 15));
    lineTo(hR(2));
    lineTo(vR(2));
    lineTo(hR(-2));
    lineTo(vR(-2));
  });
  addPath(({ cubicCurveTo, lineTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(11, 15));
    lineTo(hR(2));
    lineTo(vR(2));
    lineTo(hR(-2));
    lineTo(vR(-2));
  });
  addPath(({ cubicCurveTo, lineTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(15, 15));
    lineTo(hR(2));
    lineTo(vR(2));
    lineTo(hR(-2));
    lineTo(vR(-2));
  });
  addPath(({ cubicCurveTo, lineTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(15, 11));
    lineTo(hR(2));
    lineTo(vR(2));
    lineTo(hR(-2));
    lineTo(vR(-2));
  });
  addPath(({ cubicCurveTo, lineTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(11, 11));
    lineTo(hR(2));
    lineTo(vR(2));
    lineTo(hR(-2));
    lineTo(vR(-2));
  });
  addPath(({ cubicCurveTo, lineTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(7, 11));
    lineTo(hR(2));
    lineTo(vR(2));
    lineTo(hR(-2));
    lineTo(vR(-2));
  });
});
