import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const HomeView = () => import('@/views/HomeView.vue')
const BlogsView = () => import('@/views/BlogsView.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: BlogsView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
