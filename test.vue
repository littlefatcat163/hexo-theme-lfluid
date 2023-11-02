<template>
    <div>
        <h1 v-if="abc">test</h1>
        {{ message }}
        <div v-for="item in arr"></div>
    </div>
</template>

<script lang="ts" setup>
const message = 123
const abc = true
const arr = []
</script>



