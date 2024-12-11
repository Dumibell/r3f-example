/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    forceSwcTransforms: true,
  },
  transpilePackages: ["three"],
  output: "standalone",
};

module.exports = nextConfig;
