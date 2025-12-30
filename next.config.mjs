/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Next.js Image Optimization aktiviert
    // Automatische WebP/AVIF-Generierung, responsive images, lazy loading
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 85],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: false,
    remotePatterns: [],
    unoptimized: false,
  },
  compress: true,
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

export default nextConfig


