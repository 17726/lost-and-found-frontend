import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()


app.use(router) // 告诉Vue应用实例使用路由
app.use(pinia)

app.mount('#app')