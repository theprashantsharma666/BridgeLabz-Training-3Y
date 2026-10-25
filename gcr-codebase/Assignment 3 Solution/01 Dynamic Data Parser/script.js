"use strict";
const apiData = ["25", "true", "false", "NaN", "                     ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

for (let value of apiData) {
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    console.log("Original Value:", value);
    console.log("Number Form:", numberValue);
    console.log("Boolean Form:", booleanValue);
    console.log("String Form:", stringValue);

    if (typeof value === "string" && value.trim() === "") {
        invalidNumbers.push(value);
        console.log("Status: Invalid (blank string)");
    } else if (Number.isNaN(numberValue)) {
        invalidNumbers.push(value);
        console.log("Status: Invalid number");
    } else {
        validNumbers.push(numberValue);
        console.log("Status: Valid number");
    }
}

console.log("Valid Numbers:", validNumbers);
console.log("Invalid Values:", invalidNumbers);
console.log("Total Valid Values:", validNumbers.length);
console.log("Total Invalid Values:", invalidNumbers.length);
