/*
 * Copyright 2022 Marek Kobida
 */

const fs = require('fs');
const { icons: icons1 } = require('./createIcon.beta');
const { icons: icons2 } = require('./createIcon');

require('./icon/arrow_right_alt');
require('./icon/chevron_left');
require('./icon/chevron_right');
require('./icon/plane');
require('./icon/plus');
require('./icon/sun');

function react(name, svg) {
  svg = svg
    .replace(/(<svg)/, svg => `${svg} {...$}`)
    .replace(/height="[^"]+"/, `className={className ? \`icon \${className}\` : 'icon'} height={size}`)
    .replace(/width="[^"]+"/, 'width={size}');

  return `export const ${name} = ({ className, size = 24, ...$ }: JSX.IntrinsicElements['svg'] & { size?: number }) => ${svg};`;
}

const tsx = ["import React from 'react';"];

icons1.forEach(([name, svg]) => {
  name = name.replace(/^(.)/, (_1, _2) => _2.toUpperCase()).replace(/_(.)/g, (_1, _2) => _2.toUpperCase());

  tsx.push(react(name, svg));
});

icons2.forEach(([name, svg]) => {
  name = name.replace(/^(.)/, (_1, _2) => _2.toUpperCase()).replace(/_(.)/g, (_1, _2) => _2.toUpperCase());

  tsx.push(react(name, svg));
});

fs.writeFileSync('./icons.tsx', tsx.join('\n'));
