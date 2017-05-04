var circuitBreaker = require('circuitbreaker');
 
var loadDataFromRemoteServer = function (id, callback) {
  if (id < 0) {
    return callback(new Error('error loading data ' + id));
  } else {
    return callback(null, 'data for id ' + id);
  }
};
 
var breaker = circuitBreaker(loadDataFromRemoteServer, {timeout: 10, maxFailures: 3, resetTimeout: 30});
 
breaker(23).then(console.log);
 
breaker(-1).then(/* dummy success */).fail(console.log('fail1'));
breaker(-1).then(/* dummy success */).fail(console.log('fail2'));
breaker(-1).then(/* dummy success */).fail(console.log('fail3'));

// We've hit the maxFailures -- next connection should fail!
 
breaker(32).fail(function(err) {
  console.log('failed because breaker is open', err);
});

// Wait for a time greater that the resetTimeout  -- it should then pass as the breaker is closed again

setTimeout(function () {
  breaker(32).then(function (data) {
    console.log('loaded data because circuit reset after timeout: ', data);
  });
}, 35);