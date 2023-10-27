const express = require('express');
const cors = require('cors');
const babelPolyfill = require('babel-polyfill');
const bodyParser = require("body-parser");
const storeRoute = require('./route/storeRoute');
const bookRoute = require('./route/booksRoute');
var app = new express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/v1', storeRoute);
app.use('/api/v1', bookRoute);

const port = 8000;
app.listen(port);