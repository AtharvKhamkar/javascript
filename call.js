function setName(username) {
    this.username = username
    console.log("Called")
    
}

function createuser(username, email, password) {
    setName(username)

    this.email = email;
    this.password = password;
}

const chai = new createuser("chai", "chai@fb.com", "123")
console.log(chai)