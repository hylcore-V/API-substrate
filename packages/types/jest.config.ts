// jest.config.ts
import type { Config } from '@jest/types';
//import { defaults } from 'jest-config';
//import { pathsToModuleNameMapper } from 'ts-jest/utils';
//import tsConfig from './tsconfig.json';

// Sync object
const config: Config.InitialOptions = {
    testEnvironment: 'node',
    verbose: true,
    preset: 'ts-jest',
    transform: {
        '^.+\\.(ts|js)x?$': 'ts-jest',
    },
    //moduleNameMapper: pathsToModuleNameMapper(tsConfig.compilerOptions.paths),
    transformIgnorePatterns: ['<rootDir>/node_modules/(?!(@polkadot)/)'],
    //moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    //moduleDirectories: ['node_modules', 'src'],
    coverageDirectory: 'coverage',
    collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}', '!src/**/*.d.ts'],
    globals: {
        'ts-jest': {
            tsconfig: {
                module: 'commonjs',
                allowJs: true,
            },
        },
    },
};
export default config;
