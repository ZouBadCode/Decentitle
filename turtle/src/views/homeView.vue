<script setup>
import HeroCard from '@/components/heroCards.vue';
import NavBar from '@/components/NavBar.vue';
</script>
<template>
    <NavBar />
    <div class="flex flex-col items-center justify-center h-screen bg-gray-900">
        <div class="h-4/5 flex flex-col items-center justify-center">
            <div
                class="text-2xl mb-3 font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                DECENTITLE</div>
            <h1
                class=" text-6xl font-bold bg-clip-text text-center text-transparent p-2 bg-gradient-to-r from-teal-300 via-blue-400 to-secondary">
                Build Trust, Get Job,<br> Join the Club
            </h1>
            <p class="text-xl m-7 text-white">Gain some awesome credit, make a decent title</p>
            <button class="bg-primary text-white text-xl px-12 py-3 mt-6 rounded-lg"> Get Started </button>
        </div>
    </div>
    <div class="flex flex-col items-center justify-center h-screen bg-gray-900">
        <HeroCard />
    </div>
</template>
