let myName = "hitesh    "

// console.log(myName.length)

let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "slice",
    
    getSpidermanPower: function () {
        console.log(`Spiderman power is ${this.spiderman}`)
    }
}

Object.prototype.Atharv = function () {
    console.log("Atharv is present in all objects")
}

Array.prototype.sayMyName = function () {
    console.log("My name is Atharv")
}

//Inheritance
const userInfo = {
    name: "Atharv",
    gmail : "khamkaratharv2002@gmail.com"
}
const Teacher = {
    makeVideo : true
}

const teachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment: "Js Assignment",
    fullTime: true,
    //__proto__: teachingSupport,
}

// Teacher.__proto__ = user;
// console.log(Teacher.gmail)

Object.setPrototypeOf(teachingSupport, Teacher)
Object.setPrototypeOf(Teacher,userInfo)
console.log(teachingSupport.makeVideo)
console.log(Teacher.gmail)
// myHeroes.sayMyName()