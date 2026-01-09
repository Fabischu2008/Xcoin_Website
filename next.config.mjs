/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Next.js Image Optimization aktiviert
    // Automatische WebP/AVIF-Generierung, responsive images, lazy loading
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920], // Reduziert für bessere Performance
    imageSizes: [16, 32, 48, 64, 96, 128, 256], // Reduziert
    qualities: [75, 85],
    minimumCacheTTL: 31536000, // 1 Jahr Cache
    dangerouslyAllowSVG: false,
    remotePatterns: [],
    unoptimized: false,
  },
  compress: true,
  // Performance optimizations
  swcMinify: true, // SWC Minification für bessere Performance
  poweredByHeader: false, // Security + Performance
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['lucide-react', 'gsap'],
  },
}

export default nextConfig


