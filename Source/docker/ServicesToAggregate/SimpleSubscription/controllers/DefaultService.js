'use strict';
  let subscriptions = {};
  subscriptions['application/json'] =[
  {
  "price" : 11.21,
  "name" : "Movies",
  "description" : "All the movies you could ever watch",
  "id" : 1
},
  {
  "price" : 5.99,
  "name" : "Drama",
  "description" : "A dramatic subscription",
  "id" : 2
},
  {
  "price" : 8.99,
  "name" : "Documentaries",
  "description" : "Knock yourself out",
  "id" : 3
  } 
];

exports.rootGET = function(args, res, next) {
  /**
   * list subscriptions
   * returns a list of subscriptions
   *
   * returns List
   **/


  if (Object.keys(subscriptions).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(subscriptions[Object.keys(subscriptions)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.subscriptionIdGET = function(args, res, next) {
  /**
   * gets a subscription
   * returns a subscription matching the supplied id
   *
   * subscriptionId String ID of the subscription
   * no response value expected for this operation
   **/
  let id = args.subscriptionId.value;
  if (Object.keys(subscriptions).length >= 0 && subscriptions[Object.keys(subscriptions)[0]].length > id) {
    res.end(JSON.stringify(subscriptions[Object.keys(subscriptions)[0]][id-1] || {}, null, 2));
  } else {
    res.statusCode=400;
    res.statusMessage= "Invalid subscription id";
    res.end(res.statusMessage);
  }
}

