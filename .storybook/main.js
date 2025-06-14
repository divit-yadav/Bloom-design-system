/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx", 
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/preset-create-react-app",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  },
  "staticDirs": [
    "../public"
  ],
  webpackFinal: async (config) => {
    config.output.publicPath = process.env.NODE_ENV === 'production' ? '/my-design-system/' : '/';
    return config;
  },
};
export default config;