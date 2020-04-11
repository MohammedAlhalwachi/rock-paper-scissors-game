<template>
    <div class="flex-grow flex flex-col justify-center items-center">
        <div class="top-row relative flex justify-center items-center pb-6">
            <div @click="clicked('paper')" class="paper w-28 h-28 sm:w-40 sm:h-40 z-10">
                <paper-button></paper-button>
            </div>
            <div class="line z-0 w-20 h-3"></div>
            <div  @click="clicked('scissors')" class="scissors w-28 h-28 sm:w-40 sm:h-40 z-10">
                <scissors-button></scissors-button>
            </div>
        </div>
        <div class="relative flex justify-center">
            <div class="line absolute -top-3 right-4 transform -rotate-35 z-0 w-3 h-20"></div>
            <div class="line absolute -top-3 left-4 transform rotate-35 z-0 w-3 h-20"></div>
        </div>
        <div class="bottom-row relative rotate-45 flex justify-center">
            <div @click="clicked('rock')" class="rock w-28 h-28 sm:w-40 sm:h-40">
                <rock-button></rock-button>
            </div>
        </div>
    </div>
</template>

<script>
    import RockButton from "./RockButton";
    import PaperButton from "./PaperButton";
    import ScissorsButton from "./ScissorsButton";
    
    export default {
        name: "Items",
        components: {RockButton, PaperButton, ScissorsButton},
        methods: {
            clicked(type) {
                this.$emit('itemClicked', type)
            },
        }
    }
</script>

<style scoped>
    .line {
        background-color: #172b46;
    }
</style>