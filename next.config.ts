import type { NextConfig } from 'next'
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'

const withVanillaExtract = createVanillaExtractPlugin({
  identifiers: ({ hash }) => `prefix_${hash}`
})

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: '**' // Allow all remote patterns
      }
    ]
  }
}

export default withVanillaExtract(nextConfig)
