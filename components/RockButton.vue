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
        name: "RockButton",
        components: {BaseItemButton},
        props: ['borderSizeClass'],
        data() {
            return {
                iconSrc: '/icons/icon-rock.svg',
                baseColor: '#DE3F5B',
                darkColor: '#9D1634',
            };
        },
    }
</script>

<style scoped>
    .outer-layer {
        background-color: #DE3F5B;
        box-shadow: 0 8px 0 0 #9D1634;
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
