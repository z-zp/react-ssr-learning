import {renderToString} from 'react-dom/server';
import React from 'react';
import {StaticRouter} from 'react-router-dom'
import Router from '../src/Routes'
export const render = (req, res)=>{
    const content = renderToString((
        <StaticRouter location={req.path}>
            {Router}
        </StaticRouter>
    ))
    return (
        `<div id='root'>${content}</div>
        <script src='/index.js'></script>
        `
    );
}