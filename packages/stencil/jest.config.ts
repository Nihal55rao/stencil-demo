import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: '@stencil/core/testing',
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  collectCoverage: true,
};

export default config;
