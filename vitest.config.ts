/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import path from 'path'

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/features/common/utils/testSetup.ts'],
    include: ['src/**/*.spec.{ts,tsx}'],
    exclude: [
      'node_modules',
      '.storybook/**/*',
      '**/*.stories.{ts,tsx}',
      'src/features/common/utils/testSetup.ts'
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/features/common/utils/testSetup.ts',
        '**/*.d.ts',
        '**/*.config.{js,ts}',
        '**/*.stories.{js,jsx,ts,tsx}'
      ]
    }
  },
  resolve: {
    alias: {
      '@/utils': path.resolve(__dirname, './src/features/common/utils'),
      '@/common': path.resolve(__dirname, './src/features/common'),
      '@': path.resolve(__dirname, './src')
    }
  }
})
