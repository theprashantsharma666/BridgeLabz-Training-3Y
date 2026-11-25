function boilWater() {
    return new Promise(function(resolve, reject) {
        console.log("Boiling water...");
        let time = 1000 + Math.random() * 1000;

        setTimeout(function() {
            if (Math.random() < 0.2) {
                reject("Failed to boil water!");
            }
            else {
                console.log("Water is boiled!");
                resolve();
            }
        }, time);
    });
}

function brewCoffee() {
    return new Promise(function(resolve, reject) {
        console.log("Brewing coffee...");
        let time = 1000 + Math.random() * 1000;

        setTimeout(function() {
            if (Math.random() < 0.2) {
                reject("Failed to brew coffee!");
            }
            else {
                console.log("Coffee is brewed!");
                resolve();
            }
        }, time);
    });
}

function pourCoffee() {
    return new Promise(function(resolve, reject) {
        console.log("Pouring coffee into a cup...");
        let time = 1000 + Math.random() * 1000;

        setTimeout(function() {
            if (Math.random() < 0.2) {
                reject("Failed to pour coffee!");
            }
            else {
                console.log("Coffee poured into the cup!");
                resolve();
            }
        }, time);
    });
}

boilWater()
    .then(function() {
        return brewCoffee();
    })
    .then(function() {
        return pourCoffee();
    })
    .then(function() {
        console.log("Coffee ready for the team!");
    })
    .catch(function(error) {
        console.log("Error: " + error);
    });