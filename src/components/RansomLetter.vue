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
    randomRotation: {
      type: Boolean,
      default: true
    },
    randomAlign: {
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
    setMargins: function() {
      if(this.randomMargins) {
        const margin = Math.random() * (0.1984 - 0.05) + 0.05
        this.$el.style.setProperty('--margins', `${margin}em`)
      }
      else { this.$el.style.setProperty('--margins', '0.1em') }
    },
    setPaddings: function() {
      if(this.randomMargins) {
        const padd = Math.random() * (0.1984 - 0.05) + 0.05
        this.$el.style.setProperty('--paddings', `${padd}em`)
      }
      else { this.$el.style.setProperty('--paddings', '0.1em') }
    },
    setRotation: function() {
      if(this.randomRotation) {
        const rotation = this.rand(-20, 20)
        this.$el.style.setProperty('--rotation', `rotate(${rotation}deg)`)
      }
      else { this.$el.style.setProperty('--rotation', 'none') }
    },
    setAlign: function() {
      if(this.randomAlign) {
        const align = ['flex-start', 'flex-end', 'center'][this.rand(0, 3)]
        this.$el.style.setProperty('--align', align)
      }
      else { this.$el.style.setProperty('--align', 'baseline') }
      
    },
  },
  mounted: function() {
    if(this.randomFontColor) {this.randomizeFontColor()}
    if(this.randomBackColor) {this.randomizeBackgroundColor()}
    if(this.randomFontCase) {this.randomizeFontCase()}
    this.setMargins()
    this.setPaddings()
    this.setRotation()
    this.setAlign()
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
  margin: var(--margins);
  padding: var(--paddings);
  transform: var(--rotation);
  align-self: var(--align);

  border: 1px solid black;
}

</style>
