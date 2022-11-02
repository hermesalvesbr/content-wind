<template>
    <div class="space-y-1">
            <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']" :aria-current="item.current ? 'page' : undefined">
              <component :is="item.icon" :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 flex-shrink-0 h-6 w-6']" aria-hidden="true" />
              {{ item.name }}
            </a>
          </div>
</template>
<script setup lang="ts">
import { type PropType } from 'vue'
export interface Teams {
    name: String
    href: String
    bgColorClass: String
}
export interface Navigation {
    name: String
    href: String
    current: String
}
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  teams: {
    type: Object as PropType<Teams>,
    required: false
  },
  navigation: {
    type: Object as PropType<Navigation>,
    required: true
  }
})
</script>
