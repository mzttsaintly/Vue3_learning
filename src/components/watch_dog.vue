<script setup>
// 官网示例
import { ref, watch } from 'vue';

const question = ref('');
const ans = ref('answer is ans');
const img_path = ref('')

// 可以直接侦听一个 ref
// watch 的第一个参数可以是不同形式的“数据源”：它可以是一个 ref (包括计算属性)、一个响应式对象、一个 getter 函数、或多个数据源组成的数组：
// 但不能直接侦听响应式对象的属性值
watch(question, async (newQuestion) => {
    if (newQuestion.indexOf('?') > -1 || newQuestion.indexOf('？') > -1) {
        ans.value = 'Thinking...'
        try {
            const res = await fetch('https://yesno.wtf/api')
            var res_json = await res.json()
            ans.value = res_json.answer
            img_path.value = res_json.image
        } catch (error) {
            ans.value = 'Error! Could not reach the API' + error
        }
    }
})
</script>

<template>
    <p>
        Ask a yes/no question:
        <input v-model="question" />
    </p>
    <p>{{ ans }}</p>
    <br />
    <img :src="img_path" />
</template>

<style>
img {
    height: auto;
    width: auto;
    width: 100%;
}
</style>