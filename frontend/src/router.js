import { createMemoryHistory, createRouter } from 'vue-router'

import HelloWorld from './components/HelloWorld.vue'
import HelloWorld2 from './components/HelloWorld2.vue'

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/hello', component: HelloWorld2 },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
