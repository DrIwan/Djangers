<template>
     <leftMenuBar numActive="2"  @toggleClass="toggleOpen($event)"></leftMenuBar>
    <div :class="LBisOpen? 'container': 'container big-container'">
            <headerPg numActive="2"></headerPg>
            <h2 class="name-page">Попытка</h2>
            <glassBlock class="gb" style="height: auto!important; padding: 3rem;">
                <div class="info-block">
                    <div class="main-block">
                        <h2>Название теста</h2>
                        <p>{{attempts[$route.params.attemptId - 1].test}}</p>
                        <h2>Время и дата</h2>
                        <p>{{attempts[$route.params.attemptId - 1].time}}</p>
                    </div>
                </div>
            </glassBlock>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                LBisOpen: false,
                attempts :[
                    {index: 1, name: 'Панин Максим Петрович',time: '01.04.2023 18:34:26', test: 'Диагностика темперамента по Айзенку',},
                    {index: 2, name: 'Беликова Анна Матвеевна', time: '01.06.2023 18:34:26', test: 'Тест эмоционального интеллекта Холла',}
                ]
            }
        },
        methods:{
            toggleOpen(inf){
                this.LBisOpen = inf;
            }
        },
    }
</script>
<style lang="scss" scoped>
.gb{
    @apply p-10;
}
.info-block{
    @apply w-full flex flex-row font-monst text-2xl font-bold;
    h2{
        @apply text-pas-tabs/60;
    }
    p{
        @apply text-dark-blue font-normal;
    }
    .main-block{
        @apply w-[50%];
        .btn-grp{
            @apply w-full flex flex-row mt-5;
            button{
                @apply bg-trans p-1 flex flex-row justify-center items-center rounded border-dark-blue border-[3px] last:ml-5;
                &:hover{
                    @apply transition-all duration-200 ease-in-out shadow-[inset_-4.2em_0_0_0,inset_4.2em_0_0_0] shadow-dark-blue text-white;

                }
            }
            .refusal{
                @apply border-fail-color text-fail-color;
                &:hover{
                    @apply transition-all duration-200 ease-in-out shadow-[inset_-4.2em_0_0_0,inset_4.2em_0_0_0] shadow-fail-color text-dark-blue;

                }
            }


        }

    }
}
</style>
