import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './pages/HomePage.vue'
import VehiclePage from './pages/VehiclePage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/vehicle/:vehicleType/',
      component: VehiclePage
    }
  ]
})
