// eslint-disable-next-line @typescript-eslint/no-var-requires
// linjen over må slettes når svger gjøres om til om komponenter med svgr

module.exports = {
  arrowParens: 'always',
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  overrides: [
    {
      files: '*.html',
      options: { parser: 'babel' },
    },
  ],
};
