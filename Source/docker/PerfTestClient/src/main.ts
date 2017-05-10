import { TestApi } from './api';

const MAX_ITERATIONS = 10000;
let i = 0;
console.log("Hello");

let api: TestApi;
let startTime;
// Get the basepath from the environment if supplied
let basePath = process.env.ENV_BASE_PATH;
if(null == basePath){
    basePath = 'http://localhost:8092/v1';
}

api = new TestApi(basePath);
console.log("About to test with server %s (waiting 5S)", basePath);
setTimeout(function () {
    console.log("Starting Test");
    startTime = Date.now();
    runTest(0);
}, 5000);


function runTest(val){
    i++;
    if(i == MAX_ITERATIONS){
        let endTime = Date.now();
        console.log("Elapsed time: %d", endTime - startTime);
    } else {
        api.test(val).then(()=>runTest(val+1));
    }
}


