<script lang="ts">
  import { onInterval } from "./utils";
  import { isRunning, isText, randomIndex, time, wordType } from "./stores";

  let i: number = 0;
  let letter: string = "";
  let word: string = $wordType[$randomIndex];
  onInterval(showLetter, $time);
  function showLetter() {
    if (i < word.length) {
      letter = word[i];
    } else {
      $isRunning = false;
    }
    i++;
  }
</script>

{#if $isText}
  {letter}
{:else if letter != ""}
  <img src="src/assets/img/{letter}.png" alt="A hand showing an ASL letter."/>
{/if}
