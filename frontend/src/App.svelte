<script>
  import { Greet } from "../wailsjs/go/main/App.js";

  let resultText = "Please enter your name below 👇";
  let name;

  function greet() {
    Greet(name).then((result) => (resultText = result));
  }
</script>

<div class="result" id="result">{resultText}</div>
<div class="input-box" id="input">
  <input
    autocomplete="off"
    bind:value={name}
    class="input"
    id="name"
    type="text"
  />
  <button class="btn" on:click={greet}>Greet</button>
</div>

<style>
</style>
