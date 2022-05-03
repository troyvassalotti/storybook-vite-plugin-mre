const { mergeConfig } = require('vite');
const postcssLit = require('rollup-plugin-postcss-lit');

module.exports = {
  stories: ['../src/stories/**/*.stories.mdx', '../src/stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: '@storybook/builder-vite',
  },
  framework: '@storybook/web-components',
  features: { buildStoriesJson: true },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      plugins: [postcssLit()], // Results in error in Storybook dev server
      // plugins: [postcssLit({
      //    include: ['**/*.scss', '**/*.scss\?*', '**/*.css', '**/*.css\?*'] // Results in error in Storybook dev server
      //  })],
      // plugins: [postcssLit({
      //   include: ['**/*.scss', '**/*.scss\?*'] // Works, but excludes .css files
      // })],
    });
  },
};