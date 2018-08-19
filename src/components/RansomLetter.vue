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
    randomMargins: {
      type: Boolean,
      default: true
    },
    randomPaddings: {
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
    },
    randomizeMargins: function() {
      const margin = Math.random() * (0.1984 - 0.05) + 0.05
      this.$el.style.setProperty('--margins', `${margin}em`)
    },
    randomizePaddings: function() {
      const padd = Math.random() * (0.1984 - 0.05) + 0.05
      this.$el.style.setProperty('--paddings', `${padd}em`)
    }
  },
  mounted: function() {
    if(this.randomFontColor) {this.randomizeFontColor()}
    if(this.randomBackColor) {this.randomizeBackgroundColor()}
    if(this.randomFontCase) {this.randomizeFontCase()}
    if(this.randomMargins) {this.randomizeMargins()}
    if(this.randomPaddings) {this.randomizePaddings()}
  }
}
</script>

<style scoped>

span {
  --font-color: hsl(0, 100%, 10%);
  --back-color: hsl(0, 100%, 90%);
  --font-case: none;
  --margins: 0.1em;
  --paddings: 0.1em;

  color: var(--font-color);
  background-color: var(--back-color);
  text-transform: var(--font-case);
  margin: var(--margins);
  padding: var(--paddings);

  vertical-align: baseline;
  border: 1px solid black;
}

</style>
