<template>
    <div>
        <h1 v-if="abc">test</h1>
        {{ message }}
        <span v-html="hh"></span>
    </div>
</template>

<script lang="ts" setup>
const message = 123
const abc = true
const arr = []
const hh = ''
</script>



