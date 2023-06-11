<template>
    <div class="scroll-box">
        <slot></slot>
    </div>
</template>
<script>
 export default{
        name: 'scrollBox',
    }
</script>
<style lang="scss" scoped>
.scroll-box{
    @apply overflow-y-auto p-2 h-[100%];
    &::-webkit-scrollbar {
        @apply w-[6px];
    }

    &::-webkit-scrollbar-track {
        @apply bg-trans;

    }

    &::-webkit-scrollbar-thumb {
        @apply rounded bg-dark-blue/50;
    }

}
</style>
