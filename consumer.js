const amqp = require("amqplib/callback_api");
const exchange = "movie";
const url = "amqps://b-b989224f-410e-4d33-b310-e9d2a0b1df9b.mq.us-east-1.amazonaws.com:5671";

amqp.connect(url, (err,con) => {
	con.createChannel((err, channel) => {
		channel.assertExchange(exchange, "fanout", { durable: true });
		const price = Math.random()*100;
		const message = `Stock price of ABC is ${price}`;
		channel.publish (exchange, "routingkey", Buffer.from(messsage));
		console.log("Published Message", message);
	});
	
});
