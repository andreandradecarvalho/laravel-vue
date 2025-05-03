import './assets/main.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/plugins/vee-validate'
import '@/plugins/axios'

const app = createApp(App).use(store).use(router)

app.mount('#app')
