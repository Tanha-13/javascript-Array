//the slice() method is used to extract a section of an array and returns a new array containing the extracted elements. It does not modify the original array.

//syntax
//imp: arr.slice(begin,end)
/**
 * 01. start(optional): the index at which the extraction starts. if value is omitted, it will start from index 0. If negative, it will begin from the end of the array. 
 * 
 * 02. end(optional): the index before the extraction ends. this value is not included to extraction. If it is omitted, it will extract value from 'start' index to the end of the array. If the is greater than the length of array, the end value changes to the length of the array.
 * 
 * **return value: returns a new array containing some portion of the original array.
 * 
 */

const arr = [1,2,3,4,5];
const copied = arr.slice(0,3);
copied.push(6);
console.log(arr,copied);
