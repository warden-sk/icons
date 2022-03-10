/*
 * Copyright 2022 Marek Kobida
 */

import './icon/ArrowRightAlt';
import './icon/ChevronLeft';
import './icon/ChevronRight';
import './icon/Plane';
import './icon/Plus';
import './icon/Sun';

import fs from 'fs';
import { icons } from './createIcon';

function react(name: string, svg: string): string {
  svg = svg
    .replace(/(<svg)/, svg => `${svg} {...$}`)
    .replace(/height="[^"]+"/, `className={className ? \`icon \${className}\` : 'icon'} height={size}`)
    .replace(/width="[^"]+"/, 'width={size}');

  return `export const ${name} = ({ className, size = 24, ...$ }: B<JSX.IntrinsicElements['svg']> & { size?: number }) => ${svg};`;
}

const tsx: string[] = ["import React from 'react';"];

icons.forEach(([name, svg]) => {
  tsx.push(react(name, svg));
});

fs.writeFileSync('./icons.tsx', tsx.join('\n'));
