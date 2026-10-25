"use strict";

let userLimit = 5;

if (!Number.isInteger(userLimit) || userLimit < 1) {
    console.log("Please enter a positive whole number.");
} else {
    for (let row = 1; row <= userLimit; row++) {
        let pattern = "";
        for (let column = 1; column <= row; column++) {
            pattern += "* ";
        }
        console.log(pattern.trim());
    }
}
