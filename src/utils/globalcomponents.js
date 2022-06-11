// 导入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import MyTag from '@/components/common/MyTag.vue'

const componentList = [
  { component: MyTag, name: 'my-tag' }
]

export default {

  install: function (Vue) {
    Vue.myGlobalMethod = function () {
      // 逻辑...
    }

    // 2. 添加全局资源
    Vue.directive('my-directive', {
      bind (el, binding, vnode, oldVnode) {
        // 逻辑...
      }
    })

    // 3. 注入组件选项
    Vue.mixin({
      created: function () {
        // 逻辑...
      }
    })

    // 4. 添加实例方法
    Vue.prototype.$myMethod = function (methodOptions) {
      // 逻辑...
    }

    // 5. 添加全局组件
    componentList.forEach((item) => {
      Vue.component(item.name, item.component)
    })

    // 6. 其他插件
    Vue.use(ElementUI)
  }
}
