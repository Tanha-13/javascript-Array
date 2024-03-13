//Array in Javascript is a data structure that allows to store and organize multiple values within a single variable. It is a versatile and dynamic object. Arrays in javascript are zero-indexed, meaning the first element is at index 0. Each value within an array is called an element. Elements are accessed by their index. Array index is a numerical representation that indicates the position of an element in the array. 

// declaring array
// 1st: array literal notation - this method is concise and widely preferred for its simplicity.
const arr1 = []; //empty array
//initial elements in the array[brackets].
const arr2 = [45,56,6,78,98,32]; // array and initializing with values
const myHeros = ['avengers','spiderman','ironman']; //string type

// 2nd: array constructor - refers to a method of creating arrays by invoking the Array constructor function. This approach allows for dynamic initialization and can be used to create arrays with a specified length or elements.
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

