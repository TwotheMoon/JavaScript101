const playBtn = document.querySelector(".playbtn");
const timer = document.querySelector(".timer");
const benner = document.querySelector(".benner");

const startGame = (() => {
    let timeLeft = 10;
    playBtn.innerText = "⬛"
    playBtn.classList.add("stopbtn");

    const downloadTimer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(downloadTimer);
            timer.innerText = `End`
        } else {
            timer.innerText = `00:${timeLeft}`;
        }
        timeLeft--;
    }, 1000);


});

const veiwImg = (() => {

});

playBtn.addEventListener("click", startGame);