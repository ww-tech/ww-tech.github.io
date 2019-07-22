const withSass = require('@zeit/next-sass')
const withTranspileModules = require('next-transpile-modules')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([
  [withSass, {
    cssModules: true
  }],
  [withTranspileModules, {
    transpileModules: ['react-github-btn']
  }]
], {
  assetPrefix: process.env.NODE_ENV !== 'dev' ? '/ww-tech' : '',
})