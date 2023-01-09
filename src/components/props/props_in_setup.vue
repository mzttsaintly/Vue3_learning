<script setup>
// 对象形式传递
defineProps({
    msg_object: String
})
</script>

<template>
    <p>对象形式传递： {{ msg_object }}</p>
</template>