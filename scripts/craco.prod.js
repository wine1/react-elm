const autoprefixer = require('autoprefixer');
const path=require('path')
module.exports ={
    webpack: {
        configure: (webpackConfig, { env, paths }) => {

            //改变输出
            paths.appBuild = 'emish5recommend',
            webpackConfig.output = { ...webpackConfig.output, 
                // ...{filename: 'static/js/[name].js?v=[chunkhash:8]', 
                // chunkFilename: 'static/js/[name].chunk.js?v=[chunkhash:8]'},
                path: path.resolve(__dirname, '../emish5recommend'),
                // publicPath:'./' 
            }

            //移除暂时不需要的组件
            webpackConfig.plugins = webpackConfig.plugins.filter((element) => {
                if (element.opts && element.opts.fileName == 'asset-manifest.json') {
                    return false
                }
                else if (element.config && element.config.precacheManifestFilename) {
                    return false
                }
                else {
                    return true
                }
            });
            //css去除hash
            webpackConfig.plugins = webpackConfig.plugins.map(element => {
                if (element.options && element.options.filename && element.options.filename.indexOf('.css') >= 0) {
                    element.options = {
                        filename: 'static/css/[name].css?v=[chunkhash:8]',
                        chunkFilename: 'static/css/[name].chunk.css?v=[chunkhash:8]',
                    }
                }
                return element
            });

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
