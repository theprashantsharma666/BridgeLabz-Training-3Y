let expenses = [3000, 1500, 6000, 2000, 1000];

let total = 0;
for (let x of expenses) {
    total += x;
}

let average = total / expenses.length;
let tax = total * 0.10;
total += tax;

console.log("Total Expenses: ₹" + (total - tax).toFixed(2));
console.log("Average Expense: ₹" + average.toFixed(2));
console.log("Tax (10%): ₹" + tax.toFixed(2));
console.log("Final Total After Tax: ₹" + total.toFixed(2));