<template>
    <leftMenuBar   @toggleClass="toggleOpen($event)"></leftMenuBar>
    <div :class="LBisOpen? 'container': 'container big-container'">
            <headerPg></headerPg>
            <h2 class="name-page">Попытки</h2>
            <glassBlock class="admin-menu" v-if="true" style="height: 70vh!important;">
                <scrollBox class="scrl">
                    <div class="scrl-cont">
                        <!--добавить цикл-->
                        <buttonAttemtsAd></buttonAttemtsAd>
                        <buttonAttemtsAd></buttonAttemtsAd>
                        <buttonAttemtsAd></buttonAttemtsAd>
                        <buttonAttemtsAd></buttonAttemtsAd>
                        <buttonAttemtsAd></buttonAttemtsAd>
                        <buttonAttemtsAd></buttonAttemtsAd>
                        <buttonAttemtsAd></buttonAttemtsAd>
                    </div>
                </scrollBox>
                <div class="line"></div>
                <ul class="tabs">
                    <h3 class="label-t">Фильтр:</h3>
                    <li class="active">По дате</li>
                    <li>По работнику</li>
                    <li>По тесту</li>
                </ul>
            </glassBlock>

            <glassBlock v-if="false" style="height: 70vh!important;">
                <scrollBox>
                    <!--добавить цикл-->
                    <!--пример-->
                    <buttonAttemts picture_src="https://i.pinimg.com/236x/26/62/82/266282d9af32d5a40a0ea59520ce6eac.jpg"></buttonAttemts>
                      <!--пример-->
                    <buttonAttemts></buttonAttemts>
                    <buttonAttemts></buttonAttemts>
                    <buttonAttemts></buttonAttemts>
                </scrollBox>
            </glassBlock>
    </div>
    <!--добавить пейджер-->
</template>

<script>
export default{

    data(){
        return{
            LBisOpen: false,
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
.name-page{
    @apply font-monst font-black text-5xl text-left text-dark-blue mb-5;
}

.admin-menu{
    @apply h-full flex flex-row;
    .scrl{
        @apply w-[75%];
        direction: rtl;
        .scrl-cont{
            direction: ltr;
    }
    }
    .line{
        @apply h-[99%] w-[2px] bg-white rounded ml-2;
    }
    .tabs{
        @apply text-pas-tabs font-monst text-2xl ml-5;
        li{
            @apply mt-3;
            &:hover{
                @apply text-light-blue scale-105;
            }
        }
        .label-t{
            @apply text-dark-blue font-bold;
        }
        .active{
            @apply text-dark-blue;
        }
    }
}
</style>
