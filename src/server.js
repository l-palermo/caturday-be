require('dotenv').config();
const server = require('express')();
const cors = require('cors');

const api = require('./modules/routers/api/api');
const authVerification = require('./modules/routers/auth-verification/auth-verification');
const { isDevEnv } = require('./checkEnv');

isDevEnv() && server.use(cors({ origin: '*' }));

server.use('/auth', authVerification);
server.use('/api', api);

module.exports = server;
