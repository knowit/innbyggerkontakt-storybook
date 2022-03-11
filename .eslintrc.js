module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier', //always have it last so it can override other configs
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        // for eslint-plugin-prettier
        'prettier/prettier': 'error',
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
        //
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'react/default-props-match-prop-types': 'off',
        'linebreak-style': ['error', 'unix'],
        'no-multiple-empty-lines': ['error', { max: 2 }],
        quotes: ['error', 'single'],

        //eslint-plugin-error
        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'internal'],
            pathGroups: [
              {
                pattern: 'react',
                group: 'external',
                position: 'before',
              },
            ],
            pathGroupsExcludedImportTypes: ['react'],
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
      },
    },
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`

        // Multiple tsconfigs (Useful for monorepos)

        // use a glob pattern
        project: 'packages/*/tsconfig.json',
      },
    },
  },
};
