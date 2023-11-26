<template>
    <div>
        <h1 v-if="abc">test</h1>
        {{ message }}
        <span v-html="hh"></span>
        <!-- <Test1></Test1> -->
    </div>
</template>

<script lang="ts" setup>
// import Test1 from './test1.vue'
const message = 123
const abc = true
const arr = []
const hh = ''
</script>



