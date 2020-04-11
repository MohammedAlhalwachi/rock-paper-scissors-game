<template>
    <div class="container w-full h-full flex flex-col justify-around text-center">
        <div class="flex justify-around items-center">
            <div class="chosenContainer w-1/3 sm:w-1/4 flex flex-col items-center">
                <div class="hidden sm:block mb-8">
                    <span class="text-white text-sm sm:text-xl uppercase tracking-widest">You Picked</span>
                </div>
                <component
                    :is="chosenComponent"
                ></component>
                <div class="block sm:hidden mt-8">
                    <span class="text-white text-sm sm:text-xl uppercase tracking-widest">You Picked</span>
                </div>
            </div>

            <transition name="fade">
                <div v-show="opponentChosen !== null" class="win-status hidden sm:block">
                    <win-status @resetGame="$emit('resetGame')" :winStatus="winStatus"></win-status>
                </div>
            </transition>

            <div class="otherPlayerChosenContainer w-1/3 sm:w-1/4 flex flex-col items-center">
                <div class="hidden sm:block mb-8">
                    <span class="text-white text-sm sm:text-xl uppercase tracking-widest">The House Picked</span>
                </div>
                <transition name="fade" mode="out-in">
                    <template v-if="opponentChosen !== null">
                        <component
                            :is="opponentChosenComponent"
                        ></component>
                    </template>
                    <template v-else>
                        <client-only>
                            <vue-aspect-ratio ar="1:1" class="w-full rounded-full bg-black opacity-25"></vue-aspect-ratio>
                        </client-only>
                    </template>
                </transition>
                <div class="block sm:hidden mt-8">
                    <span class="text-white text-sm sm:text-xl uppercase tracking-widest">The House Picked</span>
                </div>
            </div>
        </div>

        <transition name="fade">
            <div v-show="opponentChosen !== null" class="win-status block sm:hidden">
                <win-status @resetGame="$emit('resetGame')" :winStatus="winStatus"></win-status>
            </div>
        </transition>
    </div>
</template>

<script>
    import RockButton from "./RockButton";
    import PaperButton from "./PaperButton";
    import ScissorsButton from "./ScissorsButton";
    
    import WinStatus from "./WinStatus";

    export default {
        name: "Phase2",
        components: {WinStatus, ScissorsButton},
        props: ['chosen'],
        data() {
            return {
                opponentChosen: null,
            };
        },
        watch: {
            opponentChosen: function (newVal) {
                if(newVal !== null)
                    this.$emit('opponentChosen', newVal);
            }
        },
        computed: {
            chosenComponent() {
                return this.respectiveItemComponent(this.chosen);
            },
            opponentChosenComponent() {
                return this.respectiveItemComponent(this.opponentChosen);
            },
            winStatus() {
                if(this.chosen === this.opponentChosen)
                    return 'tie';
                else if(this.chosen === 'rock' && this.opponentChosen === 'scissors')
                    return 'win';
                else if(this.chosen === 'scissors' && this.opponentChosen === 'paper')
                    return 'win';
                else if (this.chosen === 'paper' && this.opponentChosen === 'rock')
                    return 'win';
                else
                    return 'lose';
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