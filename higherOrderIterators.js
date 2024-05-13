// const arr = [1,2,3,4,5]

// for (const nums of arr) {
//     console.log(`value is ${nums}`)
    
// }

// const name = "Atharv Khamkar";

// for (const char of name) {
//     console.log(char)
// }

const map1 = new Map()

map1.set(1, 'a')
map1.set(2, 'b')
map1.set(3, 'c')

// console.log(map1)

// for (const val of map1) {
//     console.log(val)
// }

// for (const [key, value] of map1) {
//     console.log(key , ':-', value )
// }

const map2 = new Map()

map2.set("In", "India")
map2.set("USA", "United State of America")
map2.set("FR", "France")

for (const key in map2) {
    console.log(key)
}

// const myObj = {
//     game1: "NFS",
//     game2: "Spider man"

// }

// for (const [key, value] of myObj) {
//     console.log(key, ":-", value);
// }

// const myObj = {
//     js: "Javascript",
//     py: "Python",
//     java: "Java",
//     cpp: "C++"
// }

// for (const key in myObj) {
//     console.log(`${key} for ${myObj[key]}`);
    
// }

// const programming = ["java", "cpp", "py", "js"]

// for (const key in programming) {
//     console.log(`${key} and ${programming[key]}`)
// }


// const coding = ["ruby", "java", "c++", "python", "javascript"]

// coding.forEach(function (val) {
//     console.log(val)
// })

// const nums = [5, 6, 7, 8]
// let total = 0;
// nums.forEach((values) => {
//     total += values
// });

// console.log(total)

// const nums = [1, 2, 3, 4]
// let multi = 1

// function multiply(item) {
//     multi = multi * item
// }

// nums.forEach(multiply)
// console.log(multi)


// const nums = [5, 6, 7, 8]

// let total = 1



// nums.forEach(function multiply(item,index,nums) {
//     total = total * item
//     console.log(total,index,nums)
// })

// const myObj = [
//     {
//         language: "Java",
//         extention : "java"
//     },
//     {
//         language: "Javascript",
//         extention : "js"
//     },
//     {
//         language: "C++",
//         extention : "Cpp"
//     },
//     {
//         language: "Python",
//         extention : "py"
//     }

// ]

// myObj.forEach((item) => {
//     console.log(item.extention)
// })


// const coding = ["ruby", "java", "js", "python"]

// const result = coding.forEach((item) => {
//     console.log(item)
// })

// console.log(result)

const nums = [10, 20, 30, 40, 50]

let total = 1;



nums.forEach((value,index,nums)=> {
    total *= value;
    console.log(total,index,nums)
})

console.log(total);