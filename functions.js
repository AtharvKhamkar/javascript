function sayMyName() {
    console.log("A");
    console.log("T");
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("V")
}

// sayMyName()

function addTwoNumbers(number1, number2) {
    return number1 + number2
}

// console.log(addTwoNumbers(2,3))

function loginUserMessage(username) {
    if (!username) {
        console.log("Please enter the username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Atharv"))

function calculateCartPrice(...num1) {
    let sum = 0;
    for (let i  of num1) {
        sum += i;
    }
    return sum
}

// console.log(calculateCartPrice(10,20))

//passing object as a parameter in an object

const user = {
    userName: "Atharv",
    price: "200"
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`)
}

// handleObject(user)

//passing array as parameter in a function

const myNewArray = [10, 20, 30, 40]

function getSecondElement(anyArray) {
    return anyArray[1]
}

console.log(getSecondElement([100,200,300,400]))

