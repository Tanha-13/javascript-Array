const array = [1,2,3];

//reduce
//info: the first value of accumulator is initialValue.
const initialValue = 0;
let total = array.reduce(function(accumulator, currentValue) {
    // console.log(`Accumulator: ${accumulator} and Current Value: ${currentValue}`);
    return accumulator + currentValue;
}, initialValue)

//using arrow callback function
total = array.reduce((accumulator,currentValue) => accumulator+currentValue , initialValue);
console.log(total);

// array of object
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((accumulator,item) => {
    return accumulator + item.price;
}, 0);

console.log(priceToPay);