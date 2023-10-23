import './index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initModals } from 'flowbite'
import { initFlowbite } from 'flowbite'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
