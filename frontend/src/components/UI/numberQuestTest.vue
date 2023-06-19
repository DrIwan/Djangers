<template>
    <glassBlock style="height: auto !important;" class="gb">
        <span class="number-q" v-for="n in num" v-bind:key="n">{{ n }} </span>
    </glassBlock>
</template>
<script>
export default {
    name:"numberQuestTest",
    props:{
        num:{
            type:Number,
            default:1
        }
    }
}
</script>
<style lang="scss" scoped>
.gb{
    @apply flex flex-row justify-start items-center font-monst text-xl text-dark-blue flex-wrap mb-4;
    .number-q{
        @apply p-2 border-white border-2 ml-2 rounded-xl mb-2 w-16 shadow-xl shadow-white/50;
        &:hover{
            @apply bg-white/30;
        }
    }
    .flag{
        @apply text-dark-fail-color bg-[#F2DCEB]/30 shadow-[#F2DCEB];
    }
    .pass{
        @apply text-sm-blue shadow-light-blue/20 bg-light-blue/5;
    }
}
</style>
