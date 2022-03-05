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
  grid-column: 4 / 8;
  display: flex;
  justify-content: center;
}

input {
  color: var(--tertiary-color);
  background-color: var(--primary-color);
  border: none;
  font-size: 1.2em;
}

input[type="text"] {
  border-radius: 10px 0 0 10px;
  padding-left: 25px;
}

input[type="submit"] {
  border-radius: 0 10px 10px 0;
  padding-right: 25px;
  padding-left: 25px;
  transition: 0.2s ease-in-out;
}

input[type="submit"]:hover {
  background-color: var(--tertiary-color);
  color: var(--primary-color);
  border: none;
  border: 2px solid var(--primary-color);
}
</style>
