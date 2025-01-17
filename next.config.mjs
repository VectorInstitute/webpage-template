/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASE_PATH : '',
  images: {
      unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASE_PATH : '',
  // Keep your existing configurations
  async rewrites() {
      return [
          {
              source: '/api/:path*',
              destination: `http://${process.env.NEXT_PUBLIC_BACKEND_HOST || 'localhost'}:${process.env.NEXT_PUBLIC_BACKEND_PORT || '8000'}/:path*`,
          },
      ]
  },
  serverRuntimeConfig: {
      backendHost: process.env.NEXT_PUBLIC_BACKEND_HOST || 'localhost',
      backendPort: process.env.NEXT_PUBLIC_BACKEND_PORT || '8000',
  },
  publicRuntimeConfig: {
      backendHost: process.env.NEXT_PUBLIC_BACKEND_HOST || 'localhost',
      backendPort: process.env.NEXT_PUBLIC_BACKEND_PORT || '8000',
  },
}

// Handle rewrites differently for static export
if (process.env.NODE_ENV === 'production') {
  delete nextConfig.rewrites;
}

export default nextConfig
