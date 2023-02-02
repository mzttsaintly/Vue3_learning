<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const msg = ref('this is a message from app.vue')
const items = ref([
    {title: '通过数组传递参数', link: '/PFA/' + msg.value},
    {title: '通过对象传递参数', link: "/PIS/" + msg.value},
    {title: '计算属性', link: "/cp"},
    {title: '响应式渲染', link: "/dr"},
    {title: '样式和类绑定', link: "/SBC"},
    {title: '表单绑定', link: "/FIB"},
    {title: '侦听器', link: "/WD"}
])
const show_v_for = ref(true)
const show_router = ref(false)
function come_home() {
    router.push('/')
}
</script>

<template>
    <div class="main">
        <p @click="come_home">this is begin.</p>
        <button @click="show_v_for = !show_v_for">{{ show_v_for ?'隐藏v-for测试': '显示v-for测试' }}</button>
        <!-- 按钮随条件变化而变化 -->
        <button @click="show_router = !show_router">{{ show_router ?'隐藏路由测试': '显示路由测试' }}</button>
        v-for 测试
        <menu v-if="show_v_for" class="title">
            <li v-for="item in items">
                <router-link :to="item.link">{{ item.title }}</router-link>
                <!-- 也可写成 :to={path: item.link} -->
            </li>
        </menu>
        <p>以下是路由测试</p>
        <!-- 使用v-if 切换组件显示状态 -->
        <menu class="title" v-if="show_router">
            <!-- props参数会显示在url上 -->
            <router-link :to="'/PFA/' + msg">· 通过数组传递参数</router-link>
            <!-- :to 有两种写法 -->
            <router-link :to="{path:'/PIS/' + msg}">· 通过对象传递参数</router-link>
            <router-link to="/cp">· 计算属性</router-link>
            <router-link to="/dr">· 响应式渲染</router-link>
            <router-link :to="'/SBC'">· 样式和类绑定</router-link>
            <router-link :to="'FIB'">· 表单绑定</router-link>
            <router-link :to="'WD'">· 侦听器</router-link>
        </menu>
        <br>
        <Router-view></Router-view>
    </div>
</template>

<style>
.main {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
.title {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around space-evenly;
    align-items: flex-start;
    justify-content: flex-start;
}
</style>