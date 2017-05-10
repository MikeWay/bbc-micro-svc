"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("./api");
var MAX_ITERATIONS = 10000;
var i = 0;
console.log("Hello");
var api;
var startTime;
// Get the basepath from the environment if supplied
var basePath = process.env.ENV_BASE_PATH;
if (null == basePath) {
    basePath = 'http://localhost:8092/v1';
}
api = new api_1.TestApi(basePath);
console.log("About to test with server %s (waiting 5S)", basePath);
setTimeout(function () {
    console.log("Starting Test");
    startTime = Date.now();
    runTest(0);
}, 5000);
function runTest(val) {
    i++;
    if (i == MAX_ITERATIONS) {
        var endTime = Date.now();
        console.log("Elapsed time: %d", endTime - startTime);
    }
    else {
        api.test(val).then(function () { return runTest(val + 1); });
    }
}
