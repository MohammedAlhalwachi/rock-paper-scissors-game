<template>
    <base-item-button
        :borderSizeClass="borderSizeClass"
        :icon-src="iconSrc"
        :base-color="baseColor"
        :dark-color="darkColor"
    ></base-item-button>
</template>

<script>
    import BaseItemButton from "./BaseItemButton";
    
    export default {
        name: "ScissorsButton",
        components: {BaseItemButton},
        props: ['borderSizeClass'],
        data() {
            return {
                iconSrc: '/icons/icon-scissors.svg',
                baseColor: '#EDA725',
                darkColor: '#C76C1D',
            };
        },
    }
</script>

<style scoped>
    
</style>
