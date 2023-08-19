export function buildDevServer(_a) {
    var port = _a.port;
    return {
        port: port,
        open: true,
        historyApiFallback: true,
    };
}
