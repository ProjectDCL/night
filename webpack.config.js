const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const devserver = require('./webpack/devserver');
const style = require('./webpack/style');
const pug = require('./webpack/pug');
const image = require('./webpack/image');
const javascript = require('./webpack/javascript');
const font = require('./webpack/font');

const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build'),
};

const common = merge([
    {
        entry: {
            vendor : ['jquery', 'svg4everybody', 'google-maps', 'normalize.css'],
            'index' : PATHS.source + '/pages/index/index.js',
            'blog' : PATHS.source + '/pages/blog/blog.js',
            'about' : PATHS.source + '/pages/about/about.js',
            'works' : PATHS.source + '/pages/works/works.js',
        },
        output: {
            path: PATHS.build,
            filename: './assets/js/[name].js',
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index', 'common', 'vendor'],
                template: PATHS.source + '/pages/index/index.pug',
            }),
            new HtmlWebpackPlugin({
                filename: 'blog.html',
                chunks: ['blog', 'common', 'vendor'],
                template: PATHS.source + '/pages/blog/blog.pug',
            }),
            new HtmlWebpackPlugin({
                filename: 'about.html',
                chunks: ['about', 'common', 'vendor'],
                template: PATHS.source + '/pages/about/about.pug',
            }),
            new HtmlWebpackPlugin({
                filename: 'works.html',
                chunks: ['works', 'common', 'vendor'],
                template: PATHS.source + '/pages/works/works.pug',
            }),
            new CleanWebpackPlugin('build'),
            new webpack.optimize.CommonsChunkPlugin({
                names: ['common', 'vendor'],
                minChunks: 2,
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
            }),
        ],
    },
    pug(),
    style(),
    image(),
    javascript(),
    font(),
]);

module.exports = function (env) {
    if (env === 'production') {
        return merge([
            common,
        ]);
    }
    if (env === 'development') {
        return merge([
            common,
            devserver(),
        ]);
    }
};