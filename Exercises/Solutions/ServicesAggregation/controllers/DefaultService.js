'use strict';
let MemberService = require('../clients/member-client/index');
let SubscriptionService = require('../clients/subscription-client/index');
let PurchaseService = require('../clients/purchases-client/index');

exports.getSubsForMember = function(args, res, next) {
  /**
   * get a members subscription details
   *
   * memberId String ID of the member
   * returns List
   **/
//   var examples = {};
//   examples['application/json'] = [ {
//   "purchases" : [ {
//     "price" : 1.3579000000000001069366817318950779736042022705078125,
//     "subscriptionName" : "aeiou",
//     "subscriptionId" : 1.3579000000000001069366817318950779736042022705078125
//   } ],
//   "memberName" : "aeiou",
//   "email" : "aeiou",
//   "memberId" : 123456789
// } ];
//   if (Object.keys(examples).length > 0) {
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
//   } else {
//     res.end();
//   }


  let memberId = args.memberId.value;
  let promMember = getMemberData(memberId);
  let promSubs = getSubscriptionData(memberId);
  let promPurchase = getPurchaseData(memberId);

  Promise.all([promMember, promSubs, promPurchase]).then((values) => {
    let resultData = {};
    let memberData = values[0];
    let subsData = values[1];
    let purchaseData = values[2];

    if(memberData == null || subsData == null || purchaseData == null){
      res.end();
      return;
    }

    resultData.memberName = memberData.name;
    resultData.email = memberData.email;
    resultData.subscriptionName = subsData.name;
    resultData.purchases = [];

    let purchaseIdx = 0;

    for( let purchase of purchaseData){
      let resPurchase = {};
      resPurchase.price = purchase.price;
      resPurchase.subscriptionName = purchase.name;
      resPurchase.subscriptionId = purchase.subscriptionId;
      resultData.purchases[purchaseIdx++] = resPurchase;
 
    }

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(resultData));

  });
}

function getMemberData(memberId) {
  let promMember = new Promise((resolve, reject) => {
    let api = new MemberService.DefaultApi();
    api.memberIdGET(memberId, (error, data, response) => {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        console.log('API called successfully. Returned data: ' + data);
        resolve(data);
      }
    });
  });
  return promMember;
}
function getSubscriptionData(memberId) {
  let promSubs = new Promise((resolve, reject) => {
    let api = new SubscriptionService.DefaultApi();
    api.subscriptionIdGET(memberId, (error, data, response) => {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
  return promSubs;
}

function getPurchaseData(memberId) {
  let purchaseSubs = new Promise((resolve, reject) => {
    let api = new PurchaseService.DefaultApi();
    api.byMemberMemberIdGet(memberId, (error, data, response) => {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
  return purchaseSubs;
}

