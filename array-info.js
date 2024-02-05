// practicing array concepts
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
// info: way -02 : shorter syntax": array.at(i). for negative values of i, it steps back from the end of the array.
// problem: fruits[-1]; // undefined
fruits.at(-1); // Lemon
