// requiere the http dependency
const http = require('http');

// http dependency to create a server
const server = http.createServer((req, res) => {
  // response object, otherside of the request
  res.end('Hello Node\n');
});

// to activate the server, you have to listen to it
server.listen(4242, () => {
  console.log('Server is running...');
});
