import commonConfig, {Configuration} from './webpack.config.common'
// @ts-ignore
import nodeExternals from 'webpack-node-externals';
// @ts-ignore
import path from "path";
import merge from 'webpack-merge';
import PATH from "./path";
const WebpackShellPlugin = require('webpack-shell-plugin');

const config: Configuration = {
    name: 'Server',
    target: 'node',
    devtool: 'source-map',
    entry: PATH.entryServer,
    output: {
        filename: 'index.js',
        path: PATH.buildServer,
    },
    node: {
        __dirname: false,
        __filename: false,
    },
    externals: [
        nodeExternals(),
        '@loadable/component'
    ],
    plugins: [
        new WebpackShellPlugin({
            onBuildEnd: ['npm run dev:run:server']
        })
    ]
};

export default merge(commonConfig, config);