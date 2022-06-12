/*
 * Copyright 2022 Marek Kobida
 */

import type IconStorage from './IconStorage';

function iconToReact({ name, svg }: typeof IconStorage.icons[number]): string {
  svg = svg
    .replace(/(<svg)/, svg => `${svg} {...$}`)
    .replace(
      /height="[^"]+"/,
      `className={className ? \`icon \${className}\` : 'icon'} height={size} style={{ minHeight: size, minWidth: size, ...style }}`
    )
    .replace(/width="[^"]+"/, 'width={size}');

  return `export const ${name} = ({ className, size = 24, style, ...$ }: EnhancedElement<JSX.IntrinsicElements['svg']> & { size?: number }) => ${svg};`;
}

export default iconToReact;
