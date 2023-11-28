<template>
    <button type="button" class="btn btn-link lnote-popover-btn" data-bs-toggle="popover" data-bs-trigger="hover focus"
        data-bs-placement="right" data-bs-custom-class="lnote-popover" :data-bs-title="title" :data-bs-content="desc">
        {{ text }}
        <svg width="18" height="18">
            <use xlink:href="#question-circle-fill"></use>
        </svg>
    </button>
</template>

<script lang="ts" setup>
const title: string | undefined = undefined
const desc = ''
const text = ''
</script>