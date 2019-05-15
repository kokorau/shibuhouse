import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'

import './reset.css'
import './app.css'

Vue.config.productionTip = false

Vue.use(VueLazyLoad)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
