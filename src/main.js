import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
// axios
import axios from 'axios'
// qs
import qs from 'qs'
// css
import 'element-ui/lib/theme-chalk/index.css'
import 'vue2-toastr/dist/css/vue2-toastr.css'
// router
import router from "./router/router.js"
// toastr
import Toastr from 'vue2-toastr'

axios.defaults.baseURL = 'http://localhost:9000/api'

Vue.prototype.$axios = axios
Vue.prototype.$qs = qs
var toastrConfigs = {
  position: 'top full width',
  timeOut: 2000
}
Vue.use(Toastr, toastrConfigs)

// element ui
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')