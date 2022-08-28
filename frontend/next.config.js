const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    CHAINLINK_FEED: process.env.CHAINLINK_FEED,
    MARKETPLACE_ADDRESS: process.env.MARKETPLACE_ADDRESS,
    NFT_COLLECTION_ADDRESS: process.env.NFT_COLLECTION_ADDRESS,
    OWNER: process.env.OWNER,
    PUBLIC_PROVIDER: process.env.PUBLIC_PROVIDER,
  },
};

module.exports = nextConfig;
