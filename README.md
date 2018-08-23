# ransomnote (WIP)
Makes letters look like they've been cut from newspaper.

Reasonable defaults are chosen and hardcoded :)

## Features
- random font color;
- random background color;
- uppercase/lowercase;
- random margin;
- random padding;
- random rotation;
- random vertical align;
- random font size;


## ToDo
- normal/bold/italic;
- live: one param of one random letter changes once a second;
- word wrapping;
- don't change case if letter is already in uppercase;
- border: exists or not;
- random font;
- random line height;
- (when Firefox and Edge support custom components) webcomponent build;
- (maybe) random background texture;
- (maybe) convert to leetspeak;
- (maybe 2.0.0) customizable options (user-defined ranges); 


## Usage
### Browser
```
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/ransomnote"></script>

<div id="app">
  <ransom-note text="As you value your life or your reason keep away from the moor."></ransom-note>
</div>

<script>
new Vue({
  components: {
    RansomNote
  }
}).$mount('#app')
</script>
```

### Package
```
yarn add ransomnote
```
```
<template>
<RansomNote text='Hello!'/>
</template>
<script>
import RansomNote from 'ransomnote';
export default {
  components: {
    RansomNote
  },
}
</script>
```

### Parameters
#### randomFontColor
hsl(`0 - 359`, 100%, `0 - 25`), 
default: true
#### randomBackColor
hsl(`0 - 359`, 100%, `88 - 100`), 
default: true
#### randomFontCase
'uppercase' or 'lowercase', 
default: true
#### randomMargins
from 0.05 to 0.1984, 
default: true
#### randomPaddings
from 0.05 to 0.1984, 
default: true
#### randomRotation
from -20 to 20 degrees, 
default: true
#### randomAlign
'flex-start', 'flex-end' or 'center', 
default: true
#### randomFontSize
from 0.9 to 1.1, 
default: true


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```

### Tests
```
yarn run test:unit
```


## Credits
Special thanks to:
- [ransomizer.com](http://www.ransomizer.com/) for inspiration;
- Divyam Rastogi for [publishing tutorial](https://medium.com/justfrontendthings/how-to-create-and-publish-your-own-vuejs-component-library-on-npm-using-vue-cli-28e60943eed3); 
- Evan You for Vue.js;
- Sir Arthur Conan Doyle for demo sentense;
- My mom for everything. Look mom, I'm a developer!


## License
MIT
