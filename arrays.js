// const myArray = [1, 2, 3, 4, 5,"Atharv",true,[1,2,3]];
// console.log(myArray);

// const newArray = new Array(5, 6, 7, 8);
// console.log(newArray);

// newArray.push(10)
// console.log(newArray);

// newArray.push("Atharv")
// console.log(newArray);

// newArray.push(true)
// console.log(newArray)

// newArray.pop()
//console.log(newArray);

// newArray.unshift(9)
// console.log(newArray)

// newArray.unshift(1111)
// console.log(newArray)

// newArray.unshift(999)
// console.log(newArray);


// newArray.shift()
// newArray.shift()
// newArray.shift()
// console.log(newArray);

// console.log(newArray.includes(7))

// const myArray = [10, 20, 30, 40, 50, 60];

// console.log(myArray.indexOf(30));
// console.log(myArray.indexOf(0))

// const newArray = myArray.join();
// console.log(myArray);
// console.log(newArray)

// console.log("A ", myArray)
// const myn1 = myArray.splice(1, 3,70)
// console.log(myn1)
// console.log("B ", myArray)

// console.log(myArray)
// console.log(myArray.splice(2, 2))
// console.log(myArray)


const marvel_heroes = ["Thor", "IronMan", "Spiderman"]
const dc_heroes = ["Superman", "Flash", "Batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)

// const newArray = marvel_heroes.concat(dc_heroes)
// console.log(newArray)
// const decision = true
// const name = "Atharv"
// const newArray = [...marvel_heroes, ...dc_heroes,...name]
// console.log(newArray)


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const new_another_array = another_array.flat(Infinity)
console.log(new_another_array)

console.log(Array.isArray(new_another_array))
console.log(Array.isArray("Atharv"))
console.log(Array.isArray(true))

console.log(Array.from("Atharv"))

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1,score2,score3))

