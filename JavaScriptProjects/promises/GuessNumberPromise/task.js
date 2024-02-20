const enterNumber = () => {
    return new Promise(function (resolve, reject) {
        const userInput = Number(window.prompt("Enter the number(1-6):"));
        const randomNumber = Math.floor(Math.random() * 6 + 1)

        if (isNaN(userInput)) {
            reject(new Error("Wrong Input Type"))
        } else if (userInput === randomNumber) {
            resolve({
                points: 2,
                randomNumber
            })
        } else if (userInput === randomNumber - 1 || userInput === randomNumber + 1) {
            resolve({
                points: 1,
                randomNumber
            })
        } else {
            resolve({
                points: 0,
                randomNumber
            })
        }
    })
}

const continueGame = () => {
    return new Promise(function (resolve, reject) {
        if (window.confirm("Do you want to continue game?")) {
            resolve(true);
        } else {
            resolve(false)
        }
    })
}

const guessGame = () => {
    enterNumber().then(
        function (data) {
            alert(`You got ${data.points} point and the number is ${data.randomNumber}`);
            continueGame().then(function (confirm) {
                if (confirm) {
                    guessGame()
                } else {
                    alert("Game Over!!")
                }
            })

        }
    ).catch(function (data) {
        alert(data)
    })
}



const start = () => {
      guessGame()
}

start();