<script lang="ts">
  import Word from "./Word.svelte";
  import { isRunning, isText, letter } from "./stores";
</script>

{#if $isRunning}
  <Word/>
{/if}

<section>
  {#if $isText || (!$isText && $letter.includes("class")) }
    {@html $letter}
  {:else if $letter != ""}
    <img src="img/{$letter}.png" alt="A hand showing an ASL letter."/>
  {/if}
</section>

<style>
  section {
    font-family: "Gallaudet";
    font-size: 15em;
    line-height: 350px;
    grid-area: display;
  }
</style>
