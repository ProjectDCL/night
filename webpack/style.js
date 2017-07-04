const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = function (paths) {
    return {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    include: paths,
                    use: ExtractTextPlugin.extract({
                        publicPath: '../../',
                        fallback: 'style-loader',
                        use: ['css-loader','postcss-loader','sass-loader'],
                    }),
                },
                {
                    test: /\.css$/,
                    include: paths,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: 'css-loader',
                    }),
                },
            ],
        },
        plugins: [
            new ExtractTextPlugin('./assets/css/[name].css'),
            new OptimizeCssAssetsPlugin({
                cssProcessorOptions: { discardComments: {removeAll: true }},
            }),
            new StyleLintPlugin({
                configFile: './.stylelintrc',
            }),
        ],
    };
};