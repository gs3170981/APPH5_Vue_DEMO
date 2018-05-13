// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
import 'babel-polyfill' // 只需要引，不用写源码，辅助库

Vue.config.productionTip = false
fastclick.attach(document.body) // 每个点击都会有300毫秒延迟

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
