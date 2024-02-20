const JsUser = {
    name: "Hitesh",
    age: 18,
    location: "Pune",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays : ["monday","saturday"]
}


// console.log(JsUser)

const mySyn = Symbol("Key1")

JsUser[mySyn] = "myKey2"

// console.log(JsUser)

JsUser["email"] = "atharv@gmail.com"
JsUser["name"] = "Atharv"
JsUser["age"] = 21
// console.log(JsUser)

// Object.freeze(JsUser)
// JsUser["name"] = "Aditya"
// JsUser["age"] = 16
// console.log(JsUser)

JsUser.greeting = function () {
    console.log("My name is Adity")
}

// console.log(JsUser.greeting)

JsUser.greetingTwo = function () {
    console.log(`My name  is ${this.name}`)
}

// console.log(JsUser)

const tinderUser = new Object()
// console.log(tinderUser)

tinderUser.id = "123abc",
tinderUser.name = "Sammy",
tinderUser.isLoggedIn = false

// console.log(tinderUser)




// console.log(regularUser["name"]["userName"]["lastName"])

const obj1 = {
    1: "a",
    2:"b"
}

const obj2 = {
    3: "c",
    4:"d"
}

// const obj3 = { obj1, obj2 }
// console.log(obj3)

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3)

// const obj3 = { ...obj1, ...obj2, ...JsUser, ...regularUser, ...tinderUser }
// console.log(obj3)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))
const regularUser = {
    email: "some@gmail.com",
    name: {
        userName: {
            firstName : "Atharv",
            lastName : "Khamkar"
        }
    },
    age : 16
}

const { userName:name } = regularUser.name

console.log(name)