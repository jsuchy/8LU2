var http = require('http');

exports.server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('hello world');
  res.end();
});

// exports.server.listen(3000, 'localhost');