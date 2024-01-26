<template>
    <div
        v-if="iconType"
        :class="[
            'note',
            'alert',
            `alert-${alertType}`,
            'd-flex',
            'align-items-top',
        ]"
        role="alert"
    >
        <svg
            class="flex-shrink-0 me-2"
            role="img"
            width="1.2em"
            height="1.2em"
            :style="{marginTop: '0.2rem'}"
        >
            <use :xlink:href="`#${iconType}`"></use>
        </svg>
        <div v-html="html"></div>
    </div>
    <div v-else :class="['note', 'alert', `alert-${alertType}`]">
        <div v-html="html"></div>
    </div>
</template>
<script lang="ts" setup>
import type { Type } from '../types/tag'
const alertType: Type = 'info'
const iconType: Type = 'info'
const html: string = ''
</script>
