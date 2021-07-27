const autoprefixer = require('autoprefixer');
let VConsolePlugin = require('vconsole-webpack-plugin')
module.exports ={
    webpack: {
        configure: (webpackConfig, { env, paths }) => { 
            //css兼容处理
            webpackConfig.module.rules.forEach((element) => {
                element.oneOf && element.oneOf.length && element.oneOf.forEach(x => {
                    if (x.test && x.test.toString() == /\.(scss|sass)$/.toString()) {
                        x.use && x.use.length && x.use.forEach(y => {
                            if (y.options && y.options.ident == 'postcss') {
                                y.options.plugins = [
                                    autoprefixer({
                                        Browserslist: [
                                            "iOS >= 8",
                                            "Android > 4",
                                            "> 1%",
                                            "last 2 versions",
                                            "not ie <= 8"
                                        ],
                                        remove: false
                                    })
                                ]
                            }
                        });
                    }
                })
            });

            webpackConfig.plugins.push(
                new VConsolePlugin({
                    enable: true
                })
            )
            return webpackConfig;
        }
    },
    eslint: {
        configure: (eslintConfig) => {

            eslintConfig.extends = [`${process.cwd()}/esconfig.js`]
            return eslintConfig;
        }
    }
}

