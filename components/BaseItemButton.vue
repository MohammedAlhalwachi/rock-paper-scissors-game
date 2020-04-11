<template>
    <div :class="[borderSizeClass]" class="outer-layer w-full h-full rounded-full" :style="boxShadowStyle + ' ' + borderColorStyle">
        <div class="inner-layer bg-white w-full h-full rounded-full flex justify-center items-center">
            <img class="icon" :src="iconSrc" alt="icon">
        </div>
    </div>
</template>

<script>
    export default {
        name: "BaseItemButton",
        props: {
            borderSizeClass: {
                type: String,
                default: 'p-3 sm:p-4'
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
            // borderSizeClass(){
            //     let sizeNumber = 0;
            //     switch (this.size) {
            //         case 'sm':
            //             sizeNumber = 3;
            //             break;
            //         case 'md':
            //             sizeNumber = 5;
            //             break;
            //         case 'lg':
            //             sizeNumber = 6;
            //             break;
            //     }
            //    
            //     return 'p-' + sizeNumber;
            // }
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
