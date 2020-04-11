<template>
    <div id="app" class="w-screen h-screen">
        <div class="container mx-auto p-8">
            <div class="scoreContainer flex justify-between border-2 border-gray-700 rounded-lg p-5">
                <div class="logo">
                    <img src="~/assets/images/logo.svg" alt="logo" />
                </div>
                <div class="score rounded-lg bg-white p-4">
                    <span>Score</span>
                    <score>{{ score }}</score>
                </div>
            </div>
        </div>
        <div class="buttons flex flex-col justify-center items-center">
            <div class="top-row relative flex justify-center items-center pb-10">
                <div class="paper z-10 mr-16">
                    <paper-button></paper-button>
                </div>
                <div class="line absolute z-0 w-48 h-4 bg-blue-900"></div>
                <div class="scissors z-10 ml-16">
                    <scissors-button></scissors-button>
                </div>
            </div>
            <div class="line absolute transform rotate-45 z-0 w-4 h-48 bg-blue-900"></div>
<!--            <div class="line absolute transform rotate-45 z-0 w-4 h-48 bg-blue-900"></div>-->
            <div class="bottom-row relative rotate-45 flex justify-center pt-10">
                <div class="rock">
                    <rock-button></rock-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import RockButton from "../components/RockButton";
    import PaperButton from "../components/PaperButton";
    import ScissorsButton from "../components/ScissorsButton";

    export default {
        name: "game.vue",
        components: {ScissorsButton, PaperButton, RockButton},
        data() {
            return {
                score: 12
            };
        }
    }
</script>

<style scoped>
    #app{
        background: radial-gradient(circle, rgba(31,54,86,1) 0%, rgba(20,23,58,1) 100%);
    }
</style>
