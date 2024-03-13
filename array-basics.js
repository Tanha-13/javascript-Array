// declaring array
// 1st: array literal notation
const arr1 = []; //empty array
//initial elements in the array[brackets].
const arr2 = [45,56,6,78,98,32]; //number types
const myHeros = ['avengers','spiderman','ironman']; //string type

// 2nd: array constructor
const arr3 = new Array();
/**
 * info-1: Single variable, multiple elements(values).
 * info-2: arrays are resizable
 * info-3: can contain a mix of different data types.
 * info-4: start index from 0. 
 * 
 */

// console.log(typeof arr2); //output: object
// console.log(Array.isArray(arr2)); //output: true

//info: array elements are numbered, starting with zero. We can get an element by its number in square brackets.
// console.log(arr2[0]); // accessing array elements in javascript
// console.log(arr2['one']); //not the proper way to access array elements.

// todo: shallow copies vs deep copies
//topic: deep copy
let employee = {
    employeeId:'201',
    employeeName: 'Nusrat',
    employeeAddress: 'Mirpur,Dhaka',
    salary: 20000,
}
let newEmployee = JSON.parse(JSON.stringify(employee));
//info: JSON.stringify() converts the employee object to JSON string. It makes a shallow copy of the object. Then JSON.parse() converts this string back into an object, creating a new object in memory, that's how a deep copy is created from a simple object.
//problem: copying more complex object containing properties like functions, date, undefined has limitations for this method. I meed to use other techniques for deep copying objects. 
console.log("Employee: ", employee);
console.log("New Employee: ", newEmployee);
newEmployee.employeeName = 'Tanha';
newEmployee.employeeId = '203';
console.log("Employee: ", employee);
console.log("New Employee: ", newEmployee);

