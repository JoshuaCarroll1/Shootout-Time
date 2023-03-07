/* jshint esversion: 11 */


/* Global Variables */
let timer;
let timerSeconds = 100;
const countdown = document.getElementById("countdown");
const playBtn = document.getElementById("play");
const restartBtn = document.querySelector('.restart-button');
const goalSpan = document.getElementById("goal");
const missedSpan = document.getElementById("missed");
let goals = 0;
let missed = 0;
let gameImg = document.getElementById("game-pic");
const modal = document.querySelector(".modal");
const information = document.querySelector(".information");
const closeButton = document.querySelector(".close-button");
const controlsArea = document.getElementById("controls-area");
const topLeft = document.getElementById("top-left");
const topRight = document.getElementById("top-right");
const middle = document.getElementById("middle");
const bottomLeft = document.getElementById("bottom-left");
const bottomRight = document.getElementById("bottom-right");
let user;
let computer;
const scoreArea = document.querySelector(".score-area");





playBtn.addEventListener("click", startGame);
information.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);


restartBtn.addEventListener('click', function () {
    window.location.reload();
});

function toggleModal() {
    modal.classList.toggle("show-modal");
}

window.addEventListener("click", windowOnClick);

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

function incrementGoal() {
    goals++;
    goalSpan.innerText = goals;
}

function incrementMiss() {
    missed++;
    missedSpan.innerText = missed;
}

function randomAiDirection() {
    const aiChoice = Math.floor(Math.random() * 5 + 1);

    switch (aiChoice) {
        case 1:
            computer = 'bottom-left';
            break;
        case 2:
            computer = 'bottom-right';
            break;
        case 3:
            computer = 'middle';
            break;
        case 4:
            computer = 'top-left';
            break;
        case 5:
            computer = 'top-right';
            break;
    }
}

function displayImage(e) {
    user = e.target.id;
    randomAiDirection();
    gameImg.src = `assets/images/${user}-${computer}.jpg`;

    if (user == computer) {
        incrementMiss();
    } else {
        incrementGoal();
    }
}


topLeft.addEventListener("click", displayImage);
topRight.addEventListener("click", displayImage);
bottomLeft.addEventListener("click", displayImage);
bottomRight.addEventListener("click", displayImage);
middle.addEventListener("click", displayImage);




function timerSlot() {
    timer = setInterval(function () {
        timerSeconds--;
        countdown.innerText = timerSeconds;
        if (timerSeconds <= 0) {
            clearInterval(timer);
            endResult();
        }
    }, 1000);
}


function endResult() {
    controlsArea.classList.add("hide");
    countdown.classList.add("hide");
    gameImg.src = 'assets/images/pen-set.jpg';
}

function startGame() {
    restartBtn.classList.remove("hide");
    scoreArea.classList.remove("hide");
    countdown.classList.remove("hide");
    controlsArea.classList.remove("hide");
    playBtn.classList.add("hide");
    timerSlot();
}