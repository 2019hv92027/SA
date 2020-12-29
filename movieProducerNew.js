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
		
		// Get process.stdin as the standard input object.
		var standard_input = process.stdin;

		// Set input character encoding.
		standard_input.setEncoding('utf-8');

		// Prompt user to input data in console.
		console.log("Please input text in command line.");

		// When user input data and click enter key.
		standard_input.on('data', function (data) {

		// User input exit.
		if(data === 'exit\n'){
        // Program exit.
        console.log("User input complete, program exit.");
        process.exit();
		}else
		{
        // Print user input in console.
        console.log('User Input Data : ' + data);
		channel.publish (exchange, '', Buffer.from(data));
		console.log("Published Message", data);
		}
		
	});
			
			
			//const price = Math.random()*100;
			//const msg = `Stock price of ABC is ${price}`;
			//channel.publish (exchange, '', Buffer.from(msg));
			//console.log("Published Message", msg);
			
		}, 1000);
		
		
    
    
  });
});