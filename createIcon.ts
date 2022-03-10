/*
 * Copyright 2022 Marek Kobida
 */

import Point from './Point';
import fs from 'fs';

const icons: [name: string, svg: string][] = [];

type On = (
  a: {
    cubicCurveTo: (point1: Point, point2: Point, point3: Point) => number;
    lineTo: (point: Point) => number;
    moveTo: (point: Point) => number;
  },
  b: {
    h: (x: number) => Point;
    hR: (x: number) => Point;
    p: (x: number, y: number) => Point;
    pR: (x: number, y: number) => Point;
    v: (x: number) => Point;
    vR: (x: number) => Point;
  }
) => void;

function createIcon(name: string, on: (on: (on: On) => void) => void): void {
  const svg: string[] = ['<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">'];

  function addPath(on: On): void {
    const d: [string, ...Point[]][] = [];

    /**
     * (1)
     */
    const lastX: () => number = () => (d[d.length - 1][d[d.length - 1].length - 1] as Point).x;
    const lastY: () => number = () => (d[d.length - 1][d[d.length - 1].length - 1] as Point).y;

    /**
     * (2)
     */
    const h = (x: number) => new Point(x, lastY());
    const hR = (x: number) => (x > 0 ? new Point(lastX() + x, lastY()) : new Point(lastX() - x * -1, lastY()));

    const p = (x: number, y: number) => new Point(x, y);
    const pR = (x: number, y: number) =>
      new Point(x > 0 ? lastX() + x : lastX() - x * -1, y > 0 ? lastY() + y : lastY() - y * -1);

    const v = (y: number) => new Point(lastX(), y);
    const vR = (y: number) => (y > 0 ? new Point(lastX(), lastY() + y) : new Point(lastX(), lastY() - y * -1));

    /**
     * (3)
     */
    const cubicCurveTo = (point1: Point, point2: Point, point3: Point): number => d.push(['C', point1, point2, point3]);
    const lineTo = (point: Point): number => d.push(['L', point]);
    const moveTo = (point: Point): number => d.push(['M', point]);

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

export { icons };

export default createIcon;
