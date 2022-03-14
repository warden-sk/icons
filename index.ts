/*
 * Copyright 2022 Marek Kobida
 */

import './icons/ArrowRightAlt';
import './icons/ChevronLeft';
import './icons/ChevronRight';
import './icons/Plane';
import './icons/Plus';
import './icons/Sun';

import IconStorage, { Icon } from './IconStorage';
import fs from 'fs';

function react({ name, svg }: Icon): string {
  svg = svg
    .replace(/(<svg)/, svg => `${svg} {...$}`)
    .replace(/height="[^"]+"/, `className={className ? \`icon \${className}\` : 'icon'} height={size}`)
    .replace(/width="[^"]+"/, 'width={size}');

  const tsx = `export const ${name} = ({ className, size = 24, ...$ }: B<JSX.IntrinsicElements['svg']> & { size?: number }) => ${svg};`;

  console.log('react', svg.length, tsx.length);

  return tsx;
}

const tsx: string[] = ["import React from 'react';", ...IconStorage.map(react)];

fs.writeFileSync('./icons.tsx', tsx.join('\n'));
