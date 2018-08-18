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
    },
    randomBackColor: {
      type: Boolean,
      default: true
    },
    randomFontCase: {
      type: Boolean,
      default: true
    },
  },
  methods: {
    rand: function(min, max){
      return Math.floor(Math.random() * (max - min) + min);
    },
    randomizeFontColor: function() {
      const font_h = this.rand(0, 360)
      const font_l = this.rand(0, 26)
      this.$el.style.setProperty('--font-color', `hsl(${font_h}, 100%, ${font_l}%)`)
    },
    randomizeBackgroundColor: function() {
      const font_h = this.rand(0, 360)
      const font_l = this.rand(88, 101)
      this.$el.style.setProperty('--back-color', `hsl(${font_h}, 100%, ${font_l}%)`)
    },
    randomizeFontCase: function() {
      const font_case = ['uppercase', 'lowercase'][this.rand(0, 2)]
      this.$el.style.setProperty('--font-case', font_case)
    }
  },
  mounted: function() {
    if(this.randomFontColor) {this.randomizeFontColor()}
    if(this.randomBackColor) {this.randomizeBackgroundColor()}
    if(this.randomFontCase) {this.randomizeFontCase()}
  }
}
</script>

<style scoped>

span {
  --font-color: hsl(0, 100%, 10%);
  --back-color: hsl(0, 100%, 90%);
  --font-case: none;

  color: var(--font-color);
  background-color: var(--back-color);
  text-transform: var(--font-case);

  margin: 0.1em;
  padding: 0.1em;
  vertical-align: baseline;
  border: 1px solid black;
}

</style>
