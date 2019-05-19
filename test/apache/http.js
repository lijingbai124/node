var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function (request, response) {
    
    response.end();
})

server.listen(8080, function () {
    console.log('请访问http://localhost:8080')
})