'use strict';

let path = require('path');

let express = require('express');
let proxy = require('proxy-middleware');
let url = require('url');
let bodyParser = require('body-parser');

let pkg = require('./package.json');
let config = require('./app.json');
let router = require('./lib/router');

let app = express();

app.use(bodyParser.json());

// API
app.use('/api', router);

console.log(`Proxying client to ${config.dev.client.port}`);
app.use('/', proxy(url.parse(`http://localhost:${config.dev.client.port}`)));

let server = app.listen(config.server.port, () => {
  console.info(`Express server started at http://localhost:${config.server.port}`);
});
