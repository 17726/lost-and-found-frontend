<script setup lang="ts">
// 1. 【导入】 从Vue和相关库中导入所需函数
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'

// 2. 【初始化】
// a. 获取router实例，用于页面跳转
const router = useRouter()
// b. 获取user store实例，用于操作全局用户状态
const userStore = useUserStore()

// 3. 【创建响应式数据】
// a. 创建与表单输入框双向绑定的响应式变量
const username = ref('')
const password = ref('')
// b. 创建一个用于显示错误信息的响应式变量
const errorMessage = ref('')

// 4. 【定义方法】
// a. 定义点击登录按钮时执行的函数
const login = async () => {
  // 清空之前的错误信息
  errorMessage.value = ''

  try {
    // b. 使用axios发送POST请求到后端API
    const response = await axios.post('http://127.0.0.1:8000/api/login/', {
      username: username.value,
      password: password.value
    })

    // c. 检查响应状态码是否成功 (axios会自动处理2xx以外的状态码，直接抛出错误)
    if (response.status === 200) {
      // d. 登录成功，从响应数据中提取所需信息
      const { token, user } = response.data
      
      // e. 调用user store中的action，将用户信息存入全局状态
      userStore.setUserInfo(token, user.username, user.id)
      
      // f. 跳转到首页
      router.push('/')
    }
  } catch (error: any) {
    // g. 捕获axios抛出的错误（比如400, 403, 500等）
    if (error.response) {
      // 如果错误有响应体 (比如后端返回了具体的错误信息)
      // 在Django REST Framework中，登录失败通常返回{"non_field_errors":["..."]}
      errorMessage.value = error.response.data.non_field_errors?.[0] || '登录失败，请检查用户名和密码。'
    } else {
      // 如果是网络错误等没有响应体的错误
      errorMessage.value = '无法连接到服务器，请稍后再试。'
    }
    console.error('Login failed:', error)
  }
}
</script>

<template>
  <div class="login-container">
    <h2>用户登录</h2>
    <!-- 表单提交时调用login方法，阻止默认刷新行为 -->
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">用户名:</label>
        <!-- 双向绑定指令v-model,将输入框的值与username变量绑定 -->
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="password">密码:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <!-- 条件渲染指令v-if,错误信息显示区域 -->
      <div v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>
      <button type="submit">登录</button>
    </form>
    <p>
      没有账号？<router-link to="/register">去注册</router-link>
    </p>
  </div>
</template>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
}
.form-group {
  margin-bottom: 15px;
  text-align: left;
}
.form-group label {
  display: block;
  margin-bottom: 5px;
}
.form-group input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
.error-message {
  color: red;
  margin-bottom: 15px;
}
</style>