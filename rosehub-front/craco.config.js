const path = require('path');

const resolve = dir => path.resolve(__dirname, dir);


module.exports = {
  webpack: {
    alias: {
      "@": resolve("src")
    },
    module: {
      rules: [
        {
          test: /\.js|jsx$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015','react'],
            plugins: [
              ["import",{ libraryName: "antd",style: "css"}]
            ]
          }
        },
      ]
    }
  }
}