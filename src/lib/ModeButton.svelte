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
    font-size: 6.2em;
    line-height: 75px;
    grid-area: mode;
  }
  img {
    padding-bottom: 10px;
  }
</style>
