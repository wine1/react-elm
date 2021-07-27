
let devConfig = require('./scripts/craco.dev');
let prodConfig = require('./scripts/craco.prod');

let config;
if (process && process.env && process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase() === "development") {
    config = devConfig;
}
else {
    process.env.GENERATE_SOURCEMAP = false
    config = prodConfig;
}

module.exports = config