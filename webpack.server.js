const path = require('path')
const nodeExtrenals = require('webpack-node-externals')
const merge = require('webpack-merge')
const config = require('./webpack.base.js')
const serverConfig = {
    target:'node',
    mode:'development',
    entry:'./server/index.js',
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname,'build')
    },
    externals:[nodeExtrenals()],
    module: {
        rules: [{
            test: /\.css$/,
            use: ['isomorphic-style-loader',{
              loader:'css-loader',
              options:{
                importLoaders:1,
                modules:true,
                localIdentName:'[name]_[Local]_[hash:base64:5]'
              }
            
            }]
          }
        ]
      }
    
}
module.exports = merge(config,serverConfig)