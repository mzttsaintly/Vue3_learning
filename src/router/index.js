// 1. 定义路由组件.
// 也可以从其他文件导入
import { createRouter, createWebHashHistory } from 'vue-router'

import PFA from '../components/props/props_from_array.vue'
import PIS from '../components/props/props_in_setup.vue'
import CP from '../components/Computed_Properties.vue'
import DR from '../components/Declartative_rendering.vue'
import SBC from '../components/style_binding_class.vue'

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: '/PFA/:msg_array', component: PFA, props: true },
  { path: '/PIS/:msg_object', component: PIS, props: true },
  { path: '/cp', component: CP},
  { path: '/dr', component: DR},
  { path: '/SBC', component: SBC}
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export default router

// 现在，应用已经启动了！