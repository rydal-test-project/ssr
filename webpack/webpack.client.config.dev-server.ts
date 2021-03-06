import HtmlWebpackPlugin from 'html-webpack-plugin';
import merge from 'webpack-merge';
import express from 'express';
import {Configuration as DevServerConfiguration} from "webpack-dev-server";
import {Configuration as WebpackConfiguration } from "webpack";
import path from "path";

import common from './webpack.client.config.common';
import PATH from "./path";


const config: WebpackConfiguration & {
  devServer: DevServerConfiguration
} = {
  output: {
    publicPath: '/',
  },
  devServer: {
    onBeforeSetupMiddleware(app) {
      app.app?.use('/assets', express.static('public/assets'))
    },
    port: 3000,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(PATH.root, `public/index.html`)
    }),
  ]
};

export default merge(common, config);
