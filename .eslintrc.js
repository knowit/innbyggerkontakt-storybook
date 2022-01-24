module.exports = {
  root: true,
  extends: ['plugin:storybook/recommended'],
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'react/default-props-match-prop-types': 'off',
      },
    },
  ],
};
