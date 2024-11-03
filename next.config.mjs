/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable static optimization for error pages
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  experimental: {
    missingSuspenseWithCSRBailout: false,
  }
};

export default nextConfig;
