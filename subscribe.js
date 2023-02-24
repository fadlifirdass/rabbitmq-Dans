const amqp = require('amqplib/callback_api')


amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    var queue = 'Fadli';

    channel.assertQueue(queue, {
      durable: false
    });
    channel.consume(queue,(msg)=>{
        console.log(`Diterima : ${msg.content.toString()}`)
        channel.ack(msg)
    },{
        noAck: true
    })
  });
});