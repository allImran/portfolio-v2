<script setup lang="ts">
import { useTemplateRef, onMounted } from 'vue'
import Lottie from 'lottie-web'

const props = defineProps<{
    path: string,
    loop?: boolean,
    autoplay?: boolean
}>()
const element = useTemplateRef('element')
onMounted(() => {
    Lottie.loadAnimation({
        container: element.value as HTMLDivElement,
        renderer: 'svg',
        loop: props.loop || false,
        autoplay: props.autoplay || false,
        path: props.path
    });
})
</script>

<template>
    <div ref="element"></div>
</template>