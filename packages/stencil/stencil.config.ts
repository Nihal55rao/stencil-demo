import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'stencil',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    angularOutputTarget({
      componentCorePackage: '@nihaldemo/stencil',
      directivesProxyFile: '../../packages/angular/libs/stencil-wrapper/src/lib/proxy.ts',
      directivesArrayFile: '../../packages/angular/libs/stencil-wrapper/src/lib/index.ts',
    }),
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
