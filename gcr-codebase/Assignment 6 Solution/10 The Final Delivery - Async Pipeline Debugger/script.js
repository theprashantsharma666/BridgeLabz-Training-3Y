function takeOrder() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (Math.random() < 0.2) {
                reject("Order taking failed");
            } else {
                resolve("Step 1: Order taken");
            }
        }, Math.floor(Math.random() * 1000) + 1000);
    });
}

function prepare() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (Math.random() < 0.2) {
                reject("Food preparation failed");
            } else {
                resolve("Step 2: Food prepared");
            }
        }, Math.floor(Math.random() * 1000) + 1000);
    });
}

function pack() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (Math.random() < 0.2) {
                reject("Packing failed");
            } else {
                resolve("Step 3: Package ready");
            }
        }, Math.floor(Math.random() * 1000) + 1000);
    });
}

function dispatch() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (Math.random() < 0.2) {
                reject("Dispatch failed");
            } else {
                resolve("Step 4: Out for delivery");
            }
        }, Math.floor(Math.random() * 1000) + 1000);
    });
}

function deliver() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (Math.random() < 0.2) {
                reject("Delivery failed");
            } else {
                resolve("Delivery completed!");
            }
        }, Math.floor(Math.random() * 1000) + 1000);
    });
}

async function runPipeline() {
    try {
        console.log("Start Pipeline");

        console.log(await takeOrder());
        console.log(await prepare());
        console.log(await pack());
        console.log(await dispatch());
        console.log(await deliver());

    } catch (error) {
        console.log("Pipeline failed!");
        console.log(error);
    }
}

runPipeline();