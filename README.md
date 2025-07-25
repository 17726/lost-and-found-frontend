# 校园失物招领平台 - 前端项目 (Lost & Found - Frontend)

这是“校园失物招领平台”全栈项目的前端部分。本项目旨在通过现代化的前端技术栈，构建一个用户体验优秀、代码结构清晰、可维护性高的单页应用 (SPA)。

> **后端项目地址**: [lost-and-found-backend](https://github.com/17726/lost-and-found-backend)

---

## 🚀 项目背景：一次现代化的重构之旅

本项目的初始版本(V1.0)是我作为前端负责人，与团队协作完成的。当时采用的技术栈为 **jQuery + Bootstrap**。为追求更优的工程化实践、开发效率与用户体验，我正独立实现本次 **V2.0 的完全重构**。

这次重构的核心目标是：
*   全面拥抱 **Vue 3** 生态，采用 **组合式API (Composition API)** 进行开发。
*   引入 **TypeScript** 进行类型约束，提升代码的健壮性和可维护性。
*   使用 **Vite** 作为构建工具，享受极致的开发体验。
*   实践真正的**组件化**和**数据驱动**开发思想。

## ✨ 技术栈 (Tech Stack)

*   **核心框架**: Vue 3
*   **开发语言**: TypeScript
*   **构建工具**: Vite
*   **路由管理**: Vue Router
*   **状态管理**: Pinia
*   **UI 组件库**: (规划中，如 Element Plus 或 Naive UI)
*   **HTTP 请求**: Axios
*   **CSS 方案**: (规划中，如 Sass 或 Tailwind CSS)

## 模块开发进度

-   [x] **阶段一：项目初始化与核心功能**
    -   [x] 使用 Vite 创建 Vue 3 + TS 项目
    -   [x] 配置 Vue Router 进行路由管理
    -   [x] 配置 Pinia 进行全局状态管理
    -   [x] 实现登录页面API调用与全局状态存储
-   [ ] **阶段二：核心页面开发与API集成**
    -   [ ] 首页物品列表展示与筛选
    -   [ ] 物品详情页
    -   [ ] 发布新物品页面
-   [ ] **阶段三：进阶功能与优化**
    -   [ ] 个人中心
    -   [ ] 智能匹配结果页
    -   [ ] 站内信实时通讯模块
-   [ ] **阶段四：部署**
    -   [ ] 打包构建
    -   [ ] Nginx 静态部署与反向代理配置

## 本地开发指南

**环境准备**: 请确保已安装 [Node.js](https://nodejs.org/) (推荐LTS版本) 和 [pnpm](https://pnpm.io/) (可选，推荐)。

1.  克隆项目到本地:
    ```bash
    git clone git@github.com:17726/lost-and-found-frontend.git
    cd lost-and-found-frontend
    ```
2.  安装项目依赖:
    ```bash
    npm install
    # 或者使用 pnpm
    # pnpm install
    ```
3.  启动开发服务器:
    ```bash
    npm run dev
    ```
    服务将在 `http://localhost:5173` (或一个可用端口) 启动。

## 项目核心逻辑讲解 (部分)

*   **路由**: 路由配置位于 `src/router/index.ts`，采用**路由懒加载**优化性能。
*   **状态管理**: 全局状态由 Pinia 统一管理，模块化定义于 `src/stores/` 目录下。目前已实现 `userStore` 用于管理用户认证信息。
*   **网络请求**: (规划中) 将使用 Axios 进行封装，在 `src/utils/request.ts` 中配置请求拦截器，自动注入认证Token。

---

## 学习与成长记录

*   **2025.07.23**: **V2.0 重构启动**。完成了基于 `Vite` 的 `Vue 3 + TypeScript` 项目初始化，并配置了 `Vue Router` 和 `Pinia` 作为项目的核心基础架构。
*   **2025.07.23**: 成功实现了用户登录页面的主体功能，打通了前端UI -> `axios` API请求 -> `Pinia` 全局状态存储的完整数据流。