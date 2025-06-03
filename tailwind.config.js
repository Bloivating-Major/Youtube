// tailwind.config.js
import plugin from 'tailwind-scrollbar';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin({ nocompatible: true }),
  ],
};

export default config;
