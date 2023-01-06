<script setup>
import { ref } from 'vue';
const msg = ref("hello world")
// 可以使用reactive
const counter = ref({count: 0})

const state = ref(0)
</script>

<template>
    <h1>{{ msg }}</h1>
    <p>Count is : {{ counter.count }}</p>
    <!-- 需要直接访问counter.count的值，因为定义时声明了 -->
    <button @click="counter.count++">++</button>
    <p>state is : {{ state }}</p>
    <button @click="state++">state++</button>
</template>