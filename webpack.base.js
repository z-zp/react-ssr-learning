module.exports = {
    module: {
        rules:[
            {
                test:/\.js?$/,
                loader:'babel-loader',
                exclude:'/node_modules/',
                options:{
                    presets:[
                        'react','env','stage-0'
                    ]
                }
            }
        ]
    }
}