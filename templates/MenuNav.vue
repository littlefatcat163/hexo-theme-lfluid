<template>
    <div :class="['btn-group', typeBgClass(type)]" role="group">
        <div class="btn-group" role="group" v-for="menu in menus">
            <button
                type="button"
                :class="['btn', `btn-outline-${type}`, 'dropdown-toggle']"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                {{ menu.text }}
            </button>
            <ul :class="['dropdown-menu']">
                <li v-for="item in menu.secondaryMenus">
                    <a
                        :class="['dropdown-item']"
                        :href="uriFor([item.link])"
                    >
                        {{ item.text }}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { uriFor, typeBgClass } from './utils/uri'
import type { Type } from '../types/tag'
type SecondaryMenu = {
    text: string
    link: string
}
type FirstMenu = {
    text: string
    secondaryMenus: SecondaryMenu[]
}
const type: Type = 'warning'
const menus: FirstMenu[] = []
</script>
