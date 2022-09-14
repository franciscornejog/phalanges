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
  <AnswerForm/>
  <WordButton isNewWord={true}/>
  <WordButton/>
  <ModeButton/>
  <LengthButton/>
  <SpeedButton/>
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
  font-family: Helvetica, sans-serif;
  font-size: calc(15px + 0.390625vw);
  line-height: 1.8;
  text-align: center;
  margin: 0 5%;
  overflow: hidden;
}

h1 {
  font-size: 1.5rem;
}

main {
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 50vh 75px 75px 75px 1fr;
  grid-template-areas:
    "display display display"
    "answer answer answer"
    "play replay mode"
    "speed length cheat"
    "cheatsheet cheatsheet cheatsheet";
  gap: .5em;
}

:global(img) {
    height: 100%;
    max-width: 100%;
    object-fit: cover;
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
