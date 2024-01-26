<template>
    <div v-if="rowCol === 1" class="group-image-container">
        <img
            class="img-fluid object-fit-cover w-100 img-swipe-single"
            :alt="list[0].title"
            :src="uriFor([list[0].url])"
        />
    </div>
    <div v-else class="group-image-container img-swipe-group">
        <div :class="['row', `row-cols-${rowCol}`, 'gx-2', 'gy-2']">
            <div class="col" v-for="item in list">
                <img
                    v-if="isSameSize"
                    class="img-fluid object-fit-cover"
                    :alt="item.title"
                    :src="uriFor([item.url])"
                />
                <div class="image-adapter" v-else>
                    <div>
                        <img
                            class="img-fluid object-fit-cover"
                            :alt="item.title"
                            :src="uriFor([item.url])"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { uriFor } from './utils/uri'
const rowCol: number = 1
const isSameSize: boolean = false
const list: { title: string; url: string }[] = []
</script>
