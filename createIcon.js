/*
 * Copyright 2022 Marek Kobida
 */

const Point = require('./Point');
const fs = require('fs');

const icons = [];

function createIcon(name, on) {
  const svg = ['<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">'];

  function addPath(on) {
    const d = [];

    /**
     * (1)
     */
    const lastX = () => d[d.length - 1][d[d.length - 1].length - 1].x;
    const lastY = () => d[d.length - 1][d[d.length - 1].length - 1].y;

    /**
     * (2)
     */
    const h = x => new Point(x, lastY());
    const hR = x => (x > 0 ? new Point(lastX() + x, lastY()) : new Point(lastX() - x * -1, lastY()));

    const p = (x, y) => new Point(x, y);
    const pR = (x, y) => new Point(x > 0 ? lastX() + x : lastX() - x * -1, y > 0 ? lastY() + y : lastY() - y * -1);

    const v = y => new Point(lastX(), y);
    const vR = y => (y > 0 ? new Point(lastX(), lastY() + y) : new Point(lastX(), lastY() - y * -1));

    /**
     * (3)
     */
    const cubicCurveTo = (point1, point2, point3) => d.push(['C', point1, point2, point3]);
    const lineTo = point => d.push(['L', point]);
    const moveTo = point => d.push(['M', point]);

    on({ cubicCurveTo, lineTo, moveTo }, { h, hR, p, pR, v, vR });

    svg.push(
      `<path d="${d.map(([command, ...points]) => `${command} ${points.join(' ')}`).join(' ')}" fill="currentColor" />`
    );
  }

  on(addPath);

  svg.push('</svg>');

  fs.writeFileSync(`./svg/${name}.svg`, svg.join(''));

  icons.push([name, svg.join('')]);
}

module.exports.createIcon = createIcon;
module.exports.icons = icons;
