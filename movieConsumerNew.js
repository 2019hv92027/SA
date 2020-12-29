#!/usr/bin/env node

import unirest from 'unirest';
var amqp = require('amqplib/callback_api');

amqp.connect('amqps://sharan316:sharan316316@http://192.168.1.4:15672', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        var queue = 'movies';

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