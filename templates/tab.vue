<template>
    <nav>
        <ul
            class="nav nav-tabs mb-3 d-flex flex-nowrap overflow-x-auto text-nowrap"
            role="tablist"
            style="padding-bottom: 1px"
        >
            <li class="nav-item" v-for="(item, index) in tabs">
                <button
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
            </li>
        </ul>
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
