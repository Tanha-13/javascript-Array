const myArr = [0,1,5,6,3,8,9];

// accessing array elements using index
myArr[0]; // 0. will show the element which index is zero(0) in the array

// basic methods of array in javascript
// topic-01: push - appends an element to the end and returns the new length of the array.
//info: arr.push() and arr[arr.length] adds the new element.

const newElement = myArr.push(7); 
newElement; // length: 8
myArr.push(10,11);
// console.log(myArr); // [0, 1, 5,  6, 3, 8, 9, 7, 10]

// topic-02: pop - extracts the last element and returns it.
//info: arr.pop() and arr.at(-1)returns the last element but arr.pop() modifies the array by removing the element.

const removedElement = myArr.pop();
removedElement; //10
myArr; //[0, 1, 5, 6, 3, 8, 9, 7]


//problem: optimization problem for unshift and shift methods. not recommended
// topic-03: unshift - adds the element at the beginning and returns the new length of the array.
const addedElement = myArr.unshift(50);
addedElement; //9
myArr; //[50, 0, 1, 5, 6, 3, 8, 9, 7]

// topic-04: shift - extracts the first element and return it.
const shiftElement = myArr.shift();
shiftElement; // 50
myArr; // [ 0, 1, 5, 6, 3, 8, 9, 7]

//info: If we use delete operator to remove any element from the array, it will remove the array value but will not modify the rest of the elements.

// topic-05: splice - is an inbuilt method in JavaScript that is used to modify the contents of an array by removing the existing elements and/or adding new elements.

const spliceArray = myArr.splice(1,3);
// console.log(spliceArray);
// console.log('C ', myArr);

// topic-06: slice - this method returns a new array containing a portion of the array on which it is implemented. the original remains unchanged.
// console.log('A ', myArr);
const sliceArray = myArr.slice(1,3);
// console.log(sliceArray);
// console.log('B ', myArr);



// todo: slice vs splice

// topic: includes
// console.log(myArr.includes(9));

// topic: indexOf
// console.log(myArr.indexOf(89)); // -1. when the element is not present in the array, it returns its index as -1.
// console.log(myArr.indexOf(9));

// topic: join
// info: join method returns a string
// const newArr = myArr.join(); // returns with comma separator
const newArr = myArr.join(' '); // returns with space separator

// console.log(myArr);
// console.log(newArr);
//info: the main difference is type.
// console.log(typeof myArr);  // object
// console.log(typeof newArr); // string

//
const marvelHeros = ['thor','ironman','spiderman'];
const dcHeros = ['batman','flash','spiderman'];
// direct 
// marvelHeros.push(dcHeros);
// console.log(marvelHeros);

//concat
const allHeroes = marvelHeros.concat(dcHeros);
// console.log(allHeroes);
// console.log(marvelHeros);

// spread operators
const allNewHeroes = [...marvelHeros,...dcHeros];
// console.log(allNewHeroes);

// flat method
const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const usableAnotherArr = anotherArr.flat(Infinity);
// console.log(usableAnotherArr);

// converting data into array format
//checking the data whether are they in array format or not
// console.log(Array.isArray('hitesh'));

// convert
// console.log(Array.from('node'));

// object to array
const studentId = {
    name: 'Nusrat',
    id: '201-51-021',
    address: '48/5/1,Abdul Jabbar Road, Baish Teki, Mirpur 13'
}
// console.log(Array.from(Object.keys(studentId)));


//
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));