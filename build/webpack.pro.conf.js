/* eslint-disable */
const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

process.env.NODE_ENV = 'production';

const baseWebpackConfig = require('./webpack.base.conf');

const devConf = merge(baseWebpackConfig, {
    mode: 'production',
    optimization: { // 最小化生产 https://webpack.docschina.org/plugins/mini-css-extract-plugin/#install
        minimizer: [
            new TerserJSPlugin(), // 最小化js
            new OptimizeCSSAssetsPlugin({}) // 最小化css
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css',
            chunkFilename: 'css/[id].[hash].css'
        }),
        new webpack.DefinePlugin({
            'process.env': require('../config/prod.env')
        })
    ]
});

module.exports = devConf;
