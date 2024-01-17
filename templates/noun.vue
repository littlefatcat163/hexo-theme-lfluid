<template>
    <button
        type="button"
        :class="['btn', 'btn-link', `link-${type}`, 'lnote-popover-btn']"
        data-bs-toggle="popover"
        data-bs-trigger="hover focus"
        data-bs-placement="right"
        :data-bs-custom-class="`lnote-popover ${type}`"
        data-bs-html="true"
        :data-bs-content="content"
    >
        {{ text }}
        <svg width="18" height="18">
            <use xlink:href="#question-circle-fill"></use>
        </svg>
    </button>
</template>

<script lang="ts" setup>
import type { Type } from '../types/tag'
const type: Type = 'primary'
const content = ''
const text = ''
</script>
