import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize fonts and CSS for production
  optimizeFonts: true,
  
  // Ensure consistent behavior between dev and production
  reactStrictMode: true,
  
  // Ensure static generation where possible
  output: 'standalone',
};

export default nextConfig;
