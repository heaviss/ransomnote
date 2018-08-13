<template>
  <span>{{ letter }}</span>
</template>

<script>
export default {
  name: 'RansomNote',
  props: {
    letter: String,
    randomFontColor: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    randomizeFontColor: function() {
      const font_h = Math.floor(Math.random() * (360 - 0));
      const font_l = Math.floor(Math.random() * (26 - 0));
      this.$el.style.setProperty('--font-color', `hsl(${font_h}, 100%, ${font_l}%)`)
    }
  },
  mounted: function() {
    if(this.randomFontColor) {this.randomizeFontColor()}
  }
}
</script>

<style scoped>

span {
  --font-color: hsl(0, 100%, 10%);

  color: var(--font-color);
}

</style>
