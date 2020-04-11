<template>
    <div>
        <div class="status uppercase text-shadow-md text-white text-6xl">
            {{ statusText }}
        </div>
        <div @click="$emit('resetGame')" class="again-btn mx-auto max-w-xs uppercase tracking-widest shadow-xl rounded-lg bg-white text-gray-600 hover:text-pink-500 p-3">Play Again</div>
    </div>
</template>

<script>
    export default {
        name: "WinStatus",
        props: ['winStatus'],
        computed: {
            statusText () {
                if(this.winStatus === 'win')
                    return 'You Won';
                else if(this.winStatus === 'lose')
                    return 'You Lost';
                else 
                    return 'You Tied';
            },
        },
    }
</script>

<style scoped>

</style>