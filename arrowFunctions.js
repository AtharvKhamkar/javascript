const user = {
    username: "Atharv",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to the website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Aditya"
// user.welcomeMessage()
// console.log(user)
// 

// const chai = function() {
//     let username = "Atharv"
//     console.log(this.username)
// }

// chai()

const addTwo = (num1, num2) => num1 + num2

// addTwo(5, 4)
// console.log(addTwo(4,5))

// var person = {
//     username: "Atharv",
//     getName: function () {
//         const xyz = () => {
//             console.log(this)
//         }
//         xyz()
//     }
    
// }

// person.getName()

// function person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// let John = new person("john", 22)

// console.log(John)


// const abc = ()=> console.log("From abc")
// abc()

// var age = 28
// function displayAge() {
//     console.log(age)
//     console.log(this)
// }

// let person2 = {
//     age: 28,
//     displayAge: function displayAge(){
//         console.log(this.age)
//         console.log(this)
//     },
//     nestedPerson: {
//         age: 40,
//         displayAge: function displayAge() {
//             console.log(this.age)
//             console.log(this)
//         }
//     }
// }

// person2.nestedPerson.displayAge()

const person = {
    age: 28,
    greet1: function () {
        console.log("Greet1 ", this.age)
        console.log("Greet1 ", this)
        const greet2 = ()=> {
            console.log("Greet2 ", this.age)
            console.log("Greet2 ",this)
        }
        greet2()
    }
}

person.greet1()

var age = 40;
const greet2 = () => {
    console.log("From global scope",this.age)
    console.log("From global scope",this)
}

greet2()