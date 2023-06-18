<template>
    <leftMenuBar numActive="2"  @toggleClass="toggleOpen($event)"></leftMenuBar>
   <div :class="LBisOpen? 'container': 'container big-container'">
           <headerPg numActive="1"></headerPg>
           <h2 class="name-page">Интерпретация</h2>
           <glassBlock class="gb" style="height: auto!important; padding: 3rem;">
                <div class="info-block">
                    <div class="main-block">
                        <h2>Название</h2>
                        <p>{{interpretationNames[$route.params.interpretationId - 1].name}}</p>
                        <h2>Минимальное значение</h2>
                        <p>{{interpretationNames[$route.params.interpretationId - 1].min}}</p>
                        <h2>Максимальное значение</h2>
                        <p>{{interpretationNames[$route.params.interpretationId - 1].max}}</p>
                    </div>
                    <div class="add-block">
                        <h2>Описание</h2>
                        <p>{{interpretationNames[$route.params.interpretationId - 1].description}}</p>
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
               interpretationNames: [
               {id: 1, name: "Любитель помидоров",min:2, max: 9,description:"Индивиды с таким баллом стремятся к соперничеству, конкуренции; они хорошо контролируемы, доминантны, настойчиво стремятся к власти и лидерскому положению агрессивными способами. Они должны побеждать и верят в то, что они и только они могут все сделать так, как надо. Такие личности склонны выражать и защищать свое собственное мнение."},
                {id: 2, name: "Любитель огурцов",min:2, max: 10,description:"Лица с такими оценками достаточно доминантны и сильны, обычно принимают на себя лидерские функции, когда в этом возникает необходимость."},
                {id: 3, name: "Любитель моркови",min:2, max: 5,description:"Такие индивиды не очень сильно доминантны и склонны предпочитать скорее роль участника, а не инициатора. Они могут сопротивляться переменам и в общем избегают лидерской ответственности."},
                {id: 4, name: "Любитель капусты",min:2, max: 7,description:"Они обычно пассивны, неактивны в отстаивании своих прав, иногда кажутся заторможенными в мыслях и действиях. Они избегают напряжения и давления, кажутся робкими и, возможно, застенчивыми, беззащитными. "},
                {id: 5, name: "Любитель перцев",min:2, max: 8,description:"Индивиды с таким баллом постоянно чувствуют свое превосходство над другими и держатся независимо от них. Они могут быть властными, высокомерными и надменными. "},
                {id: 6, name: "Любитель свеклы",min:2, max: 9,description:"Лица с такими оценками обладают влиянием, их деятельность обычно связана с организацией чего-либо, представляющего их точку зрения как первостепенную и важную (и для работы, и в целом). "},
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
