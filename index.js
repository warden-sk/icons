/*
 * Copyright 2021 Marek Kobida
 */

const fs = require('fs');

const { icons } = require('./createIcon');

require('./icon/arrow_right_alt');
require('./icon/bookmark_add');
require('./icon/chevron_left');
require('./icon/chevron_right');
require('./icon/plane');
require('./icon/plus');
require('./icon/sun');

function react(name, svg) {
  svg = svg
    .replace(/(<svg)/, _1 => `${_1} {...$}`)
    .replace(/height="[^"]+"/, `className={className ? \`icon \${className}\` : 'icon'} height={size}`)
    .replace(/width="[^"]+"/, 'width={size}');

  return `export const ${name} = ({ className, size = 24, ...$ }: JSX.IntrinsicElements['svg'] & { size?: number }) => ${svg};`;
}

const tsx = ["import React from 'react';"];

icons.forEach(([name, svg]) => {
  name = name.replace(/^(.)/, (_1, _2) => _2.toUpperCase()).replace(/_(.)/g, (_1, _2) => _2.toUpperCase());

  tsx.push(react(name, svg));
});

fs.writeFileSync('./icons.json', JSON.stringify(icons));
fs.writeFileSync('./icons.tsx', tsx.join(''));
