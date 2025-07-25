import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router) // 告诉Vue应用实例使用路由

app.mount('#app')