<script setup>
// 数组形式传递
const props = defineProps(['msg_array'])
</script>

<template>
    <p>数组形式传递： {{ msg_array }}</p>
</template>