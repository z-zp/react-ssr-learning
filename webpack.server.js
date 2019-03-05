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
}
module.exports = merge(config,serverConfig)