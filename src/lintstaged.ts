/**
 * Created by xiaobai2 on 2021/6/25.
 */
module.exports = {
    '*.{js,jsx,ts,tsx,vue}': ['eslint --fix', 'prettier --write'],
    '*.{less,postcss,css,scss,vue}': ['stylelint --fix', 'prettier --write'],
};