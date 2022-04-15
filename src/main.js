import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//在main.js中引入
import * as echarts from 'echarts'

Vue.prototype.$echarts = echarts
// import Echarts from 'vue-echarts'
// import 'echarts/lib/chart/line'
//
// Vue.component('chart',Echarts)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
