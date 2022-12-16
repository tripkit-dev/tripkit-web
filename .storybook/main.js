const path = require('path')

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  staticDirs: ['../public'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  webpackFinal: async (config) => {
    config.resolve.modules = [
      path.resolve(__dirname, '..'),
      'node_modules',
      'styles'
    ]

    config.resolve.alias = {
      ...config.resolve.alias,
      '@shared': path.resolve(__dirname, '../src/shared'),
      '@search': path.resolve(__dirname, '../src/search')
    }

    return config
  }
}
