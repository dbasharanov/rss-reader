import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'

Vue.config.productionTip = false

import Vuelidate from 'vuelidate'
import axiosPlugin from '@/plugins/axionPlugin'
import { authService } from '@/services/authServices'

Vue.use(Vuelidate)
Vue.use(axiosPlugin)

Vue.mixin(authService)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
