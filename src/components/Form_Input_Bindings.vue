<script setup>
import { ref, reactive } from 'vue';

const text = ref("")
const text_2 = ref("")
const text_3 = ref("")
const bool_1 = ref(true)
const name_list = ref([])
// 使用ref时打印和取值需要使用.value；使用reactive时则不用
// 官方推荐我们在定义数据的时候,reactive定义复杂的数据类型的数据,ref推荐定义基本数据类型
const new_name = ref("")
const chosen_name = ref([])

function push_name() {
    // 使用ref包装的时候需要使用.value，使用reactive时则不需要
    name_list.value.push(new_name.value)
    new_name.value = ""
}
</script>

<template>
    <p>单行文本</p>
    <!-- 使用v-model -->
    <p>{{ text }}</p>
    <input v-model="text" placeholder="在此输入">
    <button @click="text = ''">清空输入</button>
    <!-- 等价于使用:value和@input -->
    <p>{{ text_2 }}</p>
    <input :value="text_2" @input="event => text_2 = event.target.value" placeholder="在此输入">
    <button @click="text_2 = ''">清空输入</button>
    <p>多行文本</p>
    <span>Multiline message is:</span>
    <p style="white-space: pre-line;">{{ text_3 }}</p>
    <textarea v-model="text_3" placeholder="在此输入"></textarea>
    <button @click="text_3 = ''">清空输入</button>
    <p>复选框绑定bool值</p>
    <label for="check"><input type="checkbox" id="check" v-model="bool_1">{{ bool_1 }}</label>
    <br>
    <p>添加人员名单：</p>
    <div v-for="(names, index) in name_list" :key="index"><label><input type="checkbox" :id="names" :value="names" v-model="chosen_name"/> {{ names }}</label></div>
    <input v-model="new_name" /><button @click="push_name">添加人员</button>
    <p>被选召的孩子们：</p>
    <div>{{ chosen_name }}</div>
    </template>