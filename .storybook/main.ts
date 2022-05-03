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
      plugins: [postcssLit()], // Results in error in Storybook dev server in vite@2.9.7
      // plugins: [postcssLit({include: ['**/*.scss', '**/*.scss\?*', '**/*.css', '**/*.css\?*']})], // Previous solution to https://github.com/umbopepato/rollup-plugin-postcss-lit/issues/49#issue-1214506816, now results in error in Storybook dev server in vite@2.9.7
      // plugins: [postcssLit({include: ['**/*.scss', '**/*.scss\?*']})], // Works to import SASS in Lit components and works with vite@2.9.7 but excludes ability to process .css files
    });
  },
};