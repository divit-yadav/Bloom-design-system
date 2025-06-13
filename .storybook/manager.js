import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.dark, // ⬅️ Inherit all dark mode styles
    brandTitle: 'Bloom Design System',
    brandUrl: 'https://divit-yadav.github.io/Bloom-design-system',
    brandImage: '/logo.svg', // Place this in your /public folder
  },
});
