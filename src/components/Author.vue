<script setup lang="ts">
import { urlForImage } from '@/lib/urlForImage'
import { type Author } from '@sanity/types'

defineProps<{
    author: Author
}>()
</script>
<template>
    <div class="flex items- mt-10">
        <!-- {{ author }} -->
        <img 
            class="w-10 h-10 rounded-full mr-4" 
            :src="urlForImage(author.image!)"
            alt="Avatar of Jonathan Reinink"
        >
        <div class="text-sm">
            <a href="#" 
                class="text-gray-900 font-semibold leading-none hover:text-indigo-600"
                >{{ author.name }}</a>
            <!-- <p class="text-gray-600">Aug 18</p> -->
        </div>
    </div>
</template>