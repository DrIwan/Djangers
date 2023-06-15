<template>
    <div :class="right? 'scroll-box': ''">
        <slot></slot>
    </div>
</template>
<!-- Свойство типа добавил, изменение его пока не готово...-->
<script>
 export default{
        name: 'scrollBox',
        data(){
            return{
                right: true,
            }
        },
        methods:{

            toggleRight(){
                this.right=!this.right;
            }
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
</style>
