<script lang="ts">
  let isClosed: boolean = true;

  function clickHandler() {
    isClosed = !isClosed;
  }
</script>

{#if isClosed}
  <button on:click="{() => isClosed = !isClosed}"><i class="fas fa-arrow-down"></i></button>
{:else}
  <button on:click="{() => isClosed = !isClosed}"><i class="fas fa-arrow-up"></i></button>
  <img src="img/cheatsheet.png" alt="A list of hand symbols in ASL."/>
{/if}

<style>
  button {
    grid-area: cheat;
  }
  img {
    background-color: var(--primary-color);
    border-radius: 10px;
    grid-area: cheatsheet;
    padding: 10px 0;
  }
</style>
