<script lang="ts">
  import Word from "./Word.svelte";
  import { isRunning, isText, letter } from "./stores";
</script>

{#if $isRunning}
  <Word/>
{/if}

<section>
  {#if $isText}
    {@html $letter}
  {:else if $letter != ""}
    <img src="img/{$letter}.png" alt="A hand showing an ASL letter."/>
  {/if}
</section>

<style>
  section {
    grid-column: 3 / 9;
    grid-row: 1 / 6;
    font-family: "Gallaudet";
    font-size: 15em;
    line-height: 200px;
  }
</style>
