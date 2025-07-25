import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue' // 我们稍后会创建这个文件

// 定义路由规则
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/login',
        name: 'login',
        // 路由懒加载：只有当访问/login时，才会加载LoginView.vue这个组件
        // 这对于优化首屏加载速度非常重要
        component: () => import('../views/LoginView.vue') // 我们稍后会创建
    }
    // ... 其他路由
]

// 创建路由实例
const router = createRouter({
    history: createWebHistory(), // 使用HTML5 History模式，URL更好看
    routes, // 相当于 routes: routes
})

export default router