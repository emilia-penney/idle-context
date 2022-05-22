module.exports = {
  addons: ['@storybook/addon-essentials'],
  babel: async (options: any) => ({
    // Update your babel configuration here
    ...options,
  }),
  framework: '@storybook/react',
  stories: ['../src/**/*.stories.@(js|mdx|tsx)'],
  webpackFinal: async (config: any, { configType }: any) => {
    // Make whatever fine-grained changes you need
    // Return the altered config
    return config;
  },
};