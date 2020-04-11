<template>
    <div class="scoreContainer flex justify-between border-2 border-gray-700 rounded-lg p-5">
        <div class="logo flex items-center p-2">
            <img class="h-16 md:h-full" src="~/assets/images/logo.svg" alt="logo" />
        </div>
        <div class="score flex flex-col justify-between items-center rounded-lg bg-white py-4 px-5 md:px-12">
            <span class="text-blue-500 text-sm md:text-base tracking-widest uppercase leading-none">Score</span>
            <span class="font-bold text-4xl md:text-6xl leading-none" style="color: #606E85">{{ score }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TopBar",
        props: ['score']
    }
</script>

<style scoped>

</style>
