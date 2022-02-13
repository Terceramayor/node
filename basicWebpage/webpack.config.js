const path = require('path');

module.exports = {
  entry: ['./index.js'],
  output: {
    filename: 'index.dist.js',
    path: path.resolve(__dirname, 'dist')
  },
};