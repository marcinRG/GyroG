const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SassLintPlugin = require('sass-lint-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let pathsToClean = [
    'build'
];
let cleanOptions = {
    root: path.join(__dirname, ''),
    verbose: true,
    dry: false
};

const srcPath = './src/';
const outputPath = './build/';

module.exports = {
    mode: 'development',
    entry: {
        app: path.join(__dirname, srcPath + 'app.js')
    },
    output: {
        path: path.join(__dirname, outputPath),
        filename: '[name].bundle.js'
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
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html-loader'

            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(pathsToClean, cleanOptions),
        new SassLintPlugin(),
        new HtmlWebpackPlugin({
            title: 'My App',
            template: path.join(__dirname, srcPath + 'index.html')
        }),
        new MiniCssExtractPlugin({
            path: path.join(__dirname, outputPath),
            filename: 'style.css'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, outputPath),
        compress: true,
        port: 4580
    }
};
