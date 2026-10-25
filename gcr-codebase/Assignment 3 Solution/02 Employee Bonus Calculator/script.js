"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

for (const employee of employees) {
    try {
        if (!employee || employee.name === undefined ||employee.salary === undefined ||employee.years === undefined) {
            throw new Error("Missing employee information");
        }

        const salary = Number(employee.salary);
        const years = Number(employee.years);

        if (!Number.isFinite(salary) || !Number.isFinite(years) || salary < 0 || years < 0) {
            throw new Error("Invalid salary or years");
        }

        let bonus;

        if (years > 3) {
            bonus = salary * 0.10;
        } else {
            bonus = salary * 0.05;
        }

        console.log(
            `Name: ${employee.name}, Salary: ₹${salary}, Years: ${years}, Bonus: ₹${bonus.toFixed(2)}`
        );
    } catch (error) {
        console.log(`Error processing employee: ${error.message}`);
    }
}