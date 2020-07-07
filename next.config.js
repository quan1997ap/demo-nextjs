// next.config.js
const withImages = require('next-images');
const path = require('path');

// module.exports = {
//   exportPathMap: function () {
//     return {
//       '/': { page: '/' }
//     }
//   }
// }

// build
module.exports = {
  distDir: 'build',
}

// IMG src
module.exports = withImages({
  webpack(config, options) {
    return config
  }
})

// https://nextjs.org/docs/basic-features/built-in-css-support#sass-support
module.exports = {
  scssOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

// SASS + FONT
// https://medium.com/quick-code/next-js-style-with-sass-scss-fonts-54e9cef70377

const withFonts = require('nextjs-fonts');
module.exports = withFonts({
  webpack(config, options) {
    return config;
  }
});

