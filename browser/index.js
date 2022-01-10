const input = document.querySelector(".textInput");
const span = document.querySelector(".span");
const clock = document.querySelector(".clock");

function getInputVelue() {
    const value = input.value;
    console.log(value);

    span.innerText = `${value}`;

}

const getClock = (() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    clock.innerText = `${hours}:${minutes}:${seconds}`;
});

getClock();
setInterval(getClock, 1000);

input.addEventListener("change", getInputVelue);