#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

amqp.connect('amqps://sharan316:sharan316316@b-b989224f-410e-4d33-b310-e9d2a0b1df9b.mq.us-east-1.amazonaws.com:5671', function(error0, connection) {
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
            console.log(" [x] Received %s", msg.content.toString());
        }, {
            noAck: true
        });
    });
});