const http = require('http');
const app = require('./app');


// normalizePort
const normalizePort = val => {
  const port = parseint(val, 10);
  if (isNaN(port)) {
    return val;
  } else if (port >= 0) {
    return port;
  }
  return false;
}

const port = process.env.PORT || 3000;
app.set('port', port);

// errorHandler
const errorHandler = error => {
  if (error.syscall != 'listen') {
    throw error;
  }

    switch(error.code) {
      case 'EACCES':
        console.log(bind, 'require elevated privileges.');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.log(bind, 'is already in use.');
        process.exit(1);
        break;
      default:
        throw error;
    }
}

const server = http.createServer(app);
const address = server.address();
const bind = typeof address === String ? 'pipe: ' + address : 'port: ' + port;
console.log('- Server ONLINE -');

server.on('error', errorHandler);
server.on('listening', () => {
  console.log('Listening on', bind);
});

server.listen(process.env.PORT || 3000);