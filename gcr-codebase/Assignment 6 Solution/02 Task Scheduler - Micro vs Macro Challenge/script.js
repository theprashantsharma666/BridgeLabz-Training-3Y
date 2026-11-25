console.log("Start");

setTimeout(function() {
    console.log("Timeout callback");
}, 0);

Promise.resolve().then(function() {
    console.log("Promise callback");
});

console.log("Synchronous log");

console.log("End");