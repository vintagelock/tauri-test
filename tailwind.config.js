/** @type {import('tailwindcss').Config} */

import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons';
import tailwindPresetMantine from 'tailwind-preset-mantine';

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        autowide: ['Audiowide', 'normal'],
        mono: ['ui-monospace', 'monospace'],
      },
      colors: {
      },
    },
  },
  presets: [tailwindPresetMantine()],
  corePlugins: {
    preflight: true,
  },
  variants: {},
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
    require('tailwind-scrollbar')({ nocompatible: true }),
    iconsPlugin({ collections: getIconCollections(['heroicons']) }),
  ],
};
