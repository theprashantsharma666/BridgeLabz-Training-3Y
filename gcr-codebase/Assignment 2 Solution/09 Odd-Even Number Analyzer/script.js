let numbers = [];

for (let i = 1; i <= 30; i++) {
    numbers.push(i);
}

let results = [];

for (let number of numbers) {
    if (number % 3 === 0 && number % 5 === 0) {
        results.push(number + " - FizzBuzz");
    } else if (number % 2 === 0) {
        results.push(number + " - Even");
    } else {
        results.push(number + " - Odd");
    }
}

console.log(results);