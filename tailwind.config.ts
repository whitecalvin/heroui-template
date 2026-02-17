import { heroui } from '@heroui/theme';

/** @type {import('tailwindcss').Config} */
export const content = [
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
  './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
];
export const theme = {
  extend: {},
};
export const darkMode = 'class';
export const plugins = [heroui()];
