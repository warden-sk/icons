/*
 * Copyright 2021 Marek Kobida
 */

const fs = require('fs');

const icons = [];

function createIcon(name, on) {
  const svg = ['<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">'];

  function addPath(on) {
    const d = [];
    const fill = 'currentColor';

    class Point {
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }

      toString() {
        return `${this.x} ${this.y}`;
      }
    }

    const x = () => d[d.length - 1][1].x;
    const y = () => d[d.length - 1][1].y;

    const h = x => new Point(x, y());
    const hR = xx => (xx > 0 ? new Point(x() + xx, y()) : new Point(x() - xx * -1, y()));

    const p = (x, y) => new Point(x, y);
    const pR = (xx, yy) => new Point(xx > 0 ? x() + xx : x() - xx * -1, yy > 0 ? y() + yy : y() - yy * -1);

    const v = y => new Point(x(), y);
    const vR = yy => (yy > 0 ? new Point(x(), y() + yy) : new Point(x(), y() - yy * -1));

    const lineTo = point => d.push(['L', point]);
    const moveTo = point => d.push(['M', point]);

    on({ lineTo, moveTo }, { h, hR, p, pR, v, vR, x, y });

    svg.push(`<path d="${d.map($ => `${$[0]} ${$[1]}`).join(' ')}" fill="${fill}" />`);
  }

  on(addPath);

  svg.push('</svg>');

  fs.writeFileSync(`./svg/${name}.svg`, svg.join(''));

  icons.push([name, svg.join('')]);
}

module.exports.createIcon = createIcon;
module.exports.icons = icons;
