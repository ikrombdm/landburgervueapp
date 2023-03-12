import { createRouter, createWebHistory } from "vue-router"

import HomePage from "@/views/Homepage.vue"
import ItemIdPage from "@/views/ItemIdPage.vue"
import AboutPafe from "@/views/AboutPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'home',
      component: HomePage,
      
    },
    {
      path: '/foods/:id',
      name: 'food_id',
      component: ItemIdPage,
    },
    {
      path: '/haqimizda',
      name: 'about',
      component: AboutPafe
    }
  ]
})


export default router