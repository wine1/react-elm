const autoprefixer = require('autoprefixer')
let VConsolePlugin = require('vconsole-webpack-plugin')
module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
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

      webpackConfig.plugins.push(
        new VConsolePlugin({
          enable: true,
        })
      )

      return webpackConfig
    },
  },
  eslint: {
    configure: eslintConfig => {
      eslintConfig.extends = [`${process.cwd()}/esconfig.js`]
      return eslintConfig
    },
  },
  babel: {
    presets: [],
    plugins: [['import', { libraryName: 'antd-mobile', style: 'css' }]],
    loaderOptions: {
      /* Any babel-loader configuration options: https://github.com/babel/babel-loader. */
    },
    loaderOptions: (babelLoaderOptions, { env, paths }) => {
      return babelLoaderOptions
    },
  },
  style: {
    modules: {
      localIdentName: '',
    },
    css: {
      loaderOptions: {
        /* Any css-loader configuration options: https://github.com/webpack-contrib/css-loader. */
      },
      loaderOptions: (cssLoaderOptions, { env, paths }) => {
        return cssLoaderOptions
      },
    },
    sass: {
      loaderOptions: {
        /* Any sass-loader configuration options: https://github.com/webpack-contrib/sass-loader. */
      },
      loaderOptions: (sassLoaderOptions, { env, paths }) => {
        return sassLoaderOptions
      },
    },
    postcss: {
      mode: 'extends' /* (default value) */ || 'file',
      env: {
        autoprefixer: {
          browsers: 'last 1 version',
        },
        pxtorem: {
          rootValue: 16,
          unitPrecision: 5,
          propList: ['font', 'font-size', 'line-height', 'letter-spacing'],
          selectorBlackList: [],
          replace: true,
          mediaQuery: false,
          minPixelValue: 0,
          exclude: /node_modules/i,
        },
        stage: 3,
        features: {
          /* Any CSS features: https://preset-env.cssdb.org/features. */
        },
      },
      loaderOptions: {
        /* Any postcss-loader configuration options: https://github.com/postcss/postcss-loader. */
      },
      loaderOptions: (postcssLoaderOptions, { env, paths }) => {
        return postcssLoaderOptions
      },
    },
  },
}
