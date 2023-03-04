const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

let timerId = null;
let isActive = false;


buttonStart.addEventListener('click', onButtonStartClick);
buttonStop.addEventListener('click', onButtonStopClick)

function onButtonStartClick() {    
    if (isActive) {
        return;
    }
    isActive = true;
    timerId = setInterval(() => { 
        body.style.backgroundColor = getRandomHexColor()}, 1000)
};

function onButtonStopClick() {
    clearInterval(timerId);
    isActive = false;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }