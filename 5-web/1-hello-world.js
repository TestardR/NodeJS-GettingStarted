const http = require('http');

const requestListiner = (req, res) => {
  // req and res are streams !
  console.dir(req, { depth: 0 }); // Type: Incoming Message
  console.dir(res, { depth: 0 }); // Type: Server Response
  res.end('Hello World\n');
};

const server = http.createServer();
server.on('request', requestListiner);

server.listen(4242, () => {
  console.log('Server is running...');
});
