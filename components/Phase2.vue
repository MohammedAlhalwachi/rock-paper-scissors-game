<template>
    <div class="container w-full h-full flex justify-around items-center">
        <div class="chosenContainer flex flex-col items-center">
            <div class="hidden sm:block mb-8">
                <span class="text-white text-sm sm:text-xl uppercase tracking-widest">You Picked</span>
            </div>
            <div class="w-32 h-32 sm:w-64 sm:h-64">
                <component 
                    :is="chosenComponent"
                    border-size-class="p-4 sm:p-8"
                ></component>
            </div>
            <div class="block sm:hidden mt-8">
                <span class="text-white text-sm sm:text-xl uppercase tracking-widest">You Picked</span>
            </div>
        </div>
        <div class="otherPlayerChosenContainer flex flex-col items-center">
            <div class="hidden sm:block mb-8">
                <span class="text-white text-sm sm:text-xl uppercase tracking-widest">The House Picked</span>
            </div>
            <div class="w-32 h-32 sm:w-64 sm:h-64">
                <transition name="fade" mode="out-in">
                    <template v-if="opponentChosen !== null">
                        <component
                            :is="opponentChosenComponent"
                            border-size-class="p-4 sm:p-8"
                        ></component>
                    </template>
                    <template v-else>
                        <div class="w-full h-full rounded-full bg-black opacity-25"></div>
                    </template>
                </transition>
            </div>
            <div class="block sm:hidden mt-8">
                <span class="text-white text-sm sm:text-xl uppercase tracking-widest">The House Picked</span>
            </div>
        </div>
    </div>
</template>

<script>
    import RockButton from "./RockButton";
    import PaperButton from "./PaperButton";
    import ScissorsButton from "./ScissorsButton";

    // import VueAspectRatio from "vue-aspect-ratio";
    
    export default {
        name: "Phase2",
        components: {ScissorsButton},
        props: ['chosen'],
        data() {
            return {
                opponentChosen: null,
            };
        },
        computed: {
            chosenComponent() {
                return this.respectiveItemComponent(this.chosen);
            },
            opponentChosenComponent() {
                return this.respectiveItemComponent(this.opponentChosen);
            },
        },
        methods: {
            respectiveItemComponent(type) {
                let component = null;
                switch (type) {
                    case 'paper':
                        component = PaperButton;
                        break;
                    case 'scissors':
                        component = ScissorsButton;
                        break;
                    case 'rock':
                        component = RockButton;
                        break;
                }

                return component;
            },
            randItem(arr) {
                return arr[Math.floor(Math.random() * arr.length)];
            },
        },
        mounted() {
            setTimeout(() => {
                this.opponentChosen = this.randItem(['rock', 'paper', 'scissors']);
            }, 3000);
        }
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .1s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>