
<script setup lang="ts">
import { type Post } from '@sanity/types'
import { useCard } from './useCard';
import Author from '../Author.vue';
const props = defineProps<{
    item: Post
}>()

const { postImage, postUpdatedAt } = useCard({item: props.item})
</script>

<template>
    <div class="rounded overflow-hidden shadow-lg">
        <a :href="item.externalLink"></a>
        <div class="relative">
            <a :href="item.externalLink">
                <img 
                    class="w-full"
                    :src="postImage"
                    alt="Sunset in the mountains"
                >
                <div
                    class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                </div>
            </a>
            
            <a href="!#">
                <div
                    class="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                    <span class="font-bold">{{ postUpdatedAt.date }}</span>
                    <small>{{ postUpdatedAt.month }}</small>
                </div>
            </a>
        </div>
        <div class="px-6 py-4">
            <a 
                :href="item.externalLink"
                class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
            >
                {{  item.title }}
            </a>
            <p class="text-gray-500 text-sm">
               {{ item.detail }}
            </p>

            <Author :author="item.authors?.[0]"/>
        </div>
    </div>
</template>