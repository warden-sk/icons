/*
 * Copyright 2022 Marek Kobida
 */

import IconStorage from './helpers/IconStorage';
import fs from 'fs/promises';

(async () => {
  const files = await fs.readdir('./icons');

  for await (const file of files) import(`./icons/${file}`);

  const md: string[] = ['# Icons', ...IconStorage.map(({ name }) => `![${name}](./svg/${name}.svg)`)];

  fs.writeFile('./README.md', md.join('\n'));

  function iconToReact({ name, svg }: typeof IconStorage.icons[number]): string {
    svg = svg
      .replace(/(<svg)/, svg => `${svg} {...$}`)
      .replace(/height="[^"]+"/, `className={className ? \`icon \${className}\` : 'icon'} height={size}`)
      .replace(/width="[^"]+"/, 'width={size}');

    return `export const ${name} = ({ className, size = 24, ...$ }: B<JSX.IntrinsicElements['svg']> & { size?: number }) => ${svg};`;
  }

  const tsx: string[] = ["import React from 'react';", ...IconStorage.map(iconToReact)];

  fs.writeFile('./icons.tsx', tsx.join('\n'));
})();
