<script lang="ts">
  import "./assets/style.css"
  import Display from "./lib/Display.svelte"
  import ModeButton from "./lib/ModeButton.svelte";
  import WordButton from "./lib/WordButton.svelte";
  import SpeedButton from "./lib/SpeedButton.svelte";
  import LengthButton from "./lib/LengthButton.svelte";
  import Cheatsheet from "./lib/Cheatsheet.svelte";
  import { isRunning } from "./lib/stores";

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
  <ModeButton/>
  <SpeedButton/>
  <LengthButton/>
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
:root {
  --primary-color: #ffccbc;
  --secondary-color: #ff8a65;
  --tertiary-color: #ff5722;
}
@font-face {
  font-family: "Gallaudet";
  src: url("./assets/fonts/Gallaudet.ttf");
}

:global(body) {
  background-color: var(--tertiary-color);
  color: var(--primary-color);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  line-height: 1.8;
  text-align: center;
  margin: 0 5%;
}

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

:global(img) {
    width: 100%;
}

:global(label) {
	align-self: end;
	grid-column: span 2;
	grid-row: span 1;
}

section {
  grid-column: 3 / 9;
  grid-row: 1 / 6;
  font-family: "Gallaudet";
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
input[type="text"] {
  border-radius: 10px 0 0 10px;
  padding-left: 25px;
}
input[type="submit"] {
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
