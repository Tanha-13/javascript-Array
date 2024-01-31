const coding = ["JavaScript", "Java", "Ruby","C++","python"];


//higher order functions
//todo: forEach behind the scene

coding.forEach(function(language){
    // console.log(language);
})

//arrow function
// coding.forEach((language) => {
//     console.log(language);
// })


//existing function as callback
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);

//info: callback arguments: item- the current element, index - the current index and arr - the complete array
coding.forEach((item,index,arr) => {
    // console.log(item,index,arr);
})


//array of objects
const myCoding = [
    {
        languageName: 'JavaScript',
        languageFileName: 'js'
    },
    {
        languageName: 'Java',
        languageFileName: 'java'
    },
    {
        languageName: 'Python',
        languageFileName: 'py'
    },
]

myCoding.forEach((item) => console.log(item.languageName))

