/** @type {import('next').NextConfig} */
const nextConfig = {
  ignoreDuringBuilds: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  env: {

    VERCEL: 'https://localhost:3000',
    NEXTAUTH_SECRET: 'Ey7nTKnggBc0bRN8WUjyShw2qzOZ6KW4fUyqcKBePxY=',
  },
};

const withNextIntl = require("next-intl/plugin")(
  // This is the default (also the `src` folder is supported out of the box)
  "./i18n.js"
);

module.exports = withNextIntl(nextConfig);
