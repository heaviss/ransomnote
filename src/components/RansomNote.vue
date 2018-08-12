<template>
  <div class="ransomnote">
    <span v-for="letter in text">{{ letter }}</span>
  </div>
</template>

<script>
export default {
  name: 'RansomNote',
  props: {
    text: String
  }
}
</script>

<style scoped>
</style>
