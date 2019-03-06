##Tag 1.0
搭建react在node上的运行环境
```
npm i 
npm run build
npm run start1
```
8 版本的babel-loader会报错

##Tag 2.0
配置nodemon 和 node-run-all 
服务端渲染react静态页面
```
npm run dev
```
###Tag 2.1 
同构js运行原理
###Tag 2.2 
简单的demo
###Tag 2.3 
整理webpack
```
npm i webpack-merge
```
```
options:{
    presets:[
        'react','env','stage-0'
    ]
}
```
env已经囊括了es2015,es2016等配置，所以写了这一个，其他的就不再需要了，
stage-0，它包含stage-1, stage-2以及stage-3的所有功能，同时还另外支持如下两个功能插件：
* transform-do-expressions
* transform-function-bind

对ES7一些提案的支持，要写在env后面，否则会报错Missing class properties transform

