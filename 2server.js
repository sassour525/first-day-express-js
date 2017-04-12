var http = require('http');

var PORT_ONE = 7000;
var PORT_TWO = 7500;



function handleRequestOne(request, response) {
    response.end('You look great today!');
}

function handleRequestTwo(request, response) {
    response.end('You look quite raggity today!');
}


var server_one = http.createServer(handleRequestOne);
var server_two = http.createServer(handleRequestTwo);

server_one.listen(PORT_ONE, function() {
    console.log('Server One is listening on http://localhost:%s', PORT_ONE);
});

server_two.listen(PORT_TWO, function() {
    console.log('Server Two is listening on http://localhost:%s', PORT_TWO);
});