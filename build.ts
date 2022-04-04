/*
 * Copyright 2022 Marek Kobida
 */

import IconStorage from './IconStorage';
import fs from 'fs/promises';
import iconToReact from './iconToReact';

(async () => {
  const files = await fs.readdir('./icons');

  for await (const file of files) import(`./icons/${file}`);

  IconStorage.map(({ name, svg }) => fs.writeFile(`./svg/${name}.svg`, svg));

  const md: string[] = [
    '# Icons',
    '| Name | Icon |',
    '| --- | --- |',
    ...IconStorage.map(({ name }) => `| ${name} | ![${name}](./svg/${name}.svg) |`),
  ];

  fs.writeFile('./README.md', md.join('\n'));

  const tsx: string[] = ["import React from 'react';", ...IconStorage.map(iconToReact)];

  fs.writeFile('./index.tsx', tsx.join('\n'));
})();
