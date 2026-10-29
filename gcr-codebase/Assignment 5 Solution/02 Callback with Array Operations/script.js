"use strict";

function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

function doubleNumber(number) {
    return number * 2;
}

function squareNumber(number) {
    return number * number;
}

const numbers = [1, 2, 3, 4];

const doubledNumbers = applyOperation(numbers, doubleNumber);
const squaredNumbers = applyOperation(numbers, squareNumber);

console.log("Original Array:", numbers);
console.log("Doubled Array:", doubledNumbers);
console.log("Squared Array:", squaredNumbers);