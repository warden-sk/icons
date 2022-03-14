/*
 * Copyright 2022 Marek Kobida
 */

import IconStorage from './helpers/IconStorage';
import fs from 'fs/promises';

(async () => {
  const files = await fs.readdir('./icons');

  for await (const file of files) import(`./icons/${file}`);

  function iconToReact({ name, svg }: typeof IconStorage.icons[number]): string {
    svg = svg
      .replace(/(<svg)/, svg => `${svg} {...$}`)
      .replace(/height="[^"]+"/, `className={className ? \`icon \${className}\` : 'icon'} height={size}`)
      .replace(/width="[^"]+"/, 'width={size}');

    const tsx = `export const ${name} = ({ className, size = 24, ...$ }: B<JSX.IntrinsicElements['svg']> & { size?: number }) => ${svg};`;

    console.log('iconToReact', { name, svg: svg.length, tsx: tsx.length });

    return tsx;
  }

  const md: string[] = ['# Icons', ...IconStorage.map(({ name }) => `![${name}](./svg/${name}.svg)`)];

  fs.writeFile('./README.md', md.join('\n'));

  const tsx: string[] = ["import React from 'react';", ...IconStorage.map(iconToReact)];

  fs.writeFile('./icons.tsx', tsx.join('\n'));
})();
