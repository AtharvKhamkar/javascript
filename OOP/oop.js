function user(userId, userName, loggedIn) {
    this.userId = userId;
    this.userName = userName;
    this.loggedIn = loggedIn;

    return this;
}

const userOne = new user(1, "Atharv", "5")
const userTwo = new user(2,"Aditya",8)
console.log(userOne)
console.log(userTwo)