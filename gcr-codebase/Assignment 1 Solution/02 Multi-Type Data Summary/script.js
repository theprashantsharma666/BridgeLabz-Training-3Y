let name = "Prashant Sharma";
let age = 20;
let isStudent = true;
let subjects = ["HTML", "CSS", "JavaScript"];
let student = { name: "Prashant Sharma", age: 20 };
let result = null;
let address;

console.table([
    { Variable: "name", Value: name, Type: typeof name },
    { Variable: "age", Value: age, Type: typeof age },
    { Variable: "isStudent", Value: isStudent, Type: typeof isStudent },
    { Variable: "subjects", Value: subjects, Type: Array.isArray(subjects) ? "array" : typeof subjects },
    { Variable: "student", Value: student, Type: typeof student },
    { Variable: "result", Value: result, Type: "null" },
    { Variable: "address", Value: address, Type: typeof address }
]);