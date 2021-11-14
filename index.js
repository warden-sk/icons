/*
 * Copyright 2021 Marek Kobida
 */

const fs = require('fs');

const { icons } = require('./createIcon');

require('./icon/plane');
require('./icon/plus');
require('./icon/sun');

function react(name, svg) {
  svg = svg
    .replace(/(xmlns="http:\/\/www\.w3\.org\/2000\/svg")/, $ => `${$} {...$}`)
    .replace(/height="[^"]+"/, 'height={size}')
    .replace(/width="[^"]+"/, 'width={size}');

  return `export const ${name} = ({ size = 24, ...$ }: JSX.IntrinsicElements['svg'] | { size?: number }) => ${svg};`;
}

const tsx = ["import React from 'react';"];

icons.forEach(([name, svg]) => {
  tsx.push(react(name.charAt(0).toUpperCase() + name.substring(1), svg));
});

fs.writeFileSync('./icons.tsx', tsx.join('\n'));

try {
  fs.writeFileSync('../koala.sk/icons.tsx', tsx.join('\n'));
} catch {}
