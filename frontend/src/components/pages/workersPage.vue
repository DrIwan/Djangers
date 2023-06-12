<template>
     <leftMenuBar   @toggleClass="toggleOpen($event)"></leftMenuBar>
     <div :class="LBisOpen? 'container': 'container big-container'">
            <headerPg></headerPg>
            <h2 class="name-page">Работники</h2>
            <glassBlock class="admin-menu" style="height: 70vh!important;">
                <scrollBox class="scrl">
                    <div class="scrl-cont">
                        <!--добавить цикл-->
                        <buttonWorker></buttonWorker>
                        <buttonWorker></buttonWorker>
                        <buttonWorker></buttonWorker>
                        <buttonWorker></buttonWorker>
                        <buttonWorker></buttonWorker>
                        <buttonWorker></buttonWorker>
                        <buttonWorker></buttonWorker>
                        <buttonWorker></buttonWorker>
                        <buttonWorker></buttonWorker>
                        <buttonWorker></buttonWorker>
                    </div>
                </scrollBox>
                <div class="line"></div>
                <ul class="tabs">
                    <li class="active">Студенты</li>
                    <li>Преподаватели</li>
                    <li>Заявки</li>
                </ul>
            </glassBlock>
        </div>
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
