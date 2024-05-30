/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  // Toggle dark-mode based on .dark class or data-mode="dark"
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: "#2d4dff",
        muted: "#64748B",
        gray: {
          "inversed": "#ffffffff",
          "disabled": "#b8bfcaff",
          "quaternary": "#8390a2ff",
          "tertiary": "#475263ff",
          "secondary": "#2a313aff",
          "primary": "#111315ff",
        },
        brand: {
          "highlight-quaternary": "#ebf0ffff",
          "highlight-tertiary": "#a1b9ffff",
          "highlight-secondary": "#7698ffff",
          "highlight-primary": "#5c85ffff",
          "primary": "#2d4dffff",
          "base": "#2e5de8ff",
          "shadow-tertiary": "#2448b5ff",
          "shadow-secondary": "#1c388cff",
          "shadow-primary": "#152b6bff",
        },
        accent: {
          "accent-highlight-tertiary": "#fffaebff",
          "accent-highlight-secondary": "#ffe8a1ff",
          "accent-highlight-primary": "#ffdd76ff",
          "accent-tertiary": "#ffd65cff",
          "accent-secondary": "#ffcc33ff",
          "accent-primary": "#e8ba2eff",
        },
        alerts: {
          "error-highlight-secondary": "#fbeaeaff",
          "error-highlight-primary": "#eb9f9fff",
          "error-tertiary": "#e27474ff",
          "error-secondary": "#dc5959ff",
          "error-primary": "#d32f2fff",
          "warning-highlight-secondary": "#fff5e9ff",
          "warning-highlight-primary": "#ffd098ff",
          "warning-tertiary": "#ffbb69ff",
          "warning-secondary": "#ffad4cff",
          "warning-primary": "#ff991fff",
          "success-highlight-secondary": "#e6f6eeff",
          "success-highlight-primary": "#8bd3afff",
          "success-tertiary": "#55bf8aff",
          "success-secondary": "#35b373ff",
          "success-primary": "#02a050ff",
        },
      },
      fontSize: {
        'large-title': ['34px', {
          lineHeight: '41px',
        }],
        'title-1': ['28px', {
          lineHeight: '34px',
        }],
        'title-2': ['22px', {
          lineHeight: '28px',
        }],
        'title-3': ['20px', {
          lineHeight: '25px',
        }],
        'headline': ['17px', {
          lineHeight: '22px',
        }],
        'body': ['17px', {
          lineHeight: '22px',
        }],
        'callout': ['16px', {
          lineHeight: '21px',
        }],
        'footnote': ['13px', {
          lineHeight: '18px',
        }],
        'caption-1': ['12px', {
          lineHeight: '16px',
        }],
        'caption-2': ['11px', {
          lineHeight: '13px',
        }],
      },
    },
  },
  plugins: [
    ''
  ],
}

