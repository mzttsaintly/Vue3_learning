<script setup>
import { ref, computed } from 'vue';
import Declartative_renderingVue from './components/Declartative_rendering.vue';
import Com from './components/Computed_Properties.vue'
import PIS from './components/props/props_in_setup.vue'
import PIA from './components/props/props_from_array.vue'
const msg = ref('this is a message from app.vue')
</script>

<template>
    this is begin.
    <Declartative_renderingVue />
    <Com></Com>
    <PIS :msg_object="msg"></PIS>
    <PIA :msg_array="msg"></PIA>
    <p>以下是路由测试</p>
    <router-link to="/PFA">PFA</router-link>
    <router-link to="/PIS/this is a message from app.vue">PIS</router-link>
    <router-link to="/cp">Computed_Properties</router-link>
    <router-link to="/dr">Declartative_rendering</router-link>
    <br>
    <Router-view></Router-view>
</template>