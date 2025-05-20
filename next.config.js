/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    CHATBOT_ID: process.env.CHATBOT_ID,
    NEXT_PUBLIC_CHATBOT_NAME: process.env.NEXT_PUBLIC_CHATBOT_NAME
  }
};

module.exports = nextConfig;