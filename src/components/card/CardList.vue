<template>
    <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        <template v-for="item in items" :key="item.id">
            <slot :item="item" />
        </template>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    items: any[]
}>()
</script>