function multiplyby5(num) {
    return num * 5;
}

multiplyby5.power = 2

// console.log(multiplyby5(5))
// console.log(multiplyby5.power)
// console.log(multiplyby5.prototype)
// console.log(typeof multiplyby5)

function createUser(name,score) {
    this.name = name;
    this.score = score;

    return this;
}

createUser.prototype.incrementScore = function () {
    return this.score++;

}

createUser.prototype.sayMyName = function () {
    console.log(`My name is ${this.name}`)
}

const userOne = new createUser("Atharv", 500)
const userTwo = new createUser("Aditya", 1000)
console.log(userOne.incrementScore() )
console.log(userTwo.sayMyName())