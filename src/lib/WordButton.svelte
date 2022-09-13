<script lang="ts">
  import { isRunning, randomIndex, wordType } from './stores';

  export let isNewWord = false;

  function clickHandler() {
    if (isNewWord) {
      $randomIndex = Math.floor(Math.random() * $wordType.length);
    }
    $isRunning = true;
  }
</script>

{#if isNewWord}
  <button class:isNewWord on:click={clickHandler}><i class="fas fa-play"></i></button>
{:else}
  <button on:click={clickHandler}><i class="fas fa-redo"></i></button>
{/if}

<style>
  button {
    grid-area: replay;
  }
  .isNewWord {
    grid-area: play;
  }

</style>

