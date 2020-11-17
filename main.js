import Vue from 'vue'
import uView from "uview-ui";
Vue.use(uView);
import App from './App'


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
