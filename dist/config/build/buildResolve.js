export function buildResolve(_a) {
    var paths = _a.paths;
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {},
    };
}
