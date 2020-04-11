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
        name: "PaperButton",
        components: {BaseItemButton},
        props: ['borderSizeClass'],
        data() {
            return {
                iconSrc: '/icons/icon-paper.svg',
                baseColor: '#5672F0',
                darkColor: '#2945C3',
            };
        },
    }
</script>

<style scoped>
    .outer-layer {
        background-color: #5672F0;
        box-shadow: 0 8px 0 0 #2945C3;
        margin-bottom: 8px;
    }
    .inner-layer {
        background-color: #DEDEDE;
        box-shadow: inset 0 5px 0 0 #BCC1D5;
    }

    .icon {
        width: 50%;
        height: 50%;
    }
</style>
