<template>
    <leftMenuBar numActive="1"  @toggleClass="toggleOpen($event)"></leftMenuBar>
   <div :class="LBisOpen? 'container': 'container big-container'">
           <headerPg numActive="1"></headerPg>
           <h2 class="name-page">Шкала</h2>
            <glassBlock class="gb" style="height: auto!important; padding: 3rem;">
                <div class="info-block">
                    <div class="main-block">
                        <h2>Название</h2>
                        <p>{{scales[$route.params.scaleId - 1].name}}</p>
                        <h2>Минимальное значение</h2>
                        <p>{{scales[$route.params.scaleId - 1].min}}</p>
                        <h2>Максимальное значение</h2>
                        <p>{{scales[$route.params.scaleId - 1].max}}</p>
                    </div>
                    <div class="add-block">
                        <h2>Описание</h2>
                        <p>{{scales[$route.params.scaleId - 1].description}}</p>
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
               scales: [
                {id: 1, name: "Любитель помидоров",min:2, max: 9,description:"Cвидетельствуют о превосходстве, влиятельности, ориентированности индивида на межличностное взаимодействие, общей компетентности в социальных взаимоотношениях"},
                {id: 2, name: "Любитель огурцов",min:2, max: 10,description:"Говорят о сдержанности, неспособности отстаивать свои права, индивиды с такими баллами обычно не очень социально ориентированны и, как правило, испытывают смущение и стеснение при социальных контактах."},
                {id: 3, name: "Любитель моркови",min:2, max: 5,description:"Свидетельствуют о внимательности, заботливости, осторожности, это достаточно прямолинейный тип людей, который характеризуется контролем над поведением, чувством долга и несклонностью к риску."},
                {id: 4, name: "Любитель капусты",min:2, max: 7,description:"Говорят о неосмотрительности, оппортунистичности, свободе от сдерживающих факторов, решительности и склонности к риску."},
                {id: 5, name: "Любитель перцев",min:2, max: 8,description:"Говорят о направленности и стремлении к достижениям, индивиды с такими баллами в целом обладают высокими достижениями (свершениями) в интеллектуальном и профессиональном планах. Они являются типом «ум превыше мускул»."},
                {id: 6, name: "Любитель свеклы",min:2, max: 9,description:"Говорят о любопытстве и любознательности индивида, широте его восприятия, адаптивности и сензитивности к окружению."},
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
    .add-block{
        @apply w-[50%];
    }

}
</style>
