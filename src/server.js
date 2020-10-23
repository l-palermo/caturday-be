require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const compress = require('compression');
const helmet = require('helmet');
const path = require('path');


const api = require('./modules/routers/api/api');

const server = express();

server.use(cors({ origin: '*' }));
server.use(morgan('dev'));
server.use(compress());
server.use(helmet());

server.use(express.static(path.join(__dirname, 'dist')));

server.use('/api', api);

module.exports = server;
