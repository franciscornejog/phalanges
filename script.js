// Get a random word and show it
let randomNumber = 0;
let newWordBtn = document.querySelector('.btn-new-word');
newWordBtn.addEventListener('click', getWord);
function getWord() {
  fetch(wordLength)
    .then(res => res.json())
    .then(array => {
      randomNumber = Math.floor(Math.random() * array.length);
      showLetter(array[randomNumber]);
    });
}

// Replay word
let replayBtn = document.querySelector('.btn-replay');
replayBtn.addEventListener('click', replayWord);
function replayWord() {
  fetch(wordLength)
    .then(res => res.json())
    .then(array => showLetter(array[randomNumber]));
}

// Input
let wordForm = document.querySelector('form');
let wordInput = document.querySelector('.input-word');
let letter = document.querySelector('.show-letter');
wordForm.addEventListener('submit', function(e) {
  e.preventDefault();
  let input = wordInput.value;
  fetch(wordLength)
    .then(res => res.json())
    .then(array => {
      if (input === array[randomNumber]) {
        letter.innerHTML = "<i class='fas fa-check'></i>";
      } else {
        letter.innerHTML = "<i class='fas fa-times'></i>";
      }
    });
  wordInput.value = "";
});

// Default Speed
let slowSpeed = 1000;
let mediumSpeed = 700;
let fastSpeed = 300;
let speedBtn = document.querySelector('.btn-speed');
let speedMultiple = 1;
checkSpeed(speedBtn.textContent);
function checkSpeed(speed) {
  if (speed === '1x') {
    time = slowSpeed;
  } else if (speed === '2x') {
    time = mediumSpeed;
  } else if (speed === '3x') {
    time = fastSpeed;
  }
}

speedBtn.addEventListener('click', () => {
  if (speedMultiple < 3) {
    speedBtn.textContent = ++speedMultiple + 'x';
  } else {
    speedMultiple = 1; 
    speedBtn.textContent = speedMultiple + 'x';
  }
  checkSpeed(speedBtn.textContent);
});

// Control length of word
let shortWords = "words-short.txt";
let mediumWords = "words-medium.txt";
let longWords = "words-long.txt";
let diffBtn = document.querySelector('.btn-difficulty');
checkDifficulty(diffBtn.childNodes);
function checkDifficulty(diff) {
  if (diff.length === 1) {
    wordLength = shortWords;
  } else if (diff.length === 2) {
    wordLength = mediumWords;
  } else if (diff.length === 3) {
    wordLength = longWords;
  } 
}

diffBtn.addEventListener('click', () => {
  let i = document.createElement('i');
  i.className = 'fas fa-fist-raised';
  if (diffBtn.childNodes.length < 3) {
    diffBtn.appendChild(i); 
  } else {
    diffBtn.removeChild(diffBtn.childNodes[0]); 
    diffBtn.removeChild(diffBtn.childNodes[1]); 
  }
  checkDifficulty(diffBtn.childNodes);
});

// Show each letter of a word
let wait = ms => new Promise(resolve => setTimeout(resolve, ms));
async function showLetter(word) {
  for (let i = 0, len = word.length; i < len; i++) {
    letter.textContent = word[i];
    checkTime();
    await wait(time);
  }
  letter.textContent = "";
}
let checkTime = () => { if (time <= 0) time = 100; }

