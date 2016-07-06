var server = require('./app/server');

var port = server.port = process.env.PORT || 8080;

// =======================
// start the server ======
// =======================
server.listen(port);
console.log('Magic happens at http://localhost:' + port);
