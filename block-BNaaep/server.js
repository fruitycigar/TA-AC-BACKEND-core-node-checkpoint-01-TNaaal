// modules
var http = require('http');
var server = http.createServer(handleRequest);

// Handle request

function handleRequest(req, res) {
    // handle all routes
}

// Server listener
server.listen(5000, () => {
    console.log('Server is listening in on Port 5000.');
})