'use strict';


  let purchases = {};
  purchases['application/json'] = [ 
  {
    "price" : 11.99,
    "name" : "Subscription 1",
    "id" : 1,
    "subscriptionId" : 1,
    "memberId" : 1
  },
  {
    "price" : 1.99,
    "name" : "Subscription 2",
    "id" : 1,
    "subscriptionId" : 2,
    "memberId" : 1
  },
  {
    "price" : 9.99,
    "name" : "Subscription 3",
    "id" : 1,
    "subscriptionId" : 3,
    "memberId" : 1
  },
  {
    "price" : 11.99,
    "name" : "Subscription 4",
    "id" : 1,
    "subscriptionId" : 1,
    "memberId" : 2
  },
  {
    "price" : 1.99,
    "name" : "Subscription 5",
    "id" : 1,
    "subscriptionId" : 2,
    "memberId" : 2
  },
  {
    "price" : 9.99,
    "name" : "Subscription 6",
    "id" : 1,
    "subscriptionId" : 3,
    "memberId" : 2
  }    

 

];

exports.byMemberMemberIdGET = function(args, res, next) {
  /**
   * list all purchases for a single member
   * returns a list of subscriptions
   *
   * memberId String ID of the member whose purchases are being listed
   * no response value expected for this operation
   **/
  let memberId = args.memberId.value;
  let filtered = purchases[Object.keys(purchases)[0]].filter((purchase)=>{
    return purchase.memberId==memberId;
  });
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(filtered || {}, null, 2));
}

exports.bySubscriptionSubscriptionIdGET = function(args, res, next) {
  /**
   * list all purchases for a single subscription type
   * returns a list of subscriptions
   *
   * subscriptionId String ID of the subscription for which purchases are being listed
   * no response value expected for this operation
   **/
  let subId = args.subscriptionId.value;
  let filtered = purchases[Object.keys(purchases)[0]].filter((purchase)=>{
    return purchase.subscriptionId==subId;
  });
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(filtered || {}, null, 2));
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

  if (Object.keys(purchases).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(purchases[Object.keys(purchases)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

