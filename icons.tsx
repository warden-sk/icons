import React from 'react';
export const ChevronRight = ({ size = 24, ...$ }: JSX.IntrinsicElements['svg'] & { size?: number }) => (
  <svg height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" {...$}>
    <path d="M10 6 8.59 7.41l4.58 4.58-4.58 4.58L10 17.98l6-6-6-6" fill="currentColor" />
  </svg>
);
export const Plane = ({ size = 24, ...$ }: JSX.IntrinsicElements['svg'] & { size?: number }) => (
  <svg height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" {...$}>
    <path
      d="M13 9V3.5a1.5 1.5 0 1 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5v-2l-8-5"
      fill="currentColor"
    />
  </svg>
);
export const Plus = ({ size = 24, ...$ }: JSX.IntrinsicElements['svg'] & { size?: number }) => (
  <svg height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" {...$}>
    <path d="M13 5h-2v6H5v2h6v6h2v-6h6v-2h-6V5" fill="currentColor" />
  </svg>
);
export const Sun = ({ size = 24, ...$ }: JSX.IntrinsicElements['svg'] & { size?: number }) => (
  <svg height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" {...$}>
    <g fill="currentColor">
      <path d="M17 12a5 5 0 1 0-10 0 5 5 0 0 0 10 0M11 2a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0V2M11 20a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2M2 11a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2H2M20 11a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2M5.99 4.575A1 1 0 0 0 4.575 5.99l1.06 1.06A1 1 0 0 0 7.05 5.635l-1.06-1.06M18.01 4.575a1 1 0 0 1 1.416 1.415l-1.06 1.06a1 1 0 0 1-1.415-1.415l1.06-1.06M5.636 16.95a1 1 0 0 1 1.415 1.415l-1.06 1.06a1 1 0 0 1-1.415-1.415l1.06-1.06M18.365 16.95a1 1 0 0 0-1.415 1.415l1.06 1.06a1 1 0 0 0 1.415-1.415l-1.06-1.06" />
    </g>
  </svg>
);
