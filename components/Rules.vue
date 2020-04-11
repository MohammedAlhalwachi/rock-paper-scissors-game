<template>
    <div class="rules absolute flex justify-center items-center inset-0 z-20 p-3">
        <div class="background-overlay absolute inset-0 bg-black opacity-50"></div>
        <div class="rounded-lg p-6 z-30 bg-white">
            <div class="header flex justify-between mb-4">
                <span class="text-blue-dark uppercase tracking-widest text-3xl">Rules</span>
                <img  @click="$emit('close')" class="w-6 h-6 self-center" src="~/assets/icons/icon-close.svg" alt="close icon"/>
            </div>
            <div class="rulesImage p-4">
                <img src="~/assets/images/image-rules.svg" alt="rules"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Rules"
    }
</script>

<style scoped>

</style>