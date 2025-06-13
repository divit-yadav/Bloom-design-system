// .storybook/manager.js

import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.dark, // ⬅️ Inherit dark theme
    brandTitle: 'Bloom Design System',
    brandUrl: 'https://divit-yadav.github.io/Bloom-design-system',
    brandImage: '/logo.svg', // Make sure this exists in your public/ folder
  },
});
