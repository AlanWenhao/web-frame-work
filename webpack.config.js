const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src/public/js/entry.js'),
    output: {
        path: path.join(__dirname, 'dist/'),
        filename: 'public/js/main.[hash:5].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    // Set options of .babelrc file
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.scss$/,
                use: ExtractTextWebpackPlugin.extract({
                    use: [{
                        loader: 'css-loader', // translates CSS into CommonJS modules
                        options: {
                            sourceMap: true,
                        },
                    }, {
                        loader: 'postcss-loader', // Run post css actions
                        options: {
                            sourceMap: true,
                        },
                    }, {
                        loader: 'sass-loader', // compiles SASS to CSS
                        options: {
                            sourceMap: true,
                        },
                    }],
                    fallback: 'style-loader',
                }),
            },
        ],
    },
    plugins: [
        new ExtractTextWebpackPlugin({
            filename: 'public/css/[name].[hash:5].css',
            disable: false,
            allChunks: true,
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default'],
            // In case you imported plugins individually, you must also require them here:
            Util: 'exports-loader?Util!bootstrap/js/dist/util',
            Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
        }),
        new HtmlWebpackPlugin({
            title: 'bootstrap',
            filename: 'views/layout.html',
            template: './src/views/layout.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'views/index.html',
            template: './src/views/index.html',
            inject: false,
        }),
    ],
    // It's also important so set is in sass-loader and so on
    devtool: 'source-map',
};
