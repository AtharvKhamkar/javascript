// class User{
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }

//     changeUsername() {
//         return `${this.username.toUpperCase()} changed to upper case`
//     }
// }

// const chai = new User("Atharv", "Atharvkhamkar@gmail.com", "1234")
// console.log(chai.changeUsername())

// Behind the scene 

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`
}

User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()} changed to upper case`
}

const tea = new User("Aditya","adityakhamkar2002","1234")

console.log(tea.encryptPassword())
console.log(tea.changeUsername())