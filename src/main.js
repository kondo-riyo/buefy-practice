import Vue from 'vue'
import App from './App.vue'

import Buefy from 'buefy'  //buefy追加
import 'buefy/dist/buefy.css'  //buefy追加

Vue.use(Buefy)  //buefy追加
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
