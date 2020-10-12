const server = require('./server');

// the port which express will be listening to
// has to be the same as the one on the compose file
server.listen(4000, '0.0.0.0', () => {
  console.log('Local server listening on port 4000');
});
