import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'

const config = {
  entry: 'assets/scripts/index.js',
  dest: 'dist/bundle.js',
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**'
    }),
    commonjs({ include: 'node_modules/**' }),
    uglify()
  ],
  external: ['path', 'fs', 'builtin-modules']
}

export default config
