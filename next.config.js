/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    forceSwcTransforms: true,
  },
  transpilePackages: ["three"],
  output: "standalone",
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(gltf|bin|glb)$/,
      type: "asset/resource",
    });
    return config;
  },
};

module.exports = nextConfig;
