/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  // gh-pages serves the project under /diamond-landing/ — set BASE_PATH for that
  // build. Vercel/plain builds leave it empty.
  basePath: process.env.BASE_PATH || "",
};

module.exports = nextConfig;
