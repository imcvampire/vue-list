(function () {
  var vueTagList = {}

  vueTagList.install = function (Vue) {
    Vue.filter('tagList', function (array, length, param, icon) {
      if (!icon && icon !== '') icon = '#'

      return array
        .map(function (val) {
          return icon + (param ? val[param] : val)
        })
        .slice(0, length || array.length)
        .join(', ')
    })
  }

  if (typeof exports == "object") {
    module.exports = vueTagList
  } else if (typeof define == "function" && define.amd) {
    define([], function () {
      return vueTagList
    })
  } else if (window.Vue) {
    window.VueTagList = vueTagList
    Vue.use(VueTagList)
  }
})();
