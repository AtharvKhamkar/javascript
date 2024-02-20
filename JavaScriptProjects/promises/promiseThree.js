const resolveHello = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Hello")
        },10000)
    })

const resolveWorld = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("World")
        },5000)
    })


async function sequentialStart() {
    const hello = await resolveHello;
    console.log(hello)

    const world = await resolveWorld;
    console.log(world)
}

sequentialStart()