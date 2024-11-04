import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  productionBrowserSourceMaps: true, //production环境开启sourceMap
  images: { unoptimized: true },
  reactStrictMode: true,
  swcMinify: true,
  appDir: true,
  plugins: [],
};

export default withContentlayer(nextConfig);
