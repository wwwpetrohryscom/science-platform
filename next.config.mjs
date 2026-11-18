/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Every page is prerendered, so the site ships as plain files in `out/`,
  // served by Cloudflare Workers static assets. Response headers for
  // sitemap.xml / robots.txt live in public/_headers; locale detection and
  // the form endpoints live in cloudflare/worker.ts.
  output: "export",
  experimental: {
    typedRoutes: false,
  },
  images: {
    // Static export has no image optimiser; images are served as committed.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.science-eco-platform.org" },
    ],
  },
};

export default nextConfig;
