# p5


## source
https://medium.com/js-dojo/experiment-with-p5-js-on-vue-7ebc05030d33

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


###Build and publish on gh-pages

remove /dist in .gitignore first commit :
```
npm run build
git add dist -f && git commit -m "Initial dist subtree commit"
```
then for each commit
```
npm run git -- "modif"
```

vue.config.js

```
const publicPath = process.env.NODE_ENV === 'production' ? '/p5-vue-solid/' : '/'

module.exports = {
  // options...
  publicPath: publicPath,
}

```

add reload in service worker

```
updated () {
  console.log('New content is available; please refresh.')
  alert('New content is available; please close this app & reopen!')
  },
  ```
