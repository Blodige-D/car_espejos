import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '@/views/Inicio.vue'
import Espejos from '@/views/Espejos.vue'
import Cerrajeria from '@/views/Cerrajeria.vue'
import Login from '@/views/Login.vue'
import Productos from '@/views/Productos.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio,
    
  },
  {
    path: '/Espejos',
    name:'Espejos',
    component: Espejos,
  },
  {
    path: '/Cerrajeria',
    name: 'Cerrajeria',
    component: Cerrajeria,
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/Productos',
    name: 'Productos',
    component: Productos,
  },
]

const router = new VueRouter({
  mode:"history",
  routes
})



export default router
