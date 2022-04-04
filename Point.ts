/*
 * Copyright 2022 Marek Kobida
 */

class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = +x.toFixed(2);
    this.y = +y.toFixed(2);
  }

  toString() {
    return `${this.x} ${this.y}`;
  }
}

export default Point;
