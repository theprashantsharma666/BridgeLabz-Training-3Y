function submitOrder() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (Math.random() < 0.5) {
                reject("Order submission failed");
            } else {
                resolve("Order submitted successfully");
            }
        }, 1000);
    });
}

async function processOrder() {
    for (let i = 1; i <= 3; i++) {
        try {
            let result = await submitOrder();
            console.log("Attempt " + i + ": Success");
            console.log(result);
            return;
        } catch (error) {
            console.log("Attempt " + i + ": Failed");
        }
    }

    throw new Error("Order could not be processed");
}

async function startOrder() {
    try {
        await processOrder();
    } catch (error) {
        console.log(error.message);
    }
}

startOrder();