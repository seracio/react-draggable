// @flow
const fs = require('fs');
const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));

module.exports = {
    entry: 'src/index.js',
    targets: [
        {
            dest: pkg.main,
            format: 'cjs'
        },
        {
            dest: pkg.module,
            format: 'es'
        }
    ],
    sourceMap: false,
    external: ['react'],
    plugins: [
        commonjs(),
        resolve(),
        babel({
            exclude: 'node_modules/**'
        })
    ]
};
