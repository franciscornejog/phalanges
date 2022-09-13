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

<button on:click={clickHandler}>{lengthDisplay}</button>

<style>
button {
  grid-area: length;
}
</style>
