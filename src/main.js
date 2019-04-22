import Vue from 'vue'
import ElementUI from 'element-ui';
import App from './App.vue'

// axios
import axios from 'axios'

// css
import 'element-ui/lib/theme-chalk/index.css';

axios.defaults.baseURL = 'http://localhost:9000/api';

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
    render: h => h(App),
}).$mount('#app')
