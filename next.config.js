const withImages = require('next-images');

module.exports = {
  target: 'serverless',
  ...withImages({
    webpack(config, options) {
      return config;
    },
  }),
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }

    return config;
  },
};
