class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        let total = this.marks.reduce(function(sum, mark) {
            return sum + mark;
        }, 0);

        return total / this.marks.length;
    }

    getGrade() {
        let average = this.calculateAverage();

        if (average >= 80) {
            return "A";
        }
        else if (average >= 60) {
            return "B";
        }
        else if (average >= 40) {
            return "C";
        }
        else {
            return "F";
        }
    }
}

let student1 = new Student("Rahul", [85, 90, 80]);
let student2 = new Student("Aman", [65, 70, 60]);
let student3 = new Student("Rohit", [30, 35, 25]);

let students = [student1, student2, student3];

let result = document.getElementById("result");

students.forEach(function(student) {

    let average = student.calculateAverage();
    let grade = student.getGrade();

    result.innerHTML +=
        "<p>Name: " + student.name +
        "<br>Marks: " + student.marks.join(", ") +
        "<br>Average: " + average.toFixed(2) +
        "<br>Grade: " + grade +
        "</p><hr>";
});
