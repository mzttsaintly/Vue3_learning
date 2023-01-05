<script setup>
import { ref } from 'vue';
const msg = ref("hello world")
const counter = ref({count: 0})
</script>

<template>
    <h1>{{ msg }}</h1>
    <p>Count is : {{ counter.count }}</p>
</template>