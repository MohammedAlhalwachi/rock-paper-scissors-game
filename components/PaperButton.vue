<template>
    <div class="outer-layer w-full h-full p-3 sm:p-4 rounded-full">
        <div class="inner-layer bg-white w-full h-full rounded-full flex justify-center items-center">
            <img class="icon" src="~/assets/icons/icon-paper.svg" alt="paper icon">
        </div>
    </div>
</template>

<script>
    export default {
        name: "PaperButton"
    }
</script>

<style scoped>
    .outer-layer {
        background-color: #5672F0;
        box-shadow: 0 8px 0 0 #2945C3;
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
