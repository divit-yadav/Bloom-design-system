// .storybook/manager.js

import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const myTheme = create({
  base: 'light',
  appBg: '#f0f3f4', // Sets the background color of the UI
  barBg: '#f0f3f4', // Sets the sidebar and top bar color
  brandTitle: 'Bloom Design System',
  brandUrl: 'https://divit-yadav.github.io/my-design-system',
  brandImage: 'logo.svg', // Uncomment and set if you have a logo
});

addons.setConfig({
  theme: myTheme,
});
