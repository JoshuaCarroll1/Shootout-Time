/* jshint esversion: 11 */

let timer;
let timerSeconds = 100;
const countdown = document.getElementById("countdown");
const playBtn = document.getElementById("play");
const goalSpan = document.getElementById("goal");
const missedSpan = document.getElementById("missed");
let goals = 0;
let missed = 0;
const controlButtons = document.querySelectorAll(".control-buttons");
let gameImg = document.getElementById("game-pic");

playBtn.addEventListener("click", timerSlot);

document.querySelector('.restart-button').addEventListener('click', function(){
    window.location.reload();
    return false;
  });

function incrementGoal()    {
    goals++;
    goalSpan.innerText = goals;
}

function incrementMiss()    {
    missed++;
    missedSpan.innerText = missed;
}

function randomAiDirection()  {
    const aiChoice = math.floor(math.random() * 5 + 1);

    switch (aiChoice) {
        case 1:
            randomAiDirection = 'bottom-left';
            break;
        case 2:
            randomAiDirection = 'bottom-right';
            break;
        case 3:
            randomAiDirection = 'middle';
            break;
        case 4:
            randomAiDirection = 'top-left';
            break;
        case 5:
            randomAiDirection = 'top-right';
            break;

    }
}

function displayImage() {

}

top-left.addEventListener("click", controls-area);
top-right.addEventListener("click", controls-area);
bottom-left.addEventListener("click", controls-area);
bottom-right.addEventListener("click", controls-area);
middle.addEventListener("click", controls-area);

document.getElementById("game-pic").src = 'assets/images/$middle.jpg';
document.getElementById("game-pic").src = 'assets/images/$bottom-left.jpg';
document.getElementById("game-pic").src = 'assets/images/$top-left.jpg';
document.getElementById("game-pic").src = 'assets/images/$bottom-right.jpg';
document.getElementById("game-pic").src = 'assets/images/$top-right.jpg';


function timerSlot()    {
    timer = setInterval(function() {
        timerSeconds--;
        countdown.innerText = timerSeconds;
        if (timerSeconds <= 0){
            clearInterval(timer);
        }
    }, 1000);
}

function directionShot()    {

}

function endResult()    {

}