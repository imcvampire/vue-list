;(function () {
	var vueList = {}

	vueList.install = function (Vue) {
		Vue.filter('list', function (array) {
			return array.map(function (val) {
				return '#' + val
			}).join(', ')
		})
	}

	if (typeof exports == "object") {
    module.exports = vueList
  } else if (typeof define == "function" && define.amd) {
    define([], function(){ return vueList })
  } else if (window.Vue) {
    window.VueList = vueList
    Vue.use(VueList)
  }
})()