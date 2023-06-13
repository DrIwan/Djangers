<template>
    <glassBlock class="ch-block">
        <div class="label-bl">
            <h2 class="name-worker">{{ name_worker }}</h2>
            <div class="time">{{ time }}</div>
        </div>
        <div class="name-test">{{ name_test }}</div>
    </glassBlock>
</template>
<script>
export default{
        name: 'buttonAttemtsAd',
        props:{
            'name_worker':{
                type: String,
                default: 'Панин Максим Петрович'
            },
            'time':{
                type: String,
                default: '01.04.2023 18:34:26'
            },
            'name_test':{
                type: String,
                default: 'Диагностика темперамента по Айзенку'
            }
        }
    }
</script>
<style lang="scss" scoped>
    .ch-block{
        @apply h-auto mb-5 last:mb-0 flex flex-col font-monst text-dark-blue pl-10 pr-10 cursor-pointer;
        .label-bl{
            @apply flex flex-row justify-between items-center;
            .name-worker{
                @apply text-2xl;
            }
            .time{
                @apply text-active-btn-t;
            }
        }
        .name-test{
            @apply mt-2 text-active-btn-t;
        }
    }
</style>
