"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// const { Kafka } = require('kafkajs')
const kafkajs_1 = require("kafkajs");
const kafka = new kafkajs_1.Kafka({
    clientId: 'my-app',
    // change this broker to localhost
    brokers: ['localhost:9092']
});
const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: 'test-group' });
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    // Producing
    yield producer.connect();
    yield producer.send({
        topic: 'quickstart-events',
        messages: [
            { value: 'Hello KafkaJS user!' },
        ],
    });
    // Consuming
    yield consumer.connect();
    yield consumer.subscribe({ topic: 'quickstart-events', fromBeginning: true });
    yield consumer.run({
        eachMessage: (_a) => __awaiter(void 0, [_a], void 0, function* ({ topic, partition, message }) {
            if (!message.value) {
                return;
            }
            console.log({
                partition,
                offset: message.offset,
                value: message.value.toString(),
            });
        }),
    });
});
run().catch(console.error);