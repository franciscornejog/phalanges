<script lang="ts">
  import { onInterval } from "./utils";
  import { isRunning, letter, randomIndex, time, wordType } from "./stores";

  let i: number = 0;
  let word: string = $wordType[$randomIndex];
  onInterval(showLetter, $time);
  function showLetter() {
    if (i < word.length) {
      $letter = word[i];
      i++;
    } else {
      $letter = "";
      $isRunning = false;
    }
  }
</script>
