/*
 * Copyright 2021 Marek Kobida
 */

const fs = require('fs');
const paper = require('paper');
const svgo = require('svgo');

const icons = [];
module.exports.icons = icons;

function createIcon(name, on) {
  const icon = new paper.Size(24, 24);
  paper.setup(icon);

  function addPath(on) {
    const path = new paper.Path();

    path.fillColor = '#000';

    const x = () => path.lastSegment.point.x;
    const y = () => path.lastSegment.point.y;

    const h = x => new paper.Point(x, y());
    const hR = xx => (xx > 0 ? new paper.Point(x() + xx, y()) : new paper.Point(x() - xx * -1, y()));
    const p = (x, y) => new paper.Point(x, y);
    const pR = (xx, yy) => new paper.Point(xx > 0 ? x() + xx : x() - xx * -1, yy > 0 ? y() + yy : y() - yy * -1);
    const v = y => new paper.Point(x(), y);
    const vR = yy => (yy > 0 ? new paper.Point(x(), y() + yy) : new paper.Point(x(), y() - yy * -1));

    on(path, { h, hR, p, pR, v, vR, x, y });
  }

  on(addPath);

  const svg = test(paper.project.exportSVG({ asString: true }));

  fs.writeFileSync(`./svg/${name}.svg`, svg);

  icons.push([name, svg]);
}

function test(svg) {
  svg = svg
    .replace(/clip-rule="[^"]+"/g, '')
    .replace(/fill-rule="[^"]+"/g, '')
    .replace(/fill="[^"]+"/g, 'fill="currentColor"')
    .replace(/font-family="[^"]+"/g, '')
    .replace(/font-size="[^"]+"/g, '')
    .replace(/font-weight="[^"]+"/g, '')
    .replace(/stroke-miterlimit="[^"]+"/g, '')
    .replace(/style="[^"]+"/g, '')
    .replace(/text-anchor="[^"]+"/g, '')
    .replace(/\s{2,}/g, ' ');

  return svgo.optimize(svg, {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
      {
        name: 'sortAttrs',
        params: {
          order: ['d', 'fill', 'height', 'viewBox', 'width'],
          xmlnsOrder: 'alphabetical',
        },
      },
    ],
  }).data;
}

module.exports.createIcon = createIcon;
