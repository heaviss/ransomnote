<template>
  <div id="app">
    <p>Out of the envelope he took a half-sheet of foolscap paper folded into four. This he opened and spread flat upon the table. Across the middle of it a single sentence had been formed by the expedient of pasting printed words upon it. It ran:</p>
    <p>
      <RansomNote text="As you value your life or your reason keep away from the "/>
      <span>moor.</span>
    </p>
    <p>The word “moor” only was printed in ink.</p>
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
</style>
