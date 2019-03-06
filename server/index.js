import express from 'express';
import Home from '../src/containers/Home/index.js'
import {renderToString} from 'react-dom/server';
import React from 'react';
import {StaticRouter} from 'react-router-dom'
import Router from '../src/Routes'
// const express = require('express')
// const Home = require('./containers/Home/index.js')

const app = express();
app.use(express.static('public'))


app.get('/', function(req, res) {
    const content = renderToString((
        <StaticRouter location={req.path}>
            {Router}
        </StaticRouter>
    ))
    res.send(
        `<div id='root'>${content}</div>
        <script src='/index.js'></script>
        `
    );
});
app.listen(3000)