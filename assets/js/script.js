/* jshint esversion: 11 */

let timer;
let timerSeconds = 10;
const countdown = document.getElementById("countdown");
const playBtn = document.getElementById("play");
const goalSpan = document.getElementById("goal");
const missedSpan = document.getElementById("missed");
let goals = 0;
let missed = 0;

playBtn.addEventListener("click", timerSlot);

function incrementGoal()    {
    goals++;
    goalSpan.innerText = goals;
}

function incrementMiss()    {
    missed++;
    missedSpan.innerText = missed;
}

function displayImage() {

}

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