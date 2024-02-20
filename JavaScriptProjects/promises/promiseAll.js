var any = require('promise.any');
// const p1 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve("p1 success")
//         //reject(new Error("p1 failure"))
//     },3000)
// })

// const p2 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         //resolve("P2 success")
//         reject(new Error("P2 failure"))
//     },1000)
// })

// const p3 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve("p3 success")
//         //reject(new Error("p3 failure"))
//     },2000)
// })

// Promise.allSettled([p1, p2, p3]).then(function (data) {
//     console.log(data)
// }).catch(function (data) {
//     console.log(data)
// })

// function greet() {
//     return "Hello"
// }

// //greet()

// async function greetA() {
//     return "Hello"
// }

// const data = greetA()
// console.log(data)

async function greet() {
    let pr = new Promise(function (resolve, reject) {
        // setTimeout(function () {
        //     resolve("Hello")
        // }, 5000)

        setTimeout(function () {
            reject("Error")
        },2000)
    })

    const result = await pr
    
    console.log(result)
}

greet().catch((data) => console.log(data))
console.log("World")