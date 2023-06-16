<template>
    <div :class="!left? 'scroll-box': 'scroll-box left'">
        <div :class="!left? '': 'cont-scrl'">
            <slot></slot>
        </div>
    </div>
</template>

<script>
 export default{
        name: 'scrollBox',
        props: {
            left: Boolean
        }

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

.left{
    direction: rtl;
    .cont-scrl{
        direction: ltr;
    }
}
</style>
