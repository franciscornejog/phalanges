<script lang="ts">
  import { onDestroy } from 'svelte';
  let time = 1300;
  let isText: boolean = true;
  let word: string = 'abc';
  let letter: string = '';
  let i: number = 0;
  const interval = setInterval(showLetter, time);
  async function showLetter() {
    if (i < word.length) {
      letter = word[i];
    } else {
      letter = "";
    }
    i++;
  }
  onDestroy(() => clearInterval(interval));
</script>

<section>
  {#if isText}
    {letter}
  {:else}
    <img src="./assets/img/{letter}.png" alt="A hand showing an ASL letter."/>
  {/if}
</section>

<style>
  section {
    grid-column: 3 / 9;
    grid-row: 1 / 6;
    font-family: 'Gallaudet';
    font-size: 15em;
    line-height: 200px;
  }
</style>
