const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    enforce: 'pre',
                    loader: 'eslint-loader',
                    options: {
                        fix: true,
                    },
                },
            ],
            loaders: [
                {
                    test: /.js$/,
                    loader: 'imports?define=>false',
                },
            ],
        },
        plugins: [
            new UglifyJSPlugin(),
        ],
    };
};