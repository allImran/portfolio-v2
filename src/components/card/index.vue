<script setup lang="ts">
import CardItem from "./CardItem.vue";
import CardList from "./CardList.vue";

defineProps<{
    items: any[]
}>()
</script>

<template>
    <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <CardList :items="items">
            <template #default="{ item }">
                <CardItem :item="item" />
            </template>
        </CardList>
    </div>
</template>