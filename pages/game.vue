<template>
    <div id="app" class="flex flex-col w-screen h-screen p-8">
        <div class="container mx-auto">
            <top-bar :score="score"></top-bar>
        </div>
        
        <div class="main flex-grow flex justify-center items-center">
            <transition name="fade" mode="out-in">
                <items v-if="phase === 1" @itemClicked="itemClicked" key="phase-1"></items>
                <div v-if="phase === 2" key="phase-2">fhfhf</div>
            </transition>
        </div>
        
        <div @click="showRules" class="rulesButton text-center md:text-right">
            <button class="button py-3 px-12 border-2 border-gray-500 text-white uppercase tracking-widest rounded-lg">Rules</button>
        </div>

        <transition name="fade">
            <rules v-show="isRulesOn" @close="closeRules"></rules>
        </transition>
    </div>
</template>

<script>
    import TopBar from "../components/TopBar";
    import Rules from "../components/Rules";
    import Items from "../components/Items";

    export default {
        name: "game.vue",
        components: {Rules, TopBar, Items},
        data() {
            return {
                score: 12,
                isRulesOn: false,
                selectedItem: null,
                phase: 1,
            };
        },
        methods: {
            showRules() {
                this.isRulesOn = true;
            },
            closeRules() {
                this.isRulesOn = false;
            },

            itemClicked(type) {
                console.log(type + ' clicked!!!');
                
                if(this.selectedItem === null) {
                    this.selectedItem = type;
                    this.phase = 2;
                }
            },
        }
    }
</script>

<style scoped>
    #app{
        background: radial-gradient(circle, rgba(31,54,86,1) 0%, rgba(20,23,58,1) 100%);
    }

    /*.phase-fade-active, .phase-fade-leave-active {*/
    /*    transition: opacity .2s;*/
    /*}*/
    /*.phase-fade-enter, .phase-fade-leave-to !* .fade-leave-active below version 2.1.8 *! {*/
    /*    opacity: 0;*/
    /*}*/
    
    .fade-enter-active, .fade-leave-active {
        transition: opacity .2s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
