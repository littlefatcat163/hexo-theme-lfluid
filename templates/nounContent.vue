<template>
    <div :class="['card', `border-${type}`]">
        <div :class="['card-header', `text-bg-${type}`]">{{ promptText }}</div>
        <div class="card-body">
            <h5 class="card-title" v-if="title">{{ title }}</h5>
            <p class="card-text">
                {{ text }}
            </p>
            <a
                v-if="link"
                :href="uriFor(link)"
                :class="['card-link', `link-${type}`]"
            >
                {{ moreText }}
            </a>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { uriFor } from './utils/uri'
import type { Type } from '../types/tag'
const type: Type = 'primary'
const promptText = ''
const moreText = ''
const title = ''
const text = ''
const link = ''
</script>
