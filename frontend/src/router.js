import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: () => import('./pages/InitialLoading.vue') },
  { path: '/home', component: () => import('./pages/Home.vue') },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
