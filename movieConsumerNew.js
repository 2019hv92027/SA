#!/usr/bin/env node

import unirest from 'unirest';
var amqp = require('amqplib/callback_api');

amqp.connect('amqps://sharan316:sharan316316@b-44612873-26b4-4b16-988e-b4db0e96abba.mq.us-east-1.amazonaws.com:5671', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        var queue = 'movietest';

        channel.assertQueue(queue, {
            durable: true
        });

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

        channel.consume(queue, function(msg) {
            console.log(" Received %s", msg.content.toString());
		});


   req.end(function (res) {
     if (res.error) throw new Error(res.error);

     console.log(res.body);
   });
 }
        }, {
            noAck: true
        });
    });
});