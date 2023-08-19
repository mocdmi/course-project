import MiniCssExtractPlugin from 'mini-css-extract-plugin';
export function buildLoaders(_a) {
    var isDev = _a.isDev;
    var cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: function (resPath) { return Boolean(resPath.includes('.module')); },
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]',
                    },
                },
            },
            'sass-loader',
        ],
    };
    var typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    var babelLoader = {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                    ],
                    plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
                },
            },
        ],
    };
    var svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };
    var fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };
    return [
        babelLoader,
        typescriptLoader,
        cssLoader,
        svgLoader,
        fileLoader,
    ];
}
