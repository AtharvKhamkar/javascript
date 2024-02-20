let score = "33"
let converted = Number(score)
// console.log(typeof converted)
// console.log(converted)

//"33" -> Number -> 33
//"33aa" -> Number -> Nan
//true -> Number -> 1
//false -> Number -> 0
//undefined -> Number -> NaN
//null -> Number -> NaN

let isLoggedIn = "a"
let convertedIsLoggedIn = Boolean(isLoggedIn)
//console.log(convertedIsLoggedIn)
//If a Input is 1 then it is converted to boolean "true" using Boolean function 
//If a Input is 0 then it is converted to boolean "false" using Boolean function
//If it is a empty string then in Boolean it is converted as false.
//If it is a non empty string then in Boolean it is converted as true.

//Conversion of Number to String
let someNumber = null
let convertedNumber = String(someNumber)
console.log(convertedNumber)
//All the values that are assigned to a particular variable that can be converted into string