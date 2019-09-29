import minify from 'rollup-plugin-babel-minify';

module.exports = {
  input: 'src/leonsans.js',
  output: {
    file: 'dist/leonsans.js',
    format: 'umd',
    name: 'LeonSans'
  }
};