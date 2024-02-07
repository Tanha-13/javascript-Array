//syntax
// imp: arr.splice(index,remove_count,item_list) or, arr.splice(startIndex, deleteCount, item1,item2,....)

// parameter details
/**
 * 01. index/startIndex: it is a required parameter. This parameter is the index from which the modification of the array starts. If the value is greater than the length of the array, ith will be set to the length of the array. If negative, it will begin that many elements from the end of the array. Negative index counts back from the end of the array.
 * 
 * 02. remove_count/deleteCount(Optional): It is an integer value that indicates the number of elements that will be removed from the 'index'. If the value is 0 or negative, no element are removed. If it is omitted, or its value is greater than the number of elements left in the array starting at 'index/startIndex', all the elements from 'index' to the end are removed.
 * 
 * 03. item_list: the elements to add to the array, beginning from index/startIndex. If not specified any elements, then splice() will only remove elements from the array.
 * 
 * 04.**return value: It will return an array containing the removed elements.If no element is removed from the array, then it will return an empty array.
 */

//example
let webDev = ["HTML","CSS","Bootstrap","Tailwind CSS"];
console.log(webDev);
//adding "JavaScript", "React Native", "PHP" after removing "Bootstrap"
const removedElement = webDev.splice(2,1,"JavaScript","React Native");
// console.log(webDev); //[ 'HTML', 'CSS', 'JavaScript', 'React Native', 'Tailwind CSS' ]
// console.log(removedElement); //[ 'Bootstrap' ]

//adding elements without deleting 
//info: -1 is the last value. 
webDev.splice(-2,0,"React")
// console.log(webDev); //[ 'HTML', 'CSS', 'JavaScript', 'React Native', 'Tailwind CSS' ]