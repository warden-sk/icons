/*
 * Copyright 2022 Marek Kobida
 */

import './icons/ArrowRightAlt';
import './icons/ChevronLeft';
import './icons/ChevronRight';
import './icons/Plane';
import './icons/Plus';
import './icons/Sun';

import IconStorage from './IconStorage';
import fs from 'fs';

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

fs.writeFileSync('./README.md', md.join('\n'));

const tsx: string[] = ["import React from 'react';", ...IconStorage.map(iconToReact)];

fs.writeFileSync('./icons.tsx', tsx.join('\n'));
