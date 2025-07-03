/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx", 
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-docs"
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  },
  "staticDirs": [
    "../public"
  ],
  features: {
    reactRefresh: false,
  },
  // Set the base path for GitHub Pages deployment
  base: '/Bloom-design-system/',
  // webpackFinal: async (config) => {
  //   // Ensure the publicPath is set correctly for GitHub Pages deployment
  //   // This prepends '/Bloom-design-system/' to all asset URLs in production builds.
  //   config.output.publicPath = process.env.NODE_ENV === 'production' ? '/Bloom-design-system/' : '/';

  //   // Find and modify the HtmlWebpackPlugin to adjust CSP
  //   const HtmlWebpackPlugin = config.plugins.find(
  //     (p) => p.constructor.name === 'HtmlWebpackPlugin'
  //   );

  //   if (HtmlWebpackPlugin) {
  //     HtmlWebpackPlugin.options.meta = {
  //       ...HtmlWebpackPlugin.options.meta,
  //       'Content-Security-Policy': {
  //         'http-equiv': 'Content-Security-Policy',
  //         'content': "default-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; worker-src 'self' blob:;"
  //       }
  //     };
  //   }
    
  //   return config;
  // },
};
export default config;