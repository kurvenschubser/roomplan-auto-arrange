//var http = require('http');
//http.createServer(function (req, res) {
//    res.writeHead(200, {'CONTENT-Type': 'text/plain'});
//    res.end('Hello World\n');
//}).listen(process.env.PORT, process.env.IP);

var restify = require('restify');

function respond(req, res, next) {
    res.send('hello ' + req.params.name);
}

function get_info(req, res, next){
    res.send('Port:' + process.env.PORT + '<br />' + 'IP:' + process.env.IP);
}

var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);
server.get('/info', get_info);
server.head('/info', get_info);

server.listen(process.env.PORT, function() {
  console.log('%s listening at %s', server.name, server.url);
});
