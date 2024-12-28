<script setup lang="ts">
defineProps<{
    author: any
}>()
</script>
<template>
    <div class="flex items- mt-10">
        {{ author }}
        <a href="#"><img class="w-10 h-10 rounded-full mr-4" src="https://tailwindcss.com/img/jonathan.jpg"
                alt="Avatar of Jonathan Reinink"></a>
        <div class="text-sm">
            <a href="#" class="text-gray-900 font-semibold leading-none hover:text-indigo-600">Jonathan
                Reinink</a>
            <p class="text-gray-600">Aug 18</p>
        </div>
    </div>
</template>