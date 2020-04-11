<template>
    <div id="app" class="flex flex-col w-screen h-screen p-8">
        <div class="container mx-auto">
            <top-bar :score="score"></top-bar>
        </div>
        
        <div class="main flex-grow flex justify-center items-center">
            <transition name="fade" mode="out-in">
                <Phase1 v-if="phase === 1" @itemClicked="itemClicked" key="phase1"></Phase1>
                <Phase2 @resetGame="reset" @opponentChosen="setOpponentSelectedItem" v-else="phase === 2" :chosen="selectedItem" key="phase2"></Phase2>
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
    import Phase1 from "../components/Phase1";
    import Phase2 from "../components/Phase2";

    export default {
        name: "game.vue",
        components: {Rules, TopBar, Phase1, Phase2},
        data() {
            return this.initValues();
        },
        methods: {
            initValues() {
                let cookieScore = this.$cookies.get('score') ?? 0;

                return {
                    score: cookieScore,
                    isRulesOn: false,
                    selectedItem: null,
                    opponentSelectedItem: null,
                    phase: 1,
                };
            },
            showRules() {
                this.isRulesOn = true;
            },
            closeRules() {
                this.isRulesOn = false;
            },
            itemClicked(type) {
                if (this.selectedItem === null) {
                    this.selectedItem = type;
                    this.phase = 2;
                }
            },
            setOpponentSelectedItem(newOpponentSelectedItem) {
                this.opponentSelectedItem = newOpponentSelectedItem;
            },
            endTurn() {
                console.log(this.winStatus );

                if(this.winStatus === 'win')
                    this.score++;
                else if(this.winStatus === 'lose' && this.score > 0)
                    this.score--;
            },
            reset() {
                Object.assign(this.$data, this.initValues());
            }
        },
        computed: {
            winStatus() {
                if(this.selectedItem === this.opponentSelectedItem)
                    return 'tie';
                else if(this.selectedItem === 'rock' && this.opponentSelectedItem === 'scissors')
                    return 'win';
                else if(this.selectedItem === 'scissors' && this.opponentSelectedItem === 'paper')
                    return 'win';
                else if (this.selectedItem === 'paper' && this.opponentSelectedItem === 'rock')
                    return 'win';
                else
                    return 'lose';
            },
        },
        watch: {
            opponentSelectedItem(val) {
                if (this.selectedItem !== null && this.opponentSelectedItem !== null) {
                    this.endTurn();
                }
            },
            score(val) {
                this.$cookies.set('score', val, Infinity);
            }
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
