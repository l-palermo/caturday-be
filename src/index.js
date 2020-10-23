const server = require('./server');

// the port which express will be listening to
// has to be the same as the one on the compose file
const port = process.env.PORT || 4000;
server.listen(port, '0.0.0.0', () => {
  console.log('Heyyyyy Local server listening on port 4000');
});
