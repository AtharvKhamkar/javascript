const fetch = require("node-fetch");
// const promiseOne = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("Async call is completed")
//         resolve()
//     }, 2000)
// });

// promiseOne.then(function () {
//     console.log("promise is consumed")
// })


// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve()
//         console.log("Async call is completed")
//     }, 2000)
// }).then(function () {
//     console.log("Promise is completed")
// });

// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve({name:"Atharv",surname : "Khamkar"})
//     },2000)
// })

// promiseThree.then(function (data) {
//     console.log(data)
// })

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ name: "Atharv", surname: "khamkar" })
        } else {
            reject("Error : Some Error has occurred")
        }
    }, 1000)
});

// promiseFour
// .then(function (data) {
//     return data
// })
// .then((data) => {
//     console.log(data.name)
// })
// .catch(function (data) {
//     console.log(data)
// }).finally(function (data) {
//     console.log("promise is finished")
// })

async function promiseFive() {
    try {
        const response = await promiseFour
        console.log(response)
    } catch (error) {
        console.log(error)
        
    }
}
    
promiseFive()



// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
        
//     }
// }

// getAllUsers()

fetch("https://api.github.com/users/hiteshchoudhary")
    .then((response) => {
    return response.json()
    }).then((data) => {
    console.log(data)
}).catch((error) => console.log(error))


    