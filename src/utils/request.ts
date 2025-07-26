import axios from 'axios'
import { useUserStore } from '@/stores/user' // @ 是 Vite 配置的路径别名，指向 src 目录

// 1. 创建一个新的axios实例
const request = axios.create({
    // a. 设置基础URL，所有请求都会自动带上这个前缀
    baseURL: 'http://127.0.0.1:8000/api',
    // b. 设置请求超时时间
    timeout: 10000 // 10秒
})

// 2. 添加请求拦截器 (Request Interceptor)
request.interceptors.request.use(
    (config) => {
        // a. 在发送请求之前做些什么
        // b. 获取user store
        const userStore = useUserStore()

        // c. 如果store中有token，就在请求头中添加Authorization字段
        if (userStore.token) {
            config.headers.Authorization = `Token ${userStore.token}`
        }

        return config
    },
    (error) => {
        // d. 对请求错误做些什么
        return Promise.reject(error)
    }
)

// 3. 添加响应拦截器 (Response Interceptor) - (可选，但推荐)
request.interceptors.response.use(
    (response) => {
        // a. 对响应数据做点什么 (例如，可以直接返回 response.data)
        return response
    },
    (error) => {
        // b. 对响应错误做点什么 (例如，统一处理401错误，跳转到登录页)
        if (error.response && error.response.status === 401) {
            const userStore = useUserStore()
            userStore.clearUserInfo() // 清除过期的用户信息
            // 跳转到登录页，可以加上重定向参数
            window.location.href = `/login?redirect=${window.location.pathname}`
        }
        return Promise.reject(error)
    }
)

// 4. 导出这个配置好的axios实例
export default request