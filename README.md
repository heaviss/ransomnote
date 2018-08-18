# ransomnote (WIP)
Makes letters look like they've been cut from newspaper.

## Features
- random font color;
- random background color.

## ToDo
- normal/bold/italic;
- uppercase/lowercase;
- random margin;
- random padding;
- random rotation;
- border: exists or not;
- random font size;
- random line height;
- random vertical align;
- live: change random parameter of random letter once a second;
- random font;
- random background texture;
- (maybe) convert to leetspeak;
- live: one param of one random letter changes once a second;

## Usage
### Browser
```
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/ransomnote"></script>

<div id="app">
  <ransom-note text="привет"></ransom-note>
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

## License
MIT
