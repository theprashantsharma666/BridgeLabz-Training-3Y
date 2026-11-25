function serverResponse(name, time) {
    return new Promise(function(resolve, reject) {
        console.log(name + " is responding...");

        setTimeout(function() {
            if (Math.random() < 0.2) {
                reject(name + " failed!");
            } else {
                resolve(name + " completed successfully");
            }
        }, time);
    });
}

let serverA = serverResponse("Server A", 2000);
let serverB = serverResponse("Server B", 3000);

Promise.all([serverA, serverB])
    .then(function(result) {
        console.log(result);
        console.log("Deployment completed for all servers");
    })
    .catch(function(error) {
        console.log("Error: " + error);
    });

Promise.race([serverA, serverB])
    .then(function(result) {
        console.log("Fastest response: " + result);
    })
    .catch(function(error) {
        console.log("Race Error: " + error);
    });