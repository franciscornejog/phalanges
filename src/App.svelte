<script lang="ts">
  import Display from "./lib/Display.svelte"
  import ModeButton from "./lib/ModeButton.svelte";
  import SpeedButton from "./lib/SpeedButton.svelte";
  import LengthButton from "./lib/LengthButton.svelte";
  import WordButton from "./lib/WordButton.svelte";
  import AnswerForm from "./lib/AnswerForm.svelte";
  import Cheatsheet from "./lib/Cheatsheet.svelte";
</script>

<header>
  <h1>Phalanges</h1>
</header>
<main>
  <Display/>
  <ModeButton/>
  <SpeedButton/>
  <LengthButton/>
  <WordButton isNewWord={true}/>
  <WordButton/>
  <AnswerForm/>
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

:global(img) {
    width: 100%;
}

:global(label) {
	align-self: end;
	grid-column: span 2;
	grid-row: span 1;
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
