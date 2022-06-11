import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入echarts
import * as echarts from 'echarts'

// 全局注册自定义组件
import components from '@/utils/globalcomponents'
Vue.use(components)

Vue.prototype.echarts = echarts

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
