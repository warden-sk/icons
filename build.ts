/*
 * Copyright 2022 Marek Kobida
 */

import IconStorage from './IconStorage';
import fs from 'fs/promises';
import iconToReact from './iconToReact';

(async () => {
  const files = await fs.readdir('./ts');

  for await (const file of files) import(`./ts/${file}`);

  IconStorage.map(({ name, svg }) => fs.writeFile(`./output/${name}.svg`, svg));

  const md: string[] = [
    '```ts',
    "import { ArrowRightAlt } from '@warden-sk/icons';",
    '```',
    '# Icons',
    '| Name | Icon |',
    '| --- | :---: |',
    ...IconStorage.map(({ name }) => `| ${name} | ![${name}](./output/${name}.svg) |`),
  ];

  fs.writeFile('./README.md', md.join('\n'));

  const tsx: string[] = ["import React from 'react';", ...IconStorage.map(iconToReact)];

  fs.writeFile('./index.tsx', tsx.join('\n'));
})();
