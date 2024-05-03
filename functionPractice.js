function sayMyName() {
    console.log("A")
    console.log("B")
    console.log("C")
}

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}

function addition(number1, number2) {
    return number1 + number2;
}

const output = addition(10, 20);
// console.log(output);
// console.log(addition(20, 30));


// const addNumbers = function (num1,num2) {
//     return num1+num2
// }

// const result = addNumbers(2, 3);
// console.log(result);

function loginUser(username) {
    return `${username} just logged in`
}

// console.log(loginUser("Atharv"))

function calculateCartPrice(...prices) {
    let total = 0;
    for (let i of prices) {
        total += i
    }

    return total;
}

function calculatePrice(num1, num2, ...prices) {
    let total = num1 + num2
    for (let i of prices) {
        total += i;
    }

    return total;
}

// console.log(calculatePrice(10, 20, 30, 40, 50));

const userInfo = {
    name: "Atharv",
    lastName: "Khamkar",
    age:22
}
function welcomeMessage(myObj) {
    console.log(`Hey! welcome ${myObj.name} ${myObj.lastName} you are ${myObj.age}s of age now.`)
}

// welcomeMessage(userInfo);

const numbers = [200, 300, 400, 500, 600];

function getSecondNumber(newArray) {
    console.log(newArray[1]);
}

const multiply = function (num1, num2) {
    return num1 * num2;
}


