const http = require('http');
const mongoose = require('mongoose');
const app = require('./app');

// connect mongoDB
mongoose.connect('mongodb+srv://Peanuts-83:H9pcNdqR4VT4jhqi@peanutsmongo.17rt9.mongodb.net/fullstack-activity?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => console.log('MongoDB connected!'))
    .catch(error => console.log('MongoDB NOT connected -', error));


// Normalize port
const normalizePort = val => {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  } else if (port >= 0) {
    return port;
  }
  return false;
}

const port = process.env.PORT || 3000;
app.set('port', port);

// ErrorHandler
const errorHandler = error => {
  if (error.syscall != 'listen') {
    throw error;
  }
  const address = server.adress();
  const bind = typeof address === 'string' ?
    'pipe ' + address : 'port: ' + address;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + 'requires elevated privileges.');
      break;
    case 'EADDRINUSE':
      console.error(bind + 'is already in use.');
      break;
    default:
      throw error;
  }
 }

const server = http.createServer(app);
server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ?
  'pipe ' + address : 'port: ' + port;
  console.log('Complete address:', address);
  console.log('Listening on', bind);
})

server.listen(port);