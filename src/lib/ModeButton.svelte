<script lang="ts">
  import src from "../assets/img/a.png"
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
    <img {src} alt="A picture of a hand signing the letter a."/>
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
