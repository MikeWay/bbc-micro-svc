'use strict';

exports.byMemberMemberIdGET = function(args, res, next) {
  /**
   * list all purchases for a single member
   * returns a list of subscriptions
   *
   * memberId String ID of the member whose purchases are being listed
   * no response value expected for this operation
   **/
  res.end();
}

exports.bySubscriptionSubscriptionIdGET = function(args, res, next) {
  /**
   * list all purchases for a single subscription type
   * returns a list of subscriptions
   *
   * subscriptionId String ID of the subscription for which purchases are being listed
   * no response value expected for this operation
   **/
  res.end();
}

exports.rootGET = function(args, res, next) {
  /**
   * list all purchases
   * returns a list of purchases
   *
   * limit Integer number of purchases to return (optional)
   * start Integer first purchase to (optional)
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "price" : "aeiou",
  "description" : "2000-01-23",
  "id" : 123456789,
  "subscriptionId" : 123456789,
  "memberId" : 123456789
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

