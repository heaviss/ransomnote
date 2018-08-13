<template>
  <div id="app">
    <RansomNote text="Hi!"/>
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
