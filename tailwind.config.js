/** @type {import('tailwindcss').Config} */

import { ClearJarTailwindThemeConfig } from './src/tailwind';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  // Toggle dark-mode based on .dark class or data-mode="dark"
  darkMode: ['class', '[data-mode="dark"]'],
  theme: ClearJarTailwindThemeConfig,
  plugins: [
    ''
  ],
}

