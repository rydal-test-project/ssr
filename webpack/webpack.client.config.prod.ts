import merge from 'webpack-merge'
import {Configuration} from "webpack";

import {getCommonConfig} from "./webpack.client.config.common";
import {defaultRootPath, getPath, TWebpackPaths} from "./path";


const LoadablePlugin = require('@loadable/webpack-plugin')
const WebpackManifestPlugin = require('webpack-manifest-plugin')

export function getClientProdConfig(paths: TWebpackPaths): Configuration {
  return merge(getCommonConfig(paths), {
      plugins: [
        new LoadablePlugin(),
        new WebpackManifestPlugin(),
      ]
    }
  )}

export default getClientProdConfig(getPath(defaultRootPath));

