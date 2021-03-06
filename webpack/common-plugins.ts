import path from "path";
import webpack, {ProgressPlugin} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import {IS_DEV} from "./constants";

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

export default [
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].chunk.css'
  }),
  new ModuleNotFoundPlugin(path.resolve(__dirname, '.')),
  new CleanWebpackPlugin(),
  new ProgressPlugin({}),
  new FriendlyErrorsPlugin({
    clearConsole: true
  }),
  new webpack.DefinePlugin({
    'process.env': {
      DEBUG: JSON.stringify(IS_DEV),
      BROWSER: JSON.stringify(true)
    },
    isProduction: JSON.stringify(!IS_DEV),
  }),
  new ForkTsCheckerWebpackPlugin({
    async: IS_DEV,
  }),

]
