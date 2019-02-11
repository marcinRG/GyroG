const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SassLintPlugin = require('sass-lint-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const srcPath = './src/';
const outputPath = './build/';

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, srcPath + 'app.js'),
    output: {
        path: path.join(__dirname, outputPath),
        filename: 'js/bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{ loader: 'babel-loader' }, { loader: 'eslint-loader' }]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [{ loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' }, { loader: 'sass-loader' }]
            }
        ]
    },
    plugins: [
        new SassLintPlugin(),
        new HtmlWebpackPlugin({
            title: 'My App',
            template: path.join(__dirname, srcPath + 'index.html')
        }),
        new MiniCssExtractPlugin({
            path: path.join(__dirname, outputPath),
            filename: 'css/style.css',
        })
    ]
};
