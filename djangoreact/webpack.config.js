const path = require('path');

const common = {
  entry: {
    path: path.join(__dirname, 'js')
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [],
        include: path.join(__dirname, 'js')
      }
    ]
  }

};

module.exports = common;