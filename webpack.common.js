const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    target: 'node',
    entry: {
        'index': './src/index.ts'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'scripts'),
        clean: true,
        library: {
            type: 'commonjs'
        }
    },
    externals: {
        lodash: 'lodash',
        'hexo-util': 'hexo-util',
        '@adobe/css-tools': '@adobe/css-tools',
        'hexo-pagination': 'hexo-pagination',
        css: 'css',
        nunjucks: 'nunjucks',
        systeminformation: 'systeminformation',
        vue: 'vue',
        '@vue/server-renderer': '@vue/server-renderer'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [
        new CleanWebpackPlugin(),
        /* new webpack.DefinePlugin({
            'import.meta.resolve': 'require.resolve'
        }), */
        /* new webpack.BannerPlugin({
            banner: 'Copyright (c) 2023 littlefatcat163',
            exclude: /node_modules/
        }) */
        // new webpack.BannerPlugin({ banner: '#!/usr/bin/env node', raw: true })
    ]
}
