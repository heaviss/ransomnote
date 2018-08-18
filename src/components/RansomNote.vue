<template>
  <span class="ransomnote">
    <template v-for="(letter, index) in text" >
      <RansomLetter v-if="!/\s/.exec(letter)"
                    :letter="letter" 
                    :key="index"
                    :randomFontColor="randomFontColor"
                    :randomBackColor="randomBackColor"
                    :randomFontCase="randomFontCase"
                    >
      </RansomLetter>
      <template v-else>{{letter}}</template>
    </template>
  </span>
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
    },
    randomBackColor: {
      type: Boolean,
      default: true
    },
    randomFontCase: {
      type: Boolean,
      default: true
    },
  }
}
</script>

<style scoped>
</style>
