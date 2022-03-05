<script lang="ts">
  import { isText } from "./stores";

  function clickHandler() {
    if ($isText) {
      $isText = false;
    } else {
      $isText = true;
    }
  }
</script>

<button on:click={clickHandler}>
  {#if $isText}
    <img src="img/a.png" alt="A picture of a hand signing the letter a."/>
  {:else}
    a
  {/if}
</button>

<style>
  button {
    font-family: "Gallaudet";
    font-size: 6em;
    grid-column: 1 / 3;
    grid-row: 1 / 3;
  }
</style>
