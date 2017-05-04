'use strict';

exports.getProductById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * productId (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "name" : "Widget Adapter",
  "description" : "This is a really nice example of a Widget Adapter. Buy it now whilst stocks last",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

