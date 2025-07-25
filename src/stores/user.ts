import { defineStore } from 'pinia'
import { ref } from 'vue'

// defineStore的第一个参数是这个store的唯一ID，必须是独一无二的
export const useUserStore = defineStore('user', () => {
    // 【State】: 状态，这里就是我们需要全局管理的数据
    // 我们使用ref()来创建响应式数据，和在组件里一样
    const token = ref<string | null>(null) // Token，可以是字符串或null
    const username = ref<string | null>(null)
    const userId = ref<number | null>(null)

    // 【Actions】: 动作，这里是修改state的方法
    // 一个用于设置用户信息的函数
    function setUserInfo(newToken: string, newUsername: string, newUserId: number) {
        token.value = newToken
        username.value = newUsername
        userId.value = newUserId
    }

    // 一个用于清除用户信息的函数 (比如退出登录时)
    function clearUserInfo() {
        token.value = null
        username.value = null
        userId.value = null
    }

    // 【必须】将state和actions通过return暴露出去，这样组件才能使用它们
    return {
        token,
        username,
        userId,
        setUserInfo,
        clearUserInfo,
    }
})