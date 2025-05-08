import type { StorybookConfig } from '@storybook/experimental-nextjs-vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import path from 'path'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/experimental-addon-test'
  ],
  framework: {
    name: '@storybook/experimental-nextjs-vite',
    options: {}
  },
  staticDirs: ['../public'],
  docs: {
    autodocs: true
  },
  viteFinal(config) {
    config.resolve = {
      alias: {
        '@/utils': path.resolve(__dirname, '../src/features/common/utils'),
        '@/common': path.resolve(__dirname, '../src/features/common'),
        '@': path.resolve(__dirname, '../src')
      }
    }
    config.plugins?.push(vanillaExtractPlugin())
    return config
  }
}
export default config
