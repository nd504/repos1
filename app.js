var http = require('http');
var server = http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hey, this is a response from a server!\n");
});
server.listen(8080); // listening on port 1212