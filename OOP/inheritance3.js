class User{
    constructor(username) {
        this.username = username;
    }

    logMe() {
        return `Username is ${this.username}`
    }
}

class Teacher extends User{
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A course was added by ${this.username}`)
    }
}

const chai = new Teacher("Atharv", "khamkarAtharv@gmail.com", "ABC")
const masalaChai = new User("Aditya")

console.log(masalaChai.logMe("Atharv"))