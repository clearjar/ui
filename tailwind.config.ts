/** @type {import('tailwindcss').Config} */
import { ClearJarTailwindThemeConfig } from './src/tailwind'
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './.storybook/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: ClearJarTailwindThemeConfig
  },
  plugins: []
}

