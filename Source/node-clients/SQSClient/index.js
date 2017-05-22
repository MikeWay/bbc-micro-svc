// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Load credentials and set the region from the JSON file
AWS.config.loadFromPath('./config.json');

// Create an SQS service object
var sqs = new AWS.SQS({apiVersion: '2012-11-05'});
const SQS_QUEUE_URL = "https://sqs.us-east-1.amazonaws.com/959486755281/BBC-Demo";
var queueURL = SQS_QUEUE_URL;

var params = {
 AttributeNames: [
    "SentTimestamp"
 ],
 MaxNumberOfMessages: 1,
 MessageAttributeNames: [
    "All"
 ],
 QueueUrl: queueURL,
 VisibilityTimeout: 0,
 WaitTimeSeconds: 5
};

let error = false;
let msgCount = 0;

console.log("Starting Receive");
receiveNextMessage();

function receiveNextMessage(){
sqs.receiveMessage(params, function(err, data) {
  if (err) {
    console.log("Receive Error", err);
    error = true;
  } else {
    if(data.Messages){
      console.log("Message RXD: " + data.Messages[0].Body + "Messages Received: " + msgCount++);
      //console.log("Message Title Attribute: " + data.Messages[0].MessageAttributes.Title.StringValue );

      var deleteParams = {
        QueueUrl: queueURL,
        ReceiptHandle: data.Messages[0].ReceiptHandle
      };
      sqs.deleteMessage(deleteParams, function(err, data) {
        if (err) {
          console.log("Delete Error", err);
        } else {
          console.log("Message Deleted", data);
          receiveNextMessage();
        }
      });
      
    } else {
      console.log("Message Q is empty: Queing next receive");
      // Q up the next receive
      receiveNextMessage();
    }
  }
});
}

