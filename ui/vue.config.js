module.exports = {
  publicPath: process.env.NODE_ENV == 'production' ? 'ui' : '',
  devServer: {
    https: false,
  },
};