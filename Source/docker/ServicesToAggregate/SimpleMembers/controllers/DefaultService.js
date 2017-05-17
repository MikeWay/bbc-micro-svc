'use strict';

let members = {};
members['application/json'] =[
  {
      "id" : 1,
      "name" : "Mike",
      "dob" : "01/01/1990",
      "address1" : "Address line 1",
      "address2" : "Address 2",
      "email" : "mike@mike.com"
},
{
      "id" : 2,
      "name" : "Ronnie",
      "dob" : "21/11/1990",
      "address1" : "Address line 1",
      "address2" : "Address 2",
      "email" : "ronnie@ronnie.com"
},
  {
      "id" : 3,
      "name" : "Billy",
      "dob" : "21/01/1980",
      "address1" : "Address line 1",
      "address2" : "Address 2",
      "email" : "billy@billy.com"
}
];


exports.memberIdGET = function(args, res, next) {
  /**
   * get a member
   * returns details of a member matching the specified id
   *
   * memberId String ID of the member
   * no response value expected for this operation
   **/
  let id = args.memberId.value;
  if (Object.keys(members).length >= 0 && members[Object.keys(members)[0]].length > id) {
    res.end(JSON.stringify(members[Object.keys(members)[0]][id-1] || {}, null, 2));
  } else {
    res.statusCode=400;
    res.statusMessage= "Invalid member id";
    res.end(res.statusMessage);
  }
  
}


exports.rootGET = function(args, res, next) {
  /**
   * list members
   * returns a list of members
   *
   * returns List
   **/

  if (Object.keys(members).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(members[Object.keys(members)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

