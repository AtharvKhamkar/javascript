{
    let x = 2;
    const y = 5
    var z = 10
}

// console.log(z)

// console.log(x)
// console.log(y)

function food() {
    var fruit = "Apple"
    let vegetable = "Broccoli"
    const beverage = "Cola"
    console.log(fruit)
    console.log(vegetable)
    console.log(beverage)   
}


// food()


// let scope = "global"
// console.log(scope)

// function scopeCheck() {
//     console.log(scope)
// }

// scopeCheck()

// let a = 300
// if (true) {
//     let a = 10
//     const b = 20
//     console.log("Inner :" , a)
// }

// console.log(a)

function one() {
    const username = "hitesh"
    function two() {
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}

// one()

// if (true) {
//     const username = "hitesh"
//     if (username === "hitesh") {
//         const website = "youtube"
//         console.log(username + website)
//     }
//     // console.log(website)
// }
// console.log(username)
console.log(addOne(5))
function addOne(num) {
    return num + 1;
}



const addTwo = function addTwo(num) {
    return num + 2
}
console.log(addTwo(5))

