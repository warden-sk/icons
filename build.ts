/*
 * Copyright 2022 Marek Kobida
 */

import fs from 'fs/promises';
import path from 'path';
import IconStorage from './IconStorage';
import iconToReact from './iconToReact';

(async () => {
  const files = await fs.readdir(path.resolve(__dirname,'./ts'));

  for await (const file of files) import(path.resolve(__dirname,'./ts',file));

  IconStorage.map(({ name, svg }) => fs.writeFile(path.resolve(__dirname,'./output',`${name}.svg`), svg));

  const md: string[] = [
    '```ts',
    "import { ArrowRightAlt } from '@warden-sk/icons';",
    '```',
    '# Icons',
    '| Name | Icon |',
    '| --- | :---: |',
    ...IconStorage.map(({ name }) => `| ${name} | ![${name}](./output/${name}.svg) |`),
  ];

  fs.writeFile(path.resolve(__dirname,'./README.md'), md.join('\n'));

  const tsx: string[] = ["import React from 'react';", ...IconStorage.map(iconToReact)];

  fs.writeFile(path.resolve(__dirname,'./index.tsx'), tsx.join('\n'));
})();
