/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';

// ✅
createIcon('Plane', addPath => {
  addPath((path, { hR, p, pR, vR }) => {
    path.moveTo(p(13, 9));
    path.lineTo(vR(-5.5));
    path.cubicCurveTo(vR(-0.8284), pR(-0.6716, -1.5), pR(-1.5, -1.5));
    path.cubicCurveTo(hR(-0.8284), pR(-1.5, 0.6716), pR(-1.5, 1.5));
    path.lineTo(vR(5.5));
    // ľavé krídlo
    path.lineTo(pR(-8, 5));
    path.lineTo(vR(2));
    path.lineTo(pR(8, -2.5));
    //
    path.lineTo(vR(5.5));
    // ľavý stabilizátor
    path.lineTo(pR(-2, 1.5));
    path.lineTo(vR(1.5));
    path.lineTo(pR(3.5, -1));
    // pravý stabilizátor
    path.lineTo(pR(3.5, 1));
    path.lineTo(vR(-1.5));
    path.lineTo(pR(-2, -1.5));
    //
    path.lineTo(vR(-5.5));
    // pravé krídlo
    path.lineTo(pR(8, 2.5));
    path.lineTo(vR(-2));
    path.lineTo(pR(-8, -5));
  });
});
