// import express from 'express';
// import React from 'react';
const express = require('express')
const app = express();
const Home = require('./containers/Home/index.js')

app.get('/', function(req, res) {
    res.send(
        `<div>123</div>`
    );
});
app.listen(3000)