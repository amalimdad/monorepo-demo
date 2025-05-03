import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              sourceTag: 'scope:products',
              onlyDependOnLibsWithTags: [ "type:ui","scope:products"],
            },
            {
              sourceTag: 'scope:orders',
              onlyDependOnLibsWithTags: [ "type:ui","scope:orders"],
            },
            {
              sourceTag: 'type:ui',
              onlyDependOnLibsWithTags: [ "type:ui" ],
            },
            {
              sourceTag: 'scope:kheta',
              onlyDependOnLibsWithTags: [ "type:feature","type:ui", 'scope:kheta',"scope:shared"],
            },
            {
              sourceTag: 'scope:hope',
              onlyDependOnLibsWithTags: [ "type:feature","type:ui", 'scope:hope', "scope:shared"],
            },
          ],
        },
      ],
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    // Override or add rules here
    rules: {},
  },
];
