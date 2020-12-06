import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default [{
  input: 'src/lite.js',
  output: [{
    dir: 'dist/commonjs',
    format: 'cjs'
  }, {
    dir: 'dist/module',
    format: 'es'
  }, {
    dir: './',
    format: 'cjs',
    name: 'LeofcoinLite',
    plugins: [
      resolve({
        browser: true
      }),
      commonjs()
    ]
  }]
}]
