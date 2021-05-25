module.exports = {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  jsxBracketSameLine: true,
  alwaysParens: 'always',
  insertPragma: false,
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  proseWrap: 'never',
  endOfLine: 'lf',
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
    {
      files: 'document.ejs',
      options: {
        parser: 'html',
      },
    },
  ],
};
