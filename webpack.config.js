const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const WebpackObfuscator = require('webpack-obfuscator')

module.exports = merge(common, {
    mode: 'production',
    // mode: 'development',
    plugins: [
        // new WebpackObfuscator(
        //     {
        //         trasnformObjectKeys: true,
        //         rotateStringArray: true,
        //         roatetStringArrayEnable: true,
        //     },
        //     ['excluded_bundle_name.js']
        // ),
    ]
});