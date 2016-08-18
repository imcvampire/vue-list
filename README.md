# vue-tag-list
A simple VueJS filter for tag list printing

## Install:

### CommonJS

 Available through npm as `vue-tag-list`: `npm install vue-tag-list --save`

  ``` js
  var VueTagList = require('vue-tag-list')
  Vue.use(VueTagList)
  ```

### Direct include

 - You can also directly include it with a `<script>` tag when you have Vue already included globally. It will automatically install itself, and will add a global `VueTagList`.

## Usage:

 ```html
  {{ array | list }}
 ```
 
## License

[MIT](http://opensource.org/licenses/MIT)