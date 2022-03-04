<script lang="ts">
  import cheatsheet from '../assets/img/cheatsheet.png'
  let isClosed: boolean = true;
</script>

<section class:isClosed on:click="{() => isClosed = !isClosed}">
  {#if isClosed}
      <i class='fas fa-arrow-down'></i>
  {:else}
      <img src={cheatsheet} alt="A list of hand symbols in ASL."/>
  {/if}
</section>

<style>
  section {
    color: var(--tertiary-color);
    background-color: var(--primary-color);
    font-size: 1.2em;
    margin-top: 10px;
    padding: 10px 30px;
    border-radius: 10px;
    grid-column: 2 / 10;
  }
  .isClosed {
    transition: 0.2s ease-in;
  }
  .isClosed:hover {
    background-color: var(--tertiary-color);
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
  }
</style>
