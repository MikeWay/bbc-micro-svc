var circuitBreaker = require('circuitbreaker');
 
/*
	Dummy function simulating a remote service invocation
*/
var loadDataFromRemoteServer = function (id, callback) {
  if (id < 0) {
	// Simulate an error by passing Error to the CB callback
    return callback(new Error('error loading data ' + id));
  } else {
	// Normal behaviour
    return callback(null, 'data for id ' + id);
  }
};
 
// Create a circuit breaker -- note the parameters
var breaker = circuitBreaker(loadDataFromRemoteServer, {timeout: 10, maxFailures: 3, resetTimeout: 30});
 
// Invoke normally
breaker(23).then(console.log);
 
// Invoke so it creates an error -- will retry until maxFailures is encountered

//breaker(-1).then(/* dummy success */).fail(console.log('fail1'));
//breaker(-1).then(/* dummy success */).fail(console.log('fail2'));
//breaker(-1).then(/* dummy success */).fail(console.log('fail3'));

// We've hit the maxFailures -- next connection should fail!
 
breaker(32).then(console.log).fail(function(err) {
  console.log('failed because breaker is open', err);
});
/*
breaker(42).then(console.log).fail(function(err) {
  console.log('failed because breaker is open', err);
});
*/
// Wait for a time greater that the resetTimeout  -- it should then pass as the breaker is closed again

setTimeout(function () {
  breaker(32).then(function (data) {
    console.log('loaded data because circuit reset after timeout: ', data);
  });
}, 35);

