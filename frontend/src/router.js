import { createMemoryHistory, createRouter } from 'vue-router'

import InitialLoading from './components/InitialLoading.vue'

const routes = [
  { path: '/', component: InitialLoading },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
