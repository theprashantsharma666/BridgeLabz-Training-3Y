"use strict";

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary = this.salary + (this.salary * percent / 100);
    }
}

const employees = [
    new Employee(1, "Rahul", "IT", 30000),
    new Employee(2, "Priya", "HR", 25000),
    new Employee(3, "Amit", "Sales", 28000),
    new Employee(4, "Neha", "Finance", 35000),
    new Employee(5, "Rohan", "IT", 40000)
];

employees.forEach(function(employee) {
    employee.applyBonus(10);
});

employees.forEach(function(employee) {
    console.log("Employee ID:", employee.id);
    console.log("Name:", employee.name);
    console.log("Department:", employee.department);
    console.log("Monthly Salary after Bonus:", employee.salary);
    console.log("Annual Salary:", employee.getAnnualSalary());
});

const totalAnnualPayout = employees.reduce(function(total, employee) {
    return total + employee.getAnnualSalary();
}, 0);

console.log("Total Annual Payout:", totalAnnualPayout);