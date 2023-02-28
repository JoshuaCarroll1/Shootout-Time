/* jshint esversion: 11 */

let timer;
let timerSeconds = 10;
const countdown = document.getElementById("countdown");
const playBtn = document.getElementById("play");

playBtn.addEventListener("click", timerSlot);

function incrementGoal()    {
    let oldScore = document.getElementById("goal").innerText;
    document.getElementById("goal").innerText = ++oldScore;
}

function incrementMiss()    {
    let oldScore = document.getElementById("missed").innerText;
    document.getElementById("missed").innerText = ++oldScore;
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