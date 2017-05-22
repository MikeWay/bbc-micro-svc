const SQS_QUEUE_URL = "https://sqs.us-east-1.amazonaws.com/959486755281/BBC-Demo";

// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Load credentials and set the region from the JSON file
AWS.config.loadFromPath('./config.json');

// Create an SQS service object
var sqs = new AWS.SQS({ apiVersion: '2012-11-05' });

var params = {};

sqs.listQueues(params, function (err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success", data.QueueUrls);
    }
});

let i = 5;
while(i-- > 0){
    sendMessage(i);
}


function sendMessage(i) {

    var params = {
        DelaySeconds: 10,
        MessageAttributes: {
            "Title": {
                DataType: "String",
                StringValue: "The Whistler"
            },
            "Author": {
                DataType: "String",
                StringValue: "John Grisham"
            },
            "WeeksOn": {
                DataType: "Number",
                StringValue: "6"
            }
        },
        MessageBody: "Message number : [ " + i + " ]",
        QueueUrl: SQS_QUEUE_URL
    };

    sqs.sendMessage(params, function (err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data.MessageId);
        }
    });
}