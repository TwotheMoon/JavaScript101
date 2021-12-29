const playBtn = document.querySelector(".playbtn");
const timer = document.querySelector(".timer");
const benner = document.querySelector(".benner");
const retryBtn = document.querySelector(".retryBtn");

const startGame = (() => {
    benner.classList.add("hidden");
    let timeLeft = 10;
    playBtn.innerText = "⬛"
    playBtn.classList.add("stopbtn");

    const downloadTimer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(downloadTimer);
            timer.innerText = `End`

            popUPLostbenner();
        } else {
            timer.innerText = `00:${timeLeft}`;
        }
        timeLeft--;
    }, 1000);


});

const popUPLostbenner = (() => {
    benner.classList.remove("hidden");
    retryBtn.addEventListener("click", startGame);

});

playBtn.addEventListener("click", startGame);