import { createRouter, createWebHistory } from 'vue-router'
import AllWonders from '../views/wonders/AllWonders.vue'
import AddWonders from '../views/wonders/AddWonders.vue'
import EditWonder from '../views/wonders/EditWonder.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AllWonders
    },
    {
      path: '/add-wonder',
      name: 'Add Wonder',
      component: AddWonders
    },
    {
      path: '/edit-wonder/:id',
      name: 'Edit Wonder',
      component: EditWonder
    },
  ]
})

export default router
