<template>
  <span>{{ letter }}</span>
</template>

<script>
export default {
  name: 'RansomNote',
  props: {
    letter: String
  }
}
</script>

<style scoped>
:root {
  --font-color: hsl(180, 100%, 25%);
}

</style>
