/*
 * Copyright 2023 Marek Kobida
 */

const fs = require('fs');

const Plane =
  'm 10 3.5 a 1.5 1.5 0 0 1 1.5 -1.5 h 0 a 1.5 1.5 0 0 1 1.5 1.5 v 5.5 l 8 5 v 2 l -8 -2.5 v 5.5 l 2 1.5 v 1.5 l -3.5 -1 l -3.5 1 v -1.5 l 2 -1.5 v -5.5 l -8 2.5 v -2 l 8 -5 z';

function pathToFile(path) {
  return `<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="${path}" fill="none" stroke="#000" /></svg>`;
}

fs.writeFileSync('./Plane.svg', pathToFile(Plane));
