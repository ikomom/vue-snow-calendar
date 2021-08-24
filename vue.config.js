const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

// vue.config.js
const vueConfig = {
  configureWebpack: {
    // externals: prodExternals,
    plugins: [
    ]
  },
  chainWebpack: config => {
      config.resolve.alias.set('@$', resolve('src'))
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // less vars，customize ant design theme
          'primary-color': '#3377FF',
          // 'link-color': '#F5222D',
          'border-radius-base': '4px'
          // 'border-radius-base': '2px'
        },
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    port: 8000,
  },
  outputDir: 'dist',
  // disable source map in production；
  productionSourceMap: false,
  // lintOnSave: undefined,
  lintOnSave: false,
  // babel-loader no-ignore node_modules/*
  transpileDependencies: []
}

module.exports = vueConfig
