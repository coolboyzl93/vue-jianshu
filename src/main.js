// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import 'element-ui/lib/theme-chalk/index.css'
import veevalidate from 'vee-validate'
Vue.config.productionTip = false
Vue.use(veevalidate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  veevalidate,
  template: '<App/>',
  components: { App }
})
