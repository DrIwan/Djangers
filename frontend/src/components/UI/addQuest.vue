<template>
    <glassBlock style="width: 100%!important; height: auto!important; padding: 1rem;" class="gb">
        <span
        class="material-symbols-rounded">add</span>
    </glassBlock>
</template>
<script>
export default{
        name: 'addQuest',
    }
</script>
<style lang="scss" scoped>
.gb{
    @apply flex flex-row justify-center items-center rounded-3xl mb-4 cursor-pointer;
    span{
        @apply font-bold text-5xl;
    }
    &:hover{
        @apply shadow-[inset_6px_8px_4px_rgba(0,0,0,0.1)];
        span{
            @apply text-pas-tabs;
        }
    }
}
</style>
