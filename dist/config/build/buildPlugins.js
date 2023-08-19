import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { ProgressPlugin, DefinePlugin, HotModuleReplacementPlugin } from 'webpack';
export function buildPlugins(_a) {
    var paths = _a.paths, isDev = _a.isDev;
    return [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new DefinePlugin({
            __IS_DEV__: isDev,
        }),
        isDev && new HotModuleReplacementPlugin(),
        isDev && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean);
}
