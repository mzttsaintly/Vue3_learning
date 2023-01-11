<script setup>
import { ref, reactive } from 'vue';

// 类与样式绑定 官方文档例子
// 将被绑定的变量
const isActive = ref(true)
const hasError = ref(false)

// 将被绑定的对象
const classObject = reactive(
    {
    active: true,
    'Error': false
}
)

function Click_button() {
    classObject.active = !classObject.active;
    classObject.Error = !classObject.Error;
}
</script>

<template>
    <!-- 可以直接写内联字面量 -->
    <div class="static" :class="{active: isActive, 'Error': hasError}">
        active is blue, Error is red.
    </div>
    <p>-------------</p>
    <!-- 也可以写成绑定对象的形式 -->
    <div class="static" :class="classObject">
        active is blue, Error is red.
    </div>
    <p>上面两个是一样的</p>
    <button @click="isActive = !isActive">change active</button>
    <button @click="hasError = !hasError">change error</button>
    <button @click="Click_button">change 2</button>
</template>

<style>
.static {
    color: black;
}
.active {
    color: blue;
}
.Error {
    color: red;
}
</style>