const mySmb = Symbol("symbol");

const JsUser = {
    name: "Atharv",
    age: 22,
    location: "Pune",
    email: "Khamkaratharv2002@gmail.com",
    isLoggedIn: false,
    [mySmb] : "mykey"
    
}



JsUser.greetings = function () {
    console.log(`Hey, I am ${this.name}`);
}


const newUser = new Object();

newUser.name = "Aditya"
newUser.email = "khamkaraditya2006@gmail.com"
newUser.location = "Mumbai"

// const combinedUser = { JsUser, newUser };
// console.log(combinedUser);

// const combinedUser = Object.assign({}, JsUser, newUser);
// console.log(combinedUser);

// const combinedUser = { ...JsUser, ...newUser };
// console.log(combinedUser);

// console.log(Object.entries(JsUser));

// console.log(JsUser.hasOwnProperty('birth_date'));

const { email } = JsUser;

console.log(email);