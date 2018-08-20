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
- border: exists or not;
- random line height;
- live: change random parameter of random letter once a second;
- random font;
- random background texture;
- (maybe) convert to leetspeak;
- live: one param of one random letter changes once a second;
- don't change case if letter is already in uppercase;
- webcomponent build (when Firefox and Edge support custom components);
- word wrapping;


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
#todo
```


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
