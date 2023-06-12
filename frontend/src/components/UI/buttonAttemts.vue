<template>
    <glassBlock class="ch-block">
        <img :src=picture_src class="icon-teach"/>
        <div class="text-cont">
            <div class="label-at">
                <h2 class="name-test">{{ title }}</h2>
                <div class="time">{{ time }}</div>
            </div>
            <p class="comment">{{ comment }}</p>
        </div>
    </glassBlock>
</template>
<script>
export default{
        name: 'buttonAttemts',
        props:{
            'title':{
                type: String,
                default: 'Диагностика темперамента по Айзенку'
            },
            'time':{
                type: String,
                default: '01.04.2023 18:34:26'
            },
            'comment':{
                type: String,
                default: 'Спасибо, что прошли данный тест! Согласно опросу, приходя на каждую встречу с хорошо проработанными и продуманными идеями, вы помогаете нам двигаться вперед в нашем процессе.'
            },
            'picture_src': String,
        }
    }
</script>
<style lang="scss" scoped>
    .ch-block{
        @apply h-auto mb-5 last:mb-0 flex flex-row justify-between items-center font-monst text-dark-blue pl-10 pr-10;
        .text-cont{
            @apply w-[86%];
            .label-at{
                @apply flex flex-row justify-between items-center;
                .name-test{
                    @apply text-3xl font-bold truncate w-[75%];
                }
                .time{
                    @apply text-pas-tabs;
                }
            }
            .comment{
                @apply mt-5;
            }

        }

        .icon-teach{
            @apply w-24 h-24 rounded-full object-fill;
        }
    }

</style>
