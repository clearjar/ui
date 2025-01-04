import type { Preview } from "@storybook/react";
import "../src/tailwind.css";
import { withThemeByClassName } from '@storybook/addon-themes';




const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
    },
  },
};

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light bg-white',
      dark: 'dark bg-black',
    },
    defaultTheme: 'dark',
  }),
];

export default preview;
