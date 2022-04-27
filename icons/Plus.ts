/*
 * Copyright 2022 Marek Kobida
 */

import createIcon from '../createIcon';
import storage from '../storage';

createIcon('Plus', addPath => {
  addPath(({ cubicCurveTo, lineTo, moveTo }, { hR, p, pR, vR }) => {
    moveTo(p(18, 13));
    cubicCurveTo(hR(storage['0.55']), pR(1, -storage['0.45']), pR(1, -1));
    cubicCurveTo(vR(-storage['0.55']), pR(-storage['0.45'], -1), pR(-1, -1));
    lineTo(hR(-5));
    lineTo(vR(-5));
    cubicCurveTo(vR(-storage['0.55']), pR(-storage['0.45'], -1), pR(-1, -1));
    cubicCurveTo(hR(-storage['0.55']), pR(-1, storage['0.45']), pR(-1, 1));
    lineTo(vR(5));
    lineTo(hR(-5));
    cubicCurveTo(hR(-storage['0.55']), pR(-1, storage['0.45']), pR(-1, 1));
    cubicCurveTo(vR(storage['0.55']), pR(storage['0.45'], 1), pR(1, 1));
    lineTo(hR(5));
    lineTo(vR(5));
    cubicCurveTo(vR(storage['0.55']), pR(storage['0.45'], 1), pR(1, 1));
    cubicCurveTo(hR(storage['0.55']), pR(1, -storage['0.45']), pR(1, -1));
    lineTo(vR(-5));
    lineTo(hR(5));
  });
});
