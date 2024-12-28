<script setup>
const dockItems = [
  {
    url: '/',
    imageUrl: 'home.png'
  },
  {
    url: 'https://www.youtube.com/@alemran4388',
    imageUrl: 'youtube.png'
  },
  {
    url: 'blog',
    imageUrl: '/blog.png'
  }
];
</script>
<template>
    <div class="flex items-center w-full">
      <div class="dock flex items-center bg-white p-4 rounded-full shadow-lg">
        <a
          v-for="(item, index) in dockItems"
          :key="index" class="dock-item p-2"
          :href="item.url"
        >
          <img 
            :src="item.imageUrl" 
            :alt="`Icon ${index + 1}`" 
            class="w-5 h-5" 
          />
        </a>
      </div>
    </div>
  </template>
<style>
/* Existing styles */
.dock-item {
    transition: transform 0.2s ease, margin 0.2s ease;
}
.dock{
    opacity: .5;
}
.dock:hover {
    opacity: 1;
}
.dock:hover .dock-item {
    margin: 0 0.5rem;
    cursor: pointer;
}
.dock:hover .dock-item:hover {
    transform: scale(1.5);
}

/* New styles for Tailwind classes */
.flex {
    display: flex;
}

.items-center {
    align-items: center;
}

.w-full {
    width: 100%;
}

.bg-white {
    background-color: white;
}

.p-4 {
    padding: .5rem;
}

.rounded-full {
    border-radius: 9999px;
}

.shadow-lg {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.p-2 {
    padding: 0.3rem;
}

.w-5 {
    width: 1.5rem;
}

.h-5 {
    height: 1.5rem;
}
</style>