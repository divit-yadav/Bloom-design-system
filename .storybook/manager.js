// .storybook/manager.js

import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const homepage = 'https://divit-yadav.github.io/Bloom-design-system'; // Your GitHub Pages homepage

const myTheme = create({
  base: 'light',
  appBg: '#f0f3f4', // Sets the background color of the UI
  barBg: '#f0f3f4', // Sets the sidebar and top bar color
  brandTitle: 'Bloom Design System',
  brandUrl: homepage,
  brandImage: `${homepage}/logo.svg`, // Absolute path for GitHub Pages
});

addons.setConfig({
  theme: myTheme,
});
