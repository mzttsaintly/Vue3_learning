<script setup>
// 官网示例
import { ref, watch } from 'vue';

const question = ref('');
const ans = ref('answer is ans');
const img_path = ref('')

// 可以直接侦听一个 ref
watch(question, async (newQuestion) => {
    if (newQuestion.indexOf('?') > -1) {
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