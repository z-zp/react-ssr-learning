import {renderToString} from 'react-dom/server';
import React from 'react';
import {StaticRouter,Route} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import {Helmet} from 'react-helmet'
import {Provider} from 'react-redux'

export const render = (store,routes,req,context)=>{
    const content = renderToString((
      <Provider store={store}>
        <StaticRouter location={req.path} context={context}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
    ))
    const helmet = Helmet.renderStatic()
    const css = context.css.length?context.css.join('/n'):{}
    console.log('store.getState',css)
    return (

          `<html>
          <head>
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          <style>${css}</style>
          </head>
          <body>    
          <div id='root'>${content}</div>
         
          <script>
            window.context={
              state:${JSON.stringify(store.getState())}
            }
          </script>
          <script src='/index.js'></script>
          </body>
          </html>
          `
    );
  
}