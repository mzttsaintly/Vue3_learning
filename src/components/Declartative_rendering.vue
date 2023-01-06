<script setup>
import { ref } from 'vue';
const msg = ref("hello world")
// 可以使用reactive
const counter = ref({count: 0})
// ref似乎更好用更方便，会自动包装成带.value属性的ref对象
const state = ref(0)
// 并且.value也是响应式的，在传递时ref也不会丢失响应性
</script>

<template>
    <h1>{{ msg }}</h1>
    <p>Count is : {{ counter.count }}</p>
    <!-- 需要直接访问counter.count的值，因为定义时声明了 -->
    <button @click="counter.count++">++</button>
    <!-- ref对象在模板中作为顶层属性被访问时，可以自动解包成state.value -->
    <p>state is : {{ state }}</p>
    <button @click="state++">state++</button>
</template>