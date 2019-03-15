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
主要通过ReactDOMServer方法将react编译成字符串
```
app.get('/', function(req, res) {
    res.send(
        `<div>${ReactDOMServer.renderToString(<Home />)}</div>
        <script src='/index.js'></script>
        `
    );
});
```


同构js运行原理
###Tag 2.2 
服务器是没有事件的，当服务器将页面渲染好以后，客户端再次执行，将事件绑定
```
import React from 'react'
import ReactDom from 'react-dom'
import Home from '../containers/Home'

ReactDom.hydrate(<Home/>,document.getElementById('root'))

```

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

对ES7一些提案的支持，要写在env后面，否则会报错
>Missing class properties transform

## Tag 3.0 
添加路由 
```
npm i react-router-dom
```
客户端
```
 <BrowserRouter>{Routes}</BrowserRouter>

```
服务端
```
<StaticRouter location={req.path}>
    {Router}
</StaticRouter>
```
### Tag 3.1
多路由跳转及代码整理
### Tag 3.2
集成react-redux
```
npm i redux
npm i react-redux
```
只需吧服务端和客户端两个入口都用provide包裹起来就行
### Tag 3.3
集成redux-saga
因为redux-saga 运用了generator
运行后报错：
>regeneratorRuntime is not defined
```
npm i --save-dev babel-plugin-transform-runtime
```
在根目录新建.babelrc
```
{
  "plugins": [
    [
      "transform-runtime",
      {
        "helpers": false,
        "polyfill": false,
        "regenerator": true,
        "moduleName": "babel-runtime"
      }
    ]
  ]
}
```
### Tag 3.4
引入seamless-immutable 和 reduxsauce
seamless-immutable是简化版的immutable

### Tag 3.5
简单的网络请求和css引入 
css-loader 要用1.0得，因为bable-loader 8.0做了升级
componentDidMount 只会再客户端执行不会在服务端执行

https://reacttraining.com/react-router/web/guides/server-rendering

fetch 在node 上报undefind 换成了axios
注意给自己的服务器接口打开允许跨域
```
app.all('/api/number', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
```

客户端运行
 * /api/number = http://39.105.161.0/api/number
 
服务端运行
 * /api/number = 根目录/api/number

 所以在请求的时候要区分是服务端还是客户端
Tag 3.5.1
脱水和注水
```
<script>
  window.context={
    state:${JSON.stringify(store.getState())}
  }
</script>


export const getClientStore = ()=>{  // 使每个用户store互相独立
    const defaultState = Immutable(window.context.state)
    const store =  createStore(reducer,defaultState,applyMiddleware(sagaMiddleware))
    sagaMiddleware.run(rootSaga)
    return store
}
```
服务器渲染css
```
componentWillMount(){
  // 服务器端渲染
  if(styles._getCss){
    this.props.staticContext.css.push(styles._getCss())
  }
}   

const css = context.css.length?context.css.join('/n'):{}
 
<style>${css}</style>
```

seo

title
meta

文字  (拿出你改论文的本事来原创)
图片 （拿出你修图的本事原创）
连接 外连多内连相关性强
react-helmet 
客户端
```
import {Helmet} from 'react-helmet'

<Helmet>
  <title>home</title>
  <meta name='description' content={'这是home'}></meta>
</Helmet>
```
服务端
```
import {Helmet} from 'react-helmet'
const helmet = Helmet.renderStatic()
 <head>
  ${helmet.title.toString()}
  ${helmet.meta.toString()}
</head>
```

prerender

next.js

