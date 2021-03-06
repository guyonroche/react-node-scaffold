'use strict';

let path = require('path');

let express = require('express');
let url = require('url');
let bodyParser = require('body-parser');

let pkg = require('./package.json');
let config = require('./app.json');
let router = require('./lib/router');

let app = express();

app.use(bodyParser.json());

// API
app.use('/api', router);

// serve client from public folder
app.use('/', express.static(path.join(__dirname, 'public')));

let server = app.listen(config.server.port, () => {
  console.info(`Express server started at http://localhost:${config.server.port}`);
});
