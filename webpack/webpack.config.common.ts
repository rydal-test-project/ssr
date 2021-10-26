import * as path from 'path';
import {Configuration as WebpackConfiguration, ProgressPlugin} from 'webpack';
import {Configuration as WebpackDevServerConfiguration} from 'webpack-dev-server';
// @ts-ignore
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import PATH from "./path";

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolve = require('resolve');
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const typescriptFormatter = require('react-dev-utils/typescriptFormatter');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

export interface Configuration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration;
}


const isDevelopment = process.env.NODE_ENV === 'development';

const config: Configuration = {
    target: 'web',
    entry: PATH.entryClient,

    mode: !isDevelopment ? 'production' : 'development',
    devtool: !isDevelopment ? 'source-map' : 'eval-source-map',

    output: {
        path: PATH.buildClient,
        filename: 'js/[name].[hash].js',
        publicPath: ''
    },
    resolve: {
        alias: {
        },
        extensions: ['.ts', '.tsx', '.js', '.json', '.scss', '.png', '.jpg', '.gif', '.jpeg']
    },
    module: {
        rules: [
            {
                test: /\.(jsx|tsx|js|ts)$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ],
                exclude: isDevelopment ? /node_modules/ : []
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    ...(isDevelopment ? [
                        {
                            loader: require.resolve('style-loader')
                        }
                    ] : []),
                    ...(!isDevelopment ? [
                        {
                            loader: MiniCssExtractPlugin.loader
                        }
                    ] : []),
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {config: {path: path.join(PATH.root, 'postcss.config.js')}, sourceMap: !isDevelopment}
                    },
                    {
                        loader: require.resolve('resolve-url-loader'),
                        options: {
                            sourceMap: !isDevelopment,
                            root: path.resolve(PATH.src),
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: !isDevelopment
                        }
                    }
                ],
                include: /\.module\.(scss|css)$/
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    ...(isDevelopment ? [
                        {
                            loader: require.resolve('style-loader')
                        }
                    ] : []),
                    ...(!isDevelopment ? [
                        {
                            loader: MiniCssExtractPlugin.loader
                        }
                    ] : []),
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {config: {path: path.join(PATH.root, 'postcss.config.js')}, sourceMap: !isDevelopment}
                    },
                    {
                        loader: require.resolve('resolve-url-loader'),
                        options: {
                            sourceMap: !isDevelopment,
                            root: PATH.src,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: !isDevelopment
                        }
                    }
                ],
                exclude: /\.module\.(scss|css)$/
            },
            {
                test: /\.(png|jpg|gif|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets/images'
                        }
                    }
                ]
            },
            {
                test: /.(ttf|otf|eot|woff(2)?)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-sprite-loader',
                        options: {
                            symbolId: '[name]'
                        }
                    }
                ],
                exclude: [
                    path.resolve(PATH.src, `assets/images`)
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: (file: string) => {
                                let dirNameInsideAssets = path.relative(path.join(PATH.src, 'assets'), path.dirname(file));
                                return `${dirNameInsideAssets}/[name].[ext]`;
                            }
                        }
                    }
                ],
                include: [
                    path.resolve(PATH.src, `assets/images`)
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            ...(!isDevelopment ? [
                new UglifyJsPlugin()
            ]: [])
        ],
    },
    plugins: [
        new LoadablePlugin({
            filename: 'loadable-stats.json',
            writeToDisk: true,
        }),
        new CopyPlugin({
            patterns: [
                {from: path.resolve(PATH.src, `static`), to: 'assets', noErrorOnMissing: true}
            ]
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(PATH.root, `public/index.html`)
        }),
        new ModuleNotFoundPlugin(path.resolve(__dirname, '.')),
        ...(!isDevelopment ? [
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].chunk.css',
            })
        ]: []),
        ...(isDevelopment ? [
            new WatchMissingNodeModulesPlugin(path.resolve ('node_modules')),
            new webpack.HotModuleReplacementPlugin()
        ]: []),
        new webpack.DefinePlugin({
        }),
        new ForkTsCheckerWebpackPlugin({
            typescript: resolve.sync('typescript', {
                basedir: path.resolve (PATH.root, 'node_modules'),
            }),
            async: isDevelopment,
            checkSyntacticErrors: true,
            tsconfig: path.resolve (PATH.root, 'tsconfig.json'),
            silent: true,
            // The formatter is invoked directly in WebpackDevServerUtils during development
            formatter: !isDevelopment ? typescriptFormatter : undefined,
        }),
        new ProgressPlugin(),
        new CleanWebpackPlugin(),
        new ForkTsCheckerWebpackPlugin(),
        new FriendlyErrorsPlugin({
            clearConsole: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
            isProduction: JSON.stringify(!isDevelopment),
        }),
    ]
}

export default config;