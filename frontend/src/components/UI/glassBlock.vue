<template>
    <div class="glass-block">
        <slot></slot>
    </div>
</template>
<script>
    export default{
        name: 'glassBlock'
    }
</script>
<style lang="scss" scoped>
.glass-block{
    @apply border-t-0 border-r-[2px] border-b-[2px] border-l-[1px] border-white shadow-lg w-full h-full rounded-xl font-monst text-left p-5 text-dark-blue;
    background: linear-gradient(303.7deg, rgba(255, 255, 255, 0.69) 0.17%, rgba(255, 255, 255, 0.49) 42.99%, rgba(255, 255, 255, 0.25) 98.03%);
}
</style>
