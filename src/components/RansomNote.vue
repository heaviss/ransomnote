<template>
  <div class="ransomnote">
    <RansomLetter v-for="letter in text" :letter="letter" :key="letter"></RansomLetter>
  </div>
</template>

<script>
import RansomLetter from '@/components/RansomLetter.vue'

export default {
  components: {
    RansomLetter
  },
  name: 'RansomNote',
  props: {
    text: String
  }
}
</script>

<style scoped>
</style>
