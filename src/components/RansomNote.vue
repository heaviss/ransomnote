<template>
  <span class="ransomnote">
    <template v-for="(letter, index) in text" >
      <RansomLetter v-if="!/\s/.exec(letter)"
                    :letter="letter" 
                    :key="index"
                    :randomFontColor="randomFontColor"
                    :randomBackColor="randomBackColor"
                    :randomFontCase="randomFontCase"
                    :randomMargins="randomMargins"
                    :randomPaddings="randomPaddings"
                    :randomRotation="randomRotation"
                    :randomAlign="randomAlign"
                    :randomFontSize="randomFontSize"
                    >
      </RansomLetter>
      <template v-else>&#8194;</template>
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
    randomMargins: {
      type: Boolean,
      default: true
    },
    randomPaddings: {
      type: Boolean,
      default: true
    },
    randomRotation: {
      type: Boolean,
      default: true
    },
    randomAlign: {
      type: Boolean,
      default: true
    },
    randomFontSize: {
      type: Boolean,
      default: true
    },
  }
}
</script>

<style scoped>
.ransomnote {
  display: flex;
  align-items: baseline;
}
</style>
