const array = [1,2,3];

//reduce
//info: the first value of accumulator is initialValue.
const initialValue = 0;
const total = array.reduce(function(accumulator, currentValue) {
    console.log(`Accumulator: ${accumulator} and Current Value: ${currentValue}`);
    return accumulator + currentValue;
}, initialValue)
console.log(total);