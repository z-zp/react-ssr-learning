import express from 'express';
import Home from '../src/containers/Home/index.js'
import ReactDOMServer from 'react-dom/server';
import React from 'react';
// const express = require('express')
// const Home = require('./containers/Home/index.js')

const app = express();
app.use(express.static('public'))


app.get('/', function(req, res) {
    res.send(
        `<div id='root'>${ReactDOMServer.renderToString(<Home />)}</div>
        <script src='/index.js'></script>
        `
    );
});
app.listen(3000)