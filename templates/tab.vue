<template>
    <nav>
        <div class="nav nav-pills mb-3" role="tablist">
            <button
                v-for="(item, index) in tabs"
                data-bs-toggle="tab"
                role="tab"
                type="button"
                :aria-selected="index === 0 ? 'true' : 'false'"
                :class="['nav-link', { active: index === 0 }]"
                :id="`tab-${key}-${index}`"
                :data-bs-target="`#nav-${key}-${index}`"
                :aria-controls="`nav-${key}-${index}`"
            >
                {{ item.name }}
            </button>
        </div>
        <div class="tab-content">
            <div
                v-for="(item, index) in tabs"
                :class="['tab-pane', 'fade', index === 0 && 'show active']"
                :id="`nav-${key}-${index}`"
                role="tabpanel"
                :aria-labelledby="`tab-${key}-${index}`"
                :tabindex="index"
            >
                <div v-html="item.content"></div>
            </div>
        </div>
    </nav>
</template>
<script lang="ts" setup>
import type { Tab } from '../types/tag'
const key: string = ''
const tabs: Tab[] = []
</script>