import { createApp } from 'vue'
import App from './App.vue'
import vue3GoogleLogin from 'vue3-google-login'

import './assets/main.css'

const app = createApp(App)

app.use(vue3GoogleLogin, {
  clientId: '102740932283-28uvlu1r5jrqiga63itlsen1jq62bda3.apps.googleusercontent.com',
})

app.mount('#app')
