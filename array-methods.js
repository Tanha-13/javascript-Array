const myArr = [0,1,5,6,3,8,9];

// accessing array elements using index
// console.log(myArr[0]); // will show the first element in the array

// basic methods of array in javascript
// topic: push
myArr.push(7);
myArr.push(10);
// console.log(myArr);

// topic: pop
myArr.pop();
// console.log(myArr);


//? optimization problem for unshift and shift methods. not recommended
// topic: unshift
myArr.unshift(0);
// console.log(myArr);

// topic: shift
myArr.shift();
// console.log(myArr);

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


// topic: slice 
// console.log('A ', myArr);
const sliceArray = myArr.slice(1,3);
// console.log(sliceArray);
// console.log('B ', myArr);

// topic: splice
const spliceArray = myArr.splice(1,3);
// console.log(spliceArray);
// console.log('C ', myArr);

// todo: slice vs splice

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
console.log(allNewHeroes);

// 
