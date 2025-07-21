import { withPayload } from '@payloadcms/next/withPayload'

import redirects from './redirects.js'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Add Supabase storage endpoint support for images
      ...(process.env.S3_ENDPOINT
        ? [
            {
              hostname: new URL(process.env.S3_ENDPOINT).hostname,
              protocol: new URL(process.env.S3_ENDPOINT).protocol.replace(':', ''),
            },
          ]
        : []),
      // Allow localhost for development
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
      },
    ],
  },
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
  reactStrictMode: true,
  redirects,
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
