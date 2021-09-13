import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Vant from 'vant'

// 使用主题定制一定要把css修改为less
// import 'vant/lib/index.css'
import 'vant/lib/index.less'

Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
