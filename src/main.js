import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
// axios
import axios from 'axios'
// css
import 'element-ui/lib/theme-chalk/index.css'
// router
import router from "./router/router.js"

axios.defaults.baseURL = 'http://localhost:9000/api'

Vue.prototype.$axios = axios

// element ui
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')