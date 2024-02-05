// practicing array concepts

//topic: declaration
const fruits = ['Apple','Orange', "Pear", 'Palm'];

//replace an array element
fruits[2] = 'Watermelon';
fruits; // [ 'Apple', 'Orange', 'Watermelon', 'Palm' ]

// adding a new element in array
fruits[4] = 'Lemon';
fruits; //[ 'Apple', 'Orange', 'Watermelon', 'Palm', 'Lemon' ]

// topic: length
fruits.length; // 5

//topic: last element in array
// way - 01
fruits[fruits.length - 1]; // Lemon

//topic: at method
// info: way -02 : shorter syntax": array.at(i). for negative values of i, it steps back from the end of the array.
// problem: fruits[-1]; // undefined
fruits.at(-1); // Lemon


//topic: push,pop,shift, unshift
//info: push and pop are faster than unshift and shift.

/**
 * The shift operation must do 3 things
 * 1. remove the element with the index 0.
 * 2. move all the elements to the left, renumber them from the index 1 to 0, from 2 to 1 and so on.
 * 3. update the length property.
*/
//topic: Internals
//topic: performance

//topic: loop
//for loop
let arr = ['Apple','Orange','Pear'];
for(let i = 0; i< arr.length; i++){
    arr[i];
}

//for... in
for(let element in arr){
    arr[element];
}

//for...of: does not give the access to the number(index) of the current element, just its value.
for(let element of arr){
    element;
}

//topic: length - It is not the count of values in the array, but the greatest numeric index plus one.

let arr1 = [1,2,3,4];
arr1.length; // 4
arr1.length = 2; // truncate to 2 elements
arr1; // [1,2]
arr1.length = 5;
arr1; //[ 1, 2, <3 empty items> ]
arr1[3]; //undefined: tge values do not return

//info: to clear an array, the simplest way is arr.length = 0.


//topic: toString - returns a comma-separated list of elements.
const arr2 = [1,2,3,4];
console.log(arr2.toString());

