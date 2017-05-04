'use strict';

exports.searchInventory = function(args, res, next) {
  /**
   * parameters expected in the args:
  * itemId (String)
  **/
    var examples = {};
  examples['application/json'] = 22.0;
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

