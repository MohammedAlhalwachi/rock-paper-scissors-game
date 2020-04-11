<template>
    <client-only>
        <vue-aspect-ratio ar="1:1" class="w-full">
            <div class="outer-layer w-full h-full rounded-full" :style="boxShadowStyle + ' ' + borderColorStyle + '' + borderSizeStyle">
                <div class="inner-layer bg-white w-full h-full rounded-full flex justify-center items-center">
                    <img class="icon" :src="iconSrc" alt="icon">
                </div>
            </div>
        </vue-aspect-ratio>
    </client-only>
</template>

<script>
    export default {
        name: "BaseItemButton",
        props: {
            borderSizeClass: {
                type: String,
                default: 'p-3 md:p-4'
            },
            iconSrc: String, 
            baseColor: String,
            darkColor: String,
        },
        computed: {
            boxShadowStyle() {
                return `box-shadow: 0 8px 0 0 ${this.darkColor};`;
            },
            borderColorStyle(){
                return `background-color: ${this.baseColor};`;
            },
            borderSizeStyle(){
                return `padding: 10%;`;
            },
        }
    }
</script>

<style scoped>
    .inner-layer {
        background-color: #DEDEDE;
        box-shadow: inset 0 5px 0 0 #BCC1D5;
    }
    .icon {
        width: 50%;
        height: 50%;
    }
</style>
