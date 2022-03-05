<script lang="ts">
  import './assets/style.css'
  import a from './assets/img/a.png'
  import Display from './lib/Display.svelte'
  import WordButton from './lib/WordButton.svelte';
  import Cheatsheet from './lib/Cheatsheet.svelte';
  import { isRunning } from './lib/stores';

  function clickHandler() {
    $isRunning = true;
  }
</script>

<header>
  <h1>Phalanges</h1>
</header>
<main>
  <section>
  {#if $isRunning}
    <Display/>
  {/if}
  </section>
  <button class="btn-mode"><img src={a} alt="A picture of a hand signing the letter a."/></button>
  <label class="label-speed">Speed</label>
  <button class="btn-speed">Slower</button>
  <label class="label-length">Length</label>
  <button class="btn-length">Short</button>
  <WordButton on:newWordEvent={clickHandler} isNewWord={true}/>
  <WordButton on:newWordEvent={clickHandler}/>
  <form action="">
    <input class="input-word"
           type="text"
           name="word"
           placeholder="Answer..." />
    <input type="submit" name="submit" class="fas fa-check" value="" />
  </form>
  <Cheatsheet/>
</main>

<style>
/* Default Variables */
:root {
  --primary-color: #ffccbc;
  --secondary-color: #ff8a65;
  --tertiary-color: #ff5722;
}
@font-face {
  font-family: 'Gallaudet';
  src: url('./assets/fonts/Gallaudet.ttf');
}

/* Body */
main {
  text-align: center;
  padding: 1em;
  margin: 0 auto;
  display: grid;
  grid: repeat(6, 50px) / repeat(10, 10%);
  grid-gap: 10px 0;
}

/* Form */
form {
  grid-column: 4 / 8;
  display: flex;
  justify-content: center;
}

/* Image */
img {
    width: 100%;
}

/* Button Mode */
.btn-mode {
    font-family: 'Gallaudet';
    font-size: 6em;
    grid-column: 1 / 3;
    grid-row: 1 / 3;
}

label {
	align-self: end;
	grid-column: span 2;
	grid-row: span 1;
}
.label-speed, .btn-speed {
	grid-column: 1 / 3;
}
.label-length, .btn-length {
	grid-column: 9 / 11;
}
.label-length, .label-speed {
	grid-row: 4 / 5;
}
.btn-length, .btn-speed {
	grid-row: 5 / 6;
}
section {
  grid-column: 3 / 9;
  grid-row: 1 / 6;
  font-family: 'Gallaudet';
  font-size: 15em;
  line-height: 200px;
}

/* Input */
input {
  color: var(--tertiary-color);
  background-color: var(--primary-color);
  border: none;
  font-size: 1.2em;
}
input[type='text'] {
  border-radius: 10px 0 0 10px;
  padding-left: 25px;
}
input[type='submit'] {
  border-radius: 0 10px 10px 0;
  padding-right: 25px;
  padding-left: 25px;
  transition: 0.2s ease-in-out;
}
input[type="submit"]:hover {
  background-color: var(--tertiary-color);
  color: var(--primary-color);
  border: none;
  border: 2px solid var(--primary-color);
}

/* Buttons */
:global(button) {
  color: var(--tertiary-color);
  background-color: var(--primary-color);
  font-size: 1.2em;
  border: none;
  border-radius: 10px;
  transition: 0.2s ease-in;
}
:global(button:hover) {
  color: var(--primary-color);
  background-color: var(--tertiary-color);
  border: 2px solid var(--primary-color);
}
</style>
