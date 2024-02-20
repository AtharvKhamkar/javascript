const p = new Promise(function (resolve, reject) {
    setTimeout(function () { 
        resolve("p resolved")
    }, 10000)
    // setTimeout(function () {
    //     reject("P rejected")
    // },3000)
})

const q = new Promise(function (resolve, reject) {
    setTimeout(function () { 
        resolve("q resolved")
    },5000)
    // setTimeout(function () {
    //     reject("P rejected")
    // },3000)
})


// function getData() {
//     console.log("Hello")
//     //.then and .catch method does note stop the execution of the function. 
//     //function does not go out of the stack it continues its execution by executing next line of the function. 
//     //and when the promise is resolved or rejcted as the result give output
//     p.then(function (data) {
//         console.log(data)
    
//     }).catch(function (data) {
//         console.log(data)
//     })
//     console.log("World")       
// }

async function getData() {
    try {
        console.log("Hello")
        //It wait for the completion of the promise to be resolved.when await is occured the function is goes out of the stack
        //and executes the code after the function 
        //and when the promise(await) is resolved again function is placed top of the call stack and completes its execution
        let val1 = await p
        console.log(val1)
        console.log("World")

        console.log("Hello2")
        let val2 = await q
        console.log(val2)
        console.log("world2")
    } catch (error) {
        console.log(error)
    }
}

getData()
console.log("My name is Atharv")
