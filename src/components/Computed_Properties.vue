<script setup>
// 用的官方文档中的例子
import {reactive, ref, computed} from 'vue'

const author = reactive({
    name: 'John Doe',
    books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
    ]
})

const publishedBooksMessage = computed(() => {
    return author.books.length > 0 ? 'yes' : 'No';
})
</script>

<template>
    <p>Has publish books:</p>
    <span>{{ publishedBooksMessage }}</span>
</template>