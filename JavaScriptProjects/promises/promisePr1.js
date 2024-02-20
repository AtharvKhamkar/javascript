const onMyBirthday = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let iskaySick = true
        if (!iskaySick) {
            resolve(2)
        } else {
            reject("Error: I am sad")
        }
    },1000)
})

onMyBirthday.then(
    function (data) {
        console.log(`I will be having ${data} cakes`)
    }
).catch(
    function (data) {
        console.log(data)
    }
).finally(
    function () {
        console.log("I will celebrate my birthday")
    }
)