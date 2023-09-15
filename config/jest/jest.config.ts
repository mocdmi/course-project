import path from 'path';

export default {
    clearMocks: true,
    coveragePathIgnorePatterns: [
        '/node_modules/',
    ],
    moduleDirectories: [
        'node_modules',
    ],
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    modulePaths: [
        '<rootDir>src',
    ],
    rootDir: '../../',
    setupFilesAfterEnv: [
        '<rootDir>config/jest/setupTest.ts',
    ],
    testEnvironment: 'jsdom',
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],
    moduleNameMapper: {
        '\\.(s?css)$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    },
    globals: {
        __IS_DEV__: true,
    },
};
