/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")

module.exports = withPWA({
  pwa: {
    dest: "public",

    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
    fallbacks: {
      image: "/static/images/fallback.png",
    },
  },
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 60,
    domains: [
      "*",
      "avatars.githubusercontent.com",
      "localhost",
      "127.0.0.1",
      "links.papareact.com",
      "images.wallpapersden.com",
    ],
  },
})
