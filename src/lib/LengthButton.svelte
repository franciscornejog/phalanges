<script lang="ts">
  import { wordType } from "./stores";
  import shortWords from "../assets/words/shortWords.json";
  import mediumWords from "../assets/words/mediumWords.json";
  import longWords from "../assets/words/longWords.json";

  let lengthDisplay = "Short";
  $wordType = shortWords;

  function clickHandler() {
    switch (lengthDisplay) {
      case "Short":
        lengthDisplay = "Medium";
        $wordType = mediumWords;
        break;
      case "Medium":
        lengthDisplay = "Long";
        $wordType = longWords;
        break;
      case "Long":
        lengthDisplay = "Short";
        $wordType = shortWords;
    }
  }
</script>

<label>Length</label>
<button on:click={clickHandler}>{lengthDisplay}</button>

<style>
  label, button {
    grid-column: 9 / 11;
  }
  label {
    grid-row: 4 / 5;
  }
  button {
    grid-row: 5 / 6;
  }
</style>
