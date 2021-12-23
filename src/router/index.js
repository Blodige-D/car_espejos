import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '@/views/Inicio.vue'
import Espejos from '@/views/Espejos.vue'
import Cerrajeria from '@/views/Cerrajeria.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
    
  },
  {
    path: '/Espejos',
    name:'Espejos',
    component: Espejos
  },
  {
    path: '/Cerrajeria',
    name: 'Cerrajeria',
    component: Cerrajeria
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode:"history",
  routes
})

export default router
