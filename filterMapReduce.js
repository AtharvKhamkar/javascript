// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const result = nums.filter((item) => {
//     return item > 4;
// });

// console.log(result)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];
  

// const result = books.filter((item) => {
//     return item.genre === "History"
// });

// console.log(result)

// const result = books.filter((item) => {
//     return item.genre === "Fiction" && item.publish > 1975
// })

// console.log(result)

// const result = books.filter((item) => {
//     return item.genre === "Science" || item.edition > 2008
// })

// console.log(result)


let users = [
    { name: 'John', age: 25, occupation: 'gardener' },
    { name: 'Lenny', age: 51, occupation: 'programmer' },
    { name: 'Andrew', age: 43, occupation: 'teacher' },
    { name: 'Peter', age: 81, occupation: 'teacher' },
    { name: 'Anna', age: 47, occupation: 'programmer' },
    { name: 'Albert', age: 76, occupation: 'programmer' },
]

// let count = 0;
// let resultArray = []
// for (let i = 0; i < users.length; i++) {
//     if (users[i].age > 40 && users[i].occupation === "programmer") {
//         resultArray.push(users[i]);
//     }

// }

// console.log(resultArray)

// const result = users.filter((item) => item.age > 40 && item.occupation === "programmer")

// console.log(result)


const userDetails = {
    firstName: "Jane",
    lastName: "Daniels",
    userName: "jane.daniels",
    email: "jane.daniels@example.com",
    comapny: "Example Inc.",
    address: "1234 Example Street",
    age : 25,
    hobby: "Singing"
};

let keyArray = Object.keys(userDetails)
// console.log(keyArray)

let valueArray = Object.values(userDetails)
// console.log(valueArray)

let keyResult = keyArray.filter((item) => item.length > 5)
// console.log(keyResult)

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
    for (let i = 2; i < num; i++){
        if (num % i == 0) {
            return false
        }
    }

    return num > 1;
}

// console.log(array.filter(isPrime))


const arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: "undefined" },
];

let invalidCount = 0;
function isValidNumber(item) {
    if (Number.isFinite(item.id) && item.id !== 0) {
        return true;
    }
    invalidCount++;
    return false;
}

// console.log(arr.filter(isValidNumber))

// const fruits = ["apple", "banana", "grapes", "mango", "orange"];

// function checkContais(arr,quer) {
//     return arr.filter((el) => el.toLowerCase().includes(quer.toLowerCase()))
// }

// const result = fruits.filter((item) => {
//     return item.toLowerCase().includes("ap")
// });

// console.log(result)

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const result = myNums.map((val) => val + 10)
// console.log(result)

// const sqrt = myNums.map((item) => {
//     return Math.sqrt(item)
// });
// console.log(sqrt)

// const result = myNums.map((item) => item * 10)
//     .map((item) => item + 1)
//     .filter((item) => item >= 50 && item<=80)
// console.log(result)


const array1 = [1, 2, 3, 4]

// const initialValue = 0;
// const result = array1.reduce((acc, curr) => {
//     return acc + curr
// },initialValue);

// console.log(result)

// const result = array1.reduce((acc, curr) => {
//     console.log(`value of ${acc} and value of ${curr}`)
//     return acc * curr
// }, 1)

// console.log(result)

const shoppingCart = [
    {
        name: "JsCource",
        price : 500
    },
    {
        name: "PythonCource",
        price : 1000
    },
    {
        name: "C++Cource",
        price : 1500
    },
    {
        name: "JavaCource",
        price : 5000
    },
    {
        name: "SqlCourse",
        price : 10000
    },
]

const result = shoppingCart.reduce((acc, curr) => acc + curr.price, 0)
console.log(result)