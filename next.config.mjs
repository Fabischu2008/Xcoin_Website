/** @type {import('next').NextConfig} */
const nextConfig = {
  // TypeScript: Enable strict checking (remove ignoreBuildErrors)
  // Fix any TypeScript errors before building
  typescript: {
    ignoreBuildErrors: false, // Changed: Now enforcing TypeScript errors
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
  
  // Compression
  compress: true,
  
  // Performance optimizations
  swcMinify: true, // SWC Minification für bessere Performance
  poweredByHeader: false, // Security + Performance
  reactStrictMode: true,
  
  // Production optimizations
  productionBrowserSourceMaps: false, // Disable source maps in production for smaller bundle
  optimizeFonts: true, // Automatically optimize fonts
  
  // Experimental features
  experimental: {
    optimizePackageImports: ['lucide-react', 'gsap'],
  },
  
  // Output configuration (for Docker/server deployment)
  // output: 'standalone', // Uncomment if deploying to Docker/server
  
  // Output file tracing includes
  outputFileTracingIncludes: {
    '/': ['./public/**/*'],
  },
}

export default nextConfig


