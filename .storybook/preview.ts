import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#F5F4F7'
        },
        {
          name: 'dark',
          value: '#1C181E'
        }
      ]
    }
  },
};

export default preview;
