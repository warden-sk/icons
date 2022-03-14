/*
 * Copyright 2022 Marek Kobida
 */

export interface Icon {
  name: string;
  svg: string;
}

class IconStorage {
  static #icons: Icon[] = [];

  static add(name: string, svg: string) {
    this.#icons.push({ name, svg });

    console.log('IconStorage.add', name, svg.length);
  }

  static map<T>(on: (icon: Icon, i: number, icons: Icon[]) => T): T[] {
    return this.#icons.map(on);
  }
}

export default IconStorage;
