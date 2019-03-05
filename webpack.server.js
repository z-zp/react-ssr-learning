const path = require('path')
const nodeExtrenals = require('webpack-node-externals')
module.exports = {
    target:'node',
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname,'build')
    },
    externals:[nodeExtrenals()],
    module: {
        rules:[
            {
                test:/\.js?$/,
                loader:'babel-loader',
                exclude:'/node_modules/',
                options:{
                    presets:[
                        'react','stage-0',['env',{
                            targets:{
                                browsers:['last 2 version']
                            }
                        }]
                    ]
                }
            }
        ]
    }
}