<template>
    <div class="outer-layer w-36 h-36 p-4 rounded-full">
        <div class="inner-layer bg-white w-full h-full rounded-full flex justify-center items-center">
            <img src="~/assets/icons/icon-rock.svg" alt="paper icon">
        </div>
    </div>
</template>

<script>
    export default {
        name: "RockButton"
    }
</script>

<style scoped>
    .outer-layer {
        background-color: #DE3F5B;
        box-shadow: 0 8px 0 0 #9D1634;
        margin-bottom: 8px;
    }
    .inner-layer {
        background-color: #DEDEDE;
        box-shadow: inset 0 5px 0 0 #BCC1D5;
    }
</style>
