class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return this.name + " is working in " + this.department + " department.";
    }
}

class Manager extends Employee {
    work() {
        return this.name + " is managing the " + this.department + " department.";
    }
}

let employee1 = new Employee("Rahul", "IT");
let manager1 = new Manager("Aman", "HR");

let result = document.getElementById("result");

result.innerHTML =
    "<h3>Employee Details</h3>" +
    "<p>Name: " + employee1.name +
    "<br>Department: " + employee1.department +
    "<br>Work: " + employee1.work() + "</p>" +

    "<hr>" +

    "<h3>Manager Details</h3>" +
    "<p>Name: " + manager1.name +
    "<br>Department: " + manager1.department +
    "<br>Work: " + manager1.work() + "</p>";