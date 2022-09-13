<script lang="ts">
  import { time } from "./stores";

  let slowerSpeed = 1300;
  let slowSpeed = 1000;
  let fastSpeed = 700;
  let fasterSpeed = 300;
  let speedDisplay = "Slower";
  $time = slowerSpeed;

  function clickHandler() {
    switch (speedDisplay) {
      case "Slower":
        speedDisplay = "Slow";
        $time = slowSpeed;
        break;
      case "Slow":
        speedDisplay = "Fast";
        $time = fastSpeed;
        break;
      case "Fast":
        speedDisplay = "Faster";
        $time = fasterSpeed;
        break;
      case "Faster":
        speedDisplay = "Slower";
        $time = slowerSpeed;
    }
  }
</script>

<button on:click={clickHandler}>{speedDisplay}</button>

<style>
button {
  grid-area: speed;
}
</style>
