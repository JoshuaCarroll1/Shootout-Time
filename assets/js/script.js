let startingSeconds = 100;

let countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown() {

    
    countdownEl.innerHTML = `${seconds}`;
    time--;
}