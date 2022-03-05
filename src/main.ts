import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')
})

export default app

// Input
let wordForm = document.querySelector('form');
let wordInput = document.querySelector('.input-word');
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

