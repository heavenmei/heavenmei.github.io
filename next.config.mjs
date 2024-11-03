import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  reactStrictMode: true,
  swcMinify: true,
  appDir: true,
  plugins: [],
};

export default withContentlayer(nextConfig);
