import Vue from 'vue'
import App from './App.vue'

//全局配置 关闭产品控制台提示
Vue.config.productionTip = false

//创建当前项目运行的根实例组件
new Vue({
  render: h => h(App),
}).$mount('#app')
