<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { randomIndex, wordType } from './stores';

  export let isNewWord = false;

  const dispatch = createEventDispatcher();

  function clickHandler() {
    if (isNewWord) {
      $randomIndex = Math.floor(Math.random() * $wordType.length);
    }
    dispatch('newWordEvent');
  }
</script>

{#if isNewWord}
  <button class:isNewWord on:click={clickHandler}><i class="fas fa-step-forward"></i></button>
{:else}
  <button on:click={clickHandler} class="btn-replay"><i class="fas fa-redo"></i></button>
{/if}

<style>
  .isNewWord {
    grid-column: 1 / 3;
    grid-row: 6 / 7;
  }
  .btn-replay {
    grid-column: 9 / 11;
    grid-row: 6 / 7;
  }
</style>

