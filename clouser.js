const myName = document.getElementById("myName");
const btn = document.getElementById("btn");


function changeTextSize(size) {
    console.log("Size transferred to inner function")
    return function () {
        console.log("size changed")
        myName.style.fontSize = `${size}px`;
    }
}

btn.addEventListener('click',changeTextSize(150))