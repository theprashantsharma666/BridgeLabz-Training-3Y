let salary = 30000;
let incrementRate = 10;
let salaryDetails = [];

for (let year = 1; year <= 5; year++) {
    salary += salary * incrementRate / 100;

    salaryDetails.push({
        Year: year,
        Salary: Math.round(salary)
    });
}

console.table(salaryDetails);