<script lang="ts">
  import { letter, randomIndex, wordType } from "./stores";

  let value = "";
  function clickHandler(event: any) {
    event.preventDefault();
    if (value === $wordType[$randomIndex]) {
      $letter = "<i class='fas fa-check'></i>";
    } else {
      $letter = "<i class='fas fa-times'></i>";
    }
    value = "";
  }
</script>

<form action="">
  <input bind:value type="text" name="word" placeholder="Answer..." />
  <input on:click={clickHandler} type="submit" name="submit" class="fas fa-check" value="" />
</form>

<style>
form {
  gap: .5em;
  display: grid;
  grid-area: answer;
  grid-template-columns: repeat(3, 1fr);
}

input {
  color: var(--tertiary-color);
  background-color: var(--primary-color);
  border: none;
  font-size: 1.2em;
  height: 75px;
}

input[type="text"] {
  border-radius: 10px;
  padding-left: 25px;
  grid-column: 1 / 3;
}

input[type="submit"] {
  border-radius: 10px;
  transition: 0.2s ease-in-out;
  grid-column: 3 / 4;
}

input[type="submit"]:hover {
  background-color: var(--tertiary-color);
  color: var(--primary-color);
  border: none;
  border: 2px solid var(--primary-color);
}
</style>
