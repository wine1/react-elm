const autoprefixer = require('autoprefixer')
const path = require('path')
// const px2viewport = require('postcss-px-to-viewport')
module.exports = {
  style: {
    postcss: {
      plugins: [
        // px2rem({
        //   remUnit: 7.5,
        //   exclude: /node-modules/i,
        // }),
        // px2viewport({
        //   unitToConvert: 'px',
        //   viewportWidth: 750,
        //   unitPrecision: 5,
        //   propList: ['*'],
        //   viewportUnit: 'vw',
        //   fontViewportUnit: 'vw',
        //   selectorBlackList: [],
        //   minPixelValue: 1,
        //   mediaQuery: false,
        //   replace: true,
        //   exclude: [/node-modules/i],
        //   landscape: false,
        //   landscapeUnit: 'vw',
        //   landscapeWidth: 568,
        // }),
      ],
    },
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      //移除暂时不需要的组件
      webpackConfig.plugins = webpackConfig.plugins.filter(element => {
        if (element.opts && element.opts.fileName == 'asset-manifest.json') {
          return false
        } else if (element.config && element.config.precacheManifestFilename) {
          return false
        } else {
          return true
        }
      })
      //css去除hash
      webpackConfig.plugins = webpackConfig.plugins.map(element => {
        if (
          element.options &&
          element.options.filename &&
          element.options.filename.indexOf('.css') >= 0
        ) {
          element.options = {
            filename: 'static/css/[name].css?v=[chunkhash:8]',
            chunkFilename: 'static/css/[name].chunk.css?v=[chunkhash:8]',
          }
        }
        return element
      })

      //css兼容处理
      webpackConfig.module.rules.forEach(element => {
        element.oneOf &&
          element.oneOf.length &&
          element.oneOf.forEach(x => {
            if (x.test && x.test.toString() == /\.(scss|sass)$/.toString()) {
              x.use &&
                x.use.length &&
                x.use.forEach(y => {
                  if (y.options && y.options.ident == 'postcss') {
                    y.options.plugins = [
                      autoprefixer({
                        Browserslist: [
                          'iOS >= 8',
                          'Android > 4',
                          '> 1%',
                          'last 2 versions',
                          'not ie <= 8',
                        ],
                        remove: false,
                      }),
                    ]
                  }
                })
            }
          })
      })

      return webpackConfig
    },
  },
  eslint: {
    configure: eslintConfig => {
      eslintConfig.extends = [`${process.cwd()}/esconfig.js`]
      return eslintConfig
    },
  },
}
