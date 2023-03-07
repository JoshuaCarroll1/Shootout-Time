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
const modal = document.querySelector(".modal");
const information = document.querySelector(".information");
const closeButton = document.querySelector(".close-button");
const topLeft = document.getElementById("top-left");
const topRight = document.getElementById("top-right");
const middle = document.getElementById("middle");
const bottomLeft = document.getElementById("bottom-left");
const bottomRight = document.getElementById("bottom-right");
let user;
let computer;




playBtn.addEventListener("click", timerSlot);
information.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);


document.querySelector('.restart-button').addEventListener('click', function(){
    window.location.reload();
    return false;
  });

  function toggleModal()    {
    modal.classList.toggle("show-modal");
  }

  function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
  }

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


topLeft.addEventListener("click", displayImage);
topRight.addEventListener("click", displayImage);
bottomLeft.addEventListener("click", displayImage);
bottomRight.addEventListener("click", displayImage);
middle.addEventListener("click", displayImage);




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