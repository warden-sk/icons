/*
 * Copyright 2022 Marek Kobida
 */

import './icon/arrow_right_alt';
import './icon/chevron_left';
import './icon/chevron_right';
import './icon/plane';
import './icon/plus';
import './icon/sun';

import fs from 'fs';
import { icons } from './createIcon';

function react(name: string, svg: string): string {
  svg = svg
    .replace(/(<svg)/, svg => `${svg} {...$}`)
    .replace(/height="[^"]+"/, `className={className ? \`icon \${className}\` : 'icon'} height={size}`)
    .replace(/width="[^"]+"/, 'width={size}');

  return `export const ${name} = ({ className, size = 24, ...$ }: B<JSX.IntrinsicElements['svg']> & { size?: number }) => ${svg};`;
}

const tsx = ["import React from 'react';"];

icons.forEach(([name, svg]) => {
  name = name.replace(/^(.)/, (_1, _2) => _2.toUpperCase()).replace(/_(.)/g, (_1, _2) => _2.toUpperCase());

  tsx.push(react(name, svg));
});

fs.writeFileSync('./icons.tsx', tsx.join('\n'));
