module.exports = {
  singleQuote: true, //字符串是否使用单引号，默认为false，使用双引号
  trailingComma: 'all', //是否使用尾逗号，有三个可选值"<none|es5|all>"
  printWidth: 100,
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
