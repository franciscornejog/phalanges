import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')
})

export default app

import mediumWords from './assets/words/mediumWords.json'
import longWords from './assets/words/longWords.json'

// Input
let wordForm = document.querySelector('form');
let wordInput = document.querySelector('.input-word');
let letter = document.querySelector('.show-letter');
wordForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let input = wordInput.value;
    // if (input === wordLength[randomNumber]) {
    //     letter.innerHTML = "<i class='fas fa-check'></i>";
    // } else {
    //     letter.innerHTML = "<i class='fas fa-times'></i>";
    // }
    wordInput.value = "";
});

// Default Speed
let slowerSpeed = 1300;
let slowSpeed = 1000;
let fastSpeed = 700;
let fasterSpeed = 300;
let speedBtn = document.querySelector('.btn-speed');
let currentSpeed = speedBtn.textContent;
let time = slowerSpeed;
checkSpeed(currentSpeed);
function checkSpeed(speed) {
    if (speed === 'Slower') {
        time = slowerSpeed;
    } else if (speed === 'Slow') {
        time = slowSpeed;
    } else if (speed === 'Fast') {
        time = fastSpeed;
    } else if (speed === 'Faster') {
        time = fasterSpeed;
    }
}
speedBtn.addEventListener('click', () => {
    switch (currentSpeed) {
        case 'Slower':
            currentSpeed = 'Slow';
            break;
        case 'Slow':
            currentSpeed = 'Fast';
            break;
        case 'Fast':
            currentSpeed = 'Faster';
            break;
        case 'Faster':
            currentSpeed = 'Slower';
    }
    speedBtn.textContent = currentSpeed;
    checkSpeed(currentSpeed);
});

// Control length of word
let lenBtn = document.querySelector('.btn-length');
let currentLength = lenBtn.textContent;
let wordLength = mediumWords;
checkLength(currentLength);
function checkLength(len) {
    switch (len) {
        case 'Short':
            // wordLength = shortWords;
            break;
        case 'Medium':
            wordLength = mediumWords;
            break;
        case 'Long':
            wordLength = longWords;
    } 
}
lenBtn.addEventListener('click', () => {
    switch (currentLength) {
        case 'Short':
            currentLength = 'Medium';
            break;
        case 'Medium':
            currentLength = 'Long';
            break;
        case 'Long':
            currentLength = 'Short';
    }
    lenBtn.textContent = currentLength;
    checkLength(currentLength);
});

