let apiFailed = Math.random() < 0.5;

function getBugs() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (apiFailed) {
                reject("API failed to load bugs!");
            } else {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            }
        }, 1000);
    });
}

getBugs()
    .then(function(bugs) {
        console.log("Bug List:");
        console.table(bugs);
    })
    .catch(function(error) {
        console.log("Error: " + error);
    });