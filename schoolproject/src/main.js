import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'https://localhost:3000',
  timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});
Vue.prototype.axios=axios;
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
