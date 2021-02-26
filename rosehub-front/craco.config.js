const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);
const CracoLessPlugin = require('craco-less');



module.exports = {
  webpack: {
    alias: {
      "@": resolve("src")
    },
  },
  babel: {
    plugins: [
      [
        "import",
        {
          "libraryName": "antd",
          "libraryDirectory": "es",
          "style": "css"
        }
      ]
    ]
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    }
  ],
}