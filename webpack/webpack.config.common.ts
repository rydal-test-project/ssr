import * as path from 'path';
import {Configuration as WebpackConfiguration, ProgressPlugin} from 'webpack';
import {Configuration as WebpackDevServerConfiguration} from 'webpack-dev-server';
// @ts-ignore
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import PATH from "./path";
import cssRule from "./rules/css";
import cssModulesRule from "./rules/cssModules";
import jsRule from "./rules/js";
import fontsRule from "./rules/fonts";
import {IS_DEV} from "./constants";
import resolve from "./resolve";
import commonPlugins from "./common-plugins";

const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


export interface Configuration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration;
}


console.log('MODE IS IS_DEV = ', IS_DEV)

const config: Configuration = {
    target: 'web',
    entry: PATH.entryClient,

    mode: !IS_DEV ? 'production' : 'development',
    devtool: !IS_DEV ? 'source-map' : 'eval-source-map',

    output: {
        path: PATH.buildClient,
        filename: 'js/[name].[hash].js',
    },
    resolve: resolve,
    module: {
        rules: [
            jsRule,
            cssRule,
            cssModulesRule,
            fontsRule
        ]
    },
    optimization: {
        minimizer: [
            ...(!IS_DEV ? [
                new UglifyJsPlugin()
            ]: [])
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {from: path.resolve(PATH.client, 'static'), to: IS_DEV ? 'assets' : path.resolve(PATH.root, 'public/assets')}
            ]
        }),
        ...(!IS_DEV ? [
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].chunk.css',
            })
        ]: []),
        ...(IS_DEV ? [
            new WatchMissingNodeModulesPlugin(path.resolve ('node_modules')),
            new webpack.HotModuleReplacementPlugin()
        ]: []),
      ...commonPlugins
    ]
}

export default config;
