/*
 * Copyright 2023 Marek Kobida
 */

import IconStorage from './IconStorage';
import Point from './Point';

interface PathCommands {
  cubicCurveTo: (point1: Point, point2: Point, point3?: Point) => number;
  lineTo: (point: Point) => number;
  moveTo: (point: Point) => number;
}

interface Helpers {
  h: (x: number) => Point;
  hR: (x: number) => Point;
  p: (x: number, y: number) => Point;
  pR: (x: number, y: number) => Point;
  v: (x: number) => Point;
  vR: (x: number) => Point;
}

interface On {
  (pathCommands: PathCommands, helpers: Helpers): void;
}

function createIcon(name: string, on: (on: (on: On) => void) => void) {
  const svg: string[] = ['<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">'];

  function addPath(on: On) {
    const d: [string, ...Point[]][] = [];

    /**
     * (1)
     */
    const lastX: () => number = () => (d[d.length - 1][d[d.length - 1].length - 1] as Point).x;
    const lastY: () => number = () => (d[d.length - 1][d[d.length - 1].length - 1] as Point).y;

    /**
     * (2)
     */
    const pathCommands: PathCommands = {
      cubicCurveTo: (point1, point2, point3) =>
        point3 ? d.push(['C', point1, point2, point3]) : d.push(['S', point1, point2]),
      lineTo: point => d.push(['L', point]),
      moveTo: point => d.push(['M', point]),
    };

    /**
     * (3)
     */
    const helpers: Helpers = {
      h: x => new Point(x, lastY()),
      hR: x => (x > 0 ? new Point(lastX() + x, lastY()) : new Point(lastX() - x * -1, lastY())),
      p: (x, y) => new Point(x, y),
      pR: (x, y) => new Point(x > 0 ? lastX() + x : lastX() - x * -1, y > 0 ? lastY() + y : lastY() - y * -1),
      v: y => new Point(lastX(), y),
      vR: y => (y > 0 ? new Point(lastX(), lastY() + y) : new Point(lastX(), lastY() - y * -1)),
    };

    on(pathCommands, helpers);

    svg.push(
      `<path d="${d.map(([command, ...points]) => `${command} ${points.join(' ')}`).join(' ')}" fill="currentColor" />`
    );
  }

  on(addPath);

  svg.push('</svg>');

  IconStorage.add(name, svg.join(''));
}

export default createIcon;
