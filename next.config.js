// const sitemap = require('nextjs-sitemap-generator');

// sitemap({
//   baseUrl: 'https://kellysprague.ca',
//   pagesDirectory: `${__dirname}/pages`,
//   targetDirectory: 'static/',
// });

const withImages = require('next-images');
module.exports = withImages({
  webpack(config, options) {
    return config;
  },
});
