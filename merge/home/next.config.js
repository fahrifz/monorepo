/** @type {import('next').NextConfig} */
const { ABOUT_URL } = process.env;

const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/about",
        destination: `${ABOUT_URL}/about`,
      },
      {
        source: "/about/:path*",
        destination: `${ABOUT_URL}/about/:path*`,
      },
    ];
  },
};
