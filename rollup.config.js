import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';
import sass from 'rollup-plugin-sass';

export default {
  input: `nodep-date-input-polyfill.js`,
  output: {
    file: `nodep-date-input-polyfill.dist.js`,
    format: 'umd'
  },
  plugins: [
    babel({
      include: `*.js`,
      exclude: `node_modules/**`,
      presets: [[`env`, {modules: false}]],
      plugins: [`external-helpers`]
    }),
    minify({
      comments: false,
      sourceMap: false
    }),
    sass({
      insert: true
    })
  ],
};
