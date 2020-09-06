const withImages = require('next-images');

module.exports = {
  target: 'serverless',
  ...withImages({
    webpack(config, options) {
      return config;
    },
  }),
};
