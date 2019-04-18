import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.apiServer = 'http://localhost:8080/api'
const app = new Vue({
	...App
})
app.$mount()