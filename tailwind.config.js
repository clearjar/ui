/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './.storybook/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
        colors: {
            primary: "var(--colors-blue-500)",
            violet: {
                50: "var(--colors-violet-50)",
                100: "var(--colors-violet-100)",
                200: "var(--colors-violet-200)",
                300: "var(--colors-violet-300)",
                400: "var(--colors-violet-400)",
                500: "var(--colors-violet-500)",
                600: "var(--colors-violet-600)",
                700: "var(--colors-violet-700)",
                800: "var(--colors-violet-800)",
                900: "var(--colors-violet-900)",
            },
            teal: {
                50: "var(--colors-teal-50)",
                100: "var(--colors-teal-100)",
                200: "var(--colors-teal-200)",
                300: "var(--colors-teal-300)",
                400: "var(--colors-teal-400)",
                500: "var(--colors-teal-500)",
                600: "var(--colors-teal-600)",
                700: "var(--colors-teal-700)",
                800: "var(--colors-teal-800)",
                900: "var(--colors-teal-900)",
            },
            blue: {
                50: "var(--colors-blue-50)",
                100: "var(--colors-blue-100)",
                200: "var(--colors-blue-200)",
                300: "var(--colors-blue-300)",
                400: "var(--colors-blue-400)",
                500: "var(--colors-blue-500)",
                600: "var(--colors-blue-600)",
                700: "var(--colors-blue-700)",
                800: "var(--colors-blue-800)",
                900: "var(--colors-blue-900)",
            },
            yellow: {
                50: "var(--colors-yellow-50)",
                100: "var(--colors-yellow-100)",
                200: "var(--colors-yellow-200)",
                300: "var(--colors-yellow-300)",
                400: "var(--colors-yellow-400)",
                500: "var(--colors-yellow-500)",
                600: "var(--colors-yellow-600)",
                700: "var(--colors-yellow-700)",
                800: "var(--colors-yellow-800)",
                900: "var(--colors-yellow-900)",
            },
            red: {
                50: "var(--colors-red-50)",
                100: "var(--colors-red-100)",
                200: "var(--colors-red-200)",
                300: "var(--colors-red-300)",
                400: "var(--colors-red-400)",
                500: "var(--colors-red-500)",
                600: "var(--colors-red-600)",
                700: "var(--colors-red-700)",
                800: "var(--colors-red-800)",
                900: "var(--colors-red-900)",
            },
            green: {
                50: "var(--colors-green-50)",
                100: "var(--colors-green-100)",
                200: "var(--colors-green-200)",
                300: "var(--colors-green-300)",
                400: "var(--colors-green-400)",
                500: "var(--colors-green-500)",
                600: "var(--colors-green-600)",
                700: "var(--colors-green-700)",
                800: "var(--colors-green-800)",
                900: "var(--colors-green-900)",
            },
            gray: {
                50: "var(--colors-gray-50)",
                100: "var(--colors-gray-100)",
                200: "var(--colors-gray-200)",
                300: "var(--colors-gray-300)",
                400: "var(--colors-gray-400)",
                500: "var(--colors-gray-500)",
                600: "var(--colors-gray-600)",
                700: "var(--colors-gray-700)",
                800: "var(--colors-gray-800)",
                900: "var(--colors-gray-900)",
            },
            purple: {
                50: "var(--colors-purple-50)",
                100: "var(--colors-purple-100)",
                200: "var(--colors-purple-200)",
                300: "var(--colors-purple-300)",
                400: "var(--colors-purple-400)",
                500: "var(--colors-purple-500)",
                600: "var(--colors-purple-600)",
                700: "var(--colors-purple-700)",
                800: "var(--colors-purple-800)",
                900: "var(--colors-purple-900)",
            },
            alpha: {
                '00': "var(--colors-alpha-00)",
                50: "var(--colors-alpha-50)", 
                100: "var(--colors-alpha-100)",
                200: "var(--colors-alpha-200)",
                300: "var(--colors-alpha-300)",
                400: "var(--colors-alpha-400)",
                500: "var(--colors-alpha-500)",
                600: "var(--colors-alpha-600)",
                700: "var(--colors-alpha-700)",
                800: "var(--colors-alpha-800)",
                900: "var(--colors-alpha-900)",
            },
            rose: {
                50: "var(--colors-rose-50)",
                100: "var(--colors-rose-100)",
                200: "var(--colors-rose-200)",
                300: "var(--colors-rose-300)",
                400: "var(--colors-rose-400)",
                500: "var(--colors-rose-500)",
                600: "var(--colors-rose-600)",
                700: "var(--colors-rose-700)",
                800: "var(--colors-rose-800)",
                900: "var(--colors-rose-900)",
            },
            pink: {
                50: "var(--colors-pink-50)",
                100: "var(--colors-pink-100)",
                200: "var(--colors-pink-200)",
                300: "var(--colors-pink-300)",
                400: "var(--colors-pink-400)",
                500: "var(--colors-pink-500)",
                600: "var(--colors-pink-600)",
                700: "var(--colors-pink-700)",
                800: "var(--colors-pink-800)",
                900: "var(--colors-pink-900)",
            },
            orange: {
                50: "var(--colors-orange-50)",
                100: "var(--colors-orange-100)",
                200: "var(--colors-orange-200)",
                300: "var(--colors-orange-300)",
                400: "var(--colors-orange-400)",
                500: "var(--colors-orange-500)",
                600: "var(--colors-orange-600)",
                700: "var(--colors-orange-700)",
                800: "var(--colors-orange-800)",
                900: "var(--colors-orange-900)",
            },
            metal: {
                50: "var(--colors-metal-50)",
                100: "var(--colors-metal-100)",
                200: "var(--colors-metal-200)",
                300: "var(--colors-metal-300)",
                400: "var(--colors-metal-400)",
                500: "var(--colors-metal-500)",
                600: "var(--colors-metal-600)",
                700: "var(--colors-metal-700)",
                800: "var(--colors-metal-800)",
                900: "var(--colors-metal-900)",
            },
            lime: {
                50: "var(--colors-lime-50)",
                100: "var(--colors-lime-100)",
                200: "var(--colors-lime-200)",
                300: "var(--colors-lime-300)",
                400: "var(--colors-lime-400)",
                500: "var(--colors-lime-500)",
                600: "var(--colors-lime-600)",
                700: "var(--colors-lime-700)",
                800: "var(--colors-lime-800)",
                900: "var(--colors-lime-900)",
            },
            'sky-blue': {
                50: "var(--colors-sky-blue-50)",
                100: "var(--colors-sky-blue-100)",
                200: "var(--colors-sky-blue-200)",
                300: "var(--colors-sky-blue-300)",
                400: "var(--colors-sky-blue-400)",
                500: "var(--colors-sky-blue-500)",
                600: "var(--colors-sky-blue-600)",
                700: "var(--colors-sky-blue-700)",
                800: "var(--colors-sky-blue-800)",
                900: "var(--colors-sky-blue-900)",
            },
            indigo: {
                50: "var(--colors-indigo-50)",
                100: "var(--colors-indigo-100)",
                200: "var(--colors-indigo-200)",
                300: "var(--colors-indigo-300)",
                400: "var(--colors-indigo-400)",
                500: "var(--colors-indigo-500)",
                600: "var(--colors-indigo-600)",
                700: "var(--colors-indigo-700)",
                800: "var(--colors-indigo-800)",
                900: "var(--colors-indigo-900)",
            },
            fuchsia: {
                50: "var(--colors-fuchsia-50)",
                100: "var(--colors-fuchsia-100)",
                200: "var(--colors-fuchsia-200)",
                300: "var(--colors-fuchsia-300)",
                400: "var(--colors-fuchsia-400)",
                500: "var(--colors-fuchsia-500)",
                600: "var(--colors-fuchsia-600)",
                700: "var(--colors-fuchsia-700)",
                800: "var(--colors-fuchsia-800)",
                900: "var(--colors-fuchsia-900)",
            },
            emerald: {
                50: "var(--colors-emerald-50)",
                100: "var(--colors-emerald-100)",
                200: "var(--colors-emerald-200)",
                300: "var(--colors-emerald-300)",
                400: "var(--colors-emerald-400)",
                500: "var(--colors-emerald-500)",
                600: "var(--colors-emerald-600)",
                700: "var(--colors-emerald-700)",
                800: "var(--colors-emerald-800)",
                900: "var(--colors-emerald-900)",
            },
            cyan: {
                50: "var(--colors-cyan-50)",
                100: "var(--colors-cyan-100)",
                200: "var(--colors-cyan-200)",
                300: "var(--colors-cyan-300)",
                400: "var(--colors-cyan-400)",
                500: "var(--colors-cyan-500)",
                600: "var(--colors-cyan-600)",
                700: "var(--colors-cyan-700)",
                800: "var(--colors-cyan-800)",
                900: "var(--colors-cyan-900)",
            },
            bronze: {
                50: "var(--colors-bronze-50)",
                100: "var(--colors-bronze-100)",
                200: "var(--colors-bronze-200)",
                300: "var(--colors-bronze-300)",
                400: "var(--colors-bronze-400)",
                500: "var(--colors-bronze-500)",
                600: "var(--colors-bronze-600)",
                700: "var(--colors-bronze-700)",
                800: "var(--colors-bronze-800)",
                900: "var(--colors-bronze-900)",
            },
            'blue-gray': {
                50: "var(--colors-blue-gray-50)",
                100: "var(--colors-blue-gray-100)",
                200: "var(--colors-blue-gray-200)",
                300: "var(--colors-blue-gray-300)",
                400: "var(--colors-blue-gray-400)",
                500: "var(--colors-blue-gray-500)",
                600: "var(--colors-blue-gray-600)",
                700: "var(--colors-blue-gray-700)",
                800: "var(--colors-blue-gray-800)",
                900: "var(--colors-blue-gray-900)",
            },
        },
        fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        'large-title': ['34px', {
          lineHeight: '1.5',
          letterSpacing: '-1.5px',
        }],
        'title-1': ['28px', {
          lineHeight: '1.5',
          letterSpacing: '-0.1px',
        }],
        'title-2': ['22px', {
          lineHeight: '1.5',
          letterSpacing: '-0.1px',
        }],
        'title-3': ['20px', {
          lineHeight: '1.5',
          letterSpacing: '-0.1px',
        }],
        'body': ['17px', {
          lineHeight: '1.5',
          letterSpacing: '-0.1px',
        }],
        'callout': ['16px', {
          lineHeight: '1.31',
          letterSpacing: '-0.1px',
        }],
        'footnote': ['13px', {
          lineHeight: '1.38',
          letterSpacing: '-0.1px',
        }],
        'caption-1': ['12px', {
          lineHeight: '1.33',
          letterSpacing: '-0.1px',
        }],
        'caption-2': ['11px', {
          lineHeight: '1.18',
          letterSpacing: '-0.1px',
        }],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        bold: '700',
      },
    },
  },
  plugins: []
}

