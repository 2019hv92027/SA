#!/usr/bin/env node

var amqp = require('amqplib/callback_api');
var exchange = 'movies';

amqp.connect('amqps://sharan316:sharan316316@b-b989224f-410e-4d33-b310-e9d2a0b1df9b.mq.us-east-1.amazonaws.com:5671', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
	
	channel.assertExchange(exchange, "fanout", {durable: true});
		setInterval(() => {
			const price = Math.random()*100;
			const msg = `Stock price of ABC is ${price}`;
			channel.publish (exchange, '', Buffer.from(msg));
			console.log("Published Message", msg);
			
		}, 1000);
		
		
    
    
  });

//  setTimeout(function() { 
//    connection.close(); 
//    process.exit(0); 
//  }, 500);
});
