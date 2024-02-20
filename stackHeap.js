let name = "Atharv"
let anotherName = name
anotherName = "Aditya"
// console.log(name)
// console.log(anotherName)

let box1 = {
    width: 100,
    height: 10
};

let box2 = {
    width: 200,
    height:20
}

box1 = box2

// console.log(box1.width)
// console.log(box1.height)

box2.width = 500
box2.height = 50

// console.log(box1.height)
// console.log(box1.width)

let newArray = ["name1", "name2", "name3"]

let anotherArray = ["name4", "name5", "name6"]

newArray = anotherArray

console.log(newArray)

newArray[0] = "name8"

console.log(newArray[0])