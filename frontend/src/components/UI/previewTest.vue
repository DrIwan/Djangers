<template>
    <div class="glass-block">
        <div class="text-block">
            <h2>{{ title }}</h2>
            <p class="subtext">{{subtext}}</p>
            <!--запрос номера последней попытки-->
            <p class="attempt">Попытка: {{ attempts }}</p>
            <button
                v-if="true"
                class="start-btn"
                @click="this.$router.push(`/testU/${$route.params.testId}`)"
            >Пройти тест</button>
            <button
                v-if="false"
                class="start-btn"
            >На главную</button>
        </div>
        <!--В зависимости от статуса теста менять изображение-->
        <div class="img-block open">

        </div>
    </div>
</template>
<script>
    export default{
        name: 'previewTest',
        props: {
            'title': {
                type: String,
                default: 'Какой-то тест'
            },
            'subtext':  {
                type: String,
                default: 'От базовых знаний о том, как грамотно распоряжаться деньгами, во многом зависит твой успех в будущем. С помощью этого теста ты можешь проверить, как будет складываться твоя личная финансовая жизнь. '
            },
            'attempts':{
                type: Number,
                default: 1
            },
            'testIndex':{
                type: Number,
                default:0,
            }
        },

    }
</script>
<style lang="scss" scoped>
    .glass-block{
        @apply w-full h-[75vh] font-monst p-16 rounded-xl border-t-0 border-r-[2px] border-b-[2px] border-l-[1px] border-white shadow-lg mt-10 flex flex-row justify-between items-center;
        background: linear-gradient(303.7deg, rgba(255, 255, 255, 0.69) 0.17%, rgba(255, 255, 255, 0.49) 42.99%, rgba(255, 255, 255, 0.25) 98.03%);
        .img-block{
            @apply w-[40%] bg-contain bg-no-repeat bg-center h-full;
        }
        .text-block{
            @apply w-[60%] text-dark-blue flex flex-col justify-start items-start pl-8 pr-9;
            h2{
                @apply text-left font-black text-4xl;
            }
            .subtext{
                @apply text-left mt-7 w-[95%];
            }
            .attempt{
                @apply text-left mt-5 font-bold text-xl;
            }
            .start-btn{
                @apply mt-7 bg-dark-blue text-white p-2 w-[38%] text-2xl text-center rounded-lg cursor-pointer;
                &:hover{
                    @apply shadow-[inset_0_0_28px_12px_#08295385] border-solid border-[1px] border-[#082954];
                }
            }
        }
    }
</style>
