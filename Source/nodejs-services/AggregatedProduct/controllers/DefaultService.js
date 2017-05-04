'use strict';

// Import the InventoryClient
var InventoryClient = require('../inventory_client/client').DevelopersApi;

exports.getPordocutById = function(args, res, next) {

  console.log("!!!!");
  /**
   * parameters expected in the args:
  * productId (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "name" : "Widget Adapter",
  "description" : "aeiou",
  "leadTime" : 1.3579000000000001069366817318950779736042022705078125,
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "stockCount" : 1.3579000000000001069366817318950779736042022705078125
} ];

// Create the inventory client and call the method
let inventoryClient = new InventoryClient();
 let result = inventoryClient.searchInventory("1");
 result.then((response)=>{
   examples['application/json'][0].leadTime = response.body;
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }   
 }, (error)=>{console.log(error)});


  
}

