// // function declaration
// let ad = 

// // function expression
// let add = function (a, b){
//     return a + b;
// }

// // arrow declaration
// let addd = (a, b) =>{
//     return a + b;
// }

// -----------------------------------------
// -----------------------------------------
// Higher Order Function - Function which accepts another function 
// fun - callback function
// arrow function - function declaration without storing a variable
// let add = function (a, b){
//     return a + b;
// }

// let mul = function (a, b){
//     return a * b;
// }

// function calculate(a, b, callback){
//     return callback(a, b);
// }

// let sum = calculate(10, 20, add)
// let multi = calculate(10, 20, mul)
// console.log(sum);
// console.log(multi);


// -----------------------------------------
// -----------------------------------------
// let arr = [1 , 2, 3, 4, 5, 6];
// let fun = x => {
//     return x * 2;
// }
// let res = arr.map(fun);
// console.log(res);

// let res = arr.map(x => {
//     return x * 2;
// });
// console.log(res);

// -----------------------------------------
// let arr = [1 , 2, 3, 4, 5, 6];
// let res = arr.filter((x) => {
//     return x % 2 == 0;
// })
// console.log(res);


// -----------------------------------------
// -----------------------------------------

// let arr1 = ["Apple", "mango", "banana", "apple", "apple"];
// // filter parameters : value - x, index, array => filter(value, idx, arr1)
// let res = arr1.filter((x) => {
//     // return !x.includes("apple");
//     // return x != "apple";
//     return x.toLowerCase() != "apple";
// })
// console.log(res);

// -----------------------------------------
// -----------------------------------------

// Filters fruits whose length is > 5;
// let arr1 = ["Apple", "mango", "banana", "apple", "apple"];
// let res = arr1.filter((x) => {
//     return x.length > 5;
// })
// console.log(res);

// -----------------------------------------
// -----------------------------------------
// Filter age > 18
// let arr3 = [12, 34, 9, 60, 36, 24];
// let res = arr3.filter((x) => {
//     return x > 18;
// })
// console.log(res);

// -----------------------------------------
// -----------------------------------------
// Filter the fruit start with with 'A' or 'a'
let arr4 = ["Apple", "mango", "banana", "apple", "apple"];
let res = arr4.filter((x) => {
    return x.toLowerCase().charAt(0) == 'a';
})
console.log(res);