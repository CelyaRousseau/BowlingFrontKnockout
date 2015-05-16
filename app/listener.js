define(['amqp', 'path', 'when'], function (amqp, path, when) {

    var basename = path.basename;
    var all      = when.all;

    var routingKey = 'piste_1';

    amqp.connect('localhost').then(function(conn) {
      process.once('SIGINT', function() { conn.close(); });
      return conn.createChannel().then(function(ch) {
        var ex = 'scoring';

        var ok = ch.assertExchange(ex, 'direct', {durable: false});

        ok = ok.then(function() {
          return ch.assertQueue('', {exclusive: true});
        });

        ok = ok.then(function(qok) {
          var queue = qok.queue;
          ch.bindQueue(queue, ex, routingKey);
        });

        ok = ok.then(function(queue) {
          return ch.consume(queue, logMessage, {noAck: true});
        });
        return ok.then(function() {
          console.log(' [*] Waiting for logs. To exit press CTRL+C.');
        });

        function logMessage(msg) {
          console.log(" [x] %s:'%s'",
                      msg.fields.routingKey,
                      msg.content.toString());
        }
      });
    }).then(null, console.warn);

  });