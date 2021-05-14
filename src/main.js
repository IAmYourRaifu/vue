import Vue from 'vue'
import App from './App.vue'
import page1 from './components/page1.vue'
import page2 from './components/page2.vue'
import page4 from './components/page4.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.productionTip = false

// new Vue({
//  render: h => h(App),
// }).$mount('#app')
const routes = [
  {
    path: '/page1',
    name: 'page1',
    component: page1
  },
  {
    path: '/page2',
    name: 'page2',
    component: page2
  },
  {
    path: '/page4',
    name: 'page4',
    component: page4
  }]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

new Vue({
  router, render: h => h(App)
}).$mount('#app')
