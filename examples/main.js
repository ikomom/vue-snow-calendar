import Vue from 'vue'
import App from './App.vue'
import snowCalendar from '../packages'

Vue.config.productionTip = false

Vue.use(snowCalendar)

new Vue({
  render: h => h(App),
}).$mount('#app')
