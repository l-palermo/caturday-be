require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');

const api = require('./modules/routers/api/api');

const server = express();

server.use(cors({origin: '*'}));

server.use(express.static(path.join(__dirname, 'dist')));

server.use('/api', api);

module.exports = server;
