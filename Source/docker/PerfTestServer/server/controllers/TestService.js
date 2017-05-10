'use strict';

exports.test = function(args, res, next) {
  /**
   * Send a request to be echoed back
   *
   * input BigDecimal Value to be echoed back
   * returns BigDecimal
   **/
  var examples = {'value': 4};
//console.log("I'm alive");
  //console.log(JSON.stringify(examples));
  if (Object.keys(examples).length > 0) {
    //console.log(JSON.stringify(args));
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

