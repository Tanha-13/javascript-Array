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
// todo: shallow copies vs deep copies

console.log(typeof arr2); //object
console.log(Array.isArray(arr2));

//info: array elements are numbered, starting with zero. We can get an element by its number in square brackets.
console.log(arr2[0]); // accessing array elements in javascript
console.log(arr2['one']); //not the proper way to access array elements.


