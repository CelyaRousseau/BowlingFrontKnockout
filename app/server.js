var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Serveur OK !');
});


var sys  = require('sys');
var amqp = require('amqp');
var io   = require('socket.io').listen(server);

var connection = amqp.createConnection({ host: 'localhost' }, {defaultExchangeName: 'front'});

// Wait for connection to become established.
connection.on('ready', function () {
    // Create a queue and bind to all messages.
    // Use the default 'amq.topic' exchange
    var q = connection.queue('front', function (queue) {
      console.log('Queue ' + queue.name + ' is open');
    });
    // Catch all messages
    q.bind('#');

    // Receive messages
    q.subscribe(function (message, headers, deliveryInfo) {
      console.log('Got a message with routing key ' + deliveryInfo.routingKey);
      io.sockets.emit('pushdata', messagesArray);
    });
});


var messagesArray = [{ 'message':'update' }];
 
io.sockets.on('connection', function (socket) {
  
  socket.emit('pushdata', messagesArray);
  
  socket.on('input', function (data) {
    messagesArray.push(data);
    io.sockets.emit('pushdata', messagesArray);
  });
  
  socket.on('disconnect', function () {
      io.sockets.emit('user disconnected');
  });

});

server.listen(8082);


