#!/usr/bin/env node

var amqp = require('amqplib/callback_api');
var exchange = 'movietest';

amqp.connect('amqps://sharan316:sharan316316@b-44612873-26b4-4b16-988e-b4db0e96abba.mq.us-east-1.amazonaws.com:5671', function(error0, connection) {
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
