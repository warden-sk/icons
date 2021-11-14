/*
 * Copyright 2021 Marek Kobida
 */

const fs = require('fs');

const { icons } = require('./createIcon');

require('./icon/chevron_right');
require('./icon/plane');
require('./icon/plus');
require('./icon/sun');

function react(name, svg) {
  svg = svg
    .replace(/(xmlns="http:\/\/www\.w3\.org\/2000\/svg")/, _1 => `${_1} {...$}`)
    .replace(/height="[^"]+"/, 'height={size}')
    .replace(/width="[^"]+"/, 'width={size}');

  return `export const ${name} = ({ size = 24, ...$ }: JSX.IntrinsicElements['svg'] & { size?: number }) => ${svg};`;
}

const tsx = ["import React from 'react';"];

icons.forEach(([name, svg]) => {
  name = name.replace(/^(.)/, (_1, _2) => _2.toUpperCase()).replace(/_(.)/g, (_1, _2) => _2.toUpperCase());

  tsx.push(react(name, svg));
});

fs.writeFileSync('./icons.tsx', tsx.join('\n'));

try {
  fs.writeFileSync('../koala.sk/icons.tsx', tsx.join('\n'));
} catch {}
