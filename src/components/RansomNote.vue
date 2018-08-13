<template>
  <div class="ransomnote">
    <RansomLetter v-for="(letter, index) in text" 
                  :letter="letter" 
                  :key="index"
                  :randomFontColor="randomFontColor">
    </RansomLetter>
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
    text: String,
    randomFontColor: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
</style>
