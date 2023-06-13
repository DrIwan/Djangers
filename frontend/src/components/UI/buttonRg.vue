<template>
    <button class="form-btn">
        <slot>

        </slot>
    </button>
</template>


<script>
    export default{
        name: 'buttonRg'
    }
</script>
<style lang="scss" scoped>
    .form-btn{
        @apply cursor-pointer bg-dark-blue-2 rounded-full border-none p-3 text-white w-[28%] text-2xl font-monst uppercase cursor-pointer flex flex-row justify-center items-center overflow-hidden relative;
        &:hover {
            @apply border-[1px] border-solid outline-white/0 outline-offset-[15px];
            box-shadow: inset 0 0 20px rgba(255, 255, 255, .5), 0 0 20px rgba(255, 255, 255, .2);
            text-shadow: 1px 1px 2px #427388;
        }
    }
.reg-box{
    .form-btn{
        @apply min-w-[180px];
    }
}
</style>
