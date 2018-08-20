<template>
  <div id="app" class="flex-container">
    <p class="flex-item"> ... </p>
    <p class="flex-item">Out of the envelope he took a half-sheet of foolscap paper folded into four. This he opened and spread flat upon the table. Across the middle of it a single sentence had been formed by the expedient of pasting printed words upon it. It ran:</p>
    <p class="flex-item note">
      <RansomNote text="As you value your life or your reason keep away from the "/>
      <em>moor.</em>
    </p>
    <p class="flex-item">The word “moor” only was printed in ink.</p>
    <p class="flex-item"> ... </p>
  </div>
</template>

<script>
import RansomNote from '@/components/RansomNote.vue'

export default {
  name: 'app',
  components: {
    RansomNote
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
.flex-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.flex-item {
  width: 60%;
  min-width: 500px;
  max-width: 1000px;
}
.note {
  display: flex;
  font-size: 14px;
}
</style>
