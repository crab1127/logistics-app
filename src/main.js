// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import FE_DEBUG from 'error-report-crab'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from './App'
import store from './store'
import router from './router'

FE_DEBUG.init({
  siteId: null,
  silent: process.env.NODE_ENV !== 'production'
})
Vue.config.errorHandler = function(err, vm) {
  FE_DEBUG.reportError(err)
}

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})